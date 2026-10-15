// DB 연결 확인: npm run db:ping
import { readFileSync } from 'node:fs'
import pg from 'pg'

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { ca: readFileSync('db/supabase-ca.crt', 'utf8') },
})

const started = performance.now()
await client.connect()
const { rows } = await client.query<{ db: string; version: string }>(
  'select current_database() as db, current_setting($1) as version',
  ['server_version'],
)
const ms = Math.round(performance.now() - started)
await client.end()

console.log(`연결 성공 (SSL 검증): ${rows[0].db}, PostgreSQL ${rows[0].version}, ${ms}ms`)
