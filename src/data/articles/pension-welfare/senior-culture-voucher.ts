import type { ContentItem } from '@/types/content';
import { siteConfig } from '@/config/siteConfig';

const article: ContentItem = {
  slug: 'senior-culture-voucher',
  title: '노인 문화누리카드 신청 방법과 활용법 완벽 가이드 - 지원 금액 및 사용처 안내',
  seoTitle: '노인 문화누리카드 신청 방법 - 대상, 혜택, 사용처 총정리',
  seoDescription: '만 65세 이상 기초생활수급자·차상위계층 어르신을 위한 문화누리카드 신청 방법, 지원 금액, 사용처를 안내합니다. 문화·여행·체육 활동에 사용할 수 있는 연간 지원금입니다.',
  category: 'pension-welfare',
  template: 'policy',
  targetUser: 'both',

  createdAt: '2026-04-02',
  updatedAt: '2026-04-02',
  effectiveDate: '2026-01-01',
  reviewStatus: 'current',

  summary:
    '문화누리카드는 기초생활수급자·차상위계층 어르신에게 연간 약 13만 원의 문화·여행·체육 활동비를 지원합니다. 만 65세 이상이면 주민센터 또는 온라인으로 신청할 수 있습니다.',

  heroDescription:
    '문화누리카드는 소득이 낮은 어르신의 문화 생활을 지원하는 국가 복지 카드입니다. 신청 자격부터 지원 금액, 사용 가능한 가맹점까지 한 번에 안내합니다.',

  keyPoints: [
    '기초생활수급자·차상위계층 대상 연간 13만 원 문화활동비 지원',
    '도서·영화·공연·여행·체육시설 등 다양한 가맹점에서 사용 가능',
    '주민센터 방문 또는 문화누리 홈페이지에서 신청',
  ],

  tags: ['문화누리카드', '노인복지', '문화바우처', '기초생활수급자', '문화혜택'],
  hubKey: ['government-benefits'],
  order: 24,
  isFeatured: false,

  relatedCalculator: {
    brand: siteConfig.calculatorSiteName,
    name: '만 나이 계산기',
    url: 'https://www.jptcalc.kr/calc/date/age/',
    openMode: 'new-tab',
    category: 'finance',
    crossSiteTrackingKey: 'guide-culture-voucher-age',
  },

  calculatorCTA: {
    text: '만 65세 이상인지 바로 확인하기',
    subText: `${siteConfig.calculatorSiteName} - 무료`,
  },

  officialSources: [
    { name: '문화누리', url: 'https://www.munhwanuri.or.kr', note: '문화누리카드 공식 신청 및 안내' },
    { name: '문화체육관광부', url: 'https://www.mcst.go.kr', note: '문화바우처 사업 제도 안내' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr', note: '온라인 신청 서비스' },
  ],

  sections: [
    {
      type: 'text',
      heading: '문화누리카드란 무엇인가요?',
      body: '문화누리카드는 문화체육관광부가 운영하는 문화바우처 사업으로, 소득이 낮은 국민의 문화 생활을 지원합니다. 기초생활수급자와 차상위계층을 대상으로 연간 일정 금액을 카드 형태로 지원하며, 도서 구입, 영화 관람, 공연 관람, 국내 여행, 체육시설 이용 등에 사용할 수 있습니다. [[basic-livelihood-benefit|기초생활보장 수급자]] 또는 [[near-poverty-benefits|차상위계층]] 어르신이라면 신청 자격이 됩니다.',
    },
    {
      type: 'list',
      heading: '신청 자격',
      items: [
        '기초생활수급자 (생계·의료·주거·교육급여 수급자 모두 포함)',
        '차상위계층 (차상위 확인서 발급 대상자)',
        '만 6세 이상이면 누구나 신청 가능 (어르신도 해당)',
        '기존 카드 보유자는 매년 자동 갱신 (신규 신청 불필요)',
      ],
    },
    {
      type: 'info',
      heading: '2026년 지원 금액',
      body: '2026년 문화누리카드 지원 금액은 1인당 연간 13만 원입니다. 카드 잔액은 해당 연도 내에 사용해야 하며, 미사용 잔액은 이월되지 않습니다. 지원 금액은 매년 예산에 따라 조정될 수 있으므로 문화누리 홈페이지(www.munhwanuri.or.kr) 또는 ☎ 1544-3412에서 최신 정보를 확인하세요.',
    },
    {
      type: 'list',
      heading: '사용 가능한 분야',
      items: [
        '문화 - 도서 구입, 음반·DVD 구매, 문화센터 수강',
        '영화·공연 - 영화관, 연극·뮤지컬 관람, 전시 관람',
        '여행 - 국내 숙박, 관광지 입장료, 교통 일부',
        '체육 - 수영장·헬스장·볼링장 등 체육시설 이용',
        '온라인 - 온라인 서점, 스트리밍 서비스 일부 가맹점',
      ],
    },
    {
      type: 'numbered-list',
      heading: '신청 방법',
      items: [
        '온라인: 문화누리 홈페이지(www.munhwanuri.or.kr) 또는 복지로(www.bokjiro.go.kr)에서 신청',
        '방문: 거주지 읍·면·동 주민센터 또는 우체국에서 신청',
        '전화: ☎ 1544-3412로 신청 상담 가능',
        '신청 후 카드 발급까지 약 7-10일 소요',
        '카드 발급 후 문화누리 홈페이지에서 가맹점 검색 후 이용',
      ],
    },
    {
      type: 'list',
      heading: '신청 시 필요한 서류',
      items: [
        '신분증 (주민등록증, 운전면허증 등)',
        '기초생활수급자 확인 서류 또는 차상위계층 확인서 (주민센터에서 발급)',
        '대리 신청 시: 위임장, 대리인 신분증, 수급자 신분증 사본',
      ],
    },
    {
      type: 'tip',
      heading: '스마트폰 앱으로 더 편리하게',
      body: '문화누리 앱을 설치하면 잔액 조회, 가맹점 검색, 사용 내역 확인이 편리합니다. 스마트폰 사용이 어려운 어르신은 자녀와 함께 방문하거나, 주민센터 담당자에게 도움을 요청하세요. 문의는 ☎ 129 (보건복지상담센터)로도 가능합니다.',
    },
  ],

  faq: [
    {
      question: '작년에 발급받은 문화누리카드를 올해도 쓸 수 있나요?',
      answer: '매년 자동 갱신되며, 새 금액이 기존 카드에 충전됩니다. 단, 전년도 미사용 잔액은 이월되지 않으니 연도 내에 모두 사용하세요.',
    },
    {
      question: '어르신 혼자 쓰기 어려운데 자녀가 대신 사용해도 되나요?',
      answer: '문화누리카드는 수급자 본인이 사용해야 합니다. 단, 자녀가 동행하여 어르신이 이용하는 시설이나 서비스 비용을 결제하는 것은 허용됩니다.',
    },
    {
      question: '가맹점이 아닌 곳에서 결제하면 어떻게 되나요?',
      answer: '문화누리 가맹점이 아닌 곳에서는 결제가 되지 않습니다. 사용 전 문화누리 홈페이지나 앱에서 가맹점 여부를 반드시 확인하세요. 문의는 ☎ 1544-3412입니다.',
    },
  ],

  cautionNote:
    '이 글은 2026년 4월 기준으로 작성되었습니다. 지원 금액과 가맹점은 연도별로 변경될 수 있으니 문화누리 홈페이지(www.munhwanuri.or.kr)에서 최신 정보를 확인하세요.',

  relatedSlugs: ['basic-livelihood-benefit', 'near-poverty-benefits', 'senior-discount-guide', 'senior-welfare-center'],
};

export default article;
