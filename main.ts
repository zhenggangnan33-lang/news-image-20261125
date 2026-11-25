// news-image-20261125 entry (Node 22, standard library only).
//
// The picture itself is entry.png, rendered ahead of time by render.py
// (a small PIL program that draws the whole front page). All this program
// does is copy that image into the output directory the grader gives it.
//
// Run it outside the grader like this:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, "entry.png");
copyFileSync(new URL("./entry.png", import.meta.url), dest);

// Fail loudly instead of handing the grader a broken image: the gate
// takes a whole PNG of at most 1 MiB, so a truncated copy must not pass.
const { size } = statSync(dest);
if (size === 0 || size > 1024 * 1024) {
  throw new Error(`entry.png has an unexpected size: ${size} bytes`);
}
