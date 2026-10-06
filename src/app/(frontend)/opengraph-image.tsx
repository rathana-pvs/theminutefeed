import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'The Minute Feed — News that respects your time'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#151526',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* White accent line top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: '#f04438',
          }}
        />

        {/* Feed pulse brand mark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '7px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '12px',
              height: '38px',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '999px',
            }}
          >
          </div>
          <div
            style={{
              width: '12px',
              height: '72px',
              background: '#f04438',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '999px',
            }}
          >
          </div>
          <div
            style={{
              width: '12px',
              height: '52px',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '999px',
            }}
          >
          </div>
        </div>

        {/* Brand name */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '16px',
          }}
        >
          <span
            style={{
              fontSize: '64px',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            <span style={{ color: '#f04438', marginRight: '18px' }}>THE</span> MINUTE FEED
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: '22px',
            color: 'rgba(255,255,255,0.7)',
            letterSpacing: '0.5px',
            margin: 0,
          }}
        >
          Fast, clear, independent. News that respects your time.
        </p>

        {/* Bottom URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '36px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: 'rgba(255,255,255,0.4)',
            fontSize: '18px',
            letterSpacing: '0.1em',
          }}
        >
          theminutefeed.com
        </div>
      </div>
    ),
    { ...size }
  )
}
