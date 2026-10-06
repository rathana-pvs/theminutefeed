import sharp from 'sharp'

const icon = (background, bar, accent) => `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="256" fill="${background}"/>
  <rect x="146" y="254" width="52" height="112" rx="26" fill="${bar}"/>
  <rect x="230" y="126" width="52" height="240" rx="26" fill="${accent}"/>
  <rect x="314" y="198" width="52" height="168" rx="26" fill="${bar}"/>
</svg>`

const outputs = [
  ['public/logo.png', 512, '#151526', '#ffffff', '#f04438'],
  ['public/icon.png', 512, '#151526', '#ffffff', '#f04438'],
  ['public/icon_512.png', 512, '#151526', '#ffffff', '#f04438'],
  ['public/icon_192.png', 192, '#151526', '#ffffff', '#f04438'],
  ['public/apple-icon.png', 180, '#151526', '#ffffff', '#f04438'],
  ['public/favicon-32.png', 32, '#151526', '#ffffff', '#f04438'],
  ['public/favicon.ico', 32, '#151526', '#ffffff', '#f04438'],
  ['public/icon_light.png', 512, '#ffffff', '#151526', '#f04438'],
]

await Promise.all(
  outputs.map(([path, size, background, bar, accent]) =>
    sharp(Buffer.from(icon(background, bar, accent)))
      .resize(size, size)
      .png()
      .toFile(path),
  ),
)

console.log(`Generated ${outputs.length} The Minute Feed brand assets.`)
