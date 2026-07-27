/**
 * Tool layer — the channel-agnostic bridge between the LLM and the ContentStore.
 *
 * These are the ONLY actions the AI can take. It cannot run code, touch files, or
 * reach anything outside the store; every write is still schema-guarded downstream.
 * The same tools serve every channel (web /admin, WhatsApp, Telegram) unchanged.
 */
import type Anthropic from "@anthropic-ai/sdk";
import { collections } from "./schema";
import type { EditStore } from "./store";

export const tools: Anthropic.Tool[] = [
  {
    name: "list_editable_fields",
    description:
      "List the collections (homepage site copy, fleet boats, tours) and, for each, exactly which fields the user is allowed to edit, with their human labels. Call this first to know what can be changed. Homepage headings/descriptions live in the 'content' collection, entry id 'home'.",
    input_schema: { type: "object", properties: {} },
  },
  {
    name: "list_entries",
    description:
      "List the entries in a collection (e.g. all boats, or all tours) with their id and display title, so you can pick the right one to edit.",
    input_schema: {
      type: "object",
      properties: { collection: { type: "string", enum: collections.map((c) => c.key) } },
      required: ["collection"],
    },
  },
  {
    name: "get_field",
    description: "Read the current value of one editable field of one entry, before changing it.",
    input_schema: {
      type: "object",
      properties: {
        collection: { type: "string" },
        id: { type: "string", description: "the entry id/slug" },
        path: { type: "string", description: 'the field path, e.g. "it.tagline" or "specs.length"' },
      },
      required: ["collection", "id", "path"],
    },
  },
  {
    name: "update_field",
    description:
      "Stage a change to one editable field. This is a DRAFT — it is not live until you call publish. Returns the before/after so you can show the user for confirmation.",
    input_schema: {
      type: "object",
      properties: {
        collection: { type: "string" },
        id: { type: "string" },
        path: { type: "string" },
        value: {
          description: "New value: a string for text/image fields, or an array of strings for list fields.",
          oneOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
        },
      },
      required: ["collection", "id", "path", "value"],
    },
  },
  {
    name: "has_pending_changes",
    description: "Check whether there are staged (unpublished) draft changes.",
    input_schema: { type: "object", properties: {} },
  },
  {
    name: "publish",
    description:
      "Publish all staged draft changes so they go live on the website. Only call this AFTER the user has explicitly confirmed. Provide a short human message describing what changed.",
    input_schema: {
      type: "object",
      properties: { message: { type: "string", description: "short summary of the change, e.g. 'Aggiornata tagline TENAREZE IV'" } },
      required: ["message"],
    },
  },
  {
    name: "revert",
    description: "Discard all staged draft changes without publishing.",
    input_schema: { type: "object", properties: {} },
  },
];

/** Execute one tool call against the store. Returns a JSON-serializable result. */
export async function dispatchTool(
  store: EditStore,
  name: string,
  input: Record<string, unknown>,
): Promise<unknown> {
  switch (name) {
    case "list_editable_fields":
      return (await store.listCollections()).map((c) => ({
        collection: c.key,
        label: c.label,
        fields: c.fields.map((f) => ({ path: f.path, kind: f.kind, label: f.label })),
      }));
    case "list_entries":
      return store.listEntries(String(input.collection));
    case "get_field":
      return { value: await store.getField(String(input.collection), String(input.id), String(input.path)) };
    case "update_field":
      return store.updateField(
        String(input.collection),
        String(input.id),
        String(input.path),
        input.value as string | string[],
      );
    case "has_pending_changes":
      return { pending: await store.hasPendingChanges() };
    case "publish":
      await store.publish(String(input.message));
      return { ok: true, published: true };
    case "revert":
      await store.revert();
      return { ok: true, reverted: true };
    default:
      throw new Error(`unknown tool "${name}"`);
  }
}
