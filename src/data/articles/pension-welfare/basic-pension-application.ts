import type { ContentItem } from '@/types/content';
import { siteConfig } from '@/config/siteConfig';

const article: ContentItem = {
  slug: 'basic-pension-application',
  title: '기초연금 신청 방법과 수령 조건',
  seoTitle: '기초연금 신청 방법 - 자격 조건과 수령 금액',
  seoDescription: '만 65세 이상 소득 하위 70%에 해당하면 기초연금을 받을 수 있습니다. 단독가구 최대 월 334,810원 수령 기준, 자격 조건, 주민센터·복지로 신청 방법을 정리했습니다.',
  category: 'pension-welfare',
  template: 'policy',
  targetUser: 'senior',

  createdAt: '2025-01-15',
  updatedAt: '2025-03-10',
  effectiveDate: '2025-01-01',
  reviewStatus: 'current',

  summary:
    '만 65세 이상 소득 하위 70%라면 기초연금을 받을 수 있습니다. 단독가구 최대 월 334,810원, 자격 조건과 신청 방법을 한눈에 정리했습니다.',
  heroDescription:
    '기초연금은 노후 소득을 보장하기 위한 대표 복지 제도입니다. 자격 조건부터 신청 절차, 수령 금액, 자주 묻는 질문까지 정리합니다.',

  keyPoints: [
    '만 65세 이상, 소득 하위 70% 해당자',
    '단독가구 최대 월 334,810원',
    '주민센터 방문 또는 복지로 온라인 신청',
  ],

  tags: ['기초연금', '노인복지', '연금', '65세', '복지급여'],
  hubKey: ['retirement-income', 'government-benefits'],
  order: 1,
  isFeatured: true,

  officialSources: [
    {
      name: '보건복지부',
      url: 'https://www.mohw.go.kr',
      note: '기초연금 제도 안내',
    },
    {
      name: '복지로',
      url: 'https://www.bokjiro.go.kr',
      note: '온라인 신청 포털',
    },
    {
      name: '국민연금공단',
      url: 'https://www.nps.or.kr',
      note: '기초연금 관련 상담',
    },
  ],

  sections: [
    {
      type: 'text',
      heading: '기초연금이란?',
      body: '기초연금은 만 65세 이상 노인 중 소득·재산이 적은 분들에게 매월 일정 금액을 지급하는 제도입니다. 2014년 기초노령연금을 개편해 도입되었으며, 매년 물가 상승률을 반영해 금액이 인상됩니다. 기초연금 외에도 [[housing-benefit|주거급여]]나 [[elderly-care-service|노인돌봄서비스]]를 함께 받을 수 있으니 확인해보세요.',
    },
    {
      type: 'info',
      heading: '2025년 기초연금 수령 금액',
      body: '2025년 기준 기초연금 최대 수령액은 월 334,810원(단독가구)입니다. 부부가 모두 수령하는 경우 각 20%를 감액해 각각 267,840원을 받습니다.',
    },
    {
      type: 'text',
      heading: '신청 자격 조건',
      body: '다음 두 가지 조건을 동시에 충족해야 합니다.',
    },
    {
      type: 'numbered-list',
      items: [
        '연령 조건: 신청일 기준 만 65세 이상',
        '소득인정액 조건: 단독가구 월 213만 원 이하, 부부가구 월 340.8만 원 이하 (2025년 선정기준액)',
      ],
    },
    {
      type: 'tip',
      heading: '신청은 언제부터 할 수 있나요?',
      body: '만 65세 생일이 속하는 달의 1개월 전부터 신청 가능합니다. 예를 들어 6월 생일이라면 5월 1일부터 신청할 수 있습니다. 신청한 달부터 수급이 시작되므로 생일 전달에 미리 신청하는 것이 유리합니다. 신청 전 궁금한 점은 국민연금공단(☎ 1355)에 전화하면 상담받을 수 있습니다.',
    },
    {
      type: 'list',
      heading: '신청 시 필요한 서류',
      items: [
        '신분증(주민등록증·여권)',
        '본인 명의 통장 사본',
        '금융정보 제공 동의서(현장 작성)',
        '배우자 금융정보 제공 동의서(해당 시)',
      ],
    },
    {
      type: 'text',
      heading: '신청 방법',
      body: '두 가지 방법 중 편한 방법을 선택합니다.',
    },
    {
      type: 'list',
      items: [
        '방문 신청: 주소지 읍·면·동 주민센터 또는 국민연금공단 지사 (신분증 지참)',
        '온라인 신청: 복지로(www.bokjiro.go.kr) → 서비스 신청 → 기초연금 검색',
      ],
    },
    {
      type: 'warning',
      heading: '주의: 급여 유형별 감액 가능성',
      body: '국민기초생활보장 수급자 중 생계급여·의료급여를 받는 경우, 기초연금 지급액이 생계급여 기준에 따라 일부 조정될 수 있습니다. 또한 배우자 사망 시 [[survivor-pension|유족연금]]과 중복 수급 시 감액이 발생할 수 있습니다. 수급 전 주민센터에서 정확한 금액을 확인하세요.',
    },
  ],

  faq: [
    {
      question: '국민연금을 받고 있어도 기초연금을 받을 수 있나요?',
      answer:
        '국민연금을 받더라도 기초연금을 받을 수 있습니다. 다만 국민연금 수령액이 기준금액(2025년 기준 약 50만 원)을 초과하면 기초연금이 최대 50%까지 감액됩니다. 수령 여부와 금액은 국민연금공단에서 개인 상황에 맞게 산정합니다.',
    },
    {
      question: '신청 후 언제부터 받을 수 있나요?',
      answer:
        '신청 후 통상 30일 이내에 결과를 통보받습니다. 수급자로 결정되면 신청한 달부터 수급이 시작되며, 매월 25일에 신청 시 등록한 본인 계좌로 입금됩니다.',
    },
    {
      question: '자녀가 대신 신청할 수 있나요?',
      answer:
        '본인이 직접 신청하기 어려운 경우, 가족이나 법정대리인이 대리 신청할 수 있습니다. 주민센터 방문 시 대리인 신분증, 위임장, 어르신 신분증을 함께 지참하세요.',
    },
  ],

  cautionNote:
    '이 글은 2025년 1월 기준 정보를 바탕으로 작성되었습니다. 선정기준액·수령액은 매년 변경될 수 있으니 신청 전 보건복지부 또는 주민센터에서 최신 내용을 확인하시기 바랍니다.',

  relatedSlugs: ['national-pension-timing', 'senior-discount-guide', 'housing-pension'],

  relatedCalculator: {
    brand: siteConfig.calculatorSiteName,
    name: '만 나이 계산기',
    url: 'https://www.jptcalc.kr/calc/date/age/',
    openMode: 'new-tab',
    category: 'finance',
    crossSiteTrackingKey: 'guide-basic-pension-age',
  },
  calculatorCTA: {
    text: '만 나이 확인하기',
    subText: `${siteConfig.calculatorSiteName} - 무료`,
  },
};

export default article;
