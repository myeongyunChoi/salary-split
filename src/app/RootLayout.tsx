import { NavLink, Outlet } from 'react-router'

export function RootLayout() {
  return (
    <div className="mx-auto min-h-dvh max-w-md">
      <main className="p-4">
        <Outlet />
      </main>

      <nav className="fixed inset-x-0 bottom-0 border-t bg-white">
        <div className="mx-auto flex max-w-md">
          <NavLink to="/" className="flex-1 py-3 text-center text-sm">
            이번 달
          </NavLink>
          <NavLink to="/history" className="flex-1 py-3 text-center text-sm">
            기록
          </NavLink>
          <NavLink to="/accounts" className="flex-1 py-3 text-center text-sm">
            계좌
          </NavLink>
        </div>
      </nav>
    </div>
  )
}
