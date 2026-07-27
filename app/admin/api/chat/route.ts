/**
 * /admin chat endpoint — runs the AI edit agent against the GitHub-backed store.
 * Pilot auth: a shared password sent in the x-admin-password header, checked against
 * ADMIN_PASSWORD. Swap for real per-tenant auth when this becomes a product.
 */
import { NextResponse } from "next/server";
import { runEditAgent } from "@/lib/cms/agent";
import { githubStoreFromEnv } from "@/lib/cms/store-github";
import { JsonGitStore } from "@/lib/cms/store";
import type { EditStore } from "@/lib/cms/store";
import type Anthropic from "@anthropic-ai/sdk";

// CMS_STORE=local uses the local working tree (dev/testing); otherwise the
// serverless GitHub-backed store used in production.
function storeFromEnv(): EditStore {
  return process.env.CMS_STORE === "local" ? new JsonGitStore() : githubStoreFromEnv();
}

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const password = req.headers.get("x-admin-password");
  if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: "ANTHROPIC_API_KEY not configured" }, { status: 500 });
  }

  let body: { messages?: Anthropic.MessageParam[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }
  const messages = body.messages ?? [];

  try {
    const result = await runEditAgent({ store: storeFromEnv(), messages });
    return NextResponse.json({
      text: result.text,
      messages: result.messages,
      published: result.published,
    });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : String(err) },
      { status: 500 },
    );
  }
}
