import type { ContentItem } from '@/types/content';
import { siteConfig } from '@/config/siteConfig';

const article: ContentItem = {
  slug: 'senior-diabetes-management',
  title: '노인 당뇨 관리 가이드 - 혈당 조절부터 합병증 예방까지',
  seoTitle: '노인 당뇨 관리 - 혈당 기준과 합병증 예방법',
  seoDescription: '어르신 당뇨병은 저혈당 위험이 크고 합병증이 빠르게 진행됩니다. 노인에게 맞는 혈당 관리 기준, 약 복용 주의사항, 검진 활용법을 정리했습니다.',
  category: 'health-care',
  template: 'standard',
  targetUser: 'both',

  createdAt: '2026-03-30',
  updatedAt: '2026-04-17',
  reviewStatus: 'current',

  summary:
    '어르신 당뇨병은 젊은 환자와 관리 기준이 다릅니다. 저혈당 예방이 특히 중요하며, 합병증을 조기에 발견하기 위한 정기 검진이 필수입니다. 혈당 목표부터 약 복용 관리까지 한눈에 정리했습니다.',
  heroDescription:
    '노인 당뇨병은 저혈당 사고 위험이 크고, 신장·눈·발 합병증이 빠르게 진행됩니다. 무리한 혈당 조절보다 안전한 범위를 유지하는 것이 핵심입니다.',

  keyPoints: [
    '노인 당화혈색소(HbA1c) 목표는 7.0-8.0% 수준으로 완화',
    '저혈당 예방이 고혈당 관리보다 더 중요',
    '연 1회 이상 눈·신장·발 합병증 검사 필수',
  ],

  tags: ['당뇨', '혈당관리', '노인건강', '합병증예방', '저혈당', '당화혈색소'],
  hubKey: ['health-checkup'],
  order: 15,
  isFeatured: false,

  officialSources: [
    {
      name: '대한당뇨병학회',
      url: 'https://www.diabetes.or.kr',
      note: '당뇨병 진료 지침 및 환자 교육 자료',
    },
    {
      name: '국민건강보험공단',
      url: 'https://www.nhis.or.kr',
      note: '건강검진 결과 조회 및 만성질환 관리',
    },
  ],

  sections: [
    {
      type: 'text',
      heading: '노인 당뇨병이 특별한 이유',
      body: '부모님이 당뇨 진단을 받으셨을 때, "평생 약을 먹어야 한다"는 말에 걱정이 앞서는 분들이 많으실 겁니다. 젊은 당뇨 환자와 관리 방식이 다르다는 점도 혼란스러울 수 있습니다. 65세 이상 어르신은 당뇨병 유병률이 30%에 달하지만, 무리하게 혈당을 낮추는 것이 오히려 저혈당·낙상으로 이어질 수 있어 안전한 범위를 유지하는 것이 핵심입니다. [[national-health-checkup-guide|국가건강검진]]에서 공복혈당을 확인하고, 이상이 있으면 반드시 추가 검사를 받으세요.',
    },
    {
      type: 'info',
      heading: '노인 혈당 관리 기준',
      body: '대한당뇨병학회 진료 지침에 따르면, 건강한 노인의 당화혈색소(HbA1c) 목표는 6.5-7.5%, 기저질환이 많거나 허약한 노인은 7.5-8.5%까지 완화할 수 있습니다. 공복혈당은 80-130mg/dL, 식후 2시간 혈당은 180mg/dL 미만을 권장합니다. 개인 상태에 따라 담당 의사와 목표를 조정하세요.',
    },
    {
      type: 'warning',
      heading: '저혈당 증상과 대처법',
      body: '혈당이 70mg/dL 미만이면 저혈당입니다. 식은땀, 손 떨림, 어지러움, 혼란, 가슴 두근거림 등의 증상이 나타나면 즉시 포도당 사탕이나 주스(15g 탄수화물)를 섭취하세요. 15분 후 재측정해서 여전히 낮으면 한번 더 섭취합니다. 의식이 흐려지면 119에 신고하세요. 저혈당은 [[senior-fall-prevention|낙상 사고]]의 주요 원인이기도 합니다.',
    },
    {
      type: 'list',
      heading: '당뇨 합병증 정기 검사 항목',
      items: [
        '안저검사(눈): 연 1회 - 당뇨망막병증 조기 발견',
        '소변 미세알부민 검사: 연 1회 - 당뇨신장병증 확인',
        '발 검진: 연 1회 - 당뇨발(궤양, 감각 저하) 확인',
        '혈중 지질 검사: 연 1회 - 심혈관 합병증 위험 평가',
        '당화혈색소(HbA1c): 3-6개월마다 측정',
      ],
    },
    {
      type: 'tip',
      heading: '국가건강검진을 적극 활용하세요',
      body: '[[national-health-checkup-guide|국가건강검진]]에서 공복혈당, 혈중 지질, 크레아티닌(신장 기능) 검사를 무료로 받을 수 있습니다. 검진 결과지에서 "당뇨 의심" 또는 "당뇨 유소견"이 나오면 내분비내과에서 정밀 검사를 받으세요. [[health-insurance-limit|본인부담 상한제]]를 활용하면 연간 병원비 부담을 줄일 수 있습니다. 건강검진이나 당뇨 관련 문의는 국민건강보험공단(☎ 1577-1000)에서 안내받을 수 있습니다.',
    },
    {
      type: 'numbered-list',
      heading: '약 복용 관리 원칙',
      items: [
        '정해진 시간에 복용: 식전/식후 구분을 반드시 지키세요',
        '임의로 약을 줄이거나 중단하지 마세요 - 혈당이 안정적이어도 의사 상담 필수',
        '다른 병원에서 받은 약과 중복 여부 확인: 약국에서 DUR(의약품안전사용서비스) 점검',
        '인슐린 주사 사용자는 보관 온도(2-8도 냉장)와 주사 부위 순환에 주의',
      ],
    },
    {
      type: 'warning',
      heading: '의료 안내 사항',
      body: '이 글은 일반적인 건강 정보를 제공하며, 의학적 진단이나 치료를 대체하지 않습니다. 증상이 있거나 치료가 필요한 경우 반드시 의사와 상담하세요. 개인의 건강 상태에 따라 적합한 치료법이 다를 수 있습니다. 응급 상황 시 ☎ 119, 건강 상담은 ☎ 1577-1000(국민건강보험공단)으로 문의하세요.',
    },
    {
      type: 'summary',
      heading: '핵심 요약',
      items: [
        '노인 당뇨는 저혈당 예방이 최우선 - 혈당 목표를 느슨하게 잡는 것이 안전',
        '눈, 신장, 발 합병증 검사를 연 1회 이상 받기',
        '국가건강검진 공복혈당 결과를 추적 관리에 활용',
        '약 복용 시간과 용량을 임의로 변경하지 않기',
      ],
    },
  ],

  faq: [
    {
      question: '당뇨약을 먹으면 평생 끊을 수 없나요?',
      answer:
        '제2형 당뇨병은 식이·운동 요법으로 혈당이 안정되면 약을 줄이거나 중단할 수 있습니다. 다만 노인의 경우 임의로 중단하면 고혈당이나 합병증 악화 위험이 높으므로 반드시 담당 의사와 상의 후 조절하세요.',
    },
    {
      question: '혈당 측정은 하루에 몇 번 해야 하나요?',
      answer:
        '인슐린을 사용하지 않는 경우 주 2-3회 공복·식후 측정을 권장합니다. 인슐린 사용자는 하루 2-4회 측정이 필요합니다. 저혈당 증상이 자주 발생한다면 측정 횟수를 늘려야 하므로 담당 의사에게 문의하세요.',
    },
    {
      question: '당뇨 환자도 국가건강검진을 무료로 받을 수 있나요?',
      answer:
        '네, 당뇨 환자도 건강보험 가입자라면 국가건강검진을 동일하게 무료로 받을 수 있습니다. 다만 검진 당일 당뇨약 복용 시간과 공복 유지에 대해 미리 검진 기관에 문의하세요.',
    },
  ],

  cautionNote:
    '이 글은 대한당뇨병학회 진료 지침과 국민건강보험공단 안내를 바탕으로 작성되었습니다. 혈당 목표와 약 처방은 개인 상태에 따라 다르므로 반드시 담당 의사와 상의하세요.',

  relatedSlugs: ['national-health-checkup-guide', 'senior-fall-prevention', 'health-insurance-limit', 'senior-kidney-health'],

  relatedCalculator: {
    brand: siteConfig.calculatorSiteName,
    name: 'BMI 계산기',
    url: 'https://www.jptcalc.kr/calc/health/bmi/',
    openMode: 'new-tab',
    category: 'health',
    crossSiteTrackingKey: 'guide-diabetes-bmi',
  },
  calculatorCTA: {
    text: '내 BMI 확인하기',
    subText: `${siteConfig.calculatorSiteName} - 무료`,
  },
};

export default article;
