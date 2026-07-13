import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const runtime = 'nodejs'

export const size = {
  width: 64,
  height: 64,
}

export const contentType = 'image/png'

export default async function Icon() {
  const logoBuffer = readFileSync(join(process.cwd(), 'public', 'Loguito.jpeg'))
  const logoSrc = `data:image/jpeg;base64,${logoBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '64px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#2a5435',
          overflow: 'hidden',
        }}
      >
        <img
          src={logoSrc}
          width={72}
          height={90}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
    ),
    { ...size }
  )
}
