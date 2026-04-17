# SEO / JSON-LD 규칙

## URL은 getSiteUrl() 기반

사이트 절대 URL은 항상 `getSiteUrl()` 사용. [src/config/siteConfig.ts:93](../../src/config/siteConfig.ts#L93).

- `productionSiteUrl` 직접 import·하드코딩 금지.
- `https://www.bumohyetaek.kr` 같은 리터럴 URL 금지.
- `getSiteUrl()`은 개발(`localhost:3000`) / `NEXT_PUBLIC_SITE_URL` / 프로덕션을 환경 분기.
- 글 URL은 `getGuideUrl(slug)`, 카테고리는 `getCategoryUrl(category)` 헬퍼.

## Metadata는 팩토리 함수 사용

Next.js `Metadata` 객체를 페이지에서 직접 작성하지 말고 [src/lib/seo.ts](../../src/lib/seo.ts) 팩토리 사용.

| 함수 | 용도 |
|------|------|
| `buildGuideMetadata(item)` | 가이드 상세 (canonical `/guide/{slug}/`) |
| `buildHubMetadata(hub)` | 허브 페이지 |
| `buildCategoryMetadata(label, desc, slug)` | 카테고리 목록 |
| `buildPolicyMetadata(title, desc, slug)` | 정책·안내 페이지 (about, contact 등) |

- `seoTitle` 있으면 우선, 없으면 `title`. `seoDescription` 있으면 우선, 없으면 `summary`.
- OG 이미지는 `/og-default.png` (1200x630) 공용 사용.
- 페이지마다 `openGraph`/`twitter`를 직접 작성하면 일관성 깨짐.

## JSON-LD는 빌더 사용

`<script type="application/ld+json">`를 페이지에서 직접 조립하지 말고 [src/lib/jsonld.ts](../../src/lib/jsonld.ts) 빌더 + `<JsonLd>` 컴포넌트 사용.

| 빌더 | 적용 |
|------|------|
| `buildOrganizationJsonLd()` | 루트 레이아웃 1회 |
| `buildWebSiteJsonLd()` | 루트 레이아웃 1회 |
| `buildBreadcrumbJsonLd(items)` | 모든 상세 페이지 |
| `buildArticleJsonLd(item)` | 가이드 상세 |
| `buildFaqPageJsonLd(faqs)` | `faq` 있는 글 |
| `buildHowToJsonLd(item)` | 조건 만족 시 (아래 참고) |
| `buildWebPageJsonLd({title,desc,path})` | 허브·카테고리·정책 |

### HowTo 적용 조건

`buildHowToJsonLd()`는 다음 AND 조건일 때만 객체 반환, 아니면 `null`.

- `item.template === 'checklist' | 'policy'`
- `item.sections`에 `type: 'numbered-list'` AND `heading` 있는 항목 존재
- 판정 헬퍼: `isHowToEligible(item)` [src/lib/jsonld.ts:214](../../src/lib/jsonld.ts#L214).

step name은 `'제목: 본문'` 패턴이면 `:` 앞을 name, 뒤를 text로 분리. 글 작성 시 이 패턴을 활용하면 깔끔.

## Sitemap / Robots

[src/app/sitemap.ts](../../src/app/sitemap.ts)와 [src/app/robots.ts](../../src/app/robots.ts)가 자동 생성. 수동 편집 대신 데이터 소스(articles, hubs) 업데이트로 반영.

- `/print/` 디렉토리는 robots에서 색인 제외.
- 새 페이지 타입 추가 시 sitemap.ts에 해당 소스 추가 필요.

## trailingSlash

모든 URL 끝에 `/` 필요 (next.config.ts `trailingSlash: true`). canonical·OG·내부 링크에 누락 시 중복 URL 발생.
