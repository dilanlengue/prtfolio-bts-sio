import sharp from 'sharp'
import { stat } from 'fs/promises'

const SRC = 'C:/xampp/htdocs/potfolit/public/photo-dilan.png'
const OUT_WEBP = 'C:/xampp/htdocs/potfolit/public/photo-dilan.webp'

const MAX_WIDTH = 1040

async function main() {
  const before = (await stat(SRC)).size

  await sharp(SRC)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(OUT_WEBP)

  const after = (await stat(OUT_WEBP)).size
  const kb = (n) => `${(n / 1024).toFixed(1)} KB`
  const ratio = ((1 - after / before) * 100).toFixed(1)
  console.log(`photo-dilan.png  → ${kb(before)}`)
  console.log(`photo-dilan.webp → ${kb(after)}  (${ratio}% smaller)`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
