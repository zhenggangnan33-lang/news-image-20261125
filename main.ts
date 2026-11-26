// news-image-20261125 v3 — copies entry.png to the output directory.
// Node 22, stdlib only. Fails loudly on empty, oversized, or non-PNG output.
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const SRC = new URL("./entry.png", import.meta.url);
const DEST = join(OUT_DIR, "entry.png");
const MAX_BYTES = 1048576;
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

// Fail before copying if the source is not a whole PNG.
const head = readFileSync(SRC).subarray(0, 8);
if (!head.equals(PNG_MAGIC)) {
  throw new Error("entry.png does not start with the PNG magic bytes");
}

mkdirSync(OUT_DIR, { recursive: true });
copyFileSync(SRC, DEST);

const st = statSync(DEST);
if (st.size === 0) {
  throw new Error("entry.png copy is empty");
}
if (st.size > MAX_BYTES) {
  throw new Error(`entry.png is ${st.size} bytes, over the 1 MiB limit`);
}
const tail = readFileSync(DEST).subarray(0, 8);
if (!tail.equals(PNG_MAGIC)) {
  throw new Error("copied entry.png does not start with the PNG magic bytes");
}
console.log(`wrote ${DEST} (${st.size} bytes)`);
