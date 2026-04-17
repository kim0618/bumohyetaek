# 부모혜택 (bumohyetaek)

제이퍼계산기(jptcalc.kr)의 공식 정보 가이드 블로그. 시니어와 가족 대상 복지·건강보험·은퇴 실무 가이드 정적 사이트.

- **도메인**: https://www.bumohyetaek.kr
- **연계**: https://www.jptcalc.kr (제이퍼 계산기)
- **규모**: 103개 가이드 + 5개 허브 + 3개 카테고리 + 8개 PDF

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
