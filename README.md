# 월급 배분 체크

월급을 여러 계좌로 나눈 뒤, 이번 달에 이체·납부했는지 확인하는 웹앱(PWA).

> TODO: 만든 이유, 기능, 트러블슈팅은 개발하면서 직접 채우기

## 스택

Next.js (App Router), React, TypeScript, Tailwind CSS, TanStack Query, Zustand, PostgreSQL (SQL 직접 작성, `pg`), Vitest

## 실행

```bash
npm install
cp .env.example .env.local   # DATABASE_URL 입력
npm run dev
```

| 명령 | 내용 |
|---|---|
| `npm run dev` | 개발 서버 |
| `npm run build` | 빌드 |
| `npm run test` | 테스트 |
| `npm run check` | 타입체크 + 린트 + 테스트 |

## 폴더 구조

```
db/
  migrations/  DB 스키마 SQL
src/
  app/         페이지, 레이아웃, Route Handler (app/api)
  server/      서버 전용 코드 — DB 연결, SQL 쿼리(repo), 인증
  api/         Route Handler 호출 함수
  queries/     TanStack Query 훅, Query 키
  domain/      순수 로직 (React·DB 모름) — 테스트 대상
  components/  화면 조각
  stores/      Zustand (화면 설정 등 클라이언트 상태)
```
