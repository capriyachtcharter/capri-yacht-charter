/**
 * Deterministic proof that the edit engine works — no LLM involved.
 * Exercises the exact operations the AI chat will call, then reverts.
 */
import { JsonGitStore } from "../lib/cms/store.ts";

const store = new JsonGitStore();
let failures = 0;
const ok = (cond: boolean, msg: string) => {
  console.log(`${cond ? "✓" : "✗"} ${msg}`);
  if (!cond) failures++;
};

// 1. list
const cols = store.listCollections();
ok(cols.length === 2, `lists 2 collections (${cols.map((c) => c.key).join(", ")})`);
const boats = store.listEntries("fleet");
ok(boats.length === 3, `lists 3 boats (${boats.map((b) => b.id).join(", ")})`);

// 2. read a field
const before = store.getField("fleet", "libeccio", "it.tagline") as string;
ok(typeof before === "string" && before.length > 0, `reads libeccio it.tagline: "${before}"`);

// 3. edit an allowed field
const NEW = "TAGLINE DI PROVA — edit engine";
const res = store.updateField("fleet", "libeccio", "it.tagline", NEW);
ok(res.after === NEW, "updateField returns new value");
const readBack = store.getField("fleet", "libeccio", "it.tagline");
ok(readBack === NEW, "change is persisted to JSON");
ok(store.hasPendingChanges(), "git sees a pending (unpublished draft) change");

// 4. schema guard: identity + unknown paths must be refused
let refusedSlug = false;
try { store.updateField("fleet", "libeccio", "slug", "hacked"); } catch { refusedSlug = true; }
ok(refusedSlug, "refuses to edit slug (identity key, not in schema)");

let refusedUnknown = false;
try { store.updateField("fleet", "libeccio", "it.evil", "x"); } catch { refusedUnknown = true; }
ok(refusedUnknown, "refuses to edit an unknown field path");

// 5. kind guard: a text field can't be set to a list
let refusedKind = false;
try { store.updateField("fleet", "libeccio", "it.tagline", ["a", "b"]); } catch { refusedKind = true; }
ok(refusedKind, "refuses wrong value kind (list into a text field)");

// 6. clean up — revert the draft so the working tree is pristine
store.revert();
const restored = store.getField("fleet", "libeccio", "it.tagline");
ok(restored === before, "revert restores the original value");
ok(!store.hasPendingChanges(), "working tree is clean after revert");

console.log(failures === 0 ? "\nALL PASS" : `\n${failures} FAILURE(S)`);
process.exit(failures === 0 ? 0 : 1);
