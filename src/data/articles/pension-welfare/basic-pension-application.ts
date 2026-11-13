import type { ContentItem } from '@/types/content';
import { siteConfig } from '@/config/siteConfig';

const article: ContentItem = {
  slug: 'basic-pension-application',
  title: '기초연금 신청 방법과 수령 조건',
  seoTitle: '기초연금 신청 방법 - 자격 조건과 수령 금액',
  seoDescription: '만 65세 이상 소득 하위 70%에 해당하면 기초연금을 받을 수 있습니다. 단독가구 최대 월 349,700원 수령 기준, 자격 조건, 주민센터·복지로 신청 방법을 공식 기준으로 검증했습니다.',
  category: 'pension-welfare',
  template: 'policy',
  targetUser: 'senior',

  createdAt: '2025-01-15',
  updatedAt: '2026-11-13',
  effectiveDate: '2026-01-01',
  reviewStatus: 'current',
  quizId: 'basic-pension',

  summary:
    '만 65세 이상 소득 하위 70%라면 기초연금을 받을 수 있습니다. 단독가구 최대 월 349,700원, 자격 조건과 신청 방법을 한눈에 정리했습니다.',
  heroDescription:
    '기초연금은 노후 소득을 보장하기 위한 대표 복지 제도입니다. 자격 조건부터 신청 절차, 수령 금액, 자주 묻는 질문까지 정리합니다.',

  keyPoints: [
    '만 65세 이상, 소득 하위 70% 해당자',
    '단독가구 최대 월 349,700원',
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
      note: '기초연금 제도 안내 (기초연금법 제6조 연계감액·제8조 부부 20% 감액·제14조 지급 시기, 시행규칙 제6·8·9조)',
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
      body: '기초연금은 만 65세 이상 어르신 중 소득·재산이 적은 분께 매달 드리는 연금입니다. 2026년 기준 소득 하위 70%에 해당하면 신청 자격이 되며, 단독가구 최대 월 349,700원을 지원받습니다. 매년 물가 상승률을 반영해 금액이 조금씩 오릅니다. 기초연금 외에도 [[housing-benefit|주거급여]]나 [[care-service-selection-guide|노인돌봄서비스]]를 함께 받을 수 있으니 확인해보세요.',
    },
    {
      type: 'info',
      heading: '2026년 기초연금 수령 금액',
      body: '2026년 기준 기초연금 최대 수령액은 월 349,700원(단독가구)입니다. 부부가 모두 수령하는 경우 각 20%를 감액해 각각 279,760원을 받습니다. 2025년 대비 2.1% 인상되었습니다.',
    },
    {
      type: 'text',
      heading: '신청 자격 조건',
      body: '다음 두 가지 조건을 동시에 충족해야 합니다.',
    },
    {
      type: 'numbered-list',
      heading: '자격 확인 순서',
      items: [
        '연령 조건: 신청일 기준 만 65세 이상',
        '소득인정액 조건: 단독가구 월 247만 원 이하, 부부가구 월 395.2만 원 이하 (2026년 선정기준액)',
      ],
    },
    {
      type: 'tip',
      heading: '신청은 언제부터 할 수 있나요?',
      body: '만 65세 생일이 속하는 달의 1개월 전부터 신청 가능합니다. 예를 들어 6월 생일이라면 5월 1일부터 신청할 수 있습니다. 지급은 신청한 날이 속하는 달부터이므로(기초연금법 제14조제1항) 생일이 속한 달을 넘겨 신청하면 그 이전 달분은 받을 수 없습니다. 생일 전달에 미리 신청해 두면 생일이 속한 달부터 받습니다. 신청 전 궁금한 점은 국민연금공단(☎ 1355)에 전화하면 상담받을 수 있습니다.',
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
      heading: '주의: 생계급여 차감과 유족연금 영향',
      body: '기초생활수급자도 기초연금은 그대로 받습니다. 다만 기초연금이 소득인정액에 이전소득으로 들어가기 때문에(국민기초생활보장법 시행령 제5조제1항제4호다목), 생계급여를 받는 경우 기초연금을 받은 만큼 생계급여가 줄어듭니다. 또한 배우자 사망 후 받는 [[survivor-pension|유족연금]]은 국민연금 연계감액 대상은 아니지만 소득인정액에 포함되어 기초연금 수급 여부·금액에 영향을 줄 수 있습니다. 수급 전 주민센터에서 정확한 금액을 확인하세요.',
    },
  ],

  faq: [
    {
      question: '국민연금을 받고 있어도 기초연금을 받을 수 있나요?',
      answer:
        '국민연금을 받더라도 기초연금을 받을 수 있습니다. 다만 국민연금 수령액이 기준금액(기초연금 기준연금액의 150%, 2026년 기준 약 52만 원)을 초과하면 기초연금이 최대 50%까지 감액됩니다. 수령 여부와 금액은 국민연금공단에서 개인 상황에 맞게 산정합니다.',
    },
    {
      question: '신청 후 언제부터 받을 수 있나요?',
      answer:
        '신청을 접수한 날부터 30일 이내에 결과를 통보받습니다(소득·재산 조사에 시일이 걸리는 특별한 사유가 있으면 60일 이내, 기초연금법 시행규칙 제8조제1항). 수급자로 결정되면 신청한 달부터 수급이 시작되며, 매월 25일(토요일·공휴일이면 그 전날)에 신청 시 등록한 본인 계좌로 입금됩니다.',
    },
    {
      question: '자녀가 대신 신청할 수 있나요?',
      answer:
        '본인이 직접 신청하기 어려운 경우, 친족(민법 제777조: 8촌 이내 혈족, 4촌 이내 인척, 배우자)이나 관계 공무원이 대리 신청할 수 있습니다(기초연금법 시행규칙 제6조). 주민센터 방문 시 대리인 신분증, 위임장, 어르신 신분증을 함께 지참하세요.',
    },
    {
      question: '소득인정액 계산 시 자녀 재산도 포함되나요?',
      answer:
        '아닙니다. 소득인정액은 신청인과 배우자의 소득·재산만을 기준으로 산정합니다. 자녀 명의의 재산이나 소득은 원칙적으로 포함되지 않습니다. 기초연금은 부양의무자 기준을 적용하지 않기 때문에 자녀의 소득 자체는 수급 자격 판단에 들어가지 않습니다. 소득인정액에는 금융재산, 일반재산(부동산 등), 근로소득 등이 포함되며, 정확한 산정은 주민센터 또는 국민연금공단(☎ 1355)에서 개인별로 안내받을 수 있습니다.',
    },
  ],

  cautionNote:
    '이 글은 2026년 1월 기준 정보를 바탕으로 작성되었습니다. 선정기준액·수령액은 매년 변경될 수 있으니 신청 전 보건복지부 또는 주민센터에서 최신 내용을 확인하시기 바랍니다.',

  relatedSlugs: ['turning-65-benefit-guide', 'national-pension-timing', 'senior-discount-legal-support-guide', 'housing-pension', 'national-pension-receiving-strategy-guide'],

  relatedCalculator: {
    brand: siteConfig.calculatorSiteName,
    name: '기초연금 수급 판정 계산기',
    url: 'https://www.jptcalc.kr/calc/pension-welfare/basic-pension/',
    openMode: 'new-tab',
    category: 'pension',
    crossSiteTrackingKey: 'guide-basic-pension-application',
  },
  calculatorCTA: {
    text: '기초연금 수급 자격 확인해보기',
    subText: `${siteConfig.calculatorSiteName} · 무료`,
  },
};

export default article;
