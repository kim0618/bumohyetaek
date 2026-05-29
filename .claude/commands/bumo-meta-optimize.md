---
description: bumohyetaek 가이드 글 seoTitle·seoDescription 최적화 (CTR 개선, 클릭 유도)
---

# 부모혜택 메타 태그 최적화 스킬

**네이버 서치어드바이저**에서 노출 많고 CTR 낮은 가이드 글의 `seoTitle`·`seoDescription`을 검색 스니펫 최적화 관점으로 교정. 본문은 건드리지 않고 메타만 교정한다.

> bumo 주 트래픽은 네이버(구글 organic 1~3%)라 **네이버 CTR 기준**으로 최적화한다. 구글 서치콘솔은 보지 않는다(유입 미미). 네이버는 공개 API가 없으므로 사용자가 서치어드바이저 캡처를 제공한다.

## bumohyetaek vs jptcalc 차이

bumohyetaek는 Next.js 15 App Router + static export. 메타 정의 위치가 jptcalc(정적 HTML)와 다름.

| 항목 | bumohyetaek | jptcalc |
|------|-------------|---------|
| 메타 위치 | `src/data/articles/{category}/{slug}.ts`의 `seoTitle`/`seoDescription` | HTML `<head>` 내 6개 태그 |
| JSON-LD | `src/lib/jsonld.ts` 빌더가 자동 생성 (수동 동기화 불필요) | HTML 내 직접 작성 (수동 동기화 필요) |
| OG/Twitter | `src/lib/seo.ts` 팩토리가 자동 생성 | HTML 내 직접 작성 |
| h1 | `title` 필드 사용 (변경 금지) | title과 동기화 필요 |

**한 페이지당 수정 필드 2개만**: `seoTitle`, `seoDescription`. 끝.

## 기본 동작

- **월 1회**, 1회 실행당 페이지 6-7개 최적화 (네이버 데이터가 월 단위로 의미 있고, 페이지당 메타 쿨다운 4주라 주간 실행 무의미)
- 지정 시: `/bumo-meta-optimize seizure-protected-account` → 해당 slug만
- 대상 선정: **네이버 서치어드바이저 > 리포트 > 웹문서/검색어 TOP 30**에서 노출 높고 CTR 낮은 페이지. 네이버는 공개 API가 없으므로 사용자가 캡처/목록 제공.

## 선정 기준 (우선순위)

네이버는 평균순위를 제공하지 않으므로 **노출·CTR만** 사용:

1. 웹문서 **노출 높은데(상위권) CTR 2% 미만** - 클릭 손실이 가장 큰 구간
2. 노출 50회 이상 + CTR 0~1% (스니펫이 거의 죽은 상태)
3. 직전 갱신에서 다룬 페이지는 **4주 쿨다운** 전까지 제외

## 대상 페이지 확보 (네이버 서치어드바이저 캡처)

네이버는 공개 API가 없으므로 **사용자가 서치어드바이저 > 리포트 > 웹문서 TOP 30 + 검색어 TOP 30 캡처/목록을 제공**한다. (구글 서치콘솔 / googleapis 스크립트는 사용하지 않음 - 유입 1~3%)

- **웹문서 TOP 30**: 페이지별 노출/클릭/CTR → 노출 높고 CTR 낮은 페이지 6-7개 선정
- **검색어 TOP 30**: 그 페이지가 어떤 네이버 검색어로 노출되는지 → 제목 앞에 넣을 키워드

### 현재 대상 (2026-05-29 캡처 기준, 갱신 시 교체)

고노출·저CTR 우선:
- national-pension 계열 (웹문서 /guide/nati… 1,288노출 CTR 2.7%) - 검색어 "국민연금 추납"
- medical-aid-system (/guide/med… 859노출 CTR 2.1%) - 검색어 "기초수급자 의료혜택"
- **senior-travel-support** (588노출 CTR 0.7%, 최우선) - 검색어 "시니어 여행지원금"·"65세 이상 여행지원금" 앞배치
- /guide/care… 279노출 CTR 0.7% (URL 확인 필요)
- 검색어 레벨 고노출·저CTR: "노인 바우처 종류"(52노출 1.9%), "국가유공자 고령수당 자격"(44노출 2.3%), "기초수급자 의료혜택"(55노출 1.8%)

## 페이지 → 파일 매핑

URL 경로 `/guide/{slug}/` → 파일 위치는 카테고리별로 분산되어 있어 grep 필요:

```bash
grep -rl "slug: '{slug}'" /home/tjd618/bumohyetaek/src/data/articles/
```

또는 직접 검색:
```bash
find /home/tjd618/bumohyetaek/src/data/articles -name "{slug}.ts"
```

## 교정 규칙

### seoTitle (60자 이내)

- **검색 키워드 + 차별화 문구 + 수치/년도** 포함
- 시니어 친화: 단순·명료·신뢰감 (시니어/가족 독자 대상)
- 좋음: `행복지킴이통장 압류 가능 여부 - 국세·지방세 예외와 합법적 보호 방법`
- 나쁨: `행복지킴이통장에 대해 알아보겠습니다 | 부모혜택`
- 클릭 유도 패턴 (페이지마다 다양화):
  - **수치형**: "월 ~만원", "최대 N년", "65세 이상"
  - **질문형**: "~ 받을 수 있나요?", "~ 가능한가요?"
  - **팩트형**: "2026년 기준", "공식 발표", "보건복지부 안내"
  - **체크형**: "한눈에 보기", "조건과 신청 방법"

### seoDescription (155자 이내, 핵심은 앞 80자에 - 네이버 모바일 노출 기준)

- 첫 문장: **검색 의도 답변** (결론·핵심 수치)
- 두 번째 문장: **차별화 포인트** (자격 조건, 예외, 비교)
- 세 번째 문장: **신청 방법 또는 행동 유도**
- 좋음: `만 65세 이상 소득 하위 70%면 단독가구 월 최대 349,700원의 기초연금을 받을 수 있습니다. 자격 조건, 신청 절차, 자주 묻는 질문을 한눈에 정리했습니다. 주민센터·복지로에서 신청 가능합니다.`
- 나쁨: `기초연금 신청 방법과 수령 조건에 대해 정리해드립니다.`

### 금지 사항

- 본문과 다른 수치·사실 작성 금지 (스니펫 거짓 표기 위반)
- **낚시성 과장** 금지 ("충격", "이것만 알면", "모르면 손해")
- "정리합니다", "알아보겠습니다" 같은 AI 패턴 금지
- 시니어 독자 대상이라 어려운 용어/외래어 남발 금지
- em dash(—) 금지, 하이픈(-) 사용
- 브랜드명("부모혜택") description에 중복 삽입 금지

## 작업 순서

### 1) 대상 페이지 선정 (네이버 캡처)
- 사용자가 제공한 **웹문서 TOP 30**에서 노출 높고 CTR 낮은 페이지 6-7개 선정
- **검색어 TOP 30**에서 각 페이지가 노출되는 실제 네이버 검색어 1-2개 확인 → 새 seoTitle 앞부분에 그대로 삽입 (네이버는 검색어 일치도를 크게 봄)

### 2) 대상 파일 위치 찾기
```bash
grep -rl "slug: 'TARGET_SLUG'" /home/tjd618/bumohyetaek/src/data/articles/
```

### 3) 현재 메타 확인
```bash
grep -E "seoTitle|seoDescription" /home/tjd618/bumohyetaek/src/data/articles/{category}/{slug}.ts
```

### 4) Edit 도구로 seoTitle/seoDescription 교체

**한 페이지당 Edit 2회**:
- `seoTitle: '...'` 교체
- `seoDescription: '...'` 교체

### 5) 검증

```
□ seoTitle 60자 이내
□ seoDescription 155자 이내
□ "충격", "이것만", "모르면 손해" 같은 낚시 금지어 없음
□ "정리합니다", "알아보겠습니다" AI 패턴 없음
□ em dash(—) 없음
□ 본문 첫 부분(summary, heroDescription)과 사실 모순 없음
```

### 6) 빌드 확인 (필수)

```bash
cd /home/tjd618/bumohyetaek && npm run build
```

타입 에러나 빌드 실패 시 즉시 수정. **빌드 통과 시까지 작업 종료 금지**.

### 7) 배포 분담

**Claude는 빌드까지만**. rsync/배포는 사용자가 직접.

## 결과 요약 형식

```
## 부모혜택 메타 최적화 결과 ({YYYY-MM-DD})

| slug | 이전 CTR | 선정 이유 | 주요 변경 |
|------|---------|----------|----------|
| seizure-protected-account | 0.87% | 노출 1,263 / 평균 5.7위 | 결론 첫 문장 배치, 예외 케이스 강조 |
| home-visiting-care | 0.30% | 노출 336 / 평균 9.2위 | 자격 조건 + 비용 수치 추가 |

**진행 현황: 완료 N페이지**
```

## 진행 현황 기록

`/home/tjd618/bumohyetaek/meta-optimize-log.md`에 누적 기록 (없으면 생성):

```
## 2026-04-30 (1차)
- seizure-protected-account: CTR 0.87% → (재측정 5/7 예정)
- home-visiting-care: CTR 0.30% → (재측정 5/7 예정)
```

## 재측정·쿨다운 규칙

- 메타 변경 후 **최소 4주**가 지나야 같은 페이지를 재변경한다 (쿨다운 룰: 동일 페이지 4주 텀, 한 달 내 3회 금지). 네이버 재색인·CTR 반영에도 2~4주 걸림.
- 변경 전 `git blame`/`git log`로 해당 줄 마지막 변경일을 확인해 4주 쿨다운 준수.
- 4주 후 개선 없으면 재교정 (다른 네이버 검색어 타겟, 다른 유도 패턴)

## 금지

- 본문 콘텐츠 변경 금지 (이 스킬은 **메타 전용**)
- `summary`, `heroDescription`, `keyPoints`, `sections`, `faq` 등 본문 필드 수정 금지
- `title` 필드 (h1용) 변경 금지 - 시니어 친화 짧은 형태로 유지
- JSON-LD 직접 수정 금지 (`src/lib/jsonld.ts` 빌더가 자동 처리)
- 내부 링크 문법 `[[slug|텍스트]]` 위반 금지

## 완료 후 로그 기록

스킬 실행 완료 시 `skill-log.json`에 기록:

```bash
python3 -c "import json,datetime; logs=json.load(open('/home/tjd618/skill-log.json')); now=datetime.datetime.now(); logs.insert(0,{'date':now.strftime('%Y-%m-%d'),'time':now.strftime('%H:%M'),'project':'bumohyetaek','skill':'bumo-meta-optimize'}); open('/home/tjd618/skill-log.json','w').write(json.dumps(logs,ensure_ascii=False,indent=2))"
```

$ARGUMENTS
