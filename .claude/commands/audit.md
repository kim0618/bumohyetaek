# 부모혜택 콘텐츠 애드센스 감사

## 목적

부모혜택 애드센스 신청(2026-05-21 목표) 대비. 130편 전체를 **YMYL 기준(의료 면책 + 정책 수치 정확성 + 공식 출처 신뢰성)**으로 교차 감사해 E-E-A-T 품질 확보.

## 실행 원칙

- 사용자 명시 없으면 **하루 7편** 감사
- **우선순위 × updatedAt 최신순** 2단 정렬로 대상 선정
- **병렬 Explore subagent 7개**로 교차 감사 (자기검증 편향 차단)
- 발견 이슈는 부모 Claude가 **직접 재확인 후 수정**
- 감사 완료 후 `verified-articles.md`에 기록해 재감사 방지
- 목표: 130편 1차 패스 완주

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
- 국민연금 기준소득월액, A값(2026년 약 299만원), 노령연금 수급 연령
- 건강보험료율(직장 7.09%), 장기요양보험료율(12.95%)
- 장기요양 등급 기준(1~5등급 + 인지지원), 본인부담률(재가 15%/시설 20%)
- **장기요양 월 한도액은 수치를 직접 쓰지 말고 `/home/tjd618/bumohyetaek/src/data/articles/pension-welfare/long-term-care-grade.ts` 기준으로 대조** (파일 값이 연도별 공식 기준)
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
- **TLD로 국가 추정 금지**: `.org`·`.com`·`.net` 도메인이 외국 기관이라고 단정하지 말 것. URL 값만 보고하고 실제 접속 판정은 부모 Claude가 WebFetch로 직접 수행 (예: `ophthalmology.org`는 한국 대한안과학회 공식 도메인)

**D. relatedCalculator URL 실존성**
- `/home/tjd618/jptcalc/calc/` 하위 폴더 구조와 대조
- 예: `https://www.jptcalc.kr/calc/date/age/` → `/home/tjd618/jptcalc/calc/date/age/index.html` 실존 확인
- `category` 값(`finance|health|pension`)과 실제 jptcalc 경로 카테고리 일치 확인
- **가장 큰 리스크**: 임의 생성된 URL이 있으면 크로스 사이트 신뢰 훼손

**E. 내부 링크 정합성**
- `sections[].body` 안의 `[[slug|텍스트]]` 패턴 추출
- 대상 slug가 전체 130편에 존재하는지 (grep으로 확인)
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
- 단정 표현 ("100% 받을 수 있다", "무조건"). 단, **아래 맥락은 허용**:
  - "반드시": ①`type: 'warning'` 섹션(heading·body 모두), ②법적·절차적 의무 서술("방문간호지시서를 반드시 발급받아야"), ③계약서·서류 확인 안내
  - "무조건": `faq[].question` 필드에서 반박형 질문으로 쓰인 경우 (예: "일시금이 무조건 불리한가요?" → 답변이 "꼭 그렇지 않습니다"로 가정을 반박하는 구조). **단, `answer` 필드나 `sections` body에서 단정 주장으로 쓰이면 이슈.**
- AI 인사 도입부 ("안녕하세요! 오늘은")
- 본문 내 `- 항목` 하이픈 리스트 (list/numbered-list 섹션으로 교체). `warning`·`info`·`tip` 섹션의 `body` 필드에 `\n-` 패턴이 있어도 동일하게 이슈로 보고.
- 개인정보 입력 유도 (주민번호·계좌번호 요구 표현)

### Step 2: 이슈 확인 및 수정 (부모 Claude)

- subagent 7개 보고를 검토
- **URL 오류**: WebFetch·파일시스템으로 직접 재검증 후 수정
- **수치 오류**: officialSources의 공식 페이지에서 재확인 후 수정
- **내부 링크 오류**: grep으로 실존 재확인 후 수정 또는 제거
- **확신 없는 항목**은 "의심되지만 확인 필요" 목록으로 분류해 사용자에게 보고
- subagent 판단을 그대로 믿지 말고 반드시 부모가 재검산
- 수정 후 영향 범위 확인: 예) 기초연금 금액 변경 시 `summary` / `keyPoints` / `sections` / `seoDescription` 전부 동기화

### Step 3: 감사 완료 기록

**P순위 "완료" 선언 전 카운트 검증**: verified-articles.md 통계에서 특정 순위를 "완료"로 표시하기 전, 실제 파일 수와 대조할 것.

```bash
# 예: P1(health-care) 완료 선언 전
find /home/tjd618/bumohyetaek/src/data/articles/health-care -name "*.ts" ! -name "index.ts" | wc -l
# → 실제 파일 수와 verified-articles.md의 P1 완료 수가 일치해야 선언 가능
```

`/home/tjd618/bumohyetaek/verified-articles.md`에 추가:

```
- [slug] (YYYY-MM-DD 감사, P{1-5}, 이슈 N건 수정 | 이상 없음)
```

파일 상단에 누적 통계 유지:

```
## 진행 현황
- 감사 완료: X / 103 (Y%)
- P1 health-care: a / 35
- P2 policy+수치: b / N
- P3 계산기 연결: c / N
- P4 finance-safety: d / 34
- P5 기타: e / N
- 마지막 업데이트: YYYY-MM-DD
```

### Step 4: 결과 보고

- 감사한 7편 목록 (slug + P순위)
- 각 글별 발견 이슈와 수정 사항 (간결 bullet, A~H 카테고리 표기)
- 누적 감사 완료 X / 130 (Y%)
- **부모혜택 AdSense 신청 목표 2026-05-22 기준 D-?**
- 오늘 발견된 중대 이슈 유형 요약 (`/bumo-content` 작성 시 주의사항으로 활용)

## 주의사항

- subagent는 반드시 Explore(read-only) 사용해 임의 수정 차단
- **URL 검증은 부모 Claude가 WebFetch·파일시스템으로 직접 실행**. subagent의 URL 판정 신뢰 금지
- 정책 수치는 **보건복지부·국민건강보험공단·국민연금공단** 공식 페이지에서 직접 확인
- 감사 중 문체·구조 리팩터 금지. 사실·수치·면책·URL 오류만 수정
- **slug 변경 절대 금지** (URL·sitemap·RSS·외부 피드 전부 깨짐)
- 글 수정 후 `npm run build`는 사용자 요청 시에만 실행
- `/bumo-content`, `/diversify`, `/new-analysis` 스킬로 글이 수정되면 재감사 대상이 될 수 있으나, 1차 패스 완료까지는 무시

## 완료 후 로그 기록

스킬 실행이 완료되면 반드시 아래 명령으로 `skill-log.json`에 기록한다:

```bash
python3 -c "import json,datetime; logs=json.load(open('/home/tjd618/skill-log.json')); now=datetime.datetime.now(); logs.insert(0,{'date':now.strftime('%Y-%m-%d'),'time':now.strftime('%H:%M'),'project':'bumohyetaek','skill':'audit'}); open('/home/tjd618/skill-log.json','w').write(json.dumps(logs,ensure_ascii=False,indent=2))"
```
