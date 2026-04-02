import type { ContentItem } from '@/types/content';
import { siteConfig } from '@/config/siteConfig';

const article: ContentItem = {
  slug: 'pension-income-tax',
  title: '연금소득세 완전 정리 - 분리과세 vs 종합과세 선택 기준',
  seoTitle: '연금소득세 - 분리과세 종합과세 비교와 절세 방법',
  seoDescription: '연금을 수령하면 연금소득세를 냅니다. 연 1,500만 원 기준으로 분리과세와 종합과세 중 유리한 방법을 선택할 수 있습니다. 세금 계산법과 절세 전략을 정리했습니다.',
  category: 'finance-safety',
  template: 'comparison',
  targetUser: 'both',

  createdAt: '2026-03-30',
  updatedAt: '2026-03-30',
  reviewStatus: 'current',

  summary:
    '연금 수령 시 세금 부담을 줄이려면 분리과세와 종합과세 중 유리한 방법을 선택해야 합니다. 연금 종류별 세율과 선택 기준을 정리했습니다.',
  heroDescription:
    '퇴직 후 연금을 받기 시작하면 연금소득세 문제를 피할 수 없습니다. 국민연금·개인연금·퇴직연금별로 과세 방식이 다르며, 잘 선택하면 세금을 크게 줄일 수 있습니다.',

  keyPoints: [
    '사적연금 연 1,500만 원 이하 → 분리과세(3~5%) 선택 가능',
    '국민연금은 공적연금으로 별도 과세 (종합과세 대상)',
    '연금 수령 나이에 따라 3~5% 저율 분리과세 (80세 이상 3%, 70~79세 4%, 55~69세 5%)',
  ],

  tags: ['연금소득세', '분리과세', '종합과세', '연금세금', '절세'],
  hubKey: ['retirement-income', 'financial-safety'],
  order: 10,
  isFeatured: false,

  officialSources: [
    {
      name: '국세청',
      url: 'https://www.nts.go.kr',
      note: '연금소득 과세 안내',
    },
    {
      name: '금융감독원',
      url: 'https://www.fss.or.kr',
      note: '연금 관련 금융 정보',
    },
  ],

  sections: [
    {
      type: 'text',
      heading: '연금 종류별 과세 방식',
      body: '연금소득세는 연금 종류에 따라 과세 방식이 다릅니다. 크게 공적연금(국민연금·공무원연금 등)과 사적연금(개인연금·퇴직연금 IRP)으로 나뉩니다. [[national-pension-timing|국민연금 수령 시기]]와 [[retirement-pension-irp|퇴직연금·IRP]]를 계획하고 있다면 세금 구조를 미리 파악해두는 것이 좋습니다.',
    },
    {
      type: 'info',
      heading: '공적연금 (국민연금·공무원연금 등)',
      body: '국민연금 등 공적연금은 연금소득으로 분류되어 종합소득세 신고 대상입니다. 연금소득 공제(최대 900만 원)를 적용한 후 다른 소득과 합산해 과세합니다. 공적연금만 있고 연 516만 원 이하라면 세금이 없습니다.',
    },
    {
      type: 'info',
      heading: '사적연금 (개인연금·퇴직연금 IRP)',
      body: '세액공제를 받은 연금저축·IRP에서 수령하는 금액은 사적연금소득으로 과세됩니다. 연간 합계 1,500만 원 이하라면 분리과세(3~5%)와 종합과세 중 선택할 수 있습니다. 1,500만 원 초과 시 무조건 종합과세 대상이 됩니다.',
    },
    {
      type: 'list',
      heading: '사적연금 분리과세 세율',
      items: [
        '수령 나이 55~69세: 5%',
        '수령 나이 70~79세: 4%',
        '수령 나이 80세 이상: 3%',
        '종신형 연금보험(분리과세 선택 시): 4%',
      ],
    },
    {
      type: 'tip',
      heading: '분리과세 vs 종합과세 선택 기준',
      body: '사적연금이 연 1,500만 원 이하라면 분리과세가 유리한 경우가 많습니다. 하지만 다른 소득(이자·배당·근로 등)이 적어서 종합소득세 과세표준이 낮다면 종합과세가 유리할 수 있습니다. 특히 다른 소득이 없는 경우 인적공제·기본공제를 활용해 세금을 줄일 수 있습니다. 세무사 상담을 통해 개인 상황에 맞는 방법을 선택하세요. 종합소득세 신고 기한은 매년 5월이며, 연말정산은 1-2월에 진행됩니다. 세금 관련 문의는 국세청(☎ 126)으로 연락하세요.',
    },
    {
      type: 'warning',
      heading: '연금 수령 시작 전 반드시 확인',
      body: '연금저축·IRP는 수령 방법(일시금 vs 연금)에 따라 세금이 크게 달라집니다. 일시금으로 받으면 기타소득세 16.5%가 부과됩니다. 반드시 연금으로 수령하고, 가능하면 55세 이후 10년 이상 분할 수령해 세율을 낮추세요.',
    },
    {
      type: 'summary',
      heading: '핵심 요약',
      items: [
        '국민연금(공적연금): 종합과세 — 연 516만 원 이하면 세금 없음',
        '개인연금·IRP(사적연금): 연 1,500만 원 이하면 분리과세(3~5%) 선택 가능',
        '일시금 수령은 16.5% 기타소득세 — 반드시 연금 형태로 분할 수령',
      ],
    },
  ],

  faq: [
    {
      question: '국민연금만 받는 경우에도 세금을 내야 하나요?',
      answer:
        '국민연금 수령액이 연 516만 원(월 약 43만 원) 이하라면 세금이 없습니다. 이를 초과하면 연금소득 공제를 적용한 후 종합소득세 신고 대상이 됩니다. 국민연금 외 다른 소득이 없고 수령액이 적다면 대부분 세금 부담이 거의 없습니다.',
    },
    {
      question: '개인연금을 일시금으로 받으면 세금이 얼마나 나오나요?',
      answer:
        '세액공제를 받은 연금저축·IRP를 일시금으로 수령하면 기타소득세 16.5%가 부과됩니다. 예를 들어 3,000만 원을 일시금으로 받으면 약 495만 원이 세금으로 나갑니다. 연금 형태로 분할 수령하면 3~5%만 부과되므로 가능하면 연금으로 받는 것이 훨씬 유리합니다.',
    },
    {
      question: '분리과세와 종합과세 중 어떤 것을 선택해야 할지 모르겠어요.',
      answer:
        '사적연금 수령액이 연 1,500만 원 이하인 경우, 다른 소득(이자·배당·근로소득 등)이 거의 없다면 종합과세가 유리할 수 있습니다. 반면 다른 소득이 있어 종합소득세 구간이 높아진다면 분리과세(3~5%)가 유리합니다. 세무사 무료 상담(국세청 1588-0036)을 통해 본인 상황에 맞는 방법을 확인하세요.',
    },
  ],

  cautionNote:
    '이 글은 일반적인 안내 목적으로 작성되었습니다. 개인 소득 구성과 연금 종류에 따라 유리한 과세 방식이 달라지므로 세무사 상담을 통해 정확한 절세 방법을 확인하세요. 세법은 매년 개정될 수 있습니다.',

  relatedSlugs: ['national-pension-timing', 'retirement-pension-irp', 'retirement-finance-checklist'],

  relatedCalculator: {
    brand: siteConfig.calculatorSiteName,
    name: '종합소득세 계산기',
    url: 'https://www.jptcalc.kr/calc/tax/income-tax/',
    openMode: 'new-tab',
    category: 'finance',
    crossSiteTrackingKey: 'guide-pension-tax-income',
  },
  calculatorCTA: {
    text: '종합소득세 계산해보기',
    subText: `${siteConfig.calculatorSiteName} - 무료`,
  },
};

export default article;
