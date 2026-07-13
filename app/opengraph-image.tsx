import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const runtime = 'nodejs'

export const alt = 'BLÜTE Kombucha | Patagonia Argentina'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  const logoBuffer = readFileSync(join(process.cwd(), 'public', 'Loguito.jpeg'))
  const logoSrc = `data:image/jpeg;base64,${logoBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0d1a10',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 80% 80% at 50% 45%, #1e3a22 0%, #081210 100%)',
            display: 'flex',
          }}
        />

        <div style={{ position: 'relative', width: '320px', height: '400px', display: 'flex' }}>
          <img
            src={logoSrc}
            width={320}
            height={400}
            style={{ objectFit: 'contain' }}
          />
          {/* tapa la marca de agua (estrellita) del rincón inferior derecho */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: '38px',
              height: '38px',
              background: '#1a3820',
              display: 'flex',
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  )
}
