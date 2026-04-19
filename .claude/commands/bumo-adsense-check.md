---
description: bumohyetaek 애드센스 신청 전 최종 점검 (2026-05-21 1회 실행 전용)
---

# 부모혜택 애드센스 신청 최종 점검 스킬

5/22 애드센스 신청 하루 전 **2026-05-21에 1회 실행**하는 사전 점검 스킬. 콘텐츠 생성·변경 없음. 검수만 수행하고 지적사항 발생 시 즉시 수정.

**신청 목표**: bumohyetaek.kr 첫 애드센스 신청 (2026-05-22)
**리스크**: YMYL(연금·의료·금융) + 시니어 대상 + 공식 수치 민감도 + 제이퍼 크로스 사이트 연동

## 기본 동작

- **1회 실행으로 전수 점검** (페이지 단위 아닌 사이트 전체)
- 지적사항은 **즉시 수정** (스킬이 직접 Edit 실행)
- 수정 불가한 건은 리포트에 **요주의 플래그**로 기록
- 판단 필요한 건은 사용자에게 질문 후 결정

## 점검 항목 (순서대로 실행)

### A. 사이트 구조

**A-1. sitemap.xml 자동 생성 확인**
- bumohyetaek는 `src/app/sitemap.ts`가 런타임에 생성. 빌드 후 `out/sitemap.xml` 확인
```bash
cd /home/tjd618/bumohyetaek && npm run build 2>&1 | tail -3
ls -la /home/tjd618/bumohyetaek/out/sitemap.xml
head -20 /home/tjd618/bumohyetaek/out/sitemap.xml
grep -c '<url>' /home/tjd618/bumohyetaek/out/sitemap.xml
```
- URL 수가 예상(127 가이드 + 3 카테고리 + 5 허브 + 정책 페이지 = 약 140+) 이상인지
- 10개 샘플링해 실제 파일 존재 확인

**A-2. robots.txt 자동 생성 확인**
```bash
cat /home/tjd618/bumohyetaek/out/robots.txt
```
- `Disallow: /print/` 포함 확인
- `Sitemap:` 라인 존재
- 전체 차단(`Disallow: /`) 없음

**A-3. ads.txt**
- 신청 전 시점 **없거나 빈 파일**
- 승인 후 추가 예정

**A-4. 404/broken 내부 링크 점검**
```bash
# ContentItem 전수에서 [[slug|text]] 패턴 추출 후 실존 확인
cd /home/tjd618/bumohyetaek
grep -rhoE '\[\[[a-z0-9-]+\|' src/data/articles/ | sed 's/\[\[//; s/|$//' | sort -u > /tmp/ref-slugs.txt
ls src/data/articles/*/*.ts | xargs -I {} basename {} .ts | grep -v index | sort -u > /tmp/exist-slugs.txt
comm -23 /tmp/ref-slugs.txt /tmp/exist-slugs.txt  # 참조됐으나 존재 안 하는 slug
```
- 결과 0이어야 함. 발견 시 해당 링크 제거 또는 교정

**A-5. relatedSlugs / featuredSlugs 실존**
```bash
# hubDetails.ts의 featuredSlugs 실존 확인
grep -A 20 "featuredSlugs:" src/data/hubDetails.ts | grep -oE "'[a-z0-9-]+'" | sort -u > /tmp/featured.txt
comm -23 /tmp/featured.txt /tmp/exist-slugs.txt
```

### B. 콘텐츠 품질

**B-1. thin page 전수 확인 (10,000자 미만)**
```bash
for f in /home/tjd618/bumohyetaek/out/guide/*/index.html; do
  chars=$(sed 's/<[^>]*>//g' "$f" | tr -s ' \n' | wc -c)
  if [ "$chars" -lt 10000 ]; then
    slug=$(basename $(dirname "$f"))
    echo "THIN: $slug ($chars자)"
  fi
done
```
- 결과 0이 이상적. 발견 시 `/bumo-bolster`로 즉시 보강 또는 PASS/HOLD 판정

**B-2. 카테고리·허브 인덱스 본문**
```bash
for f in /home/tjd618/bumohyetaek/out/category/*/index.html /home/tjd618/bumohyetaek/out/hub/*/index.html; do
  chars=$(sed 's/<[^>]*>//g' "$f" | tr -s ' \n' | wc -c)
  if [ "$chars" -lt 5000 ]; then
    path=$(echo "$f" | sed 's|.*/out/||; s|/index.html||')
    echo "THIN-INDEX: $path ($chars자)"
  fi
done
```
- 결과 0이어야 함. 발견 시 `/bumo-category-enhance` 미완료 페이지 확인

**B-3. AI 자동생성 의심 패턴**
```bash
cd /home/tjd618/bumohyetaek
grep -rEo '정리합니다|알아보겠습니다|완벽 가이드|한눈에 정리|안녕하세요' src/data/articles/ | wc -l
```
- 50회 이상이면 `/rewrite` 스타일 재적용 대상 식별
- em dash(—) 사용 여부:
```bash
grep -rl '—' src/data/articles/ src/data/hubDetails.ts src/data/categories.ts
```
- 발견 시 하이픈으로 즉시 교체

**B-4. 중복/거의 동일 글 탐지**
```bash
# title 중복
grep -rhE "title: '" src/data/articles/ | sort | uniq -d
# seoTitle 중복
grep -rhE "seoTitle: '" src/data/articles/ | sort | uniq -d
```
- 중복 0이어야 함

**B-5. YMYL 단정 표현 (health-care 전수)**
```bash
grep -rn "반드시\|100%\|무조건\|확실히 낫" src/data/articles/health-care/
```
- 발견 시 완화 표현으로 교체 ("일반적으로", "조건 충족 시")

**B-6. 개인정보 입력 유도 패턴**
```bash
grep -rn "주민등록번호를 입력\|계좌번호를 입력" src/data/articles/
```
- 발견 시 수정 (공식 기관 통해 신청 안내로 변경)

### C. SEO/구조화 데이터

**C-1. JSON-LD 문법 오류**
```bash
for f in /home/tjd618/bumohyetaek/out/guide/*/index.html; do
  awk '/<script type="application\/ld\+json">/,/<\/script>/' "$f" \
    | sed 's/<script[^>]*>//; s/<\/script>//' \
    | node -e 'let d="";process.stdin.on("data",c=>d+=c);process.stdin.on("end",()=>{try{JSON.parse(d)}catch(e){console.error("JSONLD-ERR: '$f': "+e.message)}})' 2>/dev/null
done
```
- 오류 파일 즉시 수정 (빌더 로직 점검: `/home/tjd618/bumohyetaek/src/lib/jsonld.ts`)

**C-2. FAQPage JSON-LD ↔ 본문 일치 (샘플 10개)**
- faq 있는 글 10개 sampling → FAQPage의 answer와 본문 faq 비교
- 불일치 발견 시 즉시 수정

**C-3. canonical / trailingSlash 일치**
```bash
for f in /home/tjd618/bumohyetaek/out/guide/*/index.html; do
  canon=$(grep -oE 'rel="canonical" href="[^"]+"' "$f" | sed 's/.*href="//; s/"//')
  # trailingSlash:true이므로 canonical은 /로 끝나야 함
  if [[ ! "$canon" =~ /$ ]]; then
    echo "NO-TRAILING-SLASH: $f → $canon"
  fi
done
```

**C-4. og:image 기본 이미지 존재**
```bash
ls /home/tjd618/bumohyetaek/public/og-default.png
```

### D. 제이퍼 크로스 사이트 연동

**D-1. relatedCalculator URL 실존 (부모 Claude 직접 검증)**
```bash
cd /home/tjd618/bumohyetaek
grep -rhE "url: 'https://www.jptcalc.kr/[^']+'" src/data/articles/ \
  | sort -u \
  | sed "s/.*url: '//; s/'.*//" > /tmp/calc-urls.txt
```
- 각 URL을 `/home/tjd618/jptcalc/` 파일시스템으로 실존 확인:
```bash
while read url; do
  path=$(echo "$url" | sed 's|https://www.jptcalc.kr|/home/tjd618/jptcalc|; s|/$|/index.html|')
  [ -f "$path" ] || echo "MISSING-CALC: $url"
done < /tmp/calc-urls.txt
```
- **가장 큰 리스크**: 임의 생성 URL이 있으면 크로스 사이트 신뢰 훼손
- 발견 시 해당 글의 `relatedCalculator` 필드 제거 또는 올바른 URL로 수정

**D-2. UTM 캠페인 동작 확인**
- `crossSiteTrackingKey` 있는 글의 CTA 렌더링 시 UTM 파라미터 자동 추가되는지 (샘플 1개 확인)
- 브라우저에서 실제 클릭 테스트는 신청 후 진행

### E. 정책 준수

**E-1. 필수 페이지 존재**
```bash
ls /home/tjd618/bumohyetaek/out/{about,contact,privacy-policy,editorial-policy,disclaimer,source-policy,update-policy}/index.html
```
- 모두 존재해야 함

**E-2. 금지 콘텐츠 키워드**
```bash
cd /home/tjd618/bumohyetaek
grep -rEil '도박|베팅|성인용품|의사 처방|무허가|불법 복제' src/data/articles/
```
- 발견 시 문맥 확인 → 합법 맥락이면 통과

**E-3. 의료 면책 (health-care 필수)**
```bash
# health-care 43편 전수에서 warning 또는 cautionNote 유무
for f in src/data/articles/health-care/*.ts; do
  [ "$(basename $f)" == "index.ts" ] && continue
  if ! grep -qE "type: 'warning'|cautionNote:" "$f"; then
    echo "NO-WARNING: $f"
  fi
done
```
- health-care 전수에 warning 섹션 또는 cautionNote 하나 이상 필수

**E-4. 광고 코드 잔재**
```bash
grep -rl 'adsbygoogle\|pagead2.googlesyndication.com\|ca-pub-' /home/tjd618/bumohyetaek/out/
```
- 신청 전에는 광고 컴포넌트 비활성 상태(`NEXT_PUBLIC_ADSENSE_ENABLED=false`)에서 빌드되었는지 확인
- 승인 후 활성화 예정

### F. 접근성 / 기술

**F-1. viewport meta 태그 존재**
```bash
grep -rL 'name="viewport"' /home/tjd618/bumohyetaek/out/guide/
```
- 누락 0이어야 함 (Next.js 기본 설정으로 자동 포함)

**F-2. alt 텍스트 누락**
```bash
grep -rn "<img" /home/tjd618/bumohyetaek/out/ | grep -v "alt="
```
- 발견 시 alt 속성 추가

**F-3. `<html lang="ko">` 확인**
```bash
grep -r '<html lang=' /home/tjd618/bumohyetaek/out/ | head -3
```

### G. 감사 진행도 확인

**G-1. verified-articles.md 대조**
```bash
cd /home/tjd618/bumohyetaek
wc -l verified-articles.md
grep -c "^- " verified-articles.md
```
- 127편 전수 감사 완료 확인 (5/5 목표)
- 미완료 건 있으면 신청 홀드 고려

## 실행 결과 리포트 형식

`/home/tjd618/bumohyetaek/adsense-check-{YYYY-MM-DD}.md`에 저장:

```markdown
# 부모혜택 애드센스 신청 점검 리포트 (2026-05-21)

## ✅ 통과 항목
- sitemap.xml 유효, URL N개 실존 확인
- robots.txt 적절 (/print/ 제외)
- thin guide 0건 (10,000자+ 전수 충족)
- thin index 0건 (5,000자+ 전수 충족)
- em dash 0건
- 중복 title 0건
- relatedCalculator URL 전수 실존
- JSON-LD 문법 오류 0건
- 필수 페이지 전수 존재
- health-care 의료 면책 전수 존재
- verified-articles.md 127/127 완료
- ...

## ⚠️ 수정 완료
- src/data/articles/.../xxx.ts: em dash(—) 2건 → 하이픈 교체
- src/data/articles/.../yyy.ts: FAQ JSON-LD 불일치 → 본문 기준 갱신

## ❌ 요주의 (신청 전 결정 필요)
- xxx.ts: 본문 9,200자 (목표 10,000자 미달) → /bumo-bolster 재실행 필요
- 광고 컴포넌트 환경변수 상태 확인 필요 (현재 enabled=false 권장)

## 재신청 권장 여부
[PASS] 또는 [HOLD (x건 선결 필요)]

## 신청 체크리스트 (제출 전 최종 확인)
- [ ] 구글 서치콘솔 소유권 확인 완료
- [ ] GA4 측정 ID 프로덕션 연결
- [ ] Analytics 샘플 트래픽 발생 (권장 2-4주 축적)
- [ ] 필수 페이지 메뉴·푸터 링크 노출
- [ ] 모바일 렌더링 직접 확인 (1개 글)
- [ ] 제이퍼 크로스 사이트 1회 클릭 테스트
```

## 작업 흐름

1. `npm run build` 선행 (out/ 최신화)
2. A~G 순서대로 전수 실행
3. 자동 수정 가능한 건 Edit 도구로 즉시 처리
   - em dash → 하이픈
   - JSON-LD 불일치 → 본문 기준 갱신
   - trailingSlash 누락 → 수정
4. 판단 필요한 건은 사용자에게 질문
   - thin content 발견 시 /bumo-bolster 추가 실행할지
   - 광고 컴포넌트 활성 상태
   - verified-articles 미완료 시 신청 홀드 여부
5. 최종 리포트 출력 후 [PASS]/[HOLD] 판정
6. [HOLD]면 선결 과제 목록 제시, 해결 후 재실행 권장

## 금지

- 콘텐츠 **신규 생성 금지** (이 스킬은 검수+소규모 수정 전용)
- 사용자 동의 없이 페이지·글 **삭제 금지** (플래그만 올림)
- 신청 자체는 자동 수행하지 않음 (사용자가 Google AdSense 콘솔에서 직접)
- `slug` 변경 금지 (URL·sitemap·feed 전부 깨짐)
- 타입 변경 금지 (콘텐츠 검수 전용)

## 1회 실행 후

- 이 스킬은 **1회 실행 후 자동 삭제하지 않음** (재점검 필요 시 재실행 가능)
- 신청 승인 후 `.claude/commands/bumo-adsense-check.md`는 참고용으로 보관 or 사용자 지시 후 삭제

$ARGUMENTS
