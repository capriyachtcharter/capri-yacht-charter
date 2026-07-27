/**
 * The edit agent — a Claude tool-use loop over the ContentStore.
 *
 * Backend- and channel-agnostic: give it a store (JsonGitStore locally, GithubApiStore
 * in production) and a message history, and it drives edits by calling the tools in
 * tools.ts. The same function powers the web /admin chat and, later, WhatsApp/Telegram.
 */
import Anthropic from "@anthropic-ai/sdk";
import { tools, dispatchTool } from "./tools";
import type { EditStore } from "./store";

export const DEFAULT_MODEL = process.env.CMS_AGENT_MODEL || "claude-sonnet-5";

export const SYSTEM_PROMPT = `Sei l'assistente che aiuta il cliente di Capri Yacht Charter a modificare i contenuti del proprio sito web, in autonomia, via chat.

Regole:
- Puoi cambiare SOLO i campi elencati da "list_editable_fields": i testi della homepage (titoli, sottotitoli, descrizioni e testi delle sezioni — collection "content", entry id "home"), oltre a testi it/en, prezzi, foto e specifiche di barche e tour. Tutto il resto — layout, nuove pagine, aggiungere/togliere una barca, struttura — è FUORI dalla tua portata: in quel caso spiega gentilmente che serve lo sviluppatore e che inoltrerai la richiesta.
- Quando il cliente cita un testo che vede sul sito (es. un titolo della home) ma non sai subito quale campo sia, ISPEZIONA: guarda i campi della collection "content" e usa get_field per trovare quello che contiene esattamente quel testo (un titolo può essere spezzato tra due campi, es. "title" + "titleAccent"). Non dire che non esiste finché non hai cercato.
- Prima di modificare qualcosa, LEGGI il valore attuale con get_field così sai cosa stai cambiando.
- Usa update_field per calcolare l'anteprima "prima → dopo" di ogni modifica e mostrala SEMPRE al cliente, chiedendo conferma esplicita.
- Pubblica con "publish" SOLO dopo un "sì" esplicito del cliente. Quando pubblichi DEVI passare a "publish" l'elenco completo delle modifiche (collection, id, path, value) con gli stessi identici valori che hai mostrato: il server non conserva le bozze tra un messaggio e l'altro, quindi publish applica e mette online in un colpo solo. Non pubblicare mai di tua iniziativa. Dopo la pubblicazione, avvisa che la modifica sarà online sul sito entro pochi secondi.
- Se il cliente cambia idea prima di pubblicare, usa "revert".
- Rispondi nella lingua del cliente (italiano o inglese). Sii breve, concreto e cordiale.`;

export type AgentResult = {
  text: string;
  messages: Anthropic.MessageParam[];
  steps: number;
  published: boolean;
};

export async function runEditAgent(opts: {
  store: EditStore;
  messages: Anthropic.MessageParam[];
  apiKey?: string;
  model?: string;
  maxSteps?: number;
}): Promise<AgentResult> {
  const client = new Anthropic({ apiKey: opts.apiKey || process.env.ANTHROPIC_API_KEY });
  const model = opts.model || DEFAULT_MODEL;
  const messages = [...opts.messages];
  const maxSteps = opts.maxSteps ?? 12;
  let published = false;

  for (let step = 1; step <= maxSteps; step++) {
    const response = await client.messages.create({
      model,
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      tools,
      messages,
    });

    messages.push({ role: "assistant", content: response.content });

    if (response.stop_reason !== "tool_use") {
      const text = response.content
        .filter((b): b is Anthropic.TextBlock => b.type === "text")
        .map((b) => b.text)
        .join("\n")
        .trim();
      return { text, messages, steps: step, published };
    }

    const toolResults: Anthropic.ToolResultBlockParam[] = [];
    for (const block of response.content) {
      if (block.type !== "tool_use") continue;
      if (block.name === "publish") published = true;
      try {
        const result = await dispatchTool(opts.store, block.name, block.input as Record<string, unknown>);
        toolResults.push({
          type: "tool_result",
          tool_use_id: block.id,
          content: JSON.stringify(result),
        });
      } catch (err) {
        toolResults.push({
          type: "tool_result",
          tool_use_id: block.id,
          is_error: true,
          content: err instanceof Error ? err.message : String(err),
        });
      }
    }
    messages.push({ role: "user", content: toolResults });
  }

  return {
    text: "(Ho raggiunto il numero massimo di passaggi senza concludere — riprova a specificare la richiesta.)",
    messages,
    steps: maxSteps,
    published,
  };
}
