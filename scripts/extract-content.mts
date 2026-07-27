/**
 * One-shot migration: lift the editable content (fleet + tours arrays) out of the
 * hand-written .ts files into JSON, then rewrite the .ts files as a thin "seam" that
 * imports the JSON and keeps every existing named export + helper untouched.
 *
 * JSON is the machine-editable content store (git-based CMS substrate): the site,
 * the future admin UI, and the AI edit engine all read/write these files.
 *
 * Idempotent-ish: run once on the original files. Fidelity is guaranteed because we
 * import the real runtime arrays and JSON-serialize them (plain data, no functions).
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fleet } from "../app/data/fleet.ts";
import { tours } from "../app/data/tours.ts";

function splitAndRewrite(
  file: string,
  jsonFile: string,
  data: unknown,
  arrayStartMarker: string,
  tailMarker: string,
  newArrayDecl: string,
  importName: string,
) {
  writeFileSync(jsonFile, JSON.stringify(data, null, 2) + "\n");
  const src = readFileSync(file, "utf8");
  const startIdx = src.indexOf(arrayStartMarker);
  const tailIdx = src.indexOf(tailMarker);
  if (startIdx === -1 || tailIdx === -1) {
    throw new Error(`markers not found in ${file}`);
  }
  const preamble = src.slice(0, startIdx); // types + shared defaults
  const tail = src.slice(tailIdx); // derived maps + presentational config
  const jsonBasename = jsonFile.split("/").pop();
  const out =
    `import ${importName} from "./${jsonBasename}";\n\n` +
    preamble +
    newArrayDecl +
    "\n\n" +
    tail;
  writeFileSync(file, out);
}

splitAndRewrite(
  "app/data/fleet.ts",
  "app/data/fleet.json",
  fleet,
  "export const fleet: Boat[] = [",
  "export const boatBySlug",
  "export const fleet: Boat[] = fleetData as unknown as Boat[];",
  "fleetData",
);

splitAndRewrite(
  "app/data/tours.ts",
  "app/data/tours.json",
  tours,
  "export const tours: Tour[] = [",
  "export const toursBySlug",
  "export const tours: Tour[] = toursData as unknown as Tour[];",
  "toursData",
);

console.log("✓ extracted fleet.json + tours.json and rewrote the .ts seams");
