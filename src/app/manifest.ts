import type { MetadataRoute } from 'next'

// 홈 화면 설치용. 서비스워커(오프라인 캐시)는 아직 없다 — 금액 데이터를 캐시하지 않도록 따로 설계한다
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '월급 배분 체크',
    short_name: '배분체크',
    lang: 'ko',
    start_url: '/',
    display: 'standalone',
    background_color: '#f6f7f5',
    theme_color: '#0f766e',
    icons: [
      { src: '/pwa-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/pwa-512x512.png', sizes: '512x512', type: 'image/png' },
      { src: '/maskable-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
