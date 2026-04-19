---
description: 부모혜택 얇은 가이드 글 보강 - 본문 짧은 글에 섹션 추가해 E-E-A-T 기준 달성
allowed-tools: Read, Write, Edit, Glob, Grep, Bash, Agent
---

# 부모혜택 얇은 가이드 보강

본문이 얇은 `ContentItem` 가이드에 **새 섹션을 추가**해서 목표 분량까지 끌어올린다.
슬러그·제목·구조·JSON-LD는 그대로 두고, `sections` 배열에 새 항목을 삽입하는 방식.
모든 대상 글 보강이 완료되면 이 스킬 파일을 삭제한다.

## 실행 일정
- **시작일**: 2026-05-14 (목)
- **진행 속도**: 하루 2편 (사용자 명시 없을 시)
- **애드센스 신청 목표**: 2026-05-22 (금) - 신청 전 대부분 보강 권장
- 대상 전수 보강 완료 시 스킬 자동 삭제

## 목표 분량 기준

- **현재 기준**: 실질 본문(sections[].body + items) **8,000자 미만** = 보강 대상
- **목표**: **10,000자 이상**
- 시니어 독자 대상이라 jptcalc(15,000자)보다 낮게 설정. 장문보다 명확성 우선.

측정 방법:
```bash
# 특정 글 실질 본문 측정 (npm run build 후)
sed 's/<[^>]*>//g' /home/tjd618/bumohyetaek/out/guide/{slug}/index.html \
  | tr -s ' \n' | wc -c
```

대상 전수 스캔:
```bash
cd /home/tjd618/bumohyetaek && npm run build 2>&1 | tail -5
for f in /home/tjd618/bumohyetaek/out/guide/*/index.html; do
  chars=$(sed 's/<[^>]*>//g' "$f" | tr -s ' \n' | wc -c)
  if [ "$chars" -lt 8000 ]; then
    slug=$(basename $(dirname "$f"))
    echo "THIN: $slug ($chars자)"
  fi
done | sort -t'(' -k2 -n
```

## 보강 완료된 글 (건너뛴다)

작업 완료 시 이 목록에 `- {slug} ({YYYY-MM-DD} 보강, N,NNN자)` 형식으로 추가.

<!-- 아직 완료 글 없음 -->

## 대상 글 (얇은 순서대로 작업)

5/14 작업 시작 전 위 스캔 명령으로 최신 목록 생성 후 아래 표에 기록.

| # | slug | 카테고리 | template | 현재 | 목표 부족 |
|---|---|---|---|---|---|
| - | - | - | - | - | - |

(작업 시작일에 자동 생성)

## 편수 원칙 (최우선)
- **사용자가 명시하지 않으면 반드시 2편만 작업한다.**
- 사용자가 "5개", "3편" 등 명시한 경우에만 그 수를 따른다.
- 우선순위: **얇은 순 × 카테고리 P1(health-care) 우선** (YMYL 리스크 + 분량 동시 해결)

## 작업 순서

### 1) 대상 선정
- 위 "대상 글" 표에서 완료 목록에 없는 **가장 얇은 2편** 선택
- 같은 분량이면 `category === 'health-care'` 우선

### 2) 글 읽기
```
Read /home/tjd618/bumohyetaek/src/data/articles/{category}/{slug}.ts
```
- 현재 `sections` 구조 파악
- 이미 있는 섹션 타입과 주제 목록화

### 3) 부족 분량 계산
- 목표 10,000자 - 현재 측정값 = 추가 필요 분량
- 아래 "보강 섹션 유형"에서 2-3개 조합

### 4) 보강 섹션 추가 (Edit 도구)
- `sections` 배열에 새 항목 **뒤쪽 절반 위치**에 삽입
- 기존 섹션 순서·내용 변경 금지
- TS 타입 준수

### 5) 빌드 검증
```bash
cd /home/tjd618/bumohyetaek && npm run build
```
- 타입 에러 0, ESLint 에러 0
- `out/guide/{slug}/index.html` 실질 본문 측정 → 10,000자 이상 확인

### 6) 이 파일 갱신
- "보강 완료된 글" 목록에 추가
- 진행률 표시 갱신

### 7) 결과 요약 출력

---

## 보강 섹션 유형 (추가할 콘텐츠)

기존 `sections`를 건드리지 않고, **새 ContentSection을 배열에 삽입**한다.
아래 유형 중 부족 분량에 맞게 2-3개 조합. 각 섹션 heading 필수.

### 유형 1: 2026년 수치 상세 (약 1,500-2,500자)
`type: 'text'` + `type: 'list'` 조합.
- heading: "2026년 기준 수치 정리" 또는 주제별 제목
- 본문에 **공식 수치 2-3개** (예: 기초연금 단독 349,700원, 선정기준액 247만원)
- 법령·고시 근거 명시
- 시니어 독자용 쉬운 해석 1-2문장

### 유형 2: 상황별 체크리스트 확장 (약 1,000-1,800자)
`type: 'numbered-list'` (HowTo JSON-LD 후보).
- heading: "{주제} 신청 단계" 또는 "{상황}일 때 확인 순서"
- items 7-10개, 각 항목 "제목: 본문" 패턴 (HowTo step 분리 가능)
- 공식 기관·전화번호·URL 포함 ("복지로 bokjiro.go.kr", "1577-1000")

### 유형 3: 자주 오해하는 부분 (약 1,000-1,500자)
`type: 'warning'` 또는 `type: 'tip'`.
- heading: "이것만은 조심하세요" 또는 "자주 헷갈리는 부분"
- 시니어·가족이 실수하기 쉬운 3-5개 포인트
- 각 포인트 구체적 상황 + 올바른 처리

### 유형 4: 사례·시나리오 추가 (약 1,200-1,800자)
`type: 'text'` 여러 개 조합.
- heading: "실제 사례로 보기" 또는 "{상황} 예시"
- 가상의 구체적 인물 (나이·상황·지역 명시)
- 결과와 그 이유 명확하게
- 의사결정 연결 문장: "그래서 이런 경우라면 {선택}을 고려할 수 있습니다"

### 유형 5: FAQ 확장 (약 800-1,500자)
글에 `faq` 필드가 이미 있으면 3-5개 추가. 없으면 신규 필드 추가.
- 각 질문은 **실제 검색 쿼리 유형** ("부모님이 해외 거주인데 기초연금 받을 수 있나요?")
- 각 답변 3문장 이상
- 엣지케이스·지역별 차이 포함

### 유형 6: 관련 제도·정책 연결 (약 700-1,200자)
`type: 'info'` 박스 + `type: 'text'`.
- heading: "함께 챙길 제도"
- 같이 알아두면 유용한 2-3개 제도 간단 설명
- 본문 내 `[[slug|링크텍스트]]` 문법으로 내부 글 교차 링크

### 유형 7: officialSources 확장
`officialSources` 필드에 공식 기관 2-3개 추가.
- `name`: 정확한 공식 명칭 ("보건복지부", "국민연금공단 1355")
- `url`: **실제 존재 URL만** (WebFetch로 200 응답 확인 후 등록)
- 글 본문이 아니라 메타 필드 확장이지만 신뢰도 시그널로 중요

---

## ContentSection 타입 준수

```typescript
type ContentSection =
  | { type: 'text'; heading?: string; body: string; }
  | { type: 'list'; heading?: string; items: string[]; }
  | { type: 'numbered-list'; heading?: string; items: string[]; }
  | { type: 'info'; heading?: string; body: string; }
  | { type: 'tip'; heading?: string; body: string; }
  | { type: 'warning'; heading?: string; body: string; }
  | { type: 'summary'; heading?: string; body: string; };
```

## 글쓰기 규칙

- em dash(—) 금지, 하이픈(-) 사용
- "~정리합니다", "~알아보겠습니다" 금지 (AI 톤)
- 단정 표현 금지 ("반드시 받는다" → "조건 충족 시 받을 수 있다")
- 의료 단정 금지 (health-care는 반드시 `type: 'warning'`에 전문의 상담 안내)
- 시니어 독자 기준: 어려운 한자어 지양, 전문용어 옆에 괄호 설명 병기
- 수치 없는 추상적 설명 금지
- 내부 링크는 `[[slug|텍스트]]` 문법 (직접 `<a>` 금지)
- 계산기 CTA 수정은 금지 (기존 `relatedCalculator` 필드 그대로)

## 절대 변경하지 않는 것

- `slug`, `title`, `seoTitle`, `summary`, `seoDescription`
- `createdAt` (보강 시 `updatedAt`은 오늘 날짜로 갱신)
- 기존 `sections` 순서·내용·heading
- `relatedCalculator` 필드
- `hubKey[]`, `relatedSlugs[]` (추가만 가능, 삭제 금지)
- JSON-LD 빌더 로직

## 변경해도 되는 것

- `sections` 배열에 새 항목 추가 (뒤쪽 절반)
- `faq` 확장 (항목 추가)
- `officialSources` 확장 (실존 URL만)
- `updatedAt` (보강 완료일로 갱신)
- `reviewStatus` (outdated → current로 상향 가능)

## HowTo JSON-LD 고려

`template === 'checklist' | 'policy'`인 글에 `type: 'numbered-list'` + `heading` 있는 섹션 추가하면 HowTo JSON-LD가 자동 생성된다.
- 구조화 데이터 확장 효과로 보강 효율↑
- step name은 "제목: 본문" 패턴이면 `:` 기준 자동 분리

## 검증 체크리스트 (작업 후 필수)

```
□ npm run build 성공, 타입 에러 0
□ 실질 본문 10,000자 이상 (렌더링 HTML 기준)
□ 새 섹션 heading 필수 필드 존재
□ em dash(—) 없음 (grep 체크)
□ "정리합니다", "알아보겠습니다" 없음
□ 의료 단정 표현 없음 (health-care만)
□ 내부 링크 `[[slug|텍스트]]` 문법 (전체 127편에 slug 존재 확인)
□ officialSources URL 실존 (WebFetch 200 응답)
□ updatedAt 오늘 날짜로 갱신
□ 기존 섹션 순서·내용 변경 없음
□ 계산기 관련 필드 그대로
```

## 결과 요약 형식

```
## 부모혜택 글 보강 결과 ({YYYY-MM-DD})

| 파일 | 카테고리 | 보강 전 | 보강 후 | 추가 섹션 |
|------|---------|---------|---------|----------|
| basic-pension-application | pension-welfare | 7,200자 | 10,400자 | 2026년 수치 정리, HowTo 체크리스트, FAQ 4개 |
| long-term-care-grade | health-care | 7,800자 | 10,650자 | 사례 시나리오, 자주 오해하는 부분, officialSources 2개 |

**진행 현황: 보강 완료 N편 / 전체 대상 M편 (N%)**
**남은 글: M편 (하루 2편 기준 D일 소요)**
**AdSense 신청 목표 2026-05-22 기준 D-?**
```

## 모든 대상 글 보강 완료 시

전체 대상 글이 보강 완료 목록에 포함되면:
1. 사용자에게 메시지:
   ```
   부모혜택 얇은 글 보강 완료! thin content 문제 해결.
   AdSense 신청(5/22) 준비 완료.
   이 스킬(/bumo-bolster)을 삭제합니다.
   ```
2. 이 스킬 파일(`/home/tjd618/.claude/commands/bumo-bolster.md`) 삭제
3. 일일 루틴 메모리에서 /bumo-bolster 항목 제거 알림

$ARGUMENTS
