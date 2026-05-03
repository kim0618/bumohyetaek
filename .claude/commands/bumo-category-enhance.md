---
description: bumohyetaek 카테고리/허브 페이지 본문 보강 (thin page 해소, 애드센스 대응)
---

# 부모혜택 카테고리·허브 보강 스킬

bumohyetaek의 **카테고리 3개 + 허브 5개 = 8개 인덱스 페이지**를 E-E-A-T 기준으로 보강한다.
애드센스 거절 사유("가치가 별로 없는 콘텐츠")를 카테고리/허브 레벨에서 사전 차단.

## 실행 일정
- **시작일**: 2026-05-10 (일)
- **종료일**: 2026-05-14 (목) 목표
- **진행량**: 하루 2개 × 5일 = 10슬롯 / 실제 대상 8개
- **여유분 2슬롯**: 분량 미달 재보강 또는 추가 디테일 투입
- 전체 완료 시 이 스킬 파일 **자동 삭제**

## 페이지별 진행 현황

| 유형 | slug | 파일 | 현재 실질본문 | 목표 | 완료일 | 최종 본문 |
|---|---|---|---|---|---|---|
| 카테고리 | pension-welfare | `categories.ts` + 카테고리 page.tsx | - | 5,000자+ | - | - |
| 카테고리 | health-care | `categories.ts` + 카테고리 page.tsx | - | 5,000자+ | - | - |
| 카테고리 | finance-safety | `categories.ts` + 카테고리 page.tsx | - | 5,000자+ | - | - |
| 허브 | retirement-income | `hubDetails.ts` | - | 5,000자+ | - | - |
| 허브 | prepare-care | `hubDetails.ts` | - | 5,000자+ | - | - |
| 허브 | government-benefits | `hubDetails.ts` | - | 5,000자+ | - | - |
| 허브 | health-checkup | `hubDetails.ts` | - | 5,000자+ | - | - |
| 허브 | financial-safety | `hubDetails.ts` | - | 5,000자+ | - | - |

**진행률: 0편 / 8편 (0%)**

작업 완료 시 이 표의 해당 행 **현재 실질본문·완료일·최종 본문** 칸을 즉시 갱신할 것.

## 기본 동작

- **1회 실행당 페이지 2개** 보강 (별도 지정 없을 시)
- 인자 없을 시 **아래 우선순위 큐 상단부터 자동 선택** (완료된 페이지는 스킵)
- 지정 시: `/bumo-category-enhance retirement-income` → retirement-income만 진행

## 우선순위 큐 (자동 선택 순서)

유입 잠재력 + 시니어 관심도 + 정책 민감도 기준.

| 순위 | 유형 | slug | 선정 이유 |
|---|---|---|---|
| 1 | 허브 | retirement-income | 은퇴·연금 수요 최대, 검색량 핵심 |
| 2 | 카테고리 | pension-welfare | 기초연금·국민연금 유입 기반 |
| 3 | 허브 | government-benefits | 복지급여·바우처 롱테일 다수 |
| 4 | 카테고리 | health-care | 장기요양·건강검진 CPC 높음 |
| 5 | 허브 | prepare-care | 돌봄·입원 긴급 검색 트래픽 |
| 6 | 허브 | health-checkup | 국가검진 시즌 유입 |
| 7 | 카테고리 | finance-safety | 보이스피싱·노후자산 안전 주제 |
| 8 | 허브 | financial-safety | 금융사기 예방 정보성 콘텐츠 |

**자동 선택 로직**:
1. 위 표에서 완료일이 비어 있는 페이지 중
2. 우선순위 큐 상단에서부터 **2개** 선택
3. 둘 다 진행

## 작업 대상 파일

### 카테고리 (3개)
- 데이터: `/home/tjd618/bumohyetaek/src/data/categories.ts` (description 확장)
- 페이지: `/home/tjd618/bumohyetaek/src/app/category/[category]/page.tsx` (intro/배경지식/FAQ 섹션 추가)
- **주의**: page.tsx는 동적 라우트 1개 파일로 3개 카테고리 공통 처리. 카테고리별 분기 필요 시 `category.slug` 스위치로 분리.

### 허브 (5개)
- 데이터: `/home/tjd618/bumohyetaek/src/data/hubDetails.ts` (HubDetail 확장)
- 페이지: `/home/tjd618/bumohyetaek/src/app/hub/[hub]/page.tsx` (필요 시 새 섹션 렌더링 로직 추가)
- 확장 포인트: `situations` 증량, `checklist` 증량, `faq` 증량, **새 필드 추가 가능** (예: `background`, `keyStatistics`, `relatedPolicies`)

## 보강 섹션 (페이지별 아래 항목 전부 필수)

### 카테고리 페이지 공통

**a) 도입 문단 확장 (categories.ts description, 200자+)**
- 현재 1-2문장 → 누구에게 왜 필요한지 + 이 카테고리에서 다루는 주제 개요

**b) 상황별 진입 가이드 (4-6개 시나리오)**
- 시니어/가족의 문제 상황 기반 ("부모님이 막 은퇴하셨다면", "장기요양 등급을 고민 중이라면")
- 각 시나리오마다 해당 글 2-3개 묶음 + 2-3문장 맥락 설명

**c) 주요 정책·제도 개요 (1,500-2,500자)**
- h2: "{카테고리}에서 꼭 알아야 할 정책"
- 2026년 기준 핵심 수치 2-3개 (예: 기초연금 349,700원, 건강보험 본인부담률, 장기요양 등급 기준)
- 법령·고시 근거 명시 ("국민연금법 제61조", "2026년 보건복지부 고시")
- 공식 출처 링크 1개 이상

**d) 자주 묻는 질문 확장 (6-8개)**
- 각 답변 3문장 이상, 수치·기준 포함
- 엣지케이스·자주 오해하는 부분 포함

**e) 관련 허브·카테고리 교차 링크 (3개 이상)**
- 시니어 독자 관점에서 연결되는 허브·카테고리로 자연스러운 경로 제공

### 허브 페이지 공통 (hubDetails.ts)

**a) 도입 맥락 (허브 description + 새 `introText` 필드, 300자+)**
- 이 허브가 다루는 상황의 긴급성·빈도 언급
- 핵심 단어 2-3개 굵게 처리 (시각 가이드)

**b) `situations` 확장 (5개 → 7-8개)**
- 현재 상황 목록 유지 + 자주 검색되는 상황 2-3개 추가
- 각 문장은 질문형·고민형으로 유지

**c) `checklist` 확장 (4-5개 → 7-9개)**
- 신청·준비 단계를 더 세밀하게 분리
- 공식 기관·전화번호·URL 명시 (예: "복지로 bokjiro.go.kr", "1577-1000")

**d) 배경 지식 섹션 (새 필드 `background` 또는 `keyStatistics`, 1,500-2,500자)**
- h2: "{허브 주제} 이해하기"
- 통계·추세·정책 변화 (2026년 기준)
- 시니어 독자 대상이므로 쉬운 용어 + 구체적 수치
- 출처 링크 2개 이상

**e) `faq` 확장 (3개 → 6-8개)**
- 각 답변 3문장 이상, 2026년 수치 포함
- 시니어·가족 양쪽 관점 고려

**f) `featuredSlugs` 재검토**
- 현재 선정 글이 실제 허브 대표성 있는지
- 2-3개로 확장 고려 (현재 1-2개)

## 타입 확장 (필요 시)

`HubDetail` 타입에 새 필드 추가 시 `/home/tjd618/bumohyetaek/src/types/hub.ts`도 함께 갱신:

```typescript
export interface HubDetail {
  slug: string;
  situations: string[];
  featuredSlugs: string[];
  checklist: string[];
  faq: FaqItem[];
  introText?: string;           // 신규
  background?: BackgroundSection;  // 신규
  keyStatistics?: StatItem[];   // 신규 (선택)
}
```

렌더링 로직은 `/home/tjd618/bumohyetaek/src/app/hub/[hub]/page.tsx`에서 조건부 렌더링으로 후방 호환 유지.

## 스타일·규칙

- em dash(—) 금지, 하이픈(-) 사용
- 공용 CSS 클래스 사용 (`.container-content`, `.box-info`, `.box-tip`, `.box-warning`)
- 새 Tailwind 유틸 임의 생성 금지
- 페이지 커스텀 너비(`max-w-[...]`) 금지
- **시니어 독자 기준**: 어려운 한자어 지양, 전문용어 옆에 괄호로 쉬운 설명 병기
- 단정 표현 금지 ("반드시 받을 수 있다" → "조건 충족 시 받을 수 있다")
- 의료 관련 항목은 반드시 `box-warning` + "전문의 상담 권장" 안내 포함

## JSON-LD 갱신

카테고리·허브 페이지는 이미 `buildWebPageJsonLd` 사용 중. FAQ 확장 시 `buildFaqPageJsonLd` 적용:

- `faq`가 있는 허브 페이지는 `FAQPage` JSON-LD 자동 생성되는지 확인
- 없으면 `page.tsx`에서 `<JsonLd data={buildFaqPageJsonLd(faqs)} />` 추가
- 본문 FAQ와 JSON-LD FAQ **1:1 정확 일치**

## 실질 본문 측정

```bash
# 카테고리 description (categories.ts)
grep -A 3 "slug: '{slug}'" /home/tjd618/bumohyetaek/src/data/categories.ts | wc -c

# 허브 데이터 전체 (hubDetails.ts에서 해당 허브 블록)
awk "/slug: '{slug}'/,/^  \},\$/" /home/tjd618/bumohyetaek/src/data/hubDetails.ts | wc -c
```

**주의**: TS 파일 측정은 코드·쉼표·따옴표 포함이라 체감 본문과 다름. 실제 렌더링 본문은 `npm run build` 후 `out/category/{slug}/index.html` 또는 `out/hub/{slug}/index.html`에서 측정:

```bash
cd /home/tjd618/bumohyetaek && npm run build
# 빌드 후
sed 's/<[^>]*>//g' /home/tjd618/bumohyetaek/out/hub/{slug}/index.html | tr -s ' \n' | wc -c
```

## 작업 순서

### 1) 대상 페이지 상태 파악
- 현재 데이터 파일에서 해당 블록 Read
- 렌더링 페이지(`page.tsx`) Read하여 섹션 구조 확인

### 2) 부족한 섹션 식별
- 위 "보강 섹션" 체크리스트 대조
- 누락 섹션 목록화

### 3) 데이터 파일 보강 (Edit 다회)
- categories.ts / hubDetails.ts에 필드 확장
- 타입 변경 필요 시 `types/hub.ts` 또는 `types/navigation.ts` 동시 갱신

### 4) 페이지 파일 보강 (필요 시)
- 새 필드 렌더링 로직 추가 (조건부: `{hubDetail.introText && <section>...</section>}`)
- Tailwind 공용 클래스 사용

### 5) JSON-LD 확인
- FAQ 있으면 FAQPage JSON-LD 생성 확인
- 본문과 1:1 일치

### 6) 빌드 검증
```bash
cd /home/tjd618/bumohyetaek && npm run build
```
- 타입 에러 0, ESLint 에러 0
- 빌드 성공 후 `out/{category|hub}/{slug}/index.html` 존재 확인

### 7) 실질 본문 측정
- 목표 5,000자+ 달성 확인
- 미달 시 부족 섹션 추가

## 검증 체크리스트 (작업 후 필수)

```
□ 실질 본문 5,000자 이상 (렌더링 HTML 기준)
□ 도입 문단 200자+ (카테고리) / introText 300자+ (허브)
□ 상황/시나리오 6개+ (카테고리) / situations 7개+ (허브)
□ 배경 지식 섹션 1,500자+ (법령/수식/수치 2개 이상)
□ FAQ 6개 이상, 각 답변 3문장 이상, 2026년 수치 포함
□ 관련 허브·카테고리 교차 링크 3개 이상 (실제 경로 존재 확인)
□ JSON-LD: WebPage + FAQPage 2종 모두 존재 (FAQ 있는 경우)
□ FAQPage 질문·답변이 본문과 문장 단위 정확히 일치
□ em dash(—) grep 체크
□ `npm run build` 성공, 타입 에러 0
□ 시니어 용어 기준 (어려운 한자어 제거)
□ 의료·금융 단정 표현 없음
```

## 결과 요약 형식

### 1) 스킬 파일 상단 표 갱신 (필수)
이 파일(`/home/tjd618/.claude/commands/bumo-category-enhance.md`) 상단의 "페이지별 진행 현황" 표에서 해당 행 **현재 실질본문·완료일·최종 본문** 채우고, **진행률: N편 / 8편 (N%)** 수치 갱신.

### 2) 사용자에게 제시하는 요약
```
## 카테고리·허브 보강 결과 ({YYYY-MM-DD})

| 유형 | slug | 이전 → 이후 | 추가 섹션 |
|---|---|---|---|
| 허브 | retirement-income | 2,100 → 5,420자 | situations 3개, background 1,900자, FAQ 5개 |
| 카테고리 | pension-welfare | 1,800 → 5,100자 | 시나리오 5개, 정책개요 2,000자, FAQ 6개 |

**진행 현황: 완료 N편 / 전체 8편 (N%)**
**남은 페이지: {나열}**
**다음 작업일: {내일 날짜}** (다음 권장 2개: {slug명})
**부모혜택 AdSense 신청 목표 2026-05-22 기준 D-?**
```

### 3) 통합 로그 (누적 기록, 옵션)
`/home/tjd618/bumohyetaek/bumo-category-enhance-log.md`에 날짜별 누적 기록.

## 모든 페이지 완료 시

8개 전부 5,000자+ 달성 시:
1. 사용자에게 "전체 카테고리·허브 보강 완료" 알림
2. 이 스킬 파일(`/home/tjd618/.claude/commands/bumo-category-enhance.md`) 삭제

## 금지 사항

- 기존 `featuredSlugs`·`relatedSlugs` 삭제 금지 (추가만)
- 타입 확장 없이 필드 임의 추가 금지 (타입 에러)
- 글 본문(`ContentItem.sections`) 수정 금지 (이 스킬은 **인덱스 페이지 전용**)
- 계산기 URL 임의 생성 금지 (`.claude/rules/calculator.md` 참고)
- em dash(—) 금지
- 과장·감정 표현 금지 (시니어 독자 대상)
- 빌드 에러 발생 시 사용자 보고 후 진행 (자동 무시 금지)

$ARGUMENTS
