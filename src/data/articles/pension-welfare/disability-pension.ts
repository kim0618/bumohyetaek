import type { ContentItem } from '@/types/content';
import { siteConfig } from '@/config/siteConfig';

const article: ContentItem = {
  slug: 'disability-pension',
  title: '장애인연금 수급 자격과 신청 방법 - 기초연금 중복 수급까지',
  seoTitle: '장애인연금 신청 방법 - 자격 조건과 기초연금 중복 여부',
  seoDescription: '중증 장애인이라면 장애인연금으로 매월 최대 약 40만 원을 받을 수 있습니다. 장애인연금과 장애수당 차이, 수급 자격, 기초연금 중복 여부, 신청 방법을 안내합니다.',
  category: 'pension-welfare',
  template: 'policy',
  targetUser: 'both',

  createdAt: '2026-03-30',
  updatedAt: '2026-04-16',
  effectiveDate: '2026-01-01',
  reviewStatus: 'current',

  summary:
    '만 18세 이상 중증 장애인이라면 장애인연금을 매월 받을 수 있습니다. 장애수당과의 차이, 수급 자격, 기초연금 중복 여부를 정리했습니다.',
  heroDescription:
    '장애인연금은 중증 장애인의 소득 보장을 위한 국가 제도입니다. 장애수당과 어떻게 다른지, 기초연금과 함께 받을 수 있는지, 신청 방법은 무엇인지 상세히 안내합니다.',

  keyPoints: [
    '만 18세 이상 장애 정도가 심한 중증 장애인 대상',
    '기초급여 최대 월 334,810원 + 부가급여 최대 약 9만 원',
    '만 65세부터는 기초연금으로 전환, 부가급여만 유지',
  ],

  tags: ['장애인연금', '장애수당', '중증장애인', '장애인복지', '기초급여'],
  hubKey: ['government-benefits', 'retirement-income'],
  order: 19,
  isFeatured: false,

  officialSources: [
    {
      name: '보건복지부',
      url: 'https://www.mohw.go.kr',
      note: '장애인연금 제도 안내',
    },
    {
      name: '국민연금공단',
      url: 'https://www.nps.or.kr',
      note: '장애인연금 신청 및 상담',
    },
    {
      name: '복지로',
      url: 'https://www.bokjiro.go.kr',
      note: '온라인 신청 및 모의 계산',
    },
  ],

  sections: [
    {
      type: 'text',
      heading: '중증 장애인이라면 매월 최대 약 42만 원 수령 가능',
      body: '결론부터 말하면, 만 18세 이상 중증 장애인이면서 소득인정액 기준을 충족하면 장애인연금으로 매월 최대 약 42만 원을 받을 수 있습니다. 2010년에 도입된 이 제도는 장애로 인해 근로 능력이 제한된 분들의 소득을 보장합니다. [[disability-registration|장애인 등록]]을 마친 뒤 주민센터에서 신청하면 됩니다. 기초급여와 부가급여로 나뉘며, 구체적인 금액과 자격 조건을 아래에서 정리했습니다.',
    },
    {
      type: 'info',
      heading: '장애인연금 vs 장애수당 차이',
      body: '장애인연금은 장애 정도가 심한 중증 장애인에게 지급되며, 장애수당은 장애 정도가 심하지 않은 경증 장애인 중 기초생활수급자·차상위계층에게 월 2~4만 원을 지급하는 제도입니다. 두 제도는 대상이 다르므로 중복 수급은 불가능합니다.',
    },
    {
      type: 'numbered-list',
      heading: '수급 자격 조건 - 세 가지를 모두 충족해야 합니다',
      items: [
        '장애 정도: 장애인복지법에 따른 "장애 정도가 심한 장애인" (종전 1~3급에 해당)',
        '연령: 만 18세 이상 (만 65세 생일이 속하는 달 전월까지)',
        '소득인정액: 단독가구 월 약 130만 원 이하, 부부가구 월 약 208만 원 이하 (2026년 기준 선정기준액)',
      ],
    },
    {
      type: 'info',
      heading: '지급 금액',
      body: '장애인연금은 기초급여와 부가급여로 구성됩니다. 기초급여는 소득 보장을 위한 것으로 [[basic-pension-application|기초연금]]과 동일한 금액(최대 월 334,810원)이며, 부가급여는 장애로 인한 추가 비용을 보전하기 위한 것으로 수급 유형에 따라 월 2만~9만 원이 추가됩니다. 기초생활수급자인 경우 부가급여가 가장 높습니다.',
    },
    {
      type: 'warning',
      heading: '만 65세 이후 기초연금 전환 안내',
      body: '만 65세가 되면 장애인연금의 기초급여가 중단되고 기초연금으로 자동 전환됩니다. 부가급여(월 약 9만 원)는 계속 받을 수 있습니다. 기초연금 전환 시 금액 차이가 발생할 수 있으므로 전환 전에 국민연금공단에 문의해 예상 수령액을 확인하세요.',
    },
    {
      type: 'list',
      heading: '신청 시 필요한 서류',
      items: [
        '신분증',
        '본인 명의 통장 사본',
        '장애인증명서 또는 복지카드',
        '금융정보 제공 동의서(현장 작성)',
      ],
    },
    {
      type: 'numbered-list',
      heading: '신청 방법',
      items: [
        '주소지 읍·면·동 주민센터 방문 신청 (신분증, 장애인등록증 지참)',
        '복지로(www.bokjiro.go.kr) 온라인 신청',
        '국민연금공단 지사 방문 또는 전화(☎ 1355) 상담 후 신청',
        '소득·재산 조사 후 수급 여부 결정 통보 (약 30일)',
      ],
    },
    {
      type: 'summary',
      heading: '핵심 요약',
      items: [
        '장애 정도 심한 중증 장애인 + 소득인정액 기준 충족 시 수급 가능',
        '기초급여(최대 월 334,810원) + 부가급여(월 2~9만 원) 구성',
        '만 65세부터 기초급여는 기초연금으로 전환, 부가급여만 유지',
        '장애인연금과 장애수당은 대상이 달라 중복 수급 불가',
      ],
    },
  ],

  faq: [
    {
      question: '장애인연금과 국민연금 장애연금은 같은 건가요?',
      answer:
        '다른 제도입니다. 국민연금 장애연금은 국민연금 가입 중 장애가 발생한 경우 지급하며, 장애인연금은 소득이 낮은 중증 장애인에게 지급합니다. 국민연금 장애연금을 받더라도 소득인정액 기준을 충족하면 장애인연금도 받을 수 있지만, 기초급여가 감액될 수 있습니다.',
    },
    {
      question: '기초생활수급자인데 장애인연금을 추가로 받을 수 있나요?',
      answer:
        '네, 기초생활수급자도 장애인연금을 받을 수 있습니다. 다만 기초급여액만큼 생계급여가 차감될 수 있어 실질 총수령액에 차이가 생길 수 있습니다. 부가급여는 별도로 추가 지급됩니다.',
    },
    {
      question: '장애 정도 재심사에서 등급이 변경되면 연금이 중단되나요?',
      answer:
        '장애 정도 재심사 결과 "장애 정도가 심하지 않은 장애인"으로 변경되면 장애인연금 수급 자격이 상실됩니다. 대신 소득 기준을 충족하면 장애수당(월 2-4만 원)으로 전환될 수 있습니다. 재심사 결과에 이의가 있으면 통보일로부터 90일 이내에 국민연금공단에 이의신청할 수 있습니다.',
    },
    {
      question: '부부가 모두 중증 장애인이면 각각 받을 수 있나요?',
      answer:
        '네, 부부 모두 중증 장애인이고 각각 소득인정액 기준을 충족하면 개인별로 장애인연금을 받을 수 있습니다. 다만 부부가구의 소득인정액 기준(월 약 208만 원)은 단독가구 기준의 1.6배로 적용되므로, 부부 합산 소득이 이 기준을 초과하면 수급이 어려울 수 있습니다. 정확한 계산은 국민연금공단(☎ 1355)에서 확인하세요.',
    },
  ],

  cautionNote:
    '이 글은 2026년 기준 선정기준액과 지급액을 바탕으로 작성되었습니다. 매년 기준이 변경되므로 신청 전 국민연금공단(☎ 1355) 또는 보건복지상담센터(☎ 129)에서 최신 정보를 확인하세요.',

  relatedSlugs: ['disability-registration', 'basic-pension-application', 'basic-livelihood-benefit'],

  relatedCalculator: {
    brand: siteConfig.calculatorSiteName,
    name: '국민연금 수령액 계산기',
    url: 'https://www.jptcalc.kr/calc/pension-welfare/national-pension/',
    openMode: 'new-tab',
    category: 'pension',
    crossSiteTrackingKey: 'guide-disability-pension',
  },
  calculatorCTA: {
    text: '국민연금 예상 수령액 계산해보기',
    subText: `${siteConfig.calculatorSiteName} · 무료`,
  },
};

export default article;
