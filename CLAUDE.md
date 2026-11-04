# 부모혜택 (bumohyetaek)

제이퍼계산기(jptcalc.kr)의 공식 정보 가이드 블로그. 시니어와 가족 대상 복지·건강보험·은퇴 실무 가이드 정적 사이트.

- **도메인**: https://www.bumohyetaek.kr
- **연계**: https://www.jptcalc.kr (제이퍼 계산기)
- **규모**: 79개 가이드(보호 66 + 합본 13) + 5개 허브 + 3개 카테고리 + 8개 PDF

## ⚠️ 2026-11-04 재가동 (최우선 규칙, 10/12 영구 동결을 대체)

10/12 영구 동결 후 **10/29부터 네이버 노출 급증**(서치어드바이저 일 10~60 → 200~500, GA4 네이버 세션 일 0~2 → 약 7). 사이트를 네이버블로그(주제·일정 독립)와 함께 다시 키우기로 **2026-11-04 사용자 결정**. 구글은 여전히 무반응이라 목표 채널은 네이버.

- **신규 글 주 3편(일·화·목).** `/bumo-content` 재허용(요일 게이트·큐·발행 기록은 스킬 파일이 정본). 주제는 수요 숫자(서치어드바이저 검색어·웹문서, 블로그 조회) 근거가 있을 때만, 기존 79편과 같은 축이면 새 글 대신 기존 글 수치 갱신.
- **네이버블로그와는 주제·일정 독립**(블로그는 예약 발행). 같은 제도를 다루게 되면 사이트는 표·절차 정리본, 문장 복사 금지. 블로그는 이미 공개된 사이트 글만 링크한다.
- **급증 페이지 제목·설명 변경 금지**(medical-aid-system, rehabilitation, veterans, support-obligation, funeral, hub/prepare 등). 본문 수치 정정만 허용. 근거: 5/18 상위 7편 메타 동시 변경 후 노출 -95%.
- `/bumo-refresh`: 1월 첫째 주 일제점검 유지 + 급증 페이지는 금액 발표 직후 우선 반영(기초연금·의료급여·기준중위소득).
- `/bumo-meta-optimize`, `/bumo-bolster`는 계속 보류.
- 애드핏·링크프라이스·301 리다이렉트·도메인 유지(제이퍼→부모혜택 링크 16개 보호).
- 판정: 2026-12-16(블로그 1차 판정과 같은 날) 서치어드바이저 노출 추세 + GA4 네이버 세션으로 주 3편 유지 여부 결정.
- 부모 네이버블로그: **애드포스트 조회수형**, 주 3편. 규칙 `naverblog-rules.md`, 대장 `naverblog-ledger.tsv`.
- 이전 경위: 10/12 영구 동결(구글 주 노출 5~7), `.claude/plans/revival-execution-2026-07-27.md`, `revival-triage-2026-07-27.md`

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
