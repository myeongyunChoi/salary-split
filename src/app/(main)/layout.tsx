import Link from 'next/link'

// TODO: 로그인 안 된 사용자는 /login 으로 보내기
export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto min-h-dvh max-w-md">
      <main className="p-4">{children}</main>

      <nav className="fixed inset-x-0 bottom-0 border-t bg-white">
        <div className="mx-auto flex max-w-md">
          <Link href="/" className="flex-1 py-3 text-center text-sm">
            이번 달
          </Link>
          <Link href="/history" className="flex-1 py-3 text-center text-sm">
            기록
          </Link>
          <Link href="/accounts" className="flex-1 py-3 text-center text-sm">
            계좌
          </Link>
        </div>
      </nav>
    </div>
  )
}
