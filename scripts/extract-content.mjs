/**
 * One-shot: extract the it/en copy trees out of app/i18n/translations.ts into
 * app/data/content.json (the CMS-editable homepage-copy source).
 *
 * translations.ts stays as the typed fallback/anchor; content.json becomes the live
 * source the client edits via the /admin chat. Run once: node scripts/extract-content.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
let src = readFileSync(join(root, "app/i18n/translations.ts"), "utf8");

// Strip TS-isms so the object literal evals as plain JS.
src = src
  .replace(/export type [^\n]*\n/g, "")
  .replace(/export const translations =\s*/, "return ")
  .replace(/ as "[^"]*" as const/g, "")
  .replace(/ as const/g, "");

// The file ends with `} as const;` -> now `};`; and a trailing type export removed.
// Eval the returned object in an isolated function.
const translations = new Function(src)();

const content = [
  { id: "home", it: translations.it, en: translations.en },
];

writeFileSync(
  join(root, "app/data/content.json"),
  JSON.stringify(content, null, 2) + "\n",
);
console.log("Wrote app/data/content.json with sections:", Object.keys(translations.it).join(", "));
