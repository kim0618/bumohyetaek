import type { ContentItem } from '@/types/content';
import { siteConfig } from '@/config/siteConfig';

const article: ContentItem = {
  slug: 'senior-hypertension',
  title: '노인 고혈압 관리와 예방 가이드 - 약물·생활 습관 완전 정리',
  seoTitle: '노인 고혈압 관리 방법 - 목표 혈압, 약물 치료, 생활 습관 안내',
  seoDescription: '노인 고혈압 목표 혈압, 약물 치료 주의사항, 식사·운동·체중 관리 등 생활 습관 개선법까지 체계적으로 정리했습니다. 합병증 예방에 필수입니다.',
  category: 'health-care',
  template: 'standard',
  targetUser: 'senior',

  createdAt: '2026-04-02',
  updatedAt: '2026-04-02',
  reviewStatus: 'current',

  summary:
    '노인 고혈압은 뇌졸중과 심장병의 가장 큰 위험 요인입니다. 목표 혈압, 약물 복용 원칙, 저염식·운동·체중 관리 등 생활 습관 개선법을 체계적으로 안내합니다.',

  heroDescription:
    '혈압은 침묵의 살인자입니다. 꾸준한 측정과 관리로 뇌졸중·심근경색을 예방하세요.',

  keyPoints: [
    '노인 고혈압 목표 혈압: 수축기 130mmHg 미만 (개인 상태에 따라 조정)',
    '혈압약은 증상이 없어도 꾸준히 복용 - 임의 중단은 위험',
    '하루 나트륨 2,000mg(소금 5g) 이하 식단이 혈압 관리의 기본',
  ],

  tags: ['노인고혈압', '혈압관리', '뇌졸중예방', '고혈압약물', '저염식'],
  hubKey: ['health-checkup'],
  order: 29,
  isFeatured: false,

  relatedCalculator: {
    brand: siteConfig.calculatorSiteName,
    name: 'BMI 계산기',
    url: 'https://www.jptcalc.kr/calc/health/bmi/',
    openMode: 'new-tab',
    category: 'health',
    crossSiteTrackingKey: 'guide-hypertension-bmi',
  },

  calculatorCTA: {
    text: '내 BMI로 고혈압 위험도 확인하기',
    subText: `${siteConfig.calculatorSiteName} - 무료`,
  },

  officialSources: [
    {
      name: '대한고혈압학회',
      url: 'https://www.koreanhypertension.org',
      note: '노인 고혈압 진료 지침',
    },
    {
      name: '국민건강보험공단',
      url: 'https://www.nhis.or.kr',
      note: '만성질환 건강관리 지원 안내',
    },
  ],

  sections: [
    {
      type: 'text',
      heading: '노인 고혈압의 특징',
      body: '65세 이상 노인의 약 60-70%가 고혈압을 가지고 있습니다. 노인 고혈압은 수축기 혈압만 높고 이완기 혈압은 낮은 단독 수축기 고혈압이 많습니다. 혈관 탄력이 떨어지고 압력 조절 능력이 약해 기립성 저혈압(일어날 때 혈압 급격히 저하)이 동반되는 경우가 흔합니다. [[national-health-checkup-guide|건강검진]]에서 혈압을 꾸준히 측정하는 것이 조기 발견의 핵심입니다.',
    },
    {
      type: 'list',
      heading: '노인 고혈압 목표 혈압과 측정 방법',
      items: [
        '목표 혈압: 수축기 130mmHg 미만(단, 허약 노인은 150mmHg 미만 완화 적용)',
        '가정 혈압 측정 권장 - 아침(복용 전)과 저녁 각각 2회씩 측정',
        '측정 전 5분 이상 안정 후 측정, 담배·커피는 30분 전부터 삼가기',
        '양쪽 팔 혈압 차이가 10mmHg 이상이면 담당 의사에게 보고',
        '혈압 수첩 또는 앱으로 측정값 기록·관리',
      ],
    },
    {
      type: 'info',
      heading: '혈압약 복용 원칙',
      body: '고혈압 약물은 증상이 없어도 반드시 매일 규칙적으로 복용해야 합니다. 임의로 중단하면 혈압이 급격히 올라 뇌졸중·심근경색 위험이 커집니다. 노인은 부작용(현기증, 기립성 저혈압 등)이 더 자주 나타날 수 있으므로 처음에는 저용량으로 시작해 서서히 증량합니다. [[polypharmacy-management|다약제 복용]] 중인 노인은 상호작용에 주의해야 합니다. 문의: ☎ 1577-1000 (국민건강보험공단)',
    },
    {
      type: 'list',
      heading: '생활 습관 개선 - 혈압을 낮추는 방법',
      items: [
        '저염 식단: 하루 나트륨 2,000mg(소금 5g) 이하 - 국물 줄이기, 저염 간장 활용',
        '체중 감량: 체중 1kg 감량 시 수축기 혈압 약 1mmHg 감소 효과',
        '규칙적 유산소 운동: 빠르게 걷기·수영 주 5회 30분 이상',
        '금연: 흡연은 혈압을 즉각 올리고 혈관을 손상시킴',
        '절주: 하루 알코올 남성 30g(소주 2잔), 여성 15g 이하로 제한',
        'DASH 식단 실천: 채소·과일·저지방 유제품 늘리고 포화지방 줄이기',
        '스트레스 관리: 명상, 복식호흡, 사회 활동 유지',
      ],
    },
    {
      type: 'warning',
      heading: '이런 증상이 생기면 즉시 응급실로',
      body: '수축기 혈압이 180mmHg 이상이거나 두통·시야 이상·말 어눌함·팔다리 마비·흉통 등이 동반되면 고혈압 응급 상태일 수 있습니다. 즉시 ☎ 119에 신고하거나 응급실로 이송해야 합니다. 이는 뇌졸중이나 심근경색의 전조 증상일 수 있으니 절대 방치하지 마세요.',
    },
  ],

  faq: [
    {
      question: '혈압약을 먹으면 평생 먹어야 하나요?',
      answer:
        '대부분의 경우 고혈압은 완치보다 관리가 목표이므로 혈압약을 장기 복용하게 됩니다. 다만 생활 습관이 크게 개선되어 혈압이 안정적으로 조절되면 담당 의사의 판단 하에 감량하거나 중단하는 경우도 있습니다. 임의로 중단하는 것은 위험하므로 반드시 의사와 상담하세요.',
    },
    {
      question: '아침에 혈압이 유독 높은데 괜찮은가요?',
      answer:
        '아침 기상 후 2시간 이내에 혈압이 높아지는 것은 자연스러운 현상이지만, 수축기 혈압이 135mmHg 이상이면 아침 고혈압으로 분류됩니다. 아침 고혈압은 뇌졸중·심근경색 위험과 관련이 높으므로 담당 의사에게 알리고 약물 복용 시간 조정 등을 상담하세요.',
    },
  ],

  cautionNote:
    '이 글은 2026년 4월 기준으로 작성되었으며 의학적 진단이나 처방을 대체하지 않습니다. 혈압 목표치와 약물은 개인 상황에 따라 달라지므로 반드시 담당 의사와 상담하세요.',

  relatedSlugs: ['senior-diabetes-management', 'national-health-checkup-guide', 'polypharmacy-management', 'senior-fall-prevention'],
};

export default article;
