---
description: 부모혜택 가이드 오류 검증 (제이퍼 /verify와 같은 방식, 신규 글 우선 + 전체 순환, 2단계 모델 분담)
allowed-tools: Read, Write, Edit, Glob, Grep, Bash, Agent, WebFetch, WebSearch
---

# 부모혜택 가이드 오류 검증

> 2026-11-09 신설(사용자 결정: "제이퍼랑 같은 방식으로"). 제이퍼 `/verify`(jptcalc/.claude/commands/verify.md)의 구조를 옮기고, 검증 항목은 부모 `/audit`의 A~H를 이어받았다. `/audit`은 2026-05~06 애드센스 신청용 감사라 따로 보존한다.

## 목적

부모혜택 가이드의 **정책 수치 오류·사실 오류·링크 오류**를 상시 검증한다. 전체 순환 후 다시 처음부터 반복한다.

**왜 필요한가:** 시니어 돈·건강 정보(YMYL)라 오류가 곧 신뢰 피해다. 2026-11-04 전수 원문 대조에서 79편 중 오류 없는 글이 4편뿐이었다(6~7월 대량 생산분). `/bumo-content`는 쓰는 쪽이 스스로 점검하는 구조라, 발행 뒤 독립적으로 다시 보는 단계가 필요하다.

## ⚙️ 2단계 모델 분담 (제이퍼와 같은 운영)

사용자는 **① 소넷으로 `/bumo-content` → `/bumo-verify`를 돌린 뒤 ② 오푸스로 전환해 심층 감사**를 한다. 모델 전환 자체가 자기검증 앵커링을 끊는 장치다.

### 1단계: 소넷 (`/bumo-verify`), 기계적·내부 정합
- 금액·비율·한도·기간 수치를 `policy-data-points.md`(검증된 수치 원장)와 대조
- **사이트 내부 모순**: 같은 제도의 숫자가 다른 가이드에서 다르게 나오는지 전수 grep(2026-11-04 실제 사례: 노후 생활비가 두 글에서 서로 다른 값·다른 출처)
- **제이퍼 계산기와의 정합**: `relatedCalculator`·본문이 가리키는 계산기의 JS 상수와 글 속 숫자 대조
- **자기 데이터 대조**: 주장문 ↔ 같은 글의 표·사례 숫자
- 내부 링크(`[[slug|텍스트]]`, `relatedSlugs`, `hubKey`)·계산기 경로 실존, ContentItem 구조, 빌드 통과
- 🔴 **법령 조문·고시 금액·본인부담률·의학 기준·통계·정부 일정은 "CONFIRMED"로 결론내지 말 것.** 원문 접근이 전제인 항목이므로 **"2단계 확인 필요"로 표시만 하고 넘긴다.**
- **1패스 + 자기 회귀 점검으로 종료.** 3차까지 반복하지 않는다. 회귀 점검은 서브에이전트 없이 부모가 직접 grep으로 한다.

### 2단계: 오푸스 (모델 전환 후 "심층 감사"), 원문·프레임
1단계가 구조적으로 못 하는 것만 한다.
- **원문 대조**: `law.go.kr` 조문 + **별표**, 소관부처 고시·사업안내 원문, 공단 공지, 통계 원 보고서(분모 정의까지), 지자체 공고
- 1단계가 "2단계 확인 필요"로 남긴 항목 **전수**
- **글의 서사 프레임 자체가 성립하는지**(개별 수치가 다 맞아도 프레임이 틀릴 수 있다)
- **기관 기준처럼 보이지만 원문에 없는 표** 적발
- **법정 기준·본인부담률을 실제 부담액으로 뭉갰는지**(비급여·실비·지자체 추가 지원 분리), **"예정"으로 헤지한 일정이 이미 공고됐는지**
- **1단계 수정이 만든 회귀**
- **`policy-data-points.md` 등재**(원문까지 확인한 값은 여기서 확정되므로 등재는 2단계 책임)
- 서브에이전트에는 "이전 패스가 부실하다고 가정하고 원문까지 내려가라"를 명시한다. ⚠️ 2단계 지적도 그대로 믿지 말고 부모가 원 근거를 직접 재확인한 뒤 반영한다.

### 요일 배치
`/bumo-content`가 **월·화·목** 주 3편이다(제이퍼 `/blog`와 같은 요일). **매일 1세트(소넷 `/bumo-verify` → 오푸스 심층 감사)가 기본.** 발행일에는 `/bumo-content`가 앞에 붙어 무거우므로 **2편(신규 1 + 순환 1)**, 비발행일(수·금·토·일)은 **3편**.
- 발행일에는 `/bumo-content` 7절이 끝에서 이 스킬을 **자동으로 이어 호출**한다(2026-11-11~). 따로 부르지 않아도 된다. 2단계(오푸스)만 사용자가 모델을 바꾼 뒤 요청한다.
- 전체 80편 기준 주 17편 안팎이면 약 5주에 1회차가 끝난다. 끝나면 신규 3편/주 커버 중심으로 줄인다(발행일 다음날 중심 주 3~4회).

## 실행 원칙

- **`/bumo-content`와 달리 하드 게이트가 아니다.** 잘못된 날 검증해도 발행물이 늘지 않아 해가 없다.
- 사용자가 명시하지 않으면 **하루 3편**(발행일 2편)
- **신규/편집 글 최우선 → 그다음 카테고리 우선순위 × 최신순**
- **병렬 Explore subagent**(편당 1개)로 교차 검증. subagent는 보고만, 수정 금지
- 발견된 오류는 부모 Claude가 **직접 재확인 후 수정**
- 검증 완료 후 `verified-guides.md`에 기록

### 왜 신규 글 최우선인가
오류는 갓 발행한 글에 몰린다(제이퍼 2026-06-17: 신규 글 8건 vs 기존 글 0~1건). 단 "한 번도 독립 검증을 안 거친 옛 글"은 수율이 낮지 않다. 부모 80편은 11/04에 서브에이전트 대조를 한 번 거쳤을 뿐 이 스킬의 1회차는 아니므로 순환 대상에 그대로 남는다.

## 대상 선정 로직

### Step 1: 전체 가이드 수집
`src/data/articles/{pension-welfare,health-care,finance-safety}/*.ts`(index.ts 제외)에서 slug·category·template·createdAt·updatedAt·relatedCalculator 여부를 뽑는다.

### Step 2: 검증 완료 목록 제외 (순환)
**🔴 먼저 `verified-guides.md` 맨 위 "재검증 대기(RECHECK QUEUE)" 블록을 읽는다.** 여기 있는 글은 완료 목록에 이름이 있어도 **완료가 아니며, 제외 규칙보다 우선해 그날 배정에 넣는다.** 해결하면 블록에서 지우고 완료 목록 항목에 결과를 적는다.

그다음 **「N회차 검증 완료 목록」 섹션 안의 slug만** 제외한다. 파일 전체를 grep하면 RECHECK 대기 글이나 교훈에 언급된 글이 조용히 빠진다. 부분문자열 매칭도 금지다(제이퍼에서 `withholding-tax-guide`가 `holding-tax-guide`를 1·2회차 내내 가렸다):
```python
import re
sec = open('verified-guides.md', encoding='utf-8').read().split('## 1회차 검증 완료 목록')[1]
def done(slug): return re.search(r'(?<![\w-])' + re.escape(slug) + r'(?![\w-])', sec) is not None
```
배정 전에 **제외된 slug 목록을 한 번 출력해** 의외의 글이 빠져 있지 않은지 눈으로 본다.

**전체 순환 완료 시**: 사용자에게 "N회차 순환 완료, 재시작합니다"라고 알린다. 파일을 비우지 말고 `verified-guides-archive.md`로 이관한 뒤, RECHECK QUEUE 블록과 "회차를 넘어 유효한 원칙"만 남겨 새 회차 섹션을 연다. 새 회차에서 글을 배정하면 **그 slug로 아카이브를 먼저 grep**해 지난 회차의 적발 내역·숙제를 읽고 시작한다.

**지난 기록(제외 판정에 쓰지 않음, 참고용)**: `verified-articles.md`(`/audit` 1차 패스 2026-04~06-22, 프루닝 전 220편 기준), `policy-data-points.md`의 2026-11-04 변경 이력(79편 전수 원문 대조). 배정한 글은 이 둘도 slug로 grep해 과거 적발 내역을 먼저 읽는다.

### Step 3: 선정 순서 (신규 우선 → 카테고리 우선순위)
**먼저 신규/편집 글**: 완료 목록에 없는 글 중 **createdAt 또는 updatedAt이 최근 14일 이내**인 글을 카테고리 무관 최신순으로 최우선 배치한다. `/bumo-content` "발행 기록" 표의 글도 같이 확인한다.
- ⚠️ **일괄 수정 날짜는 "신규"로 보지 않는다.** 2026-11-04 전수 대조 때 77편의 updatedAt이 한꺼번에 2026-11-04로 바뀌어, 이 규칙을 그대로 쓰면 거의 전부가 신규로 잡힌다(2026-11-09 첫 실행에서 확인). 신규는 **createdAt이 14일 이내인 글**과 **"발행 기록" 표·`git log`로 확인되는 개별 편집 글**로 판단하고, 같은 날 수십 편이 함께 바뀐 updatedAt은 순환 대상으로 넘긴다.

나머지는 아래 순서로 채운다.

| 순위 | category | 이유 |
|---|---|---|
| P1 | pension-welfare | 금액·선정기준·본인부담률. 연 단위 개정이 많아 오류 리스크 최고 |
| P2 | health-care | 의료 면책·등급 판정·검진 기준 |
| P3 | finance-safety | 상대적 저위험(단 세금·상속 수치 글은 P1처럼 다룬다) |

각 순위 안에서는 updatedAt 최신순. 급증 페이지(CLAUDE.md 목록: medical-aid-system, rehabilitation, veterans, support-obligation, funeral 등)는 같은 순위 안에서 앞으로 당긴다. 유입이 있는 글의 오류가 피해가 가장 크다.

### Step 4: 선정 결과를 사용자에게 알린 뒤 검증 시작
각 글이 **신규(🆕)인지 순환(🔁)인지** 표기한다.

## 검증 절차

### Step 1: 병렬 검증 (Explore subagent, 편당 1개)
각 subagent에 **글 파일 경로 하나 + 아래 A~I 전체**를 지시한다. 보고만 하고 수정은 하지 말 것.

**A. 정책 수치 (가장 중요)**
- 금액·비율·한도·일수·연령·선정기준을 `policy-data-points.md`와 대조(원장에 있으면 원장 값이 기준, 없으면 "원장 미등재"로 보고)
- 자주 틀리는 것: 기초연금 금액·선정기준액, 국민연금 A값·수급 연령, 건강보험·장기요양보험료율, 장기요양 등급·한도액·본인부담률, 의료급여 본인부담, 기준중위소득, 주거급여 기준임대료
- `effectiveDate`와 본문 수치의 기준 시점이 맞는지
- 1~2% 반올림 차이는 OK, 그 이상은 보고
- **⚠️ 오탐 금지**: 연 단위로 바뀌는 값을 "구값 오류"로 올리기 전에 `policy-data-points.md`에서 의도적으로 유지한 값인지 먼저 확인한다

**B. 법률·제도 팩트 (소스 티어 규칙)**

| 검증 대상 | 반드시 열어야 하는 원문 | 웹서치만 했을 때 보고 값 |
|---|---|---|
| 조문번호·선정기준·벌칙 | `law.go.kr` 조문 및 **별표** | **CONFIRMED 금지 → "2단계 확인 필요"** |
| 급여액·본인부담률·지원 한도 | 소관부처 고시·사업안내, 시행규칙 별표 | 같음 |
| 급여·감면 계산식(상한·하한) | 조문 원문의 **괄호 위치까지** | 같음 |
| 의학 기준·등급 판정·검진 주기 | 질병관리청·건보공단 지침 원문 | 같음 |
| 통계 | 발표기관 원 보고서, 분모 정의까지 | 같음 |
| 신청 기간·모집 일정 | 소관부처·지자체 공고 원문 | 같음 |

- 원문 렌더: `LD_LIBRARY_PATH=$HOME/.local/emulib node /home/tjd618/jptcalc/scripts/law-render.mjs <법령명> /tmp/law/<이름>`(WebFetch는 잘리고 DRF API는 2026-11 막힘). 방법 상세는 `/bumo-content`의 "원문 검증 의무"
- **시행일은 부칙에서**, 본법만 보고 요건을 단정하지 말 것(시행령·시행규칙), 전부개정 이력 확인
- 원문에서 확인 못 한 항목은 **"CANNOT VERIFY"로 명시**한다

**C. 시의성**
- `reviewStatus`와 본문 기준연도가 맞는지(`current`인데 2024년 수치 등)
- "작년", "올해 시행된" 같은 상대 시점 표현, 이미 지난 일정을 "예정"으로 쓴 곳
- `effectiveDate`가 미래인데 현재시제 서술

**D. 의료 면책 (health-care 필수)**
- `cautionNote` 또는 `type: 'warning'` 섹션 존재, 진단·처방 단정 표현 없음, 자가진단·자가치료 유도 없음, 전문의 상담 안내

**E. 링크·파일 실존**
- 본문 `[[slug|텍스트]]`, `relatedSlugs[]` → `src/data/articles/*/<slug>.ts` 실존
- `hubKey[]` → `src/data/hubs.ts`의 허브 중 하나
- `relatedCalculator`·본문의 jptcalc 주소 → `/home/tjd618/jptcalc/calc/<cat>/<slug>/index.html` 실존
- `officialSources[].url`은 **부모가 직접** 확인(subagent 판정 신뢰 금지). name과 도메인 매칭, 사설 도메인이 공공기관 이름으로 등록된 사례(`/audit`의 블랙리스트 절) 주의. WSL에서 `.go.kr`·`.or.kr` 타임아웃(curl 28)은 실존 추정, DNS 실패(curl 6)는 오류

**F. ContentItem 구조**
- 필수 필드(slug·title·category·template·targetUser·createdAt·updatedAt·reviewStatus·summary·sections), category 3종, `relatedCalculator.category`가 `finance|health|pension` 중 하나(콘텐츠 category와 혼동 금지)
- `template`이 checklist·policy인데 heading 있는 numbered-list 섹션 없음 → HowTo 구조화 데이터 누락

**G. 문체·금지어**
- em dash(—), 단정 표현("반드시", "100%", "무조건"), AI 인사 도입부
- **본문 `\n- ` 인라인 하이픈 리스트**(list 섹션으로 바꿀 대상). ⚠️ Explore subagent가 6/15~6/22 감사 때 이걸 반복 누락했으므로 **부모가 grep으로 따로 확인**한다
- 개인정보 입력 유도(주민번호·계좌번호)

**H. 서술 ↔ 자기 데이터 정합성** (셀별 검산으로는 안 잡히는 유형)
- "~일수록", "두 배", "절반", "가장", "A보다 B가", "오히려"가 들어간 주장문을 뽑아 같은 글의 표·사례 숫자로 방향과 크기를 직접 계산
- 제목·summary·keyPoints·seoDescription에 박힌 숫자가 본문과 일치하는지
- 한 편 안에서 2회 이상 나오는 숫자(summary·keyPoints·본문·FAQ·사례)를 모아 서로 어긋나는 쌍 찾기
- 사례 인물의 나이·연도로 "그 행동을 하는 해"를 먼저 정하고 그 해 기준을 적용했는지

**I. 사이트 교차 모순** (`/audit` Step 5b 이식)
- 글의 핵심 수치·등급·한도일수·대상 기준 키워드로 **다른 가이드 전체를 grep**: `grep -rn "키워드" src/data/articles/ | grep -v <slug>`
- 서술이 충돌하면 공식 출처로 재확인. 이 글이 틀렸으면 정정, 다른 글이 틀렸으면 그 글을 RECHECK QUEUE에 올린다
- `policy-data-points.md`에 적힌 "알려진 옛 값·오류 값" 패턴이 본문에 있는지
- 최우선 키워드: 기초연금·국민연금·장기요양 한도액·인지지원등급·단기보호·기준중위소득·의료급여·본인부담 상한

### Step 2: 오류 확인 및 수정 (부모 Claude)
- subagent 보고를 검토하고, 명백한 오류는 **부모가 직접 재확인**(계산은 Bash, 수치는 원장·원문, 링크는 파일시스템) 후 수정
- 확신 없는 항목은 "의심되지만 확인 필요" 목록으로 사용자에게 보고
- **급증 페이지의 title·seoTitle·seoDescription은 수정 금지**(CLAUDE.md). 본문 수치 정정만 한다. 제목에 박힌 수치가 틀렸다면 고치지 말고 사용자에게 먼저 알린다
- **slug 변경 절대 금지**

#### ⚠️ Step 2 직후 필수: 수정이 만든 회귀 점검

| 무엇을 고쳤나 | 반드시 함께 확인할 곳 |
|---|---|
| 본문 수치 | summary·heroDescription·keyPoints·sections 전체·faq·seoDescription·cautionNote에 같은 숫자가 남아 있는지 grep |
| 같은 제도 수치 | **다른 가이드 전체 grep**(I항). 한 편만 고쳐 사이트에 두 값이 공존하면 오류를 키운 것이다 |
| faq | 화면 FAQ와 구조화 데이터는 같은 필드에서 나오므로 질문·답 문장만 다시 읽는다 |
| officialSources | name·url·note(조문·고시명) 세 칸 같이 |
| 실질 내용 변경 | **`updatedAt`을 오늘로**(summary·heroDescription·keyPoints·sections·faq·cautionNote·officialSources·relatedCalculator 중 하나라도 바뀌면. `dateModified`가 여기서 나온다) |

**마지막 게이트 (전부 통과해야 종료)**
```bash
cd /home/tjd618/bumohyetaek
npm run build                                   # 타입·static export 통과
grep -rn "—" src/data/articles/ | head          # 0건
grep -rn '\\n- ' src/data/articles/<cat>/<slug>.ts   # 고친 글의 인라인 하이픈 리스트 0건
python3 - <<'EOF'                               # 본문 [[slug]]·relatedSlugs 실존, 파일명=slug, index.ts 등록
import re,glob,os
files=[f for f in glob.glob('src/data/articles/*/*.ts') if not f.endswith('index.ts')]
slugs={os.path.basename(f)[:-3] for f in files}
body=[];rel=[];name=[]
for f in files:
    s=open(f,encoding='utf-8').read(); me=os.path.basename(f)[:-3]
    m=re.search(r"slug:\s*['\"]([a-z0-9-]+)['\"]",s)
    if not m or m.group(1)!=me: name.append(me)
    body+=[(me,x,t) for x,t in re.findall(r'\[\[([a-z0-9-]+)\|([^\]]+)\]\]',s) if x not in slugs]
    m=re.search(r'relatedSlugs:\s*\[([^\]]*)\]',s)
    if m: rel+=[(me,x) for x in re.findall(r"['\"]([a-z0-9-]+)['\"]",m.group(1)) if x not in slugs]
idx=[os.path.basename(f)[:-3] for f in files if "/"+os.path.basename(f)[:-3]+"'" not in open(os.path.dirname(f)+'/index.ts',encoding='utf-8').read()]
print('본문 링크 대상 없음', len(body), body); print('relatedSlugs 대상 없음', len(rel), rel)
print('파일명≠slug', name); print('index.ts 미등록', idx)
EOF
```
- **본문 링크 대상 없음은 0이어야 한다.** 2026-07-27 정리(220→79편)로 없어진 slug는 `public/_redirects`가 허브로 301을 보내서 404가 나지 않는다. 그래서 빌드도 통과하고 눈에 안 띄지만, 독자는 "노인복지관" 같은 글자를 눌러 허브 첫 화면에 떨어진다. 남아 있는 글 중 같은 내용을 다루는 글로 바꾸거나, 없으면 링크를 풀고 글자만 남긴다(2026-11-09 신설 직후 첫 실행에서 25건 적발).
- relatedSlugs의 없는 slug는 `getRelatedContent`가 건너뛰고 허브·카테고리 글로 채우므로 화면 문제는 없다. 정리 대상으로만 보고한다.

**수정으로 새 정책 수치가 확정됐으면 `policy-data-points.md`에 등재한다**(수치·원문 위치(조·항·별표·고시)·확인일·검색 패턴·영향 글). 등재하지 않으면 `/bumo-refresh` 점검에서 영구히 빠진다.

#### 3차 재감사 (오류가 3건 이상 나온 배치는 필수)
수정을 마친 뒤 새 Explore subagent에 "이전 패스가 부실하다고 가정하고, 특히 **수정이 만든 회귀**를 찾아라"라고 지시한다. 지적은 그대로 믿지 말고 부모가 재확인한다.

### Step 3: 검증 완료 기록
`verified-guides.md`의 「1회차 검증 완료 목록」에 추가:
```
- slug (YYYY-MM-DD 검증, 🆕|🔁, 오류 N개 수정: [A] 요약 / [I] 요약 | 이상 없음 | 2단계 확인 필요 N건)
```
"2단계 확인 필요"가 남은 글은 **RECHECK QUEUE에도 한 줄** 올린다(완료 목록에만 두면 영영 확인되지 않는다).
🔴 **완료 목록 항목에는 검증한 그 글의 slug만 쓴다.** 비교한 다른 글을 slug로 적으면 그 글이 "완료"로 판정돼 순환에서 빠진다. 다른 글은 한글 제목이나 "기초수급 글"처럼 적고, 여러 글을 건드린 일괄 작업(링크 정리 등)은 「작업 기록」 섹션에 적는다(2026-11-09 첫 실행에서 링크 정리 메모가 6편을 가릴 뻔했다).

### Step 4: 결과 보고
- 검증한 글 목록(🆕/🔁)
- 글별 발견 오류와 수정 사항(간결하게)
- 2단계(오푸스)로 넘기는 항목
- 누적 검증 편수 / 전체 가이드 편수 (X/Y, Z%)
- 오늘 오류 유형 요약(다음 `/bumo-content` 작성 시 주의점)

## 주의사항
- subagent는 Explore(read-only)만 쓴다
- 수치·URL 판정은 부모가 직접 재확인한다. subagent 결과를 그대로 믿지 않는다
- 검증 중 문체·구조 리팩터 금지. 사실·수치·면책·링크 오류만 고친다
- `/bumo-content`로 새 글이 생기면 자동으로 다음 검증 대상이 된다(완료 목록에 없으므로)
- 배포·커밋은 사용자가 한다

## 완료 후 로그 기록
**수동 기록 불필요.** `~/.claude/log-skill.sh`(PostToolUse 훅)가 `.claude/skill-log.md`에 자동 기록한다. 이 로그는 "호출했다"만 남기므로 실제 검증 여부는 `verified-guides.md`로 판단한다. `.claude/skill-log.md`와 `verified-guides.md`는 사용자가 커밋해야 다른 PC에 전파되므로 완료 보고 때 커밋 대상에 포함하라고 안내한다.
