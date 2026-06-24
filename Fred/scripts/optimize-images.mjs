import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const assetsRoot = path.resolve("src", "assets");
const imageExtensions = new Set([".jpg", ".jpeg", ".png"]);

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(entryPath)));
      continue;
    }

    if (imageExtensions.has(path.extname(entry.name).toLowerCase())) {
      files.push(entryPath);
    }
  }

  return files;
}

async function optimizeFile(filePath) {
  const originalBuffer = await fs.readFile(filePath);
  const extension = path.extname(filePath).toLowerCase();
  const image = sharp(originalBuffer, { failOnError: false });

  let optimizedBuffer;
  if (extension === ".png") {
    optimizedBuffer = await image
      .png({ compressionLevel: 9, adaptiveFiltering: true, effort: 10 })
      .toBuffer();
  } else {
    optimizedBuffer = await image
      .jpeg({ quality: 78, progressive: true, mozjpeg: true })
      .toBuffer();
  }

  if (optimizedBuffer.length < originalBuffer.length) {
    await fs.writeFile(filePath, optimizedBuffer);
    return {
      filePath,
      originalSize: originalBuffer.length,
      optimizedSize: optimizedBuffer.length,
    };
  }

  return null;
}

async function main() {
  const files = await walk(assetsRoot);
  const results = [];

  for (const filePath of files) {
    const result = await optimizeFile(filePath);
    if (result) {
      results.push(result);
    }
  }

  console.log(`Optimized ${results.length} image file(s).`);
  for (const result of results) {
    console.log(
      `${path.relative(process.cwd(), result.filePath)}: ${Math.round(result.originalSize / 1024)} KB -> ${Math.round(result.optimizedSize / 1024)} KB`,
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
