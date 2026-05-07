---
description: bumo 메타 마무리 어휘 분산 (애드센스 신청 직전 5/22~5/29 8일 캠페인, 끝나면 자동 삭제)
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# bumo 메타 마무리 어휘 분산

bumohyetaek 146편의 `seoDescription`·`summary` 마무리가 단 2개 어휘("정리했습니다" 60% / "안내합니다" 22%)에 81% 집중되어 있어, jptcalc과 동일 패턴으로 잡힐 위험이 큼. 6/2 애드센스 신청 직전에 분산 처리.

## 변경 범위 제한 (절대 위반 금지)

- ✅ `seoDescription` 마지막 어휘 분산 (146편 중 40편만 변경)
- ✅ `summary` 마지막 어휘도 함께 분산 (같은 글 처리 시)
- ❌ `seoTitle` 변경 금지 (영향 범위 너무 큼, 그대로 둔다)
- ❌ `updatedAt`/`effectiveDate`/`reviewStatus` 변경 금지 (sitemap lastmod 변동 회피)
- ❌ 본문 `sections` 변경 금지

## 캠페인 일정

- **시작**: 2026-05-22 (jptcalc 신청 다음날)
- **종료**: 2026-05-29 (8일)
- **안정화 기간**: 5/30~6/1 (변경 X, 구글봇 재크롤 시간 확보)
- **bumo 신청**: 2026-06-02

## 안전 룰 (절대 위반 금지)

| # | 룰 | 이유 |
|---|---|---|
| 1 | 하루 5편 초과 금지 (사이트의 3.4%) | 일상 운영 변동률 유지 |
| 2 | 같은 카테고리 연속 2일 금지 | 카테고리 단위 색인 흔들림 방지 |
| 3 | 같은 날 빌드/배포 2회 이상 금지 | 변동성 신호 누적 방지 |
| 4 | `updatedAt` 미변경 | sitemap lastmod 안정 유지 |
| 5 | `seoTitle` 미변경 | 144편 동일 구조라 손대면 영향 너무 큼 |

## 분산 어휘 풀 (8개)

시니어/가족 톤 (`content.md` 룰 준수). 단정형 4개 + 명령형 4개로 균형.

| # | 어휘 | 목표 사용 | 적합 글 유형 |
|---|------|----------|-------------|
| 1 | 핵심만 짚었습니다 | 6편 | 요약/정리형 글 |
| 2 | 한눈에 비교했습니다 | 5편 | comparison 템플릿 |
| 3 | 상황별로 살펴봤습니다 | 5편 | 시나리오·예시 위주 |
| 4 | 공식 기준으로 검증했습니다 | 5편 | policy 템플릿 |
| 5 | 신청 전 확인하세요 | 5편 | checklist/policy 글 |
| 6 | 미리 준비해 두세요 | 5편 | 사전 준비형 글 |
| 7 | 가족과 함께 챙기세요 | 5편 | family 타깃 글 |
| 8 | 부모님 상황별로 비교해 보세요 | 4편 | senior+family 양쪽 |
| | **합계** | **40편** | |

**분산 후 예상 비율** (146편 기준):
- "정리했습니다": 60% → 36% (87편 → 52편)
- "안내합니다": 22% → 18% (32편 → 27편)
- 신규 어휘 풀 합계: 0% → 27%
- 두 단조 어휘 합산: 81% → 54% (27%p 감소)

## 일자별 분량 + 카테고리 순환

| 날짜 | 카테고리 | 편수 | 누적 |
|------|---------|------|------|
| 5/22 | pension-welfare | 5 | 5 |
| 5/23 | health-care | 5 | 10 |
| 5/24 | finance-safety | 5 | 15 |
| 5/25 | pension-welfare | 5 | 20 |
| 5/26 | health-care | 5 | 25 |
| 5/27 | finance-safety | 5 | 30 |
| 5/28 | pension-welfare | 5 | 35 |
| 5/29 | health-care 3 + finance-safety 2 | 5 | **40** |

## 작업 순서 (매일 실행 흐름)

### 1) 오늘 작업 카테고리 확인

위 일정표에서 오늘 날짜의 카테고리 확인.

### 2) 대상 5편 자동 선정

날짜를 자동 감지해 오늘 카테고리와 할당량을 결정한다. **`{TODAY_CAT}` 수동 치환 불필요.**

```bash
python3 << 'EOF'
import os, re, glob, datetime

base = '/home/tjd618/bumohyetaek/src/data/articles'

# 날짜 -> 카테고리 + 할당량 자동 매핑
today = datetime.date.today().strftime('%m-%d')
schedule = {
    '05-22': {'pension-welfare': 5},
    '05-23': {'health-care': 5},
    '05-24': {'finance-safety': 5},
    '05-25': {'pension-welfare': 5},
    '05-26': {'health-care': 5},
    '05-27': {'finance-safety': 5},
    '05-28': {'pension-welfare': 5},
    '05-29': {'health-care': 3, 'finance-safety': 2},  # 마지막 날 2개 카테고리
}
quota = schedule.get(today)
if not quota:
    print(f"오늘({today})은 캠페인 기간 외 (5/22~5/29만 실행).")
    exit()

print(f"오늘({today}) 카테고리: {list(quota.keys())}")

# 이미 처리한 글 (완료 목록에서 감지)
done_path = '/home/tjd618/bumohyetaek/.claude/commands/bumo-meta-diversify.md'
done_text = open(done_path).read()
done_section = done_text.split('## 변경 완료 목록')[1] if '## 변경 완료 목록' in done_text else ''

all_todo = []
for cat, limit in quota.items():
    files = sorted(glob.glob(f'{base}/{cat}/*.ts'))
    files = [f for f in files if not f.endswith('index.ts')]

    candidates = []
    for f in files:
        fname = os.path.basename(f)
        if f'- {fname} (' in done_section: continue  # 엄밀한 감지 (오탐 방지)
        c = open(f).read()
        desc_m = re.search(r"seoDescription:\s*['\"]([^'\"]*)['\"]", c)
        if not desc_m: continue
        desc = desc_m.group(1)
        tail = desc[-30:]
        if '정리했습니다' in tail: priority = 2  # 1순위
        elif '안내합니다' in tail: priority = 1  # 2순위
        else: continue
        candidates.append((priority, f, desc, cat))

    candidates.sort(key=lambda x: -x[0])
    all_todo.extend(candidates[:limit])

print(f"\n오늘 대상 {len(all_todo)}편:")
for p, f, d, cat in all_todo:
    print(f"  [{cat}] {os.path.basename(f)}")
    print(f"    마무리: ...{d[-25:]}")
EOF
```

### 3) 각 글에 적합한 어휘 매칭

대상 5편의 `template`, `targetUser`, `summary` 내용을 본 후 분산 어휘 풀 8개 중 매칭. 같은 어휘가 5편에 연속 들어가지 않게 분산.

매칭 규칙:
- `template: 'policy'` → 4번(공식 기준 검증) 또는 5번(신청 전 확인)
- `template: 'checklist'` → 5번 또는 6번(미리 준비)
- `template: 'comparison'` → 2번(한눈에 비교)
- `template: 'standard'` + 시나리오 위주 → 3번(상황별 살펴봤)
- `targetUser: 'family'` → 7번(가족과 함께) 또는 8번(부모님 상황별)
- 일반/요약형 → 1번(핵심만 짚었)

### 4) Edit 변경 (파일당 1~2회)

**Edit 룰**:
- old_string에 마지막 어절 + `,\n  {다음 필드}:` 까지 포함해 unique 보장
- 본문 `sections` 안에 같은 어휘가 있을 수 있으므로 마지막 어절만 단독으로 잡으면 안 됨
- `,` 구분자까지 정확히 포함

**단일행 예시** (basic-pension-application.ts):
```
파일 내:  seoDescription: '...주민센터·복지로 신청 방법을 정리했습니다.',

old_string: "주민센터·복지로 신청 방법을 정리했습니다.',\n  category:"
new_string: "주민센터·복지로 신청 방법을 신청 전 확인하세요.',\n  category:"
```

**멀티행 예시** (funeral-service-contract.ts, 파일의 29편 해당):
```
파일 내:  seoDescription:
              '...분쟁 발생 시 대처법도 안내합니다.',

old_string: "분쟁 발생 시 대처법도 안내합니다.',\n  category:"
new_string: "분쟁 발생 시 대처법도 핵심만 짚었습니다.',\n  category:"
```

단일행·멀티행 모두 **마지막 어절 + `,\n  {다음 필드}:` 패턴으로 통일**하면 구조 구분 없이 Edit 가능.

`summary` 필드도 `정리했습니다`/`안내합니다`로 끝나면 다른 어휘로 변경 (단, `seoDescription`과 동일 어휘는 피함 - 같은 글 안에서 두 필드가 같은 어휘로 끝나면 어색).

### 5) 변경 완료 목록 갱신

스킬 파일 하단 `## 변경 완료 목록`에 추가:
```
- {파일명} (YYYY-MM-DD, 카테고리, 사용 어휘)
```

### 6) 빌드 (하루 1회만)

```bash
cd /home/tjd618/bumohyetaek && npm run build
```

빌드 성공 시 사용자에게 "빌드 완료. 배포는 직접 진행해 주세요." 안내. **rsync/wrangler 직접 실행 X**.

### 7) 검증

```bash
python3 << 'EOF'
import re, glob, collections
base = '/home/tjd618/bumohyetaek/src/data/articles'
files = []
for c in ['pension-welfare', 'health-care', 'finance-safety']:
    files += sorted(glob.glob(f'{base}/{c}/*.ts'))
files = [f for f in files if not f.endswith('index.ts')]

new_kws = ['핵심만 짚었습니다', '한눈에 비교했습니다', '상황별로 살펴봤습니다',
           '공식 기준으로 검증했습니다', '신청 전 확인하세요', '미리 준비해 두세요',
           '가족과 함께 챙기세요', '부모님 상황별로 비교해']

ed = collections.Counter()
for f in files:
    c = open(f).read()
    m = re.search(r"seoDescription:\s*\n?\s*['\"]([^'\"]*)", c)
    if not m: continue
    tail = m.group(1)[-35:]
    matched = False
    for kw in new_kws:
        if kw in tail: ed[kw] += 1; matched = True; break
    if matched: continue
    if '정리했습니다' in tail: ed['정리했습니다'] += 1
    elif '안내합니다' in tail: ed['안내합니다'] += 1
    else: ed['기타'] += 1

total = sum(ed.values())
print(f"=== seoDescription 마무리 분포 (전체 {total}편) ===")
for k, v in ed.most_common():
    pct = 100*v/total
    bar = '#' * int(pct/2)
    print(f"  {k:25s} {v:3d}편 ({pct:5.1f}%) {bar}")

monotone = ed.get('정리했습니다', 0) + ed.get('안내합니다', 0)
new_total = sum(ed.get(k, 0) for k in new_kws)
print(f"\n단조 어휘 합산: {monotone}편 ({100*monotone/total:.1f}%) [목표 ≤55%]")
print(f"신규 어휘 풀: {new_total}편 ({100*new_total/total:.1f}%) [목표 ≥25%]")
EOF
```

## 결과 요약 형식

```
## bumo-meta-diversify 결과 (YYYY-MM-DD, N일차)

| # | 파일 | 변경 전 | 변경 후 |
|---|------|--------|--------|
| 1 | basic-pension-application.ts | 정리했습니다 | 신청 전 확인하세요 |
| 2 | ... | | |

**오늘 변경**: 5편 (사이트의 3.4%)
**누적**: NN편 / 40편 목표
**남은 일자**: M일

### 어휘 분산 현황 (전체 146편)
- "정리했습니다": NN편 (NN%, 목표 ≤36%)
- "안내합니다": NN편 (NN%, 목표 ≤18%)
- 신규 어휘 풀 합계: NN편 (NN%, 목표 ≥27%)

### 다음 작업
- 날짜: YYYY-MM-DD (D-day)
- 카테고리: {카테고리}
- 빌드: 완료 (배포 대기)
```

## 모든 작업 완료 시 (40편 달성, 보통 5/29)

1. 사용자에게 보고:
   ```
   bumo 메타 분산 완료 (40편 / 목표 달성)
   - "정리했습니다" 60% → NN%
   - 신규 어휘 풀 분산 NN%
   
   5/30~6/1 안정화 기간 진입 (변경 X). 6/2 /bumo-adsense-check 후 신청.
   이 스킬(/bumo-meta-diversify)을 삭제합니다.
   ```

2. 진행 로그 백업:
   ```bash
   cp /home/tjd618/bumohyetaek/.claude/commands/bumo-meta-diversify.md \
      /home/tjd618/bumohyetaek/.claude/meta-diversify-archive-2026-05-29.md
   ```

3. 스킬 파일 삭제:
   ```bash
   rm /home/tjd618/bumohyetaek/.claude/commands/bumo-meta-diversify.md
   rm /home/tjd618/.claude/commands/bumo-meta-diversify.md
   ```

## 완료 후 로그 기록

매일 작업 후 실행:
```bash
python3 -c "import json,datetime; logs=json.load(open('/home/tjd618/skill-log.json')); now=datetime.datetime.now(); logs.insert(0,{'date':now.strftime('%Y-%m-%d'),'time':now.strftime('%H:%M'),'project':'bumohyetaek','skill':'bumo-meta-diversify'}); open('/home/tjd618/skill-log.json','w').write(json.dumps(logs,ensure_ascii=False,indent=2))"
```

---

## 변경 완료 목록

작업 완료 시 `- {파일명} (YYYY-MM-DD, {카테고리}, {사용 어휘})` 형식으로 누적 기록.

(아직 시작 전 - 5/22부터 추가)

---

$ARGUMENTS
