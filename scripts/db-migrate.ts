// 마이그레이션 적용: npm run db:migrate
// db/migrations/*.sql 을 파일 이름 순서대로, 아직 적용하지 않은 것만 한 번씩 실행한다
import { readdirSync, readFileSync } from 'node:fs'
import pg from 'pg'

const dir = 'db/migrations'

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { ca: readFileSync('db/supabase-ca.crt', 'utf8') },
})
await client.connect()

try {
  // 어떤 파일을 적용했는지 DB 에 기록해 두고, 다음 실행 때 건너뛴다
  await client.query(`
    create table if not exists schema_migrations (
      filename   text primary key,
      applied_at timestamptz not null default now()
    )
  `)

  const { rows } = await client.query<{ filename: string }>('select filename from schema_migrations')
  const applied = new Set(rows.map((row) => row.filename))
  const pending = readdirSync(dir)
    .filter((file) => file.endsWith('.sql'))
    .sort()
    .filter((file) => !applied.has(file))

  if (pending.length === 0) console.log('적용할 마이그레이션이 없어요')

  for (const file of pending) {
    const sql = readFileSync(`${dir}/${file}`, 'utf8')

    // 파일 하나 = 트랜잭션 하나. 중간에 실패하면 그 파일 전체가 취소되고 기록도 남지 않는다
    await client.query('begin')
    try {
      await client.query(sql)
      await client.query('insert into schema_migrations (filename) values ($1)', [file])
      await client.query('commit')
      console.log(`적용: ${file}`)
    } catch (error) {
      await client.query('rollback')
      console.error(`실패: ${file}`)
      throw error
    }
  }
} finally {
  await client.end()
}
