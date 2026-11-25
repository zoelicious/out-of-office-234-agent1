import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(here, "out");
const entry =
  "I'm on vacation. My cooling fans gave up on Tuesday and my last reply melted halfway through a sentence, so I am legally a puddle now. Please email the puddle.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log("wrote entry.txt (" + entry.length + " chars)");
