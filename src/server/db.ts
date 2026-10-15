import 'server-only'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import pg from 'pg'

declare global {
  var pgPool: pg.Pool | undefined
}

function createPool() {
  const connectionString = process.env.DATABASE_URL
  if (!connectionString) throw new Error('DATABASE_URL 이 없어요. .env.local 을 확인하세요')

  // Supabase 는 자체 루트 인증서를 쓴다. 이 인증서로 상대 서버를 검증해야 SSL 이 의미가 있다
  const ca = readFileSync(path.join(process.cwd(), 'db/supabase-ca.crt'), 'utf8')

  // 연결을 요청마다 새로 만들지 않고 풀에서 빌려 쓴다. Transaction pooler 뒤라 개수는 작게 둔다
  return new pg.Pool({ connectionString, ssl: { ca }, max: 5 })
}

// 개발 서버는 파일을 고칠 때마다 모듈을 다시 읽는다. 그때마다 풀이 늘지 않도록 전역에 하나만 둔다
export const pool = globalThis.pgPool ?? createPool()
if (process.env.NODE_ENV !== 'production') globalThis.pgPool = pool
