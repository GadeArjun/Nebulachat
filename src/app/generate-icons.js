// generate-icons.js
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputSvg = "./public/favicon.svg"; // input SVG
const outputDir = "./public";

// Sizes for PWA manifest
const sizes = [
  { name: "apple-touch-icon.png", size: 180 },
  { name: "favicon-192.png", size: 192 },
  { name: "favicon-512.png", size: 512 },
];

// Check if input exists
if (!fs.existsSync(inputSvg)) {
  console.error("SVG file not found:", inputSvg);
  process.exit(1);
}

// Generate each PNG
sizes.forEach(({ name, size }) => {
  const outputPath = path.join(outputDir, name);
  sharp(inputSvg)
    .resize(size, size)
    .png()
    .toFile(outputPath)
    .then(() => console.log(`✅ Created ${name} (${size}x${size})`))
    .catch((err) => console.error(`Error creating ${name}:`, err));
});
