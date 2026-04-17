# 콘텐츠 작성 규칙

콘텐츠는 `src/data/articles/{category}/{slug}.ts`에 개별 TS 파일로 존재. `ContentItem` 인터페이스는 [src/types/content.ts](../../src/types/content.ts).

## 카테고리 (3개)

- `pension-welfare` (연금·복지·혜택)
- `health-care` (건강보험·검진·돌봄)
- `finance-safety` (금융·생활안전)

## 새 글 추가 절차

1. `src/data/articles/{category}/{slug}.ts` 생성 (`ContentItem` 구조)
2. 같은 카테고리의 `index.ts`에 `import` + 배열에 추가
3. `npm run build`로 `generateStaticParams()`가 자동 페이지 생성 확인

**2단계 누락 시 빌드되어도 글이 노출되지 않음.**

## 필수 필드

`slug`, `title`, `category`, `template`, `targetUser`, `createdAt`, `updatedAt`, `reviewStatus`, `summary`.

- `slug`: **사이트 전체에서 고유** (카테고리 내 고유 아님). 다른 카테고리 글과도 겹치지 않게.
- `createdAt`/`updatedAt`: ISO 날짜(`YYYY-MM-DD`), JSON-LD가 `T00:00:00+09:00` 붙여 사용.
- `reviewStatus`: `current` | `needs-review` | `outdated`.
- `targetUser`: `senior` | `family` | `both`.

## 템플릿 선택

| template | 용도 | 특수 효과 |
|----------|------|-----------|
| `standard` | 기본 가이드 | - |
| `policy` | 정책 안내 | `effectiveDate`, `officialSources` 강조, HowTo JSON-LD 후보 |
| `checklist` | 체크리스트 | numbered-list가 스텝 스타일, HowTo JSON-LD 후보 |
| `calculator` | 계산기 연결형 | CTA 상단 배치 |
| `comparison` | 비교형 | 표·항목 대조 |

**HowTo JSON-LD 조건**: `template === 'checklist' | 'policy'` AND `type: 'numbered-list'`이면서 `heading` 있는 섹션 존재. [src/lib/jsonld.ts:149](../../src/lib/jsonld.ts#L149). policy/checklist 쓰면서 numbered-list 섹션을 안 넣으면 HowTo 스키마가 누락되니 주의.

## 섹션 타입 (ContentSection)

- `text` - 일반 문단 (heading?, body)
- `list` - 불릿 리스트 (heading?, items[])
- `numbered-list` - 번호 리스트 (heading?, items[])
- `info` - 파란 안내 박스
- `tip` - 초록 팁 박스
- `warning` - 노란 주의 박스
- `summary` - 회색 요약 박스

## 내부 링크

본문 `body` 텍스트 안에서 `[[slug|링크텍스트]]` 문법 사용. `<a>` 직접 작성 금지.

예: `[[basic-pension-application|기초연금 신청 방법]]` -> ContentBody가 자동으로 `<a>`로 변환. [src/components/guide/ContentBody.tsx](../../src/components/guide/ContentBody.tsx).

## 연결 구조

- `hubKey?: string[]` - 연관 허브 slug (5개 중). 허브 페이지에서 동적 수집.
- `relatedSlugs?: string[]` - 수동 지정 관련 글 (최우선). 없으면 같은 허브 -> 같은 카테고리 순 fallback. [src/lib/content.ts:100](../../src/lib/content.ts#L100).
- `order?: number` - 낮을수록 먼저 노출.
- `isFeatured?: boolean` - 홈·카테고리 상단 주목.

## 문장 규칙

- em dash(—) 대신 하이픈(-) 사용.
- 과장·감정 표현 지양 (시니어 독자 대상).
