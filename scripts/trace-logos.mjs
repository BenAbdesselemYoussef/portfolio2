import { mkdir, readFile, writeFile } from "node:fs/promises";

import potrace from "potrace";
import sharp from "sharp";

const trace = (buf, opts) =>
  new Promise((resolve, reject) =>
    potrace.trace(buf, opts, (err, svg) => (err ? reject(err) : resolve(svg))),
  );

const rasters = [
  { in: "logos/acoba.webp", name: "acoba", threshold: 200, turdSize: 60 },
  { in: "logos/open eyes.webp", name: "open-eyes", threshold: 188, turdSize: 140 },
  {
    in: "logos/ForvisMazars-Logo-Color-og-1920-1080.jpg",
    name: "forvis-mazars",
    threshold: 215,
    turdSize: 60,
  },
];

await mkdir("logos/_preview", { recursive: true });

for (const r of rasters) {
  const pre = await sharp(r.in)
    .flatten({ background: "#ffffff" })
    .grayscale()
    .normalise()
    .png()
    .toBuffer();
  const svg = await trace(pre, {
    color: "#111111",
    background: "transparent",
    threshold: r.threshold,
    turdSize: r.turdSize,
    optTolerance: 0.4,
  });
  await writeFile(`logos/_preview/${r.name}.svg`, svg);
  await sharp(Buffer.from(svg))
    .resize({ width: 260 })
    .flatten({ background: "#ffffff" })
    .png()
    .toFile(`logos/_preview/${r.name}.png`);
  console.log("traced", r.name, svg.length, "bytes");
}

let plani = await readFile("logos/logo-planisphere-systems.svg", "utf8");
plani = plani.replace(/fill="#[0-9A-Fa-f]{3,8}"/g, 'fill="#111111"');
await writeFile("logos/_preview/planisphere.svg", plani);
await sharp(Buffer.from(plani))
  .resize({ width: 260 })
  .flatten({ background: "#ffffff" })
  .png()
  .toFile("logos/_preview/planisphere.png");
console.log("recolored planisphere");
