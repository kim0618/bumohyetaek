# GA4 이벤트 규칙

이벤트 정의·발송은 [src/lib/analytics.ts](../../src/lib/analytics.ts)에 중앙화.

## trackEvent<T>() 사용 필수

`window.gtag('event', ...)` 직접 호출 금지. 타입 안전한 `trackEvent<T>()` 경유. [src/lib/analytics.ts:126](../../src/lib/analytics.ts#L126).

- 개발: `console.log('[analytics] ...')`
- 프로덕션 + GA4 연결: `window.gtag('event', name, params)`
- 프로덕션 + 미연결: 조용히 noop
- 브라우저 컨텍스트(onClick 등)에서만 호출 (window 참조).

## 이벤트명 규칙

- **snake_case**, 최대 40자 (GA4 권장).
- 패턴: `{대상}_{행동}` (예: `hub_card_click`, `pdf_download_click`).
- camelCase·kebab-case 금지.

## 현재 이벤트 목록

| 이벤트명 | 파라미터 타입 |
|----------|---------------|
| `hub_card_click` | `HubCardParams` |
| `hub_article_click` | `HubArticleParams` |
| `official_source_click` | `OfficialSourceParams` |
| `jptcalc_click` | `JptcalcParams` |
| `jptcalc_finance_click` | `JptcalcParams` |
| `jptcalc_health_click` | `JptcalcParams` |
| `jptcalc_pension_click` | `JptcalcParams` |
| `pdf_download_click` | `PdfDownloadParams` |
| `home_cta_click` | `HomeCtaParams` |

## 새 이벤트 추가 절차

1. 파라미터 interface 정의 (`XxxParams`)
2. `EventParamMap`에 `{이벤트명: XxxParams}` 추가 ([src/lib/analytics.ts:100](../../src/lib/analytics.ts#L100))
3. 호출부에서 `trackEvent('new_event', {...})` 사용

**`EventParamMap` 등록 누락 시 타입 에러.** 인터페이스만 만들고 맵에 추가 안 하면 호출 불가.

## 제이퍼 계산기 클릭은 trackJptcalcClick()

`trackEvent('jptcalc_click', ...)`만 직접 호출하지 말 것. `trackJptcalcClick(params)`이 통합 이벤트 + 카테고리별 이벤트(`jptcalc_{category}_click`)를 쌍으로 발송. [src/lib/analytics.ts:147](../../src/lib/analytics.ts#L147).

- category 분기는 함수 내부에서 자동 처리 (`finance`/`health`/`pension`).
- GA4에서 통합 분석과 카테고리 분석을 동시에 가능하게 하기 위한 설계.

## context 필드 (JptcalcParams)

`context: 'guide' | 'hub' | 'home'` - CTA가 노출된 페이지 유형.
`context_slug` - 그 페이지의 slug (article slug 또는 hub slug).
`position: 'bar' | 'box' | 'inline'` - CTA 컴포넌트 variant.

페이지 위치를 잘못 넣으면 퍼널 분석 오염.
