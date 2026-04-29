# 부모혜택 정책 수치 최신화

## 목적

부모혜택 사이트의 정책 수치(기초연금, 국민연금, 건강보험료, 장기요양 한도, 바우처 등)를 정기적으로 점검해 항상 최신 값으로 유지. YMYL 사이트의 정확성 = 신뢰도 = 애드센스/SEO 직결.

## 마스터 데이터 파일

`/home/tjd618/bumohyetaek/policy-data-points.md` (변동 가능 정책 수치 데이터베이스, 약 50개 항목)

각 항목 구조:
- 현재 값
- 공식 출처 URL
- 마지막 확인일
- 변동 주기 (연 1회 / 분기 / 수시 / 법 개정 시 등)
- 검색 패턴 (영향 글 자동 식별용)

## 실행 원칙

- 사용자 명시 없으면 **5~7개 항목** 점검
- **마지막 확인일 오래된 순** 정렬 후 픽업
- **변동 주기 도래한 항목 우선** (예: 매년 1월 항목은 1~2월에 우선)
- 공식 출처는 부모 Claude가 **직접 WebFetch**로 검증
- 변경 발견 시 **사용자 승인 후** 일괄 수정
- 첫 가동 시 마스터 리스트의 "알려진 inconsistency" 우선 정정

## 가동 절차

### Step 0: 사전 동기화 (자동)

마스터 리스트의 영향 글 매핑을 최신화:

```bash
# 마스터 리스트의 각 검색 패턴을 130편에 grep
# 매칭되는 글 slug 목록을 동적으로 생성
# 마스터 리스트에 등록 안 된 신규 글이 정책 수치 포함 시 사용자에게 보고
```

특히 `/bumo-content`로 작성된 신규 글이 마스터 리스트에 누락됐는지 확인. 누락분 발견 시 사용자에게 등록 여부 묻기.

### Step 1: 점검 항목 선정

```
1. policy-data-points.md 읽기
2. 모든 항목의 "마지막 확인일" 추출
3. 오래된 순으로 정렬
4. 변동 주기 도래한 항목(예: 1~2월의 연 1회 항목) 우선
5. 상위 5~7개 픽업 → 사용자에게 알림
```

### Step 2: 공식 출처 WebFetch 검증

각 항목에 대해:
1. `공식 출처` URL을 WebFetch
2. 페이지에서 현재 값 추출 시도
3. 추출 성공: 마스터 값과 비교
4. 추출 실패 (WAF·동적 페이지): 사용자에게 수동 확인 요청

### Step 3: 변경 발견 시 영향 글 식별

값이 변경된 항목에 대해:
1. `검색 패턴`을 130편에 grep
2. 매칭된 글 slug 목록 추출
3. 각 글의 어느 필드(summary/keyPoints/sections/seoDescription)에 매칭되는지 표시

### Step 4: 사용자 보고 + 승인 대기

다음 형식으로 보고:

```
## 변경 발견 항목

### 1. 기초연금 단독 최대 수령액
- 옛 값: 349,700원
- 새 값: 367,180원 (보건복지부 공식)
- 영향 글: 4편
  - basic-pension-application.ts (sections, summary)
  - basic-pension-reduction.ts (sections)
  - veterans-senior-benefit.ts (sections)
  - support-obligation-standard.ts (keyPoints)

### 2. ...

이대로 일괄 수정할까요?
```

### Step 5: 일괄 수정 (승인 후)

각 영향 글에 대해:
1. 매칭된 모든 위치 수정 (sections·summary·keyPoints·seoDescription)
2. `cautionNote`에 시점 표현이 있다면 업데이트 ("2026년 X월 기준" 등)
3. `effectiveDate` 해당 시 업데이트
4. `updatedAt` → 오늘 날짜로 변경
5. 영향 범위 누락 방지: 글 전체 재grep해 옛 값이 남아있는지 확인

### Step 6: 마스터 리스트 업데이트

`policy-data-points.md`:
- 변경된 항목의 `현재 값` 새 값으로 변경
- 모든 점검한 항목의 `마지막 확인` → 오늘 날짜
- "알려진 inconsistency" 섹션에서 정정 완료된 항목 제거
- 변경 이력 섹션에 추가:

```markdown
### YYYY-MM-DD
- 점검: [항목 N개]
- 변경: [변경된 항목들 + 수정한 글 수]
- inconsistency 정정: [완료 항목]
```

## /bumo-content 연동 (신규 글 자동 등록)

`/bumo-content` 스킬에서 새 글 작성 후 다음 절차:

1. 새 글의 `sections`, `summary`, `keyPoints`, `seoDescription`에서 정책 수치 추출
2. `policy-data-points.md` 모든 항목의 `검색 패턴`과 매칭 시도
3. 매칭 성공: 해당 항목의 "영향 글" 목록에 새 slug 추가
4. 매칭 실패하지만 정책 수치 같은 패턴 (예: "X만 원", "X%") 발견: 신규 항목 후보로 사용자에게 보고

이 단계는 `/bumo-content` 스킬 파일에 절차로 명시되어 있어야 함.

## 결과 보고 형식

```
## /refresh 가동 결과 (YYYY-MM-DD)

### 점검 항목 (N개)
- [항목 1] (변동 주기: X)
- [항목 2] ...

### 변경 발견 (N건)
- [항목명]: [옛 값] → [새 값]
  - 영향 글: N편
  - 수정 완료

### 변경 없음 (N건)
- [항목 1], [항목 2], ...

### 마스터 리스트 업데이트
- 마지막 확인일 갱신: N개
- 신규 등록: N개 (있을 시)
- inconsistency 정정 완료: N개

### 다음 가동 예정
- YYYY-MM-DD (토요일)
```

## 주의사항

- **공식 출처 WAF 차단**: thyroid.or.kr, kdca.go.kr 등 일부 사이트는 자동 접근이 차단되므로 수동 확인 필요
- **수치 형식 일관성**: 글마다 "349,700원" / "약 35만 원" / "월 35만원" 등 표기 다름 → 검색 패턴은 여러 형태 포함
- **문맥 검증 필수**: 같은 숫자가 다른 의미일 수 있음 (예: "300만원"이 한도일 수도, 예시일 수도). 수정 전 문맥 확인
- **slug 변경 절대 금지**
- 글 수정 후 `npm run build`는 사용자 요청 시에만 실행

## 첫 가동 (5/8 예정)

audit 1차 패스 완료 직후 첫 가동:
- 마스터 리스트의 "알려진 inconsistency" 7개 우선 정정 (장기요양 한도 5개 + 문화누리 + 사회서비스형)
- 그 다음 일반 점검 5개 항목

## 정기 가동

- **매주 토요일**: 5~7개 항목 회전 점검
- **매년 1월 첫째 주**: 모든 "연 1회" 항목 일제 점검 (정책 변경 집중 시기)
- **매년 7월**: 국민연금 A값 점검 (7월 변경)
- **매년 8월**: 기준중위소득 점검 (8월 발표)

## 완료 후 로그 기록

```bash
python3 -c "import json,datetime; logs=json.load(open('/home/tjd618/skill-log.json')); now=datetime.datetime.now(); logs.insert(0,{'date':now.strftime('%Y-%m-%d'),'time':now.strftime('%H:%M'),'project':'bumohyetaek','skill':'refresh'}); open('/home/tjd618/skill-log.json','w').write(json.dumps(logs,ensure_ascii=False,indent=2))"
```
