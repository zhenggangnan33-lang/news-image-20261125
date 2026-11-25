import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// news-image-20261125 v2: copy the rendered front page to /output.
// The image is drawn by render.py (PIL) and stored as entry.png;
// this program only copies it, so both runs write identical bytes.
const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
const st = statSync(src);
if (st.size === 0) {
  throw new Error("entry.png is empty");
}
if (st.size > 1048576) {
  throw new Error(`entry.png is ${st.size} bytes, over the 1 MiB gate`);
}
// The gate tells PNG from JPEG by its first bytes: refuse anything
// that is not a whole PNG before copying.
const magic = readFileSync(src).subarray(0, 8);
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!magic.equals(pngMagic)) {
  throw new Error("entry.png does not start with the PNG signature");
}
const dest = join(outDir, "entry.png");
copyFileSync(src, dest);
console.log(`wrote ${dest} (${st.size} bytes)`);
