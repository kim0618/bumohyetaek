import type { ContentItem } from '@/types/content';
import { siteConfig } from '@/config/siteConfig';

const article: ContentItem = {
  slug: 'senior-nutrition-guide',
  title: '시니어 영양 관리와 무료 급식·식사 배달 서비스',
  seoTitle: '노인 영양 관리 - 무료 급식 경로식당 식사 배달 신청 방법',
  seoDescription: '노인 영양 부족 문제와 해결법을 정리했습니다. 필수 영양소, 균형 식단 가이드, 무료 급식(경로식당), 식사 배달 서비스 신청 방법까지 한눈에 확인하세요.',
  category: 'health-care',
  template: 'standard',
  targetUser: 'both',

  createdAt: '2026-03-31',
  updatedAt: '2026-04-13',
  reviewStatus: 'current',

  summary:
    '노인 영양 부족은 면역력 저하와 근감소증의 주요 원인입니다. 단백질 등 필수 영양소와 균형 잡힌 식단 구성법, 무료 급식과 식사 배달 서비스 신청법을 정리했습니다.',
  heroDescription:
    '잘 먹는 것이 건강의 기본입니다. 혼자 식사 준비가 어려운 어르신을 위한 무료 급식과 배달 서비스를 활용하세요.',

  keyPoints: [
    '단백질 부족이 근감소증의 주요 원인 - 매끼 단백질 식품 섭취 권장',
    '경로식당 무료 급식과 도시락 배달은 주민센터에서 신청 가능',
    '영양 보충제는 의사·약사와 상담 후 복용 - 과다 섭취 주의',
  ],

  tags: ['노인영양', '무료급식', '경로식당', '식사배달', '영양관리'],
  hubKey: ['health-checkup'],
  order: 22,
  isFeatured: false,

  officialSources: [
    {
      name: '보건복지부',
      url: 'https://www.mohw.go.kr',
      note: '노인 무료 급식 및 식사 배달 사업 안내',
    },
    {
      name: '복지로',
      url: 'https://www.bokjiro.go.kr',
      note: '지역별 경로식당·식사 배달 서비스 검색',
    },
  ],

  sections: [
    {
      type: 'text',
      heading: '노인 영양 부족이 위험한 이유',
      body: '나이가 들면 입맛이 줄고 씹는 기능이 약해져 식사량이 감소합니다. 혼자 사는 어르신은 끼니를 거르거나 간단한 음식으로 때우는 경우가 많습니다. 영양 부족은 면역력 저하, 근감소증, 빈혈, 골다공증으로 이어져 [[senior-fall-prevention|낙상]] 위험을 높이고 회복력을 떨어뜨립니다.',
    },
    {
      type: 'list',
      heading: '노인에게 특히 중요한 영양소',
      items: [
        '단백질 - 근육 유지에 필수, 매끼 달걀·두부·생선·콩류 섭취 권장',
        '칼슘·비타민D - 뼈 건강 유지, 우유·멸치·표고버섯과 햇볕 쬐기',
        '비타민B12 - 빈혈 예방, 육류·생선·유제품에 풍부',
        '식이섬유 - 변비 예방, 잡곡밥·채소·과일 섭취',
        '수분 - 탈수 예방을 위해 하루 6-8잔 물 마시기',
      ],
    },
    {
      type: 'list',
      heading: '어르신 균형 식단 실천 팁',
      items: [
        '하루 3끼 규칙적으로 먹기 - 한 끼라도 거르지 않기',
        '매끼 밥·반찬·국을 갖춰 먹되 국물은 짜지 않게',
        '딱딱한 음식은 잘게 썰거나 부드럽게 조리',
        '식욕이 없을 때는 소량씩 자주 먹기(하루 5-6회)',
        '간식으로 과일, 요거트, 삶은 달걀 활용',
      ],
    },
    {
      type: 'info',
      heading: '무료 급식(경로식당) 서비스',
      body: '경로식당은 만 60세 이상(지역에 따라 65세 이상) 저소득 어르신에게 점심을 무료로 제공하는 사업입니다. 대부분의 경로식당은 주민센터 또는 복지관에서 운영하며, 별도 소득 기준 없이 이용 가능한 곳도 있습니다. 가까운 주민센터에 문의하세요.',
    },
    {
      type: 'info',
      heading: '식사 배달(도시락 배달) 서비스',
      body: '거동이 불편하여 경로식당을 이용하기 어려운 어르신은 도시락 배달 서비스를 신청할 수 있습니다. 주 5-7회 점심 또는 저녁 도시락을 집으로 배달해주며, 안부 확인도 함께 이루어집니다. 신청은 주민센터 또는 ☎ 129 (보건복지상담센터)로 문의하세요.',
    },
    {
      type: 'warning',
      heading: '영양 보충제 복용 시 주의사항',
      body: '영양 보충제는 부족한 영양소를 보충하는 용도이지 식사를 대체할 수 없습니다. 특히 비타민A, 비타민D, 철분 등은 과다 섭취 시 간 손상, 신장 결석 등 부작용이 있습니다. [[polypharmacy-management|다약제 복용]] 중인 어르신은 반드시 의사·약사와 상담 후 영양제를 선택하세요.',
    },
    {
      type: 'warning',
      heading: '의료 안내 사항',
      body: '이 글은 일반적인 건강 정보를 제공하며, 의학적 진단이나 치료를 대체하지 않습니다. 증상이 있거나 치료가 필요한 경우 반드시 의사와 상담하세요. 개인의 건강 상태에 따라 적합한 치료법이 다를 수 있습니다. 응급 상황 시 ☎ 119, 건강 상담은 ☎ 1577-1000(국민건강보험공단)으로 문의하세요.',
    },
  ],

  faq: [
    {
      question: '식사 배달 서비스는 누구나 신청할 수 있나요?',
      answer:
        '식사 배달은 주로 만 65세 이상 저소득(기초생활수급자, 차상위계층) 독거 어르신이 대상입니다. 다만 지자체별로 기준이 다르며, 거동이 불편한 경우 소득과 관계없이 이용할 수 있는 곳도 있습니다. 주민센터에 문의하면 정확한 자격을 확인할 수 있습니다.',
    },
    {
      question: '단백질 보충을 위해 단백질 음료를 매일 먹어도 되나요?',
      answer:
        '단백질 음료는 보조 수단으로 활용할 수 있지만, 신장 기능이 저하된 어르신은 과도한 단백질 섭취가 오히려 해로울 수 있습니다. 하루 단백질 권장량(체중 1kg당 1-1.2g)을 기준으로 식사와 보충제를 조합하되, 만성 질환이 있으면 의사와 상담하세요.',
    },
  ],

  cautionNote:
    '이 글은 2026년 3월 기준으로 작성되었습니다. 무료 급식 및 식사 배달 서비스의 대상과 운영 방식은 지자체별로 다를 수 있으므로 주민센터 또는 보건복지상담센터(129)에서 확인하세요.',

  relatedSlugs: ['senior-fall-prevention', 'senior-diabetes-management', 'national-health-checkup-guide', 'polypharmacy-management', 'senior-digestive-health'],

  relatedCalculator: {
    brand: siteConfig.calculatorSiteName,
    name: '기초대사량 계산기',
    url: 'https://www.jptcalc.kr/calc/health/bmr/',
    openMode: 'new-tab',
    category: 'health',
    crossSiteTrackingKey: 'guide-nutrition-bmr',
  },
  calculatorCTA: {
    text: '기초대사량 계산하기',
    subText: `${siteConfig.calculatorSiteName} - 무료`,
  },
};

export default article;
