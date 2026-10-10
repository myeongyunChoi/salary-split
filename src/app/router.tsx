import { createBrowserRouter } from 'react-router'
import { AccountsPage } from '@/pages/AccountsPage'
import { HistoryPage } from '@/pages/HistoryPage'
import { LoginPage } from '@/pages/LoginPage'
import { MonthPage } from '@/pages/MonthPage'
import { RootLayout } from './RootLayout'

// TODO: 로그인 안 된 사용자는 /login 으로 보내기
// TODO: '/' 로 들어오면 이번 달(/m/YYYY-MM)로 보내기
export const router = createBrowserRouter([
  { path: '/login', element: <LoginPage /> },
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <MonthPage /> },
      { path: 'm/:yearMonth', element: <MonthPage /> },
      { path: 'history', element: <HistoryPage /> },
      { path: 'accounts', element: <AccountsPage /> },
    ],
  },
])
