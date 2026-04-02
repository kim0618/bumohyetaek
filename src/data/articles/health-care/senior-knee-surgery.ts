import type { ContentItem } from '@/types/content';
import { siteConfig } from '@/config/siteConfig';

const article: ContentItem = {
  slug: 'senior-knee-surgery',
  title: '노인 인공관절 수술 건강보험 적용 조건과 비용 안내',
  seoTitle: '인공관절 수술 건강보험 적용 - 노인 무릎 수술 본인부담금과 조건',
  seoDescription: '노인 인공관절 수술 건강보험 적용 조건, 본인부담금 수준, 선택진료비, 재활치료 보험 적용까지 꼼꼼히 정리했습니다. 수술 전 꼭 확인하세요.',
  category: 'health-care',
  template: 'standard',
  targetUser: 'senior',

  createdAt: '2026-04-02',
  updatedAt: '2026-04-02',
  reviewStatus: 'current',

  summary:
    '노인 무릎 인공관절 수술은 건강보험 적용 시 본인부담금이 크게 줄어듭니다. 급여 조건, 본인부담금 수준, 수술 후 재활치료 보험 적용까지 한눈에 정리했습니다.',

  heroDescription:
    '무릎 통증으로 보행이 어렵다면 인공관절 수술을 고려할 수 있습니다. 건강보험 적용 조건부터 비용까지 미리 파악하세요.',

  keyPoints: [
    '인공관절 수술은 건강보험 적용 시 총 비용의 20% 수준만 본인 부담',
    '수술 전 6개월 이상 보존적 치료(물리치료·약물) 기록이 급여 적용에 유리',
    '수술 후 재활치료도 건강보험 적용 - 조기 재활이 회복에 핵심',
  ],

  tags: ['인공관절수술', '무릎수술', '건강보험급여', '노인수술', '관절염'],
  hubKey: ['health-checkup', 'financial-safety'],
  order: 26,
  isFeatured: false,

  relatedCalculator: {
    brand: siteConfig.calculatorSiteName,
    name: 'BMI 계산기',
    url: 'https://www.jptcalc.kr/calc/health/bmi/',
    openMode: 'new-tab',
    category: 'health',
    crossSiteTrackingKey: 'guide-knee-surgery-bmi',
  },

  calculatorCTA: {
    text: '체중이 무릎에 미치는 영향 확인하기',
    subText: `${siteConfig.calculatorSiteName} - 무료`,
  },

  officialSources: [
    {
      name: '국민건강보험공단',
      url: 'https://www.nhis.or.kr',
      note: '인공관절 수술 건강보험 급여 기준 안내',
    },
    {
      name: '건강보험심사평가원',
      url: 'https://www.hira.or.kr',
      note: '요양급여 적정성 평가 및 의료기관 정보',
    },
  ],

  sections: [
    {
      type: 'text',
      heading: '인공관절 수술이 필요한 경우',
      body: '퇴행성 관절염(골관절염)이 말기 단계에 이르면 연골이 거의 닳아 뼈끼리 직접 부딪혀 극심한 통증과 보행 장애가 생깁니다. 이때 손상된 관절을 인공 재료로 교체하는 인공관절 수술을 고려합니다. 수술 전 6개월 이상 약물치료, [[senior-physical-therapy|재활치료]], 주사 치료 등 보존적 치료를 먼저 시행하고 효과가 없을 때 수술을 권장합니다. 비만은 무릎 관절에 과도한 부담을 주는 주요 위험 요인입니다.',
    },
    {
      type: 'info',
      heading: '건강보험 급여 적용 조건',
      body: '인공관절(슬관절 치환술)은 건강보험 급여 항목입니다. 주요 조건: 방사선상 관절 간격 소실 또는 심한 변형이 확인된 경우, 6개월 이상 보존적 치료에도 호전이 없는 경우, 담당 정형외과 전문의의 수술 필요 소견이 있는 경우. 이 조건을 충족하면 건강보험 적용 시 수술·입원 비용의 본인부담률은 일반적으로 20%(상급병원 기준)입니다. 문의: ☎ 1577-1000 (국민건강보험공단)',
    },
    {
      type: 'list',
      heading: '예상 비용과 항목',
      items: [
        '수술비(인공관절 재료비 포함) - 건강보험 적용 시 총 비용의 20% 본인부담',
        '입원비(평균 7-14일) - 건강보험 적용',
        '마취비 - 건강보험 적용',
        '입원 중 물리치료 - 건강보험 적용',
        '비급여 항목(특실 입원비, 특정 보조기 등) - 본인 전액 부담',
        '실손의료보험 가입자는 비급여 일부 추가 보장 가능',
      ],
    },
    {
      type: 'tip',
      heading: '수술 후 재활치료와 건강보험',
      body: '인공관절 수술 후 재활치료는 회복 속도와 수술 결과에 직접적인 영향을 미칩니다. 퇴원 후 외래 또는 재활의학과 입원을 통한 물리치료, 작업치료는 건강보험이 적용됩니다. 재활치료 횟수 한도에 유의하고, 처방전에 따라 정해진 기간 내에 치료받으면 됩니다. [[rehabilitation-insurance|재활치료 건강보험]] 적용 범위를 미리 확인해두세요.',
    },
    {
      type: 'warning',
      heading: '수술 전 확인해야 할 사항',
      body: '인공관절은 평균 15-20년의 수명을 가지므로 70세 이상에서 수술받는 경우 재수술 가능성이 낮습니다. 반면 60대 초반의 활동적인 환자는 재수술을 고려해야 할 수 있습니다. 수술 전 혈액검사, 심장·폐 기능 검사 등 전신 상태 평가가 필수입니다. [[senior-diabetes-management|당뇨병]]이나 [[senior-hypertension|고혈압]] 등 만성질환을 가진 경우 수술 위험도가 높아지므로 담당 의사와 충분히 상담하세요.',
    },
  ],

  faq: [
    {
      question: '양쪽 무릎을 동시에 수술받을 수 있나요?',
      answer:
        '양측 동시 수술은 회복 기간을 단축할 수 있지만 수술 위험도가 높아집니다. 고령이거나 심장·폐 기능이 좋지 않은 경우 한쪽씩 나눠서 수술하는 것이 일반적입니다. 담당 정형외과 전문의와 충분히 상담하여 결정하세요.',
    },
    {
      question: '수술 후 걷는 데까지 얼마나 걸리나요?',
      answer:
        '대부분 수술 다음 날부터 보행기를 이용한 보행을 시작합니다. 독립 보행은 2-4주, 일상적인 보행 회복은 3개월 정도 소요됩니다. 재활치료를 꾸준히 받으면 회복 속도가 빨라집니다. 건강보험 관련 문의는 ☎ 1577-1000 (국민건강보험공단)으로 하세요.',
    },
  ],

  cautionNote:
    '이 글은 2026년 4월 기준으로 작성되었으며 의학적 진단을 대체하지 않습니다. 건강보험 급여 기준과 본인부담금은 병원 종별, 개인 상황에 따라 다를 수 있으니 국민건강보험공단(1577-1000)에 확인하세요.',

  relatedSlugs: ['senior-physical-therapy', 'rehabilitation-insurance', 'senior-diabetes-management', 'health-insurance-limit'],
};

export default article;
