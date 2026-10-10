import { createClient } from '@supabase/supabase-js'

// TODO: 스키마를 만든 뒤 `npx supabase gen types` 로 타입을 생성해 createClient<Database>() 로 바꾸기

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined

/** .env 가 비어 있으면 앱 대신 설정 안내 화면을 보여준다 */
export const isSupabaseConfigured = Boolean(url && key)

export const supabase = createClient(url ?? 'http://localhost:54321', key ?? 'missing-key', {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    flowType: 'pkce',
  },
})
