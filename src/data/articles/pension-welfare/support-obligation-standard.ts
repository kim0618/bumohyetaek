import type { ContentItem } from '@/types/content';
import { siteConfig } from '@/config/siteConfig';

const article: ContentItem = {
  slug: 'support-obligation-standard',
  title: '기초생활수급 부양의무자 기준 완화 - 자녀 소득이 있어도 수급 가능할까?',
  seoTitle: '기초생활수급 부양의무자 기준 - 완화 내용과 신청 방법',
  seoDescription: '기초생활보장 수급 신청 시 자녀 소득 때문에 탈락했다면 부양의무자 기준 완화를 확인하세요. 생계급여 부양의무자 기준 폐지, 의료급여 완화 내용, 신청 방법을 정리했습니다.',
  category: 'pension-welfare',
  template: 'policy',
  targetUser: 'both',

  createdAt: '2026-03-30',
  updatedAt: '2026-03-30',
  effectiveDate: '2026-01-01',
  reviewStatus: 'current',

  summary:
    '자녀 소득이 있다는 이유로 기초생활수급에서 탈락했다면 부양의무자 기준 완화를 확인해보세요. 생계급여는 부양의무자 기준이 폐지되었고, 의료급여도 점차 완화되고 있습니다.',
  heroDescription:
    '기초생활보장제도의 부양의무자 기준은 수급 탈락의 가장 큰 원인이었습니다. 최근 생계급여 부양의무자 기준이 폐지되고 의료급여도 완화되어 더 많은 어르신이 혜택을 받을 수 있습니다.',

  keyPoints: [
    '생계급여 부양의무자 기준 전면 폐지',
    '의료급여는 부양의무자 기준 단계적 완화 중',
    '자녀와 연락 두절 시에도 수급 신청 가능',
  ],

  tags: ['부양의무자', '기초생활수급', '생계급여', '의료급여', '수급자'],
  hubKey: ['government-benefits'],
  order: 15,
  isFeatured: false,

  officialSources: [
    {
      name: '보건복지부',
      url: 'https://www.mohw.go.kr',
      note: '기초생활보장 제도 안내',
    },
    {
      name: '복지로',
      url: 'https://www.bokjiro.go.kr',
      note: '온라인 신청 및 모의 계산',
    },
    {
      name: '보건복지상담센터',
      url: 'https://www.129.go.kr',
      note: '전화상담 129',
    },
  ],

  sections: [
    {
      type: 'text',
      heading: '부양의무자 기준이란?',
      body: '부양의무자 기준은 기초생활보장 수급자 선정 시 본인뿐 아니라 자녀(1촌 직계혈족과 그 배우자)의 소득·재산까지 고려하는 제도입니다. 자녀가 일정 소득 이상이면 부모가 생활이 어려워도 수급을 받지 못하는 경우가 많았습니다. 이 때문에 [[basic-livelihood-benefit|기초생활수급]]을 신청해도 탈락하는 사각지대가 발생했습니다.',
    },
    {
      type: 'info',
      heading: '생계급여 부양의무자 기준 폐지',
      body: '2022년부터 생계급여의 부양의무자 기준이 전면 폐지되었습니다. 이제 자녀의 소득·재산과 관계없이 본인의 소득인정액만으로 수급 자격을 판단합니다. 다만, 부양의무자가 연 소득 1억 원 초과이거나 부동산 9억 원 초과인 경우에는 예외적으로 기준이 적용됩니다.',
    },
    {
      type: 'text',
      heading: '의료급여 부양의무자 기준 완화',
      body: '의료급여는 아직 부양의무자 기준이 완전히 폐지되지 않았지만 단계적으로 완화되고 있습니다. 수급권자가 만 65세 이상 노인, 장애 정도가 심한 장애인, 국가유공자 등인 경우 부양의무자 기준이 적용되지 않습니다. 해당 여부는 [[medical-aid-system|의료급여 제도]] 안내에서 자세히 확인할 수 있습니다.',
    },
    {
      type: 'numbered-list',
      heading: '수급 신청 방법',
      items: [
        '주소지 읍·면·동 주민센터 방문 (본인 또는 가족 신청)',
        '신청서 작성 및 소득·재산 관련 서류 제출',
        '담당 공무원의 소득인정액 조사 (약 30일 소요)',
        '수급 자격 결정 통보 (우편 또는 문자)',
        '수급 결정 후 매월 생계급여 계좌 입금',
      ],
    },
    {
      type: 'list',
      heading: '신청 시 필요한 서류',
      items: [
        '신분증',
        '가족관계증명서',
        '소득·재산 관련 서류',
      ],
    },
    {
      type: 'tip',
      heading: '자녀와 연락이 끊긴 경우에도 신청 가능합니다',
      body: '부양의무자인 자녀와 연락이 끊기거나 부양을 거부하는 경우, 주민센터에 "부양 거부·기피 확인서"를 제출하면 부양의무자 기준을 적용하지 않고 심사를 진행합니다. 가정 폭력, 가출, 행방불명 등 다양한 사유가 인정됩니다. 신청 후 통상 30일 이내에 수급 자격 결과를 통보받을 수 있습니다. 궁금한 점은 보건복지상담센터(☎ 129) 또는 주민센터에 문의하세요.',
    },
    {
      type: 'warning',
      heading: '주의: 급여별 부양의무자 기준 차이',
      body: '생계급여는 부양의무자 기준이 사실상 폐지되었지만, 의료급여는 여전히 부양의무자 기준이 적용되는 경우가 있습니다. [[housing-benefit|주거급여]]와 교육급여는 이미 부양의무자 기준 없이 운영 중입니다. 급여 유형별로 기준이 다르므로 주민센터에서 정확히 확인하세요.',
    },
  ],

  faq: [
    {
      question: '자녀 소득이 높으면 무조건 탈락하나요?',
      answer:
        '생계급여는 부양의무자 기준이 폐지되어 자녀 소득과 관계없이 본인 소득인정액 기준으로 판단합니다. 다만 부양의무자의 연 소득이 1억 원을 초과하거나 재산이 9억 원을 초과하면 예외적으로 기준이 적용됩니다.',
    },
    {
      question: '기존에 부양의무자 기준으로 탈락했는데 다시 신청할 수 있나요?',
      answer:
        '네, 다시 신청할 수 있습니다. 기준이 완화된 이후 재신청하면 변경된 기준으로 새로 심사합니다. 주민센터에 방문해 재신청 의사를 밝히시면 됩니다.',
    },
    {
      question: '기초생활수급자가 되면 기초연금도 받을 수 있나요?',
      answer:
        '기초생활수급자도 기초연금을 받을 수 있습니다. 다만 생계급여를 받는 경우 기초연금액만큼 생계급여가 차감될 수 있어 실질적인 총수령액은 달라질 수 있습니다.',
    },
  ],

  cautionNote:
    '이 글은 2026년 기준 정보를 바탕으로 작성되었습니다. 부양의무자 기준 완화 범위와 선정 기준은 매년 변경될 수 있으니 신청 전 주민센터 또는 보건복지상담센터(129)에서 확인하시기 바랍니다.',

  relatedCalculator: {
    brand: siteConfig.calculatorSiteName,
    name: '기초연금 수급 판정 계산기',
    url: 'https://www.jptcalc.kr/calc/pension-welfare/basic-pension/',
    openMode: 'new-tab',
    category: 'pension',
    crossSiteTrackingKey: 'guide-support-obligation',
  },
  calculatorCTA: {
    text: '기초연금 수급 자격 확인해보기',
    subText: `${siteConfig.calculatorSiteName} · 무료`,
  },

  relatedSlugs: ['basic-livelihood-benefit', 'medical-aid-system', 'housing-benefit'],
};

export default article;
