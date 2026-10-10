# 월급 배분 체크

월급을 여러 계좌로 나눈 뒤, 이번 달에 이체·납부했는지 확인하는 웹앱(PWA).

> TODO: 만든 이유, 기능, 트러블슈팅은 개발하면서 직접 채우기

## 스택

React, TypeScript, Vite, Tailwind CSS, TanStack Query, Zustand, React Router, Supabase, vite-plugin-pwa, Vitest

## 실행

```bash
npm install
cp .env.example .env.local   # Supabase URL / publishable key 입력
npm run dev
```

| 명령 | 내용 |
|---|---|
| `npm run dev` | 개발 서버 |
| `npm run build` | 타입체크 + 빌드 |
| `npm run test` | 테스트 |
| `npm run check` | 타입체크 + 린트 + 테스트 |

## 폴더 구조

```
src/
  app/         라우터, 공통 레이아웃
  pages/       라우트 단위 화면
  components/  화면 조각
  domain/      순수 로직 (React·Supabase 모름) — 테스트 대상
  api/         Supabase 호출
  queries/     TanStack Query 훅, Query 키
  stores/      Zustand (화면 설정 등 클라이언트 상태)
  lib/         Supabase 클라이언트
supabase/
  migrations/  DB 스키마 SQL
```
