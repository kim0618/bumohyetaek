# 제이퍼 계산기 연동 규칙

글의 `relatedCalculator` 필드로 [jptcalc.kr](https://www.jptcalc.kr)의 계산기 CTA를 연결.

## 절대 원칙: 실제 공개 URL만

**`relatedCalculator.url`은 실제 공개된 계산기 URL만 입력. 임의 경로 생성 절대 금지.**

- 존재하지 않는 URL (예: `https://www.jptcalc.kr/calc/aaa/`)을 추측·생성하지 말 것.
- 확인되지 않은 계산기는 `relatedCalculator` 필드 자체를 생략 (CTA 비노출).
- 정책 근거: [src/lib/calculator.ts:1-8](../../src/lib/calculator.ts#L1-L8), [src/types/content.ts:100](../../src/types/content.ts#L100).

## 필드 구조

```typescript
relatedCalculator: {
  brand: '제이퍼 계산기',
  name: '만 나이 계산기',
  url: 'https://www.jptcalc.kr/calc/date/age/',  // 확인된 URL만
  openMode: 'new-tab',
  category: 'finance' | 'health' | 'pension',
  crossSiteTrackingKey?: 'guide-basic-pension-age',  // UTM 캠페인값
}
```

## category 값 주의

`relatedCalculator.category`는 콘텐츠 카테고리와 **다름**.

- 계산기 `category`: `'finance'` | `'health'` | `'pension'` (3개)
- 콘텐츠 `category`: `'pension-welfare'` | `'health-care'` | `'finance-safety'` (3개)

혼동해서 `'pension-welfare'` 같은 값을 쓰면 타입 에러.

## URL 빌드 / UTM

CTA 컴포넌트는 직접 `url`을 쓰지 말고 `buildCalculatorUrl(calculator)` 호출. [src/lib/calculator.ts:31](../../src/lib/calculator.ts#L31).

- `crossSiteTrackingKey`가 있으면 UTM 자동 추가: `utm_source=parentguide`, `utm_medium=cta`, `utm_campaign={trackingKey}`.
- 없으면 원본 URL 그대로 반환.
- UTM을 직접 쿼리에 하드코딩하지 말 것.

## CTA 문구

`calculatorCTA`를 직접 문자열로 작성하기보다 `makeCalculatorCTA(name, style)` 사용 권장. [src/lib/calculator.ts:69](../../src/lib/calculator.ts#L69).

- `calculate` (기본): `"X로 계산해보기"`
- `verify`: `"X에서 확인하기"`
- `estimate`: `"예상 수치를 X에서 확인하기"`

`subText`는 `makeCalculatorCTA`가 `"제이퍼 계산기 · 무료"`로 자동 설정.

## GA4 이벤트

계산기 클릭 이벤트는 `trackJptcalcClick()` 사용. 통합(`jptcalc_click`) + 분류(`jptcalc_{category}_click`) 쌍 발송. [analytics.md](./analytics.md) 참고.
