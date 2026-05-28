# 부모혜택 애드센스 신청 점검 리포트 (2026-05-28)

> 신청 목표일: 2026-06-02 (D-5)
> 실행: /bumo-adsense-check (사용자 요청으로 6/1 예정보다 앞당겨 실행)
> 빌드: 성공 (209 페이지 정적 생성)

## 통과 항목

### A. 사이트 구조
- sitemap.xml 유효 - 193 URL
- robots.txt 적절 (`Disallow: /print/`, Sitemap 라인 존재, 전체 차단 없음)
- 깨진 내부 링크 0건 (`[[slug]]` 참조 전수 실존)
- featuredSlugs 전수 실존

### B. 콘텐츠 품질
- thin guide 0건 (10,000자+ 전수 충족, 177편)
- thin 카테고리/허브 인덱스 0건 (5,000자+ 충족)
- AI 자동생성 의심 패턴 39건 (<50 기준, 양호)
- em dash(—) 0건
- 중복 title/seoTitle 0건
- YMYL 강한 단정 표현 0건 (care-facility-comparison "무조건"은 단정 부정 맥락)
- 개인정보 입력 유도 0건

### C. SEO/구조화 데이터
- JSON-LD 954블록 문법 오류 0건
- FAQPage JSON-LD ↔ 본문 일치 (샘플 3편 확인, 빌더 자동 생성)
- canonical trailingSlash 누락 0건
- og-default.png 존재 (1200x630)

### D. 제이퍼 크로스 사이트
- relatedCalculator URL 13개 전수 실존 (jptcalc 파일시스템 대조)

### E. 정책 준수
- 필수 페이지 7개 전수 존재 (about/contact/privacy-policy/editorial-policy/disclaimer/source-policy/update-policy)
- 금지 콘텐츠 키워드 0건
- health-care 의료 면책 누락 0건 (warning/cautionNote 전수 보유)
- 광고 로더 실제 HTML 삽입 0건 (NEXT_PUBLIC_ADSENSE_ENABLED 미설정 = 비활성 빌드, 정상)

### F. 접근성/기술
- viewport meta 누락 0건 (177편 전수)
- img alt 누락 0건
- `<html lang="ko">` 확인

## 수정 완료
- 없음 (전 항목 이미 깨끗. 오늘 직전 세션에서 사실 정정 완료: 내보험찾아줌 명칭·가사간병 기준·지급기한 근거)

## 요주의 (신청 전 결정 필요)

### 1. ads.txt가 publisher ID와 함께 존재
- 현재: `google.com, pub-6112766558731601, DIRECT, f08c47fec0942fa0`
- 스킬 기본 룰은 "신청 전 없거나 빈 파일" 기대
- **판단**: 한 구글 계정으로 3개 사이트(jptcalc/bumo/lovtaro) 순차 신청 중이므로 pub ID는 공유됨. jptcalc가 이미 승인된 계정 ID라면 ads.txt를 미리 둬도 신청에 부정적 영향 없음 (구글은 ads.txt 사전 설정을 오히려 권장). 유효 계정 ID면 그대로 유지 권장.
- **확인 필요**: pub-6112766558731601이 사용자의 유효한 애드센스 계정 ID가 맞는지

### 2. 미감사 6편 (정책 수치 심층 감사 미완)
- nps-retirement-readiness-service, special-occupation-pension-basic-pension, ltci-family-caregiver-benefit, housing-farmland-pension-comparison, pension-income-sequence, severance-midterm-settlement
- 단, 위 6편 모두 이번 전수 자동 점검(thin/중복/em대시/JSON-LD/계산기URL/면책)은 통과
- death-insurance-claim은 이번 세션에서 핵심 사실 검증 완료 (미감사 목록에서 사실상 제외 가능)
- **권고**: 신청 전 /audit 1회로 6편 심층 감사 마무리 (freeze 기간에도 검증은 허용 작업). 5/29~6/1 중 1회면 완료

## 재신청 권장 여부

**[PASS]** - 자동 점검 전 항목 통과. 요주의 2건은 모두 치명적이지 않음.
- ads.txt: 유효 계정 ID면 그대로 유지 (오히려 권장)
- 미감사 6편: 전체 96.6% 감사 완료 + 전수 자동점검 통과. 심층 감사는 권고 사항

## 신청 체크리스트 (제출 전 최종 확인)
- [ ] jptcalc(5/21 신청) 결과 확인 - 통과 시 6/2 진행, 거절/미도착 시 6/9 연기 (분기 룰)
- [ ] 구글 서치콘솔 소유권 확인 완료
- [ ] GA4 측정 ID 프로덕션 연결
- [ ] Analytics 샘플 트래픽 발생 (권장 2-4주 축적)
- [ ] 필수 페이지 메뉴·푸터 링크 노출
- [ ] 모바일 렌더링 직접 확인 (1개 글)
- [ ] 제이퍼 크로스 사이트 1회 클릭 테스트
- [ ] (권고) /audit 1회로 미감사 6편 심층 감사 마무리
- [ ] ads.txt pub ID 유효성 확인 후 유지 결정
