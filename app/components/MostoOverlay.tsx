"use client";

/**
 * Mosto CMS click-to-edit overlay (client). Inert for normal visitors: it only
 * activates when the page is loaded as `?mostoEdit=1` inside an iframe and the
 * parent (Mosto CMS /studio) sends the `mosto:init` handshake. Then it highlights
 * elements marked with `data-mosto-field="collection:id:path"` and lets the studio
 * edit them. Mirrors @mosto/cms/overlay (inlined because this repo doesn't install
 * the package).
 */
import { useEffect } from "react";

type FieldRef = { collection: string; id: string; path: string; kind: string };

export default function MostoOverlay() {
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("mostoEdit") !== "1") return;
    if (window.parent === window) return;

    let parentOrigin = "*";

    const style = document.createElement("style");
    style.textContent = `
      [data-mosto-field]{outline:1px dashed transparent;outline-offset:2px;transition:outline-color .1s;cursor:pointer}
      [data-mosto-field]:hover{outline-color:#0ec575}
      [data-mosto-field].mosto-active{outline:2px solid #0ec575}
    `;
    document.head.appendChild(style);

    const inferKind = (el: HTMLElement) =>
      el.getAttribute("data-mosto-kind") ||
      (el.tagName === "IMG" ? "image" : el.tagName === "VIDEO" ? "video" : "text");

    const parseRef = (el: HTMLElement): FieldRef | null => {
      const raw = el.getAttribute("data-mosto-field");
      if (!raw) return null;
      const [collection, id, ...rest] = raw.split(":");
      const path = rest.join(":");
      if (!collection || !id || !path) return null;
      return { collection, id, path, kind: inferKind(el) };
    };
    const media = (el: HTMLElement, tag: "img" | "video") =>
      el.tagName === tag.toUpperCase() ? el : el.querySelector(tag);
    // next/image serves an optimized proxy URL (/_next/image?url=<encoded>&w=…&q=…).
    // Unwrap it so the panel shows the real source path, and a save-without-upload
    // never writes the mangled proxy URL back into the field.
    const cleanSrc = (src: string | null | undefined): string => {
      if (!src) return "";
      const m = src.match(/[/_]next\/image\?[^ ]*[?&]url=([^&]+)/);
      if (m) {
        try {
          return decodeURIComponent(m[1]);
        } catch {
          return src;
        }
      }
      return src;
    };
    const readValue = (el: HTMLElement, kind: string) => {
      if (kind === "image") return cleanSrc(media(el, "img")?.getAttribute("src"));
      if (kind === "video") return cleanSrc(media(el, "video")?.getAttribute("src"));
      return (el.textContent ?? "").trim();
    };
    const writeValue = (el: HTMLElement, kind: string, value: string) => {
      if (kind === "image") return void media(el, "img")?.setAttribute("src", value);
      if (kind === "video") return void media(el, "video")?.setAttribute("src", value);
      el.textContent = value;
    };

    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest("[data-mosto-field]") as HTMLElement | null;
      if (!el) return;
      e.preventDefault();
      e.stopPropagation();
      const ref = parseRef(el);
      if (!ref) return;
      document.querySelectorAll(".mosto-active").forEach((x) => x.classList.remove("mosto-active"));
      el.classList.add("mosto-active");
      const r = el.getBoundingClientRect();
      window.parent.postMessage(
        { type: "mosto:select", field: ref, value: readValue(el, ref.kind), rect: { top: r.top, left: r.left, width: r.width, height: r.height } },
        parentOrigin,
      );
    };

    const onMessage = (ev: MessageEvent) => {
      const data = ev.data as { type?: string; field?: FieldRef; value?: unknown } | null;
      if (!data || typeof data !== "object") return;
      if (data.type === "mosto:init") {
        parentOrigin = ev.origin || "*";
        window.parent.postMessage({ type: "mosto:ready" }, parentOrigin);
        return;
      }
      if (data.type === "mosto:set" && data.field) {
        const f = data.field;
        const el = document.querySelector(
          `[data-mosto-field="${f.collection}:${f.id}:${f.path}"]`,
        ) as HTMLElement | null;
        if (el) writeValue(el, f.kind || "text", String(data.value ?? ""));
      }
    };

    document.addEventListener("click", onClick, true);
    window.addEventListener("message", onMessage);
    window.parent.postMessage({ type: "mosto:overlay-loaded" }, "*");

    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("message", onMessage);
      style.remove();
    };
  }, []);

  return null;
}
