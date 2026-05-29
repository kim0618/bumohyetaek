# 부모혜택 제휴 적합도 감사 (2026-05-29)

전체 가이드 177편(pension-welfare 59 / finance-safety 59 / health-care 59)을 제휴 적합도 기준으로 분류.
제휴망: **링크프라이스(LinkPrice)** 가입 완료. 단 머천트별 개별 승인 필요 - 아래 "머천트 카테고리"는 LinkPrice에서 승인 가능한 머천트를 매칭해야 실제 링크 생성됨.

## 분류 기준

- **A (확정 후보)**: 본문이 생활관리/소비선택형이고 자연스러운 상품 배치 자리 확인됨. 바로 진행 가능.
- **B (조건부)**: 상품은 맞으나 본문에 의료/건보 안내가 섞여 있음. 배치 시 의료 조언과 분리 + 광고 표기 필수, 본문 1차 확인 후 진행.
- **C (보류)**: 정부 제도/연금/복지/세금/법률/순수의료 안내. 상품 부적합 또는 붙이면 신뢰 훼손. 제휴 미적용.
- **D (별도 결정)**: 금융·보험·상조 CPA. LinkPrice 고수익이나 YMYL·신뢰 민감 → 사용자 정책 결정 후 진행.

## 공통 배치 원칙 (전 사이트 YMYL)

1. 제휴 링크엔 "광고/제휴" 표기 명시 (공정위 표시 의무)
2. 모든 건강 글의 "의료 안내 사항" 면책과 제휴 링크는 시각적으로 분리
3. 정부 제도/급여 안내 문맥에 상품 링크를 끼워 넣지 않기 (제도 vs 상업 구분)
4. 한 글당 제휴 1~2개로 제한, 본문 흐름 해치지 않게

---

## Tier A - 확정 후보 (5편, 본문 배치 자리 확인 완료)

| slug | 카테고리 | LinkPrice 머천트 카테고리 | 배치 섹션 |
|------|---------|--------------------------|----------|
| senior-phone-plan | finance-safety | 알뜰폰/통신(MVNO) | 본문 "요금제 비교" - 이미 알뜰폰 전환 권유형 |
| senior-fall-prevention | health-care | 생활/안전용품 (미끄럼방지매트·안전손잡이·욕실 그랩바) | "집 안 위험 구역별 안전 점검" |
| senior-bedsore-prevention | health-care | 간병/의료용품 (에어매트리스·욕창방지방석) | "욕창 예방 핵심 3가지" / 급여 용품 섹션 (급여 프레이밍 존중) |
| senior-exercise-guide | health-care | 운동/홈트 (세라밴드·실내자전거·아령) | "오늘부터 시작하는 5분 운동" |
| senior-sarcopenia | health-care | 건강식품 (시니어 단백질 보충제) | "단백질 식품 간단 참고" |

## Tier B - 조건부 (11편, 본문 1차 확인 후 신중 배치)

| slug | LinkPrice 머천트 카테고리 | 비고 |
|------|--------------------------|------|
| senior-incontinence | 위생용품 (성인 위생패드·기저귀) | 건보·케겔 안내와 분리 |
| senior-hypertension | 가전/의료기기 (가정용 자동혈압계) | 약물 안내와 분리 |
| senior-diabetes-management | 의료기기 (혈당측정기·당뇨양말) | 합병증 의료 안내와 분리 |
| senior-digestive-health | 건강식품 (유산균·식이섬유) | - |
| senior-sleep-health | 생활용품 (경추베개·수면용품) | 수면검사 안내와 분리 |
| senior-osteoporosis | 건강식품 (칼슘·비타민D) | 검진/치료 안내와 분리 |
| senior-eye-health | 생활용품 (인공눈물·돋보기) | 수술/건보 안내와 분리 |
| senior-anemia-management | 건강식품 (철분제) | 검진 안내와 분리 |
| senior-chronic-pain | 생활용품 (온열패드·관절보호대) | 물리치료 건보 안내와 분리 |
| caregiver-certification | 교육/자격증 (요양보호사 인강·교육원) | 서비스 제휴 |
| polypharmacy-management | 생활용품 (약통·필박스) | 적합도 약함 |

## Tier D - 금융·보험·상조 CPA (12편, 별도 결정 필요)

LinkPrice에서 건당 단가가 가장 높은 영역(카드/보험/계좌개설/상조). 단 YMYL + 죽음·금융 민감 주제라 신뢰 훼손 위험. **애드센스 제약이 사라진 지금은 "검수 통과"가 아니라 "독자 신뢰"가 판단 기준.** 진행 여부 사용자 결정.

| slug | CPA 카테고리 | 민감도 |
|------|------------|-------|
| funeral-preparation-guide | 상조 | 높음(죽음) |
| estate-cleanup-guide | 유품정리 업체 | 높음(죽음) |
| senior-annuity-insurance | 연금보험 비교 | 높음(YMYL) |
| senior-loss-insurance-guide | 실손보험 비교/전환 | 높음(YMYL) |
| irp-pension-savings-comparison | 증권사 IRP/연금저축 계좌 | 중 |
| retirement-pension-irp | 증권사 IRP 계좌 | 중 |
| retirement-pension-3way-comparison | 연금/보험 상품 | 중 |
| pension-savings-tax-benefit | 연금저축 계좌 | 중 |
| senior-deposit-protection | 예적금 비교(저축은행 등) | 중 |
| senior-housing-guide | 실버타운/유료노인주거 | 중 |
| care-home-cost-guide | 요양시설/실버타운 | 중 |
| smishing-prevention | 모바일 백신/보안앱 | 낮음(적합도 약함) |

---

## Tier C - 제휴 보류 (149편)

정부 제도/연금/복지/세금/법률/순수의료 안내. 상품 부적합 또는 신뢰 훼손 위험으로 제휴 미적용. (사이트 정체성이 정책 안내형이라 정상)

### pension-welfare 59편 전체 (제도/연금/복지 신청 안내)
basic-livelihood-benefit, basic-pension-application, basic-pension-national-pension-simulation, basic-pension-reduction, dementia-family-respite, disability-pension, disability-registration, elder-abuse-prevention, elderly-care-service, emergency-care-service, emergency-welfare-support, energy-voucher, high-oil-price-relief, housing-benefit, lonely-senior-support, long-term-care-grade, ltci-application-timing-guide, ltci-bath-nursing-service, ltci-cost-simulation, ltci-family-caregiver-benefit, ltci-grade-reapplication, ltci-not-eligible-alternatives, ltci-short-term-care, ltci-vs-customized-care-comparison, ltci-welfare-equipment, medical-aid-system, national-pension-break-even, national-pension-credit, national-pension-lump-sum, national-pension-old-age-claim, national-pension-reform-2026, national-pension-timing, national-pension-voluntary, national-pension-work-deduction, near-poverty-benefits, nps-retirement-readiness-service, retirement-income-strategy, senior-culture-voucher, senior-customized-care, senior-daycare-center, senior-digital-education, senior-discount-guide, senior-emergency-alert, senior-free-meal, senior-housing-renovation, senior-job-program, senior-job-types, senior-legal-aid, senior-lifelong-education, senior-public-housing, senior-social-service-voucher, senior-transport-discount, senior-travel-support, senior-welfare-center, special-occupation-pension-basic-pension, support-obligation-standard, survivor-pension, turning-65-benefit-guide, veterans-senior-benefit

### finance-safety 46편 (상속/세금/연금제도/사기예방/복지)
adult-guardianship, after-death-admin, care-cost-reduction, death-insurance-claim, dementia-financial-management, digital-finance-safety, emergency-medical-fund, family-care-leave, farmland-pension, funeral-service-contract, health-insurance-claim, home-sale-tax-exemption, housing-farmland-pension-comparison, housing-pension, inheritance-debt-rejection, inheritance-gift-planning, inheritance-partition-guide, jeonse-fraud-prevention, medical-expense-deduction, national-pension-additional, national-pension-increase-strategy, pension-income-sequence, pension-income-tax, pension-split-divorce, power-of-attorney, prevent-voice-phishing, retirement-budget-planning, retirement-finance-checklist, retirement-finance-timeline, retirement-health-insurance-comparison, retirement-health-insurance, retirement-severance-choice, seizure-protected-account, senior-consumer-rights, senior-financial-protection, senior-home-disposal-comparison, senior-insurance-review, senior-loan-guarantee-risk, senior-medical-cost-estimate, senior-subscription-cleanup, senior-tax-benefit, senior-traffic-accident, severance-midterm-settlement, utility-bill-discount, voice-phishing-recovery, will-writing-guide

### health-care 44편 (건보 의료/검진/백신/수술/돌봄제도)
advance-directive, cancer-screening-guide, care-facility-comparison, care-type-selection, critical-illness-copay-reduction, dementia-care-center, dementia-family-action-plan, health-insurance-limit, health-insurance-premium-reduction, home-visiting-care, hospice-palliative-care, hospital-nursing-care-integration, national-health-checkup-guide, regional-health-checkup-support, rehabilitation-insurance, senior-80s-care-roadmap, senior-assistive-device, senior-atrial-fibrillation, senior-cataract-surgery, senior-cognitive-screening, senior-copd-management, senior-dental-coverage, senior-denture-implant, senior-dizziness-vertigo, senior-driving-license, senior-emergency-response, senior-gout-management, senior-hearing-aid, senior-heart-health, senior-hip-fracture, senior-kidney-health, senior-knee-surgery, senior-mental-health, senior-nutrition-guide, senior-oral-health, senior-parkinson-care, senior-physical-therapy, senior-pneumonia-prevention, senior-prostate-health, senior-shingles-prevention, senior-spinal-stenosis, senior-stroke-prevention, senior-thyroid-health, senior-vaccination

---

## 요약

| Tier | 편수 | 처리 |
|------|-----|------|
| A 확정 | 5 | 머천트 승인 후 바로 진행 |
| B 조건부 | 11 | 본문 확인 후 신중 배치 |
| D 금융/보험/상조 | 12 | 사용자 정책 결정 후 |
| C 보류 | 149 | 제휴 미적용 |
| **합계** | **177** | |

**핵심**: 제휴 적합(A+B)은 16편으로 전체의 9%. 사이트가 정책 안내형이라 제휴는 보조 수단이고, 디스플레이(애드핏)가 메인 수익이 되는 구조. 제휴는 health-care 생활관리 글에 집중.

## LinkPrice 실제 머천트 매칭 (2026-05-29, DetailMerchantList 엑셀 기준)

전용 머천트는 빈약(건강 1·식품 3·생활 2). 대부분 상품은 **종합쇼핑몰 딥링크**로 커버. 총 109개 머천트.

### 이미 승인된 머천트로 가능
| 글 | 머천트 | 커미션 |
|----|--------|-------|
| senior-sarcopenia | iHerb(단백질) / 대상웰라이프(신청 시) | 0.7% / 10.5% |
| senior-osteoporosis | iHerb (칼슘·비타민D) | 0.7% |
| senior-digestive-health | iHerb (유산균) | 0.7% |
| senior-anemia-management | iHerb (철분제) | 0.7% |
| senior-hypertension | 하이마트쇼핑몰 (가정용 혈압계) | 1.44% |
| senior-diabetes-management | 하이마트쇼핑몰 (혈당측정기) | 1.44% |
| senior-fall-prevention | 종합몰 딥링크(11번가/롯데온/GS SHOP) 미끄럼방지매트·안전손잡이 | 1~1.6% |
| senior-bedsore-prevention | 종합몰 딥링크 에어매트·방석 | 1~1.6% |
| senior-exercise-guide | 종합몰 딥링크 세라밴드·실내자전거 | 1~1.6% |
| senior-incontinence | 종합몰 딥링크 성인 위생패드 | 1~1.6% |
| senior-sleep-health | 종합몰 딥링크 경추베개 | 1~1.6% |
| senior-eye-health | 종합몰 딥링크 인공눈물·돋보기 | 1~1.6% |
| senior-chronic-pain | 종합몰 딥링크 온열패드·보호대 | 1~1.6% |

승인 종합몰: 11번가(1.05%)·롯데온(1.4%)·GS SHOP(1.6%)·Hmall(1.44%)·옥션·G마켓(0.6%)·이마트·NS/공영홈쇼핑(2~2.1%). (쿠팡·G마켓프로모션·오늘의집·현대백화점몰은 거부/미신청)

### 신청 권장 (미신청)
- **대상웰라이프**(식품, 10.5%) - 시니어 영양식(뉴케어 등), sarcopenia/nutrition 최적 + 고커미션

### LinkPrice로 불가 → 드롭/보류
- **senior-phone-plan(알뜰폰)**: 통신/알뜰폰 머천트 0건. LinkPrice 불가 → 통신 전용 제휴 별도 검토 또는 보류.
- **Tier D 상조/보험/증권**: 해당 머천트 0건(있는 금융=신용조회 NICE지키미·올크레딧, 공동인증서뿐). 신뢰 리스크 결정 자체가 현재 불필요. 보류.
- **caregiver-certification**: 교육 머천트=udemy(해외 강의)뿐, 요양보호사 인강 없음 → 보류.

### 컴플라이언스 경고 (중요)
LinkPrice 약관: "생성형 AI/자동화로 제작한 콘텐츠에 허위·부정확·과장 표현 포함 시 실적 무효 + 제휴 종료." bumo는 AI 보조 콘텐츠라 상품 언급은 반드시 사실 기반(효능 보장·최저가 단정 금지). 적발 시 제휴 종료.

### 수익 현실
종합몰 0.6~2% + iHerb 0.7% × 월 680 PV = 월 몇천 원. 제휴는 scaffolding, 메인 수익은 애드핏 디스플레이 + 트래픽 성장.

## 다음 단계

1. LinkPrice에 **bumohyetaek.kr 미디어 추가** → iHerb·하이마트·종합몰(11번가/롯데온/GS SHOP)을 bumo 미디어로 승인 신청 (jptcalc 승인분이라 빠름)
2. **대상웰라이프** 승인 신청 (시니어 영양식)
3. 승인되면 Tier A부터 본문에 제휴 블록 삽입 (광고 표기 + 의료 안내 분리 + 과장 표현 금지)
