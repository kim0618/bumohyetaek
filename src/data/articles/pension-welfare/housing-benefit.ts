import type { ContentItem } from '@/types/content';

const article: ContentItem = {
  slug: 'housing-benefit',
  title: '주거급여 신청 방법과 지원 금액 안내',
  seoTitle: '주거급여 신청 방법 - 대상·금액·신청 절차 총정리',
  seoDescription: '기준 중위소득 48% 이하 가구라면 주거급여를 신청할 수 있습니다. 임차료 지원 금액, 자가 주택 수선비 기준, 주민센터 신청 방법을 한눈에 정리했습니다.',
  category: 'pension-welfare',
  template: 'policy',
  targetUser: 'both',

  createdAt: '2025-03-05',
  updatedAt: '2025-03-20',
  effectiveDate: '2025-01-01',
  reviewStatus: 'current',

  summary:
    '주거급여는 저소득 가구에 임차료 또는 집수리 비용을 지원하는 복지 제도입니다. 선정 요건과 지원 금액, 신청 방법을 정리했습니다.',
  heroDescription:
    '주거급여는 기준 중위소득 48% 이하 가구에 임차료 또는 주택 수선비를 지원하는 국가 복지 제도입니다. 어르신 단독 가구도 신청할 수 있으며 매달 통장으로 임차료가 입금됩니다.',

  keyPoints: [
    '기준 중위소득 48% 이하 가구 지원',
    '임차 가구는 월세 보조, 자가 가구는 집수리 지원',
    '주민센터 또는 복지로에서 신청',
  ],

  tags: ['주거급여', '임차료지원', '저소득', '복지급여', '주택수선'],
  hubKey: ['government-benefits'],
  order: 4,
  isFeatured: false,

  officialSources: [
    {
      name: '국토교통부 마이홈',
      url: 'https://www.myhome.go.kr',
      note: '주거급여 안내 및 모의계산',
    },
    {
      name: '복지로',
      url: 'https://www.bokjiro.go.kr',
      note: '온라인 신청 포털',
    },
    {
      name: '주거급여콜센터',
      url: 'https://www.myhome.go.kr',
      note: '1600-0777',
    },
  ],

  sections: [
    {
      type: 'text',
      heading: '주거급여란?',
      body: '주거급여는 국민기초생활보장법에 따라 소득이 낮은 가구의 주거 안정을 위해 임차료(월세) 또는 자가 주택 수선비를 지원하는 제도입니다. 국토교통부가 관리하며, 한국토지주택공사(LH)가 집수리 서비스를 제공합니다. [[basic-livelihood-benefit|기초생활보장 급여]] 중 가장 완화된 소득 기준을 적용하므로 다른 급여보다 폭넓게 수급할 수 있습니다.',
    },
    {
      type: 'info',
      heading: '2025년 선정 기준',
      body: '소득인정액이 기준 중위소득 48% 이하인 가구가 대상입니다. 1인 가구 기준 월 약 106만 원 이하(2025년 기준)이면 신청 자격이 됩니다. 재산도 소득으로 환산해 합산하므로, 정확한 수급 여부는 주민센터에서 확인하세요. 주거급여는 [[support-obligation-standard|부양의무자 기준]]이 없어 자녀 소득과 무관하게 신청할 수 있습니다.',
    },
    {
      type: 'text',
      heading: '지원 내용',
      body: '임차(전·월세) 가구와 자가 가구에 따라 지원 방식이 다릅니다.',
    },
    {
      type: 'list',
      items: [
        '임차 가구: 실제 임차료를 기준 임대료 범위 내에서 지원 (서울 1인 가구 월 최대 341,000원)',
        '자가 가구: 노후도에 따라 경보수(457만 원)·중보수(849만 원)·대보수(1,241만 원) 수선 지원',
      ],
    },
    {
      type: 'list',
      heading: '신청 시 필요한 서류',
      items: [
        '신분증',
        '임대차계약서(임차인의 경우)',
        '본인 명의 통장 사본',
        '가족관계증명서',
      ],
    },
    {
      type: 'numbered-list',
      heading: '신청 방법',
      items: [
        '읍·면·동 주민센터 방문 신청 (본인 또는 가족·대리인 신청 가능)',
        '복지로(www.bokjiro.go.kr) 온라인 신청',
        '담당자의 소득·재산 조사 (약 30일 소요)',
        '수급자 선정 시 다음 달부터 임차료 지급 또는 수선 신청 접수',
      ],
    },
    {
      type: 'tip',
      heading: '미리 모의 계산해보세요',
      body: '국토교통부 마이홈(myhome.go.kr) 사이트에서 주거급여 모의계산기를 이용하면 내 가구가 지원 대상인지, 얼마나 받을 수 있는지 미리 확인할 수 있습니다.',
    },
    {
      type: 'warning',
      heading: '주의: 임대차 계약서 확인 필요',
      body: '임차 가구는 실제 임대차 계약서가 있어야 임차료 지원이 가능합니다. 가족 간 임대차 계약은 원칙적으로 인정되지 않습니다. 갑작스러운 주거 위기 상황에는 [[emergency-welfare-support|긴급복지지원]]으로 더 빠른 주거 지원을 받을 수도 있습니다.',
    },
  ],

  faq: [
    {
      question: '기초연금을 받고 있어도 주거급여를 신청할 수 있나요?',
      answer:
        '네, 기초연금 수급 여부와 관계없이 소득인정액 기준을 충족하면 주거급여를 신청할 수 있습니다. 두 급여는 별도로 운영됩니다.',
    },
    {
      question: '자녀와 함께 살면 신청이 어렵나요?',
      answer:
        '주거급여는 가구 단위로 소득·재산을 합산합니다. 자녀와 같은 주소에 살고 있으면 자녀의 소득도 반영되어 선정이 어려울 수 있습니다. 별도 세대를 구성한 경우에는 어르신 단독으로 신청할 수 있습니다.',
    },
    {
      question: '지원금은 언제 나오나요?',
      answer:
        '신청 후 소득·재산 조사를 거쳐 수급자로 선정되면 다음 달 20일(지역별 상이)에 등록한 계좌로 임차료가 입금됩니다.',
    },
  ],

  cautionNote:
    '이 글은 2025년 1월 기준 정보를 바탕으로 작성되었습니다. 기준 중위소득과 지원 금액은 매년 변경되므로 신청 전 주민센터 또는 주거급여콜센터(☎ 1600-0777)에서 최신 내용을 확인하세요.',

  relatedSlugs: ['basic-pension-application', 'elderly-care-service', 'senior-public-housing'],
};

export default article;
