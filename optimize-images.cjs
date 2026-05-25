const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const publicDir = path.join(__dirname, "public");

const images = [
  "vacuum.jpeg",
  "food serving.jpeg",
  "Arduino.jpeg",
  "metal detector.jpeg",
  "voice based systems.jpeg",
  "web dev.jpeg",
];

async function optimizeImages() {
  console.log("Optimizing images...\n");

  for (const image of images) {
    const inputPath = path.join(publicDir, image);
    const outputPath = path.join(publicDir, image.replace(".jpeg", ".webp"));

    try {
      const metadata = await sharp(inputPath).metadata();
      console.log(`Processing: ${image} (${metadata.width}x${metadata.height})`);

      await sharp(inputPath)
        .resize(800, 600, { fit: "inside", withoutEnlargement: true })
        .webp({ quality: 75 })
        .toFile(outputPath);

      const originalSize = fs.statSync(inputPath).size / 1024;
      const optimizedSize = fs.statSync(outputPath).size / 1024;
      console.log(
        `  → Created ${image.replace(".jpeg", ".webp")} (${optimizedSize.toFixed(1)}KB vs ${originalSize.toFixed(1)}KB original)\n`,
      );
    } catch (err) {
      console.error(`Error processing ${image}:`, err.message);
    }
  }

  console.log("Done!");
}

optimizeImages();
