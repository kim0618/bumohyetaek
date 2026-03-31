import type { ContentItem } from '@/types/content';
import { siteConfig } from '@/config/siteConfig';

const article: ContentItem = {
  slug: 'national-health-checkup-guide',
  title: '국가건강검진 대상·항목·결과 활용 완벽 가이드',
  seoTitle: '국가건강검진 - 대상 확인과 검진 항목 안내',
  seoDescription: '건강보험 가입자라면 2년마다 국가건강검진을 무료로 받을 수 있습니다. 출생연도별 대상 확인 방법, 혈압·혈당 등 기본 검진 항목, 결과지 활용 방법을 안내합니다.',
  category: 'health-care',
  template: 'standard',
  targetUser: 'senior',

  createdAt: '2025-01-20',
  updatedAt: '2025-03-05',
  reviewStatus: 'current',

  summary:
    '건강보험 가입자라면 2년마다 무료로 국가건강검진을 받을 수 있습니다. 대상 확인부터 검진 항목, 결과 해석, 후속 진료까지 한눈에 정리했습니다.',
  heroDescription:
    '국가건강검진은 건강보험 가입자와 피부양자가 무료로 받을 수 있는 기본 검진입니다. 어떤 검사를 받을 수 있는지, 결과를 어떻게 활용해야 하는지 정리했습니다.',

  keyPoints: [
    '짝수·홀수 출생연도에 따라 격년 무료 검진',
    '혈압·혈당·콜레스테롤 등 6개 기본 항목',
    '결과지 받은 후 추가 검사·생활습관 관리 안내',
  ],

  tags: ['국가건강검진', '건강보험', '무료검진', '건강관리', '혈압', '혈당'],
  hubKey: ['health-checkup'],
  order: 1,
  isFeatured: true,

  officialSources: [
    {
      name: '국민건강보험공단',
      url: 'https://www.nhis.or.kr',
      note: '건강검진 대상 조회 및 기관 찾기',
    },
    {
      name: '건강iN',
      url: 'https://hi.nhis.or.kr',
      note: '검진 결과 온라인 조회',
    },
  ],

  sections: [
    {
      type: 'text',
      heading: '국가건강검진이란?',
      body: '국민건강보험공단이 운영하는 국가건강검진은 건강보험 가입자와 피부양자를 대상으로 질병을 조기 발견하고 예방하기 위한 제도입니다. 기본 검진 외에도 연령·성별에 따라 [[cancer-screening-guide|암 검진]], 영유아 검진, 생애전환기 검진 등을 추가로 받을 수 있습니다. 검진과 함께 [[senior-vaccination|무료 예방접종]]도 확인해보세요.',
    },
    {
      type: 'info',
      heading: '검진 대상 확인 방법',
      body: '출생연도 끝자리가 홀수이면 홀수 해에, 짝수이면 짝수 해에 검진 대상이 됩니다. 매년 1월 건강보험공단에서 검진 대상자에게 안내문이 발송됩니다. 국민건강보험공단 앱(The건강보험) 또는 건강iN에서도 확인 가능합니다.',
    },
    {
      type: 'text',
      heading: '기본 검진 항목',
      body: '공통 검진 항목은 아래와 같습니다. 연령·성별에 따라 추가 항목이 생길 수 있습니다.',
    },
    {
      type: 'list',
      items: [
        '진찰 및 상담',
        '혈압 측정',
        '키·몸무게·허리둘레 측정 (비만도 판정)',
        '시력·청력 검사',
        '혈액 검사: 혈색소, 공복혈당, 총콜레스테롤, 크레아티닌, AST/ALT',
        '흉부 X선 촬영',
        '구강 검진 (치과)',
      ],
    },
    {
      type: 'numbered-list',
      heading: '검진 받는 순서',
      items: [
        '검진 기관 선택: nhis.or.kr 또는 앱에서 가까운 검진 기관 확인',
        '예약: 선택한 기관에 전화 또는 온라인으로 예약',
        '검진 당일: 공복(최소 8시간) 유지, 신분증 지참',
        '결과 통보: 검진 후 약 2~3주 내 우편 또는 건강iN 앱으로 확인',
      ],
    },
    {
      type: 'tip',
      heading: '검진 결과를 최대한 활용하는 방법',
      body: '결과지를 받은 후 "유소견" 또는 "정밀검사 필요" 판정이 나왔다면 담당 의사와 반드시 상담하세요. 일반 질환 확진 후 6개월 이내 건강관리 서비스를 신청하면 추가 지원을 받을 수 있습니다.',
    },
    {
      type: 'warning',
      body: '당뇨·고혈압 등 만성질환 약을 복용 중이라면 검진 당일 아침 복약 여부를 검진 기관에 미리 문의하세요. 공복 혈당 검사에 영향을 줄 수 있습니다.',
    },
    {
      type: 'list',
      heading: '신청 시 필요한 서류',
      items: [
        '신분증',
        '건강검진표(우편 수령 또는 공단 홈페이지 출력)',
        '검진기관 예약 후 방문',
      ],
    },
    {
      type: 'info',
      heading: '처리 기간',
      body: '검진 당일 기본 결과를 확인할 수 있으며, 최종 결과는 2~3주 후 우편 또는 건강iN 앱으로 통보됩니다. 문의: ☎ 1577-1000 (국민건강보험공단)',
    },
  ],

  faq: [
    {
      question: '검진 비용이 드나요?',
      answer:
        '일반건강검진은 건강보험 가입자와 피부양자 모두 무료입니다. 단, 지역가입자의 경우 세대원 중 만 20세 이상이면 검진 대상입니다. 일부 추가 항목(예: 골밀도, 인지기능장애 검사 등)은 연령에 따라 무료 제공됩니다.',
    },
    {
      question: '검진을 받지 못한 해의 검진은 이월되나요?',
      answer:
        '원칙적으로 해당 연도 내에 받아야 하며 이월되지 않습니다. 단, 질병·입원 등 부득이한 사유가 있었다면 건강보험공단에 문의해볼 수 있습니다.',
    },
    {
      question: '암 검진은 별도로 신청해야 하나요?',
      answer:
        '위암·대장암·간암·유방암·자궁경부암·폐암 검진은 연령·성별 기준을 충족하면 국가암검진으로 무료 또는 본인부담 10%로 받을 수 있습니다. 기본 건강검진 기관에서 함께 예약하거나, 별도로 암 검진 지정 기관을 이용할 수 있습니다.',
    },
  ],

  cautionNote:
    '이 글은 2025년 국민건강보험공단 안내 기준으로 작성되었습니다. 검진 대상 기준과 항목은 매년 변경될 수 있으므로 국민건강보험공단(1577-1000) 또는 건강iN에서 최신 정보를 확인하시기 바랍니다.',

  relatedSlugs: ['long-term-care-grade', 'cancer-screening-guide', 'senior-hearing-aid'],

  relatedCalculator: {
    brand: siteConfig.calculatorSiteName,
    name: 'BMI 계산기',
    url: 'https://www.jptcalc.kr/calc/health/bmi/',
    openMode: 'new-tab',
    category: 'health',
    crossSiteTrackingKey: 'guide-health-checkup-bmi',
  },
  calculatorCTA: {
    text: '내 BMI 계산해보기',
    subText: `${siteConfig.calculatorSiteName} · 무료`,
  },
};

export default article;
