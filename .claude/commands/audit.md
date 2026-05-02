# 부모혜택 콘텐츠 애드센스 감사

## 목적

부모혜택 애드센스 신청(2026-05-21 목표) 대비. 135편 전체를 **YMYL 기준(의료 면책 + 정책 수치 정확성 + 공식 출처 신뢰성)**으로 교차 감사해 E-E-A-T 품질 확보.

## 실행 원칙

- 사용자 명시 없으면 **하루 7편** 감사
- **우선순위 × updatedAt 최신순** 2단 정렬로 대상 선정
- **병렬 Explore subagent 7개**로 교차 감사 (자기검증 편향 차단)
- 발견 이슈는 부모 Claude가 **직접 재확인 후 수정**
- 감사 완료 후 `verified-articles.md`에 기록해 재감사 방지
- 목표: 135편 1차 패스 완주 (남은 53편 ÷ 7 = 8일, 2026-05-10 완료 목표)

## 대상 선정 로직

### Step 1: 전체 ContentItem 수집

`/home/tjd618/bumohyetaek/src/data/articles/{category}/*.ts` 스캔 (index.ts 제외). 각 파일에서 slug, category, template, updatedAt, effectiveDate, relatedCalculator 여부 추출.

### Step 2: 감사 완료 목록 제외

`/home/tjd618/bumohyetaek/verified-articles.md`에 등록된 slug 제외. 파일 없으면 생성.

### Step 3: 우선순위 분류

| 순위 | 조건 | 근거 |
|------|------|------|
| P1 | `category === 'health-care'` | 의료 면책 + 단정 표현 리스크 최고 |
| P2 | `template === 'policy'` OR `effectiveDate` 있음 | 2026년 정책 수치 정확성 |
| P3 | `relatedCalculator` 있음 | 제이퍼 URL 실존성 (크로스 사이트 신뢰도) |
| P4 | `category === 'finance-safety'` | 금융 조언 단정 표현 |
| P5 | 나머지 (`pension-welfare` 일반) | 일반 사실 오류 |

한 글이 여러 조건 해당 시 **최상위 순위로 분류** (P1 > P2 > P3 > P4 > P5).

### Step 4: 순위 내 `updatedAt` 최신순 정렬

### Step 5: 상위 7편 선택 → 사용자에게 알림 후 감사 시작

## 감사 절차

### Step 1: 7개 글 병렬 감사 (Explore subagent 7개)

각 subagent에 **한 개 글 파일 경로 + 아래 A~H 전체**를 지시. subagent는 이슈만 보고하고 **수정 금지**.

**A. 정책 수치 (2026년 기준)**
- 기초연금 최대 수령액(2026년 단독 349,700원), 선정기준액(단독 월 247만/부부 395.2만)
- 국민연금 기준소득월액, A값, 노령연금 수급 연령
- 건강보험료율, 장기요양보험료율
- 장기요양 등급 기준(1~5등급 + 인지지원), 본인부담률
- 주거급여 기준임대료 구간, 의료급여 본인부담
- `effectiveDate` 값이 본문 수치와 정합

**B. 의료 면책 (health-care 필수)**
- `cautionNote` 또는 `type: 'warning'` 섹션 존재
- 진단·처방 단정 표현 없음 ("반드시 낫는다", "이 약을 먹으면 치료된다")
- 자가진단·자가치료 유도 없음
- 전문의 상담 안내 포함 권장

**C. officialSources URL 실존성**
- 각 `officialSources[].url`을 부모 Claude가 WebFetch로 200 응답 확인 (subagent 판정 신뢰 금지)
- 404·리다이렉트·접근 차단 보고
- `name`과 `url` 매칭 확인 (예: `name: '보건복지부'`인데 URL이 국민연금공단이면 오류)

**D. relatedCalculator URL 실존성**
- `/home/tjd618/jptcalc/calc/` 하위 폴더 구조와 대조
- 예: `https://www.jptcalc.kr/calc/date/age/` → `/home/tjd618/jptcalc/calc/date/age/index.html` 실존 확인
- `category` 값(`finance|health|pension`)과 실제 jptcalc 경로 카테고리 일치 확인
- **가장 큰 리스크**: 임의 생성된 URL이 있으면 크로스 사이트 신뢰 훼손

**E. 내부 링크 정합성**
- `sections[].body` 안의 `[[slug|텍스트]]` 패턴 추출
- 대상 slug가 전체 127편에 존재하는지 (grep으로 확인)
- `relatedSlugs[]` 각 값도 실존 확인

**F. ContentItem 구조**
- 필수 필드 누락 (slug/title/category/template/targetUser/createdAt/updatedAt/reviewStatus/summary)
- `template === 'checklist' | 'policy'`인데 `heading` 있는 `numbered-list` 섹션 없음 → HowTo JSON-LD 누락
- `category`가 3개 값 중 하나 (pension-welfare/health-care/finance-safety)
- `hubKey[]` 각 값이 `hubs.ts`의 5개 중 하나
- `relatedCalculator.category`가 `finance|health|pension` 중 하나 (콘텐츠 category와 혼동 금지)

**G. 시의성**
- `reviewStatus === 'outdated'`인데 본문이 2026 최신 → 상태 업데이트
- `reviewStatus === 'current'`인데 수치가 2024년 → 상태 하향
- 본문에 "2024년 기준", "작년", "올해 시행된" 같은 상대 시점 표현
- `effectiveDate`가 미래인데 현재시제 서술 → 시제 오류

**H. 애드센스 리스크 문체**
- em dash(—) 사용 (하이픈으로 교체)
- 단정 표현 ("반드시", "100% 받을 수 있다", "무조건")
- AI 인사 도입부 ("안녕하세요! 오늘은")
- 본문 내 `- 항목` 하이픈 리스트 (list/numbered-list 섹션으로 교체)
- 개인정보 입력 유도 (주민번호·계좌번호 요구 표현)

### Step 2: 이슈 확인 및 수정 (부모 Claude)

- subagent 4개 보고를 검토
- **URL 오류**: WebFetch·파일시스템으로 직접 재검증 후 수정
- **수치 오류**: officialSources의 공식 페이지에서 재확인 후 수정
- **내부 링크 오류**: grep으로 실존 재확인 후 수정 또는 제거
- **확신 없는 항목**은 "의심되지만 확인 필요" 목록으로 분류해 사용자에게 보고
- subagent 판단을 그대로 믿지 말고 반드시 부모가 재검산
- 수정 후 영향 범위 확인: 예) 기초연금 금액 변경 시 `summary` / `keyPoints` / `sections` / `seoDescription` 전부 동기화
- **`updatedAt` 갱신 규칙**: 다음 필드 중 하나라도 수정한 경우 `updatedAt`을 감사일로 갱신
  - `summary` / `heroDescription` / `keyPoints`
  - `sections[].body` / `sections[].items[]` / `sections[].heading`
  - `faq[].question` / `faq[].answer`
  - `cautionNote`
  - `officialSources[]` (URL·name·note 변경 포함)
  - `relatedCalculator` URL·name 변경
  - 단순 회귀 텍스트(slug 없는 오탈자) 수정 시는 갱신 생략 가능 (사용자 판단)
  - 근거: `buildArticleJsonLd`가 `dateModified`를 `updatedAt`에서 가져오므로 SEO·검색엔진 신선도 측면에서 동기화 필요

### Step 3: 감사 완료 기록

`/home/tjd618/bumohyetaek/verified-articles.md`에 추가:

```
- [slug] (YYYY-MM-DD 감사, P{1-5}, 이슈 N건 수정 | 이상 없음)
```

파일 상단에 누적 통계 유지:

```
## 진행 현황
- 감사 완료: X / 129 (Y%)
- P1 health-care: a / 43
- P2 policy+수치: b / N
- P3 계산기 연결: c / N
- P4 finance-safety: d / 42
- P5 기타: e / N
- 마지막 업데이트: YYYY-MM-DD
```

### Step 4: 결과 보고

- 감사한 7편 목록 (slug + P순위)
- 각 글별 발견 이슈와 수정 사항 (간결 bullet, A~H 카테고리 표기)
- 누적 감사 완료 X / 135 (Y%)
- **부모혜택 AdSense 신청 목표 2026-05-21 기준 D-?**
- 오늘 발견된 중대 이슈 유형 요약 (`/bumo-content` 작성 시 주의사항으로 활용)

### Step 5: 회귀 검증 (오늘 발견된 패턴을 과거 감사에 적용)

오늘 [C] URL 오류 또는 [A] 정책 수치 오류가 발견되면 동일 패턴이 과거 verified 글에 잠재되어 있을 수 있음. 자동으로 다음 절차 실행:

- 발견된 잘못된 URL/수치를 grep으로 전체 articles 디렉토리에서 검색
  - 예: `grep -rn "help-me.kr" /home/tjd618/bumohyetaek/src/data/articles/`
- **URL뿐 아니라 부연 텍스트(기관명·도메인 표기)도 함께 검색**. URL은 교체했어도 본문(cautionNote·FAQ answer·info body)에 잘못된 명칭이 남으면 독자가 검색 시 사설 사이트로 오인할 수 있음
  - 예: `grep -rn "법원 후견포털\|help-me" articles/` (URL + 명칭 동시 검색)
  - 예: 수치 오류 발견 시 본문에 직접 인용된 숫자 표기(`"349,700원"`, `"월 70만"` 등)도 grep
- 매칭되는 글 중 verified-articles.md에 등록된 글이 있으면 → 다음 감사 사이클 P0(최우선) 큐에 강제 포함
- verified-articles.md 해당 항목에 `[재감사 필요: 사유]` 태그 추가 (Step 3 기록 형식)
- 즉시 수정 가능한 동일 오류는 같은 세션에 일괄 수정하고 verified-articles.md에 수정 내역 추가 기록

**P0 처리 원칙**: 다음 `/audit` 실행 시 `[재감사 필요]` 태그가 있는 글을 우선순위 분류보다 먼저 7편에 포함.

## 주의사항

- subagent는 반드시 Explore(read-only) 사용해 임의 수정 차단
- **URL 검증은 부모 Claude가 WebFetch·파일시스템으로 직접 실행**. subagent의 URL 판정 신뢰 금지
- 정책 수치는 **보건복지부·국민건강보험공단·국민연금공단** 공식 페이지에서 직접 확인
- 감사 중 문체·구조 리팩터 금지. 사실·수치·면책·URL 오류만 수정
- **slug 변경 절대 금지** (URL·sitemap·RSS·외부 피드 전부 깨짐)
- 글 수정 후 `npm run build`는 사용자 요청 시에만 실행
- `/bumo-content`, `/diversify`, `/new-analysis` 스킬로 글이 수정되면 재감사 대상이 될 수 있으나, 1차 패스 완료까지는 무시

### 공식 출처 URL 블랙리스트 (사설 사이트가 공식 기관명으로 등록된 사례)

`officialSources[].name`이 정부·공공기관인데 URL이 사설 도메인이면 [C] 이슈. 다음 패턴은 발견 즉시 자동 [C] 이슈 처리:

- **`help-me.kr`** ≠ 대법원 후견포털 (사설 법무법인 "헬프미 법률사무소")
  - 성년후견·법원 관련 공식 출처는 `https://www.scourt.go.kr` (대법원) 또는 `https://efamily.scourt.go.kr` (전자가족관계등록시스템)만 허용
- 도메인 끝이 `.go.kr`(정부)·`.or.kr`(공공·비영리)이 아닌 `.kr`/`.com`/`.co.kr`로만 끝나면 사설 가능성 → name과 매칭 신중히 검증
- WebFetch 결과 사이트가 "법무법인", "사무소", "스타트업", "주식회사" 등을 자칭하면 사설로 간주

### URL 검증 환경 주의

WSL 환경에서 일부 한국 비영리·재단 사이트가 ECONNREFUSED·timeout(curl exit 28) 발생할 수 있음. 다음 기준으로 구분:

- **DNS resolution 실패** (curl exit 6, "Could not resolve host"): 도메인 자체가 없음 → [C] 이슈
- **연결 거부/타임아웃** (ECONNREFUSED, exit 28): WSL 차단 가능성 높음 → "WSL 타임아웃이나 실존 추정"으로 통과 처리, 도메인 패턴(`.go.kr`/`.or.kr`)으로 판단
