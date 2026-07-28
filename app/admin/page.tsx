"use client";

/**
 * /admin — the client-facing AI editor chat (pilot).
 * The client types what they want changed in plain language; the agent drafts,
 * shows before/after, asks for confirmation, and publishes on approval.
 */
import { useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: unknown };

// The uploaded-image note is a machine instruction for the agent — don't show its
// raw brackets to the client; replace it with a friendly marker.
function humanizeUserText(s: string): string {
  const cleaned = s.replace(/\[L'utente ha caricato un'immagine[^\]]*\]/g, "").trim();
  return /\[L'utente ha caricato un'immagine/.test(s)
    ? (cleaned ? `${cleaned}\n📎 immagine allegata` : "📎 immagine allegata")
    : cleaned;
}

function renderText(m: Msg): string | null {
  if (m.role === "user") {
    return typeof m.content === "string" ? humanizeUserText(m.content) : null; // hide tool_result turns
  }
  if (Array.isArray(m.content)) {
    const text = m.content
      .filter((b: { type: string }) => b.type === "text")
      .map((b: { text: string }) => b.text)
      .join("\n")
      .trim();
    return text || null; // hide pure tool_use turns
  }
  return typeof m.content === "string" ? m.content : null;
}

type Attachment = { name: string; contentType: string; dataUrl: string };

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result as string);
    r.onerror = () => reject(r.error);
    r.readAsDataURL(file);
  });
}

export default function AdminChat() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [history, setHistory] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [attachment, setAttachment] = useState<Attachment | null>(null);
  const scroller = useRef<HTMLDivElement>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  async function pickFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = ""; // allow re-selecting the same file
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("Puoi allegare solo immagini (JPG, PNG, WEBP…).");
      return;
    }
    if (file.size > 8 * 1024 * 1024) {
      setError("Immagine troppo grande (max 8 MB).");
      return;
    }
    setError(null);
    try {
      const dataUrl = await readFileAsDataUrl(file);
      setAttachment({ name: file.name, contentType: file.type, dataUrl });
    } catch {
      setError("Non sono riuscito a leggere il file.");
    }
  }

  async function send() {
    const text = input.trim();
    if ((!text && !attachment) || busy) return;
    setError(null);
    setBusy(true);

    // If there's an image attached, upload it first and get its live path, then tell
    // the agent to use that path as the new value for the image field the user names.
    let messageText = text;
    if (attachment) {
      try {
        const up = await fetch("/admin/api/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json", "x-admin-password": password },
          body: JSON.stringify({
            filename: attachment.name,
            contentType: attachment.contentType,
            dataBase64: attachment.dataUrl,
          }),
        });
        const upData = await up.json();
        if (!up.ok) {
          setError(upData.error || `Upload HTTP ${up.status}`);
          setBusy(false);
          return;
        }
        if (!authed) setAuthed(true);
        const note = `[L'utente ha caricato un'immagine, disponibile al percorso: ${upData.path} — usa ESATTAMENTE questo percorso come nuovo valore del campo immagine che l'utente vuole sostituire.]`;
        messageText = text ? `${text}\n\n${note}` : note;
      } catch (e) {
        setError(e instanceof Error ? e.message : String(e));
        setBusy(false);
        return;
      }
    }

    setInput("");
    setAttachment(null);
    const next: Msg[] = [...history, { role: "user", content: messageText }];
    setHistory(next);
    try {
      const res = await fetch("/admin/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-admin-password": password },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || `HTTP ${res.status}`);
        setBusy(false);
        return;
      }
      if (!authed) setAuthed(true);
      setHistory(data.messages as Msg[]);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(false);
      setTimeout(() => scroller.current?.scrollTo(0, scroller.current.scrollHeight), 50);
    }
  }

  const visible = history.map((m) => ({ role: m.role, text: renderText(m) })).filter((m) => m.text);

  return (
    <main style={S.page}>
      <div style={S.card}>
        <header style={S.header}>
          <strong>Capri Yacht Charter · Editor</strong>
          <span style={S.badge}>assistente AI</span>
        </header>

        {!authed && (
          <div style={S.authRow}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={S.pwd}
            />
            <span style={S.hint}>inserisci la password e scrivi la prima richiesta</span>
          </div>
        )}

        <div ref={scroller} style={S.thread}>
          {visible.length === 0 && (
            <p style={S.placeholder}>
              Scrivi cosa vuoi cambiare — es. <em>&quot;cambia la tagline italiana di TENAREZE IV&quot;</em> o{" "}
              <em>&quot;aggiorna il prezzo del tour Giro dell&apos;isola&quot;</em>.
            </p>
          )}
          {visible.map((m, i) => (
            <div key={i} style={{ ...S.bubble, ...(m.role === "user" ? S.user : S.bot) }}>
              {m.text}
            </div>
          ))}
          {busy && <div style={{ ...S.bubble, ...S.bot, opacity: 0.6 }}>…</div>}
        </div>

        {error && <div style={S.error}>{error}</div>}

        {attachment && (
          <div style={S.attachRow}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={attachment.dataUrl} alt="" style={S.attachThumb} />
            <span style={S.attachName}>{attachment.name}</span>
            <button onClick={() => setAttachment(null)} style={S.attachRemove} title="Rimuovi">
              ✕
            </button>
          </div>
        )}

        <div style={S.inputRow}>
          <input
            ref={fileInput}
            type="file"
            accept="image/*"
            onChange={pickFile}
            style={{ display: "none" }}
          />
          <button
            onClick={() => fileInput.current?.click()}
            disabled={busy}
            style={S.attachBtn}
            title="Allega un'immagine"
          >
            📎
          </button>
          <textarea
            rows={2}
            value={input}
            placeholder={attachment ? "Es. «sostituisci la foto di copertina di TENAREZE IV»" : "Scrivi qui…"}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send();
              }
            }}
            style={S.textarea}
          />
          <button onClick={send} disabled={busy} style={S.send}>
            Invia
          </button>
        </div>
      </div>
    </main>
  );
}

const S: Record<string, React.CSSProperties> = {
  page: { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0b1a2b", padding: 16, fontFamily: "system-ui, sans-serif" },
  card: { width: "100%", maxWidth: 560, background: "#fff", borderRadius: 16, boxShadow: "0 20px 60px rgba(0,0,0,.35)", display: "flex", flexDirection: "column", overflow: "hidden", height: "80vh" },
  header: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", borderBottom: "1px solid #eef1f4", color: "#0b1a2b" },
  badge: { fontSize: 12, color: "#5b7", background: "#eafaf1", padding: "3px 8px", borderRadius: 999 },
  authRow: { display: "flex", gap: 10, alignItems: "center", padding: "10px 18px", borderBottom: "1px solid #f3f4f6", flexWrap: "wrap" },
  pwd: { padding: "8px 10px", border: "1px solid #d7dde3", borderRadius: 8, fontSize: 14 },
  hint: { fontSize: 12, color: "#8a93a0" },
  thread: { flex: 1, overflowY: "auto", padding: 18, display: "flex", flexDirection: "column", gap: 10, background: "#f7f9fb" },
  placeholder: { color: "#8a93a0", fontSize: 14, lineHeight: 1.5 },
  bubble: { maxWidth: "85%", padding: "10px 13px", borderRadius: 14, fontSize: 14, lineHeight: 1.45, whiteSpace: "pre-wrap" },
  user: { alignSelf: "flex-end", background: "#0b1a2b", color: "#fff", borderBottomRightRadius: 4 },
  bot: { alignSelf: "flex-start", background: "#fff", color: "#0b1a2b", border: "1px solid #e6eaef", borderBottomLeftRadius: 4 },
  error: { color: "#b3261e", fontSize: 13, padding: "6px 18px" },
  attachRow: { display: "flex", alignItems: "center", gap: 10, padding: "8px 14px", borderTop: "1px solid #f3f4f6", background: "#f7f9fb" },
  attachThumb: { width: 40, height: 40, objectFit: "cover", borderRadius: 8, border: "1px solid #e6eaef" },
  attachName: { fontSize: 13, color: "#425063", flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  attachRemove: { border: 0, background: "#e6eaef", color: "#425063", borderRadius: 8, width: 26, height: 26, cursor: "pointer", fontSize: 12 },
  attachBtn: { background: "#eef1f4", color: "#0b1a2b", border: 0, borderRadius: 10, padding: "0 14px", fontSize: 18, cursor: "pointer" },
  inputRow: { display: "flex", gap: 8, padding: 12, borderTop: "1px solid #eef1f4" },
  textarea: { flex: 1, resize: "none", border: "1px solid #d7dde3", borderRadius: 10, padding: "9px 11px", fontSize: 14, fontFamily: "inherit" },
  send: { background: "#0b1a2b", color: "#fff", border: 0, borderRadius: 10, padding: "0 18px", fontSize: 14, cursor: "pointer" },
};
