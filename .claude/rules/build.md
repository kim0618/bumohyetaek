# 빌드 / 배포 규칙

## 완전 정적 export

`next.config.ts`에서 `output: 'export'`. 서버 런타임이 없음.

**사용 불가**:
- API 라우트 (`app/api/*`) - 런타임 서버가 없으므로.
- `getServerSideProps` 류, 서버 액션.
- `next/image`의 원격 이미지 최적화 (`images.unoptimized: true`).
- 미들웨어, 동적 OG 이미지 생성 (`opengraph-image` runtime).

**반드시 지켜야 할 설정**:
- `trailingSlash: true` - 모든 URL 끝에 `/`. 내부 링크·canonical 작성 시 슬래시 누락 금지.
- 동적 라우트는 `generateStaticParams()`로 전체 slug 선언 필요. [src/lib/content.ts:175](../../src/lib/content.ts#L175) `getAllSlugs()` 참고.

## 명령어

```bash
npm run dev     # 개발 (localhost:3000)
npm run build   # 프로덕션 빌드 (out/ 생성)
npm run lint    # ESLint
```

## 배포 분담

**Claude는 `npm run build`까지만 수행. rsync 배포는 사용자가 직접.**

- `rsync -avz --delete out/ {서버경로}` 같은 명령을 Claude가 자동 실행하지 않음.
- 빌드 완료 후 결과 요약만 전달하고 사용자 배포 대기.

## PDF 생성 프로세스

1. `src/app/print/{slug}/` 인쇄용 페이지 작성
2. `src/data/downloads.ts`에 다운로드 항목 추가
3. **별도 터미널에서** `npx next start -p 2000` 선행 (PDF 생성 스크립트가 localhost:2000 요구)
4. `node scripts/generate-pdfs.mjs` 실행
5. `public/downloads/*.pdf` 생성 확인

localhost:2000 서버 없이 스크립트 실행하면 Puppeteer 연결 실패. 순서 중요.

현재 8개 PDF: welfare-checklist, basic-pension-checklist, care-grade-checklist, hospital-visit-checklist, financial-safety-checklist, survivor-pension-checklist, vaccination-schedule, inheritance-checklist.

## 환경변수

```
NEXT_PUBLIC_SITE_URL              # 사이트 URL (없으면 productionSiteUrl)
NEXT_PUBLIC_GA_MEASUREMENT_ID     # GA4 측정 ID
NEXT_PUBLIC_ADSENSE_ENABLED       # AdSense on/off
NEXT_PUBLIC_ADSENSE_CLIENT        # AdSense 클라이언트 ID
```

`NEXT_PUBLIC_` prefix 없으면 클라이언트 번들에 포함 안 됨.
