import type { Metadata, Viewport } from 'next'
// 폰트 셀프호스팅 (사용하는 글자만 내려받는 dynamic subset)
import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: '월급 배분 체크',
  description: '이번 달 이체·납부했는지 한눈에 확인하는 월급 배분 체크리스트',
  icons: { icon: '/favicon.svg', apple: '/apple-touch-icon.png' },
  appleWebApp: { capable: true, title: '배분체크' },
}

export const viewport: Viewport = {
  themeColor: '#0f766e',
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
