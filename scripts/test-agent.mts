/**
 * Live end-to-end proof of the AI edit chat, against the LOCAL JsonGitStore.
 * Uses the real Anthropic key. The bash wrapper resets git afterwards so nothing
 * permanent is left behind.
 */
import { JsonGitStore } from "../lib/cms/store.ts";
import { runEditAgent } from "../lib/cms/agent.ts";
import { execFileSync } from "node:child_process";

const store = new JsonGitStore();
const git = (a: string[]) => execFileSync("git", a, { encoding: "utf8" }).trim();
const log = (s: string) => console.log(s);

const original = store.getField("fleet", "libeccio", "it.tagline") as string;
log(`ORIGINAL tagline: "${original}"\n`);

// --- Turn 1: ask for an edit. Expect a DRAFT + a request for confirmation, no publish.
log('👤 "Cambia la tagline italiana della barca Libeccio in: Prova pilota CMS."');
let res = await runEditAgent({
  store,
  messages: [
    { role: "user", content: "Cambia la tagline italiana della barca Libeccio in: Prova pilota CMS." },
  ],
});
log(`🤖 ${res.text}\n`);
const draftValue = store.getField("fleet", "libeccio", "it.tagline");
console.log(`✓ draft staged? tagline now = "${draftValue}"`);
console.log(`✓ NOT published on turn 1? published=${res.published}`);
console.log(`✓ working tree shows an uncommitted draft? ${store.hasPendingChanges()}\n`);

// --- Turn 2: confirm. Expect publish (a git commit).
log('👤 "Sì, perfetto, pubblica pure."');
res = await runEditAgent({
  store,
  messages: [...res.messages, { role: "user", content: "Sì, perfetto, pubblica pure." }],
});
log(`🤖 ${res.text}\n`);
console.log(`✓ published on turn 2? published=${res.published}`);
const head = git(["log", "-1", "--pretty=%s"]);
console.log(`✓ latest commit subject: "${head}"`);
console.log(`✓ working tree clean after publish? ${!store.hasPendingChanges()}`);
