# 부모혜택 (bumohyetaek)

제이퍼계산기(jptcalc.kr)의 공식 정보 가이드 블로그. 시니어와 가족 대상 복지·건강보험·은퇴 실무 가이드 정적 사이트.

- **도메인**: https://www.bumohyetaek.kr
- **연계**: https://www.jptcalc.kr (제이퍼 계산기)
- **규모**: 79개 가이드(보호 66 + 합본 13) + 5개 허브 + 3개 카테고리 + 8개 PDF

## ⚠️ 관찰기간 동결 (2026-07-27 ~ 판정 시까지, 최우선 규칙)

2026-07-27 회생 수술(220편→79편 프루닝 + 301 리다이렉트 154건) 완료 후 **3~4개월 관찰기간**. 판정은 2026년 11월경 (GSC 주 노출 100+ & 실질 키워드 30위권 진입 = 회복 / 미달 = 영구 동결·재론 없음).

- **신규 콘텐츠 생산 전면 금지.** `/bumo-content` 실행 요청이 와도 이 규칙을 먼저 고지하고 진행하지 말 것.
- `/bumo-refresh`는 생존 79편(보호 66 + 합본 13)의 수치 최신화만 허용.
- 보호 글은 제목·메타·본문 일절 수정 금지 (메타 변경 강등 전례 있음).
- 허용 작업: 월 1회 /report 신호 체크, 수치 refresh, 깨진 링크 수정.
- 상세 근거: `.claude/plans/revival-execution-2026-07-27.md`, `revival-triage-2026-07-27.md`

## 기술 스택

| 항목 | 버전 |
|------|------|
| Next.js | 15.1 (App Router, static export) |
| React | 19 |
| TypeScript | 5.7 (strict) |
| Tailwind CSS | 3.4 |
| Fuse.js | 7.1 (클라이언트 검색) |
| Puppeteer | 24.40 (PDF 생성, devDependency) |

경로 별칭: `@/*` -> `./src/*`

## 명령어

```bash
npm run dev     # 개발 (localhost:3000)
npm run build   # 프로덕션 빌드 (out/)
npm run lint    # ESLint
```

## 디렉토리 구조

```
src/
  app/           # App Router 페이지 (guide/[slug], category/[category], hub/[hub], print/[slug], feed.xml, sitemap.ts, robots.ts)
  components/    # layout / guide / content / hub / download / search / seo / ads / analytics / ui / print
  data/
    articles/{category}/{slug}.ts   # 콘텐츠 본체 (103개)
    articles/{category}/index.ts    # 카테고리별 배열 export
    hubs.ts, hubDetails.ts, categories.ts, downloads.ts
  lib/           # content.ts / seo.ts / jsonld.ts / calculator.ts / analytics.ts / searchIndex.ts / format.ts
  config/siteConfig.ts
  types/         # content / navigation / download / hub
scripts/         # generate-pdfs.mjs, generate-icons.mjs, generate-og-image.mjs
public/downloads/ # 8개 PDF
```

## 카테고리 / 허브

**카테고리 3개**: `pension-welfare` / `health-care` / `finance-safety`

**허브 5개**: `prepare-care` (부모님 돌봄·입원) / `retirement-income` (은퇴 후 소득) / `government-benefits` (정부 혜택) / `health-checkup` (건강검진·예방) / `financial-safety` (노후 재정·금융사기)

## 작업 영역별 규칙

작업을 시작하기 전에 해당 영역의 규칙 파일을 먼저 확인할 것.

- 글 작성·편집: @.claude/rules/content.md
- 제이퍼 계산기 연동 (`relatedCalculator`): @.claude/rules/calculator.md
- SEO / JSON-LD / Metadata: @.claude/rules/seo.md
- GA4 이벤트 (`trackEvent`): @.claude/rules/analytics.md
- 스타일링 / 접근성 / globals.css 클래스: @.claude/rules/styling.md
- 빌드 / 정적 export 제약 / 배포 / PDF 생성: @.claude/rules/build.md

## 콘텐츠 작성 참고

글 주제·톤 등 편집 가이드는 `CONTENT-PROMPT.md` 참고.
