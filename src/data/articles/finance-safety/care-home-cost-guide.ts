import type { ContentItem } from '@/types/content';
import { siteConfig } from '@/config/siteConfig';

const article: ContentItem = {
  slug: 'care-home-cost-guide',
  title: '요양시설과 실버타운 비용 비교 가이드',
  seoTitle: '요양시설 실버타운 비용 비교 - 등급별 본인부담금과 입주비',
  seoDescription: '요양시설과 실버타운의 비용 구조, 장기요양보험 적용 여부, 등급별 본인부담금을 비교합니다. 부모님 상황에 맞는 시설 선택 기준과 입소 절차를 안내합니다.',
  category: 'finance-safety',
  template: 'comparison',
  targetUser: 'family',

  createdAt: '2026-03-31',
  updatedAt: '2026-03-31',
  reviewStatus: 'current',

  summary:
    '요양시설은 장기요양보험 적용으로 본인부담금이 월 50~70만 원 수준이지만, 실버타운은 보증금과 월 비용이 크게 다릅니다. 두 시설의 비용 구조와 선택 기준을 비교합니다.',
  heroDescription:
    '부모님의 건강 상태와 재정 여건에 따라 요양시설과 실버타운 중 적합한 선택이 달라집니다. 비용 구조, 서비스 범위, 입소 조건을 구체적으로 비교해 드립니다.',

  keyPoints: [
    '요양시설은 장기요양등급 필요, 실버타운은 등급 없이 입주 가능',
    '요양시설 본인부담금 월 50~70만 원 vs 실버타운 월 150~400만 원 이상',
    '장기요양보험 적용 여부가 비용 차이의 핵심',
  ],

  tags: ['요양시설', '실버타운', '장기요양보험', '노인돌봄', '시설비용', '요양비'],
  hubKey: ['retirement-income', 'prepare-care'],
  order: 23,
  isFeatured: false,

  officialSources: [
    {
      name: '국민건강보험공단',
      url: 'https://www.nhis.or.kr',
      note: '장기요양등급 판정 및 시설 안내',
    },
    {
      name: '노인장기요양보험 홈페이지',
      url: 'https://www.longtermcare.or.kr',
      note: '시설 검색 및 비용 조회',
    },
  ],

  sections: [
    {
      type: 'text',
      heading: '요양시설과 실버타운의 차이',
      body: '요양시설(노인요양원)은 장기요양등급을 받은 어르신이 24시간 돌봄 서비스를 받는 곳으로, 국민건강보험공단의 장기요양보험이 적용됩니다. 반면 실버타운은 건강한 어르신이 자립 생활을 하면서 편의 서비스를 이용하는 주거 시설로, 장기요양보험 적용 없이 전액 자비 부담입니다. 장기요양등급 판정 기준이 궁금하다면 [[long-term-care-grade|장기요양등급 안내]]를 참고하세요.',
    },
    {
      type: 'list',
      heading: '요양시설 비용 구조',
      items: [
        '장기요양 1~2등급: 월 본인부담금 약 55~70만 원 (시설급여 총액의 20%)',
        '장기요양 3~5등급: 월 본인부담금 약 45~60만 원',
        '기초생활수급자: 본인부담금 면제 또는 경감',
        '경감 대상(차상위 등): 본인부담금 50~60% 경감',
        '식비, 간식비, 이미용비 등 비급여 항목은 별도 (월 15~30만 원 추가)',
      ],
    },
    {
      type: 'list',
      heading: '실버타운 비용 구조',
      items: [
        '보증금(입주 보증금): 1억~10억 원 이상 (시설 등급에 따라 편차 큼)',
        '월 이용료: 150~400만 원 (식사, 관리비, 부대시설 포함)',
        '의료비, 간병비는 별도 - 건강 악화 시 추가 비용 발생 가능',
        '일부 실버타운은 보증금 일부를 퇴거 시 환급하는 조건 확인 필요',
      ],
    },
    {
      type: 'text',
      heading: '장기요양보험 적용 여부',
      body: '요양시설 이용 시 장기요양보험에서 시설급여 비용의 80%를 부담하므로 본인이 내는 금액은 총비용의 20% 수준입니다. 반면 실버타운은 장기요양보험이 적용되지 않아 모든 비용을 본인이 부담합니다. 다만 실버타운 거주 중 장기요양등급을 받으면 방문요양, 방문간호 등 재가급여는 별도로 신청할 수 있습니다. 건강보험공단 ☎ 1577-1000에서 자세한 안내를 받으세요.',
    },
    {
      type: 'list',
      heading: '선택 기준 체크리스트',
      items: [
        '부모님이 일상생활을 독립적으로 할 수 있는가? - 가능하면 실버타운, 어려우면 요양시설',
        '장기요양등급을 받았거나 받을 가능성이 있는가? - 있으면 요양시설이 비용 면에서 유리',
        '월 예산이 얼마까지 가능한가? - 월 100만 원 이하면 요양시설 중심 검토',
        '가족이 수시로 방문할 수 있는 위치인가?',
        '계약 조건(보증금 환급, 중도 퇴거 위약금)을 꼼꼼히 확인했는가?',
      ],
    },
    {
      type: 'numbered-list',
      heading: '입소 절차',
      items: [
        '요양시설: 국민건강보험공단에 장기요양등급 신청 - 등급 판정(약 30일) - 시설 선택 및 입소 계약',
        '실버타운: 시설 견학 및 상담 - 입주 신청서 제출 - 건강검진 결과 제출 - 계약 체결 및 입주',
        '입소 전 반드시 시설 현장 방문 및 기존 입주자 후기 확인 권장',
      ],
    },
  ],

  faq: [
    {
      question: '요양시설에 입소하면 실버타운으로 옮길 수 있나요?',
      answer:
        '건강이 호전되어 자립 생활이 가능해지면 실버타운으로 옮길 수 있습니다. 다만 장기요양등급이 유지되는 동안에는 요양시설을 이용하는 것이 비용 면에서 유리합니다.',
    },
    {
      question: '실버타운 보증금은 퇴거 시 전액 돌려받나요?',
      answer:
        '시설마다 환급 조건이 다릅니다. 일부는 보증금 전액 환급, 일부는 일정 비율만 환급하거나 거주 기간에 따라 차감합니다. 계약 전 환급 조건과 중도 해지 시 위약금을 반드시 확인하세요.',
    },
    {
      question: '요양시설 비용을 자녀가 대신 내면 세금 혜택이 있나요?',
      answer:
        '부양가족 의료비 세액공제 항목에 장기요양 시설급여 본인부담금이 포함될 수 있습니다. 연말정산 시 건강보험공단에서 발급하는 납부확인서를 제출하면 됩니다.',
    },
  ],

  cautionNote:
    '이 글은 2026년 기준 정보입니다. 장기요양보험 수가와 본인부담금 비율은 매년 변경될 수 있으며, 실버타운 비용은 시설별로 큰 차이가 있으므로 반드시 개별 시설에 직접 문의하시기 바랍니다.',

  relatedCalculator: {
    brand: siteConfig.calculatorSiteName,
    name: '장기요양 본인부담금 계산기',
    url: 'https://www.jptcalc.kr/calc/pension-welfare/long-term-care/',
    openMode: 'new-tab',
    category: 'pension',
    crossSiteTrackingKey: 'guide-care-home-cost',
  },
  calculatorCTA: {
    text: '요양원 본인부담금 계산해보기',
    subText: `${siteConfig.calculatorSiteName} · 무료`,
  },

  relatedSlugs: ['care-facility-comparison', 'long-term-care-grade', 'home-visiting-care'],
};

export default article;
