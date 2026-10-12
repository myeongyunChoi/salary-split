'use client'

import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export function Providers({ children }: { children: React.ReactNode }) {
  // 모듈 최상단에서 만들면 서버에서 요청 간에 캐시가 공유될 수 있어, 컴포넌트마다 한 번만 만든다
  // TODO: staleTime, retry 등 기본 옵션 정하기
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
