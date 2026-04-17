import type { ContentItem } from '@/types/content';
import { siteConfig } from '@/config/siteConfig';

const article: ContentItem = {
  slug: 'basic-pension-reduction',
  title: '기초연금 감액 기준과 수급액을 최대한 늘리는 방법에 대한 완벽 정리',
  seoTitle: '기초연금 감액 기준 - 국민연금 연계 감액, 부부 감액 총정리',
  seoDescription: '기초연금 감액이 적용되는 국민연금 연계 감액, 부부 감액 기준을 설명하고, 수급액을 최대한 받을 수 있는 방법을 안내합니다. 감액 없이 전액 수령하는 조건도 확인하세요.',
  category: 'pension-welfare',
  template: 'standard',
  targetUser: 'both',

  createdAt: '2026-04-02',
  updatedAt: '2026-04-17',
  effectiveDate: '2026-01-01',
  reviewStatus: 'current',

  summary:
    '기초연금은 국민연금 수령액이 많거나 부부가 함께 수급하면 감액됩니다. 감액 기준을 이해하고 수급액을 최대화하는 방법을 확인하면 노후 소득을 더 효율적으로 관리할 수 있습니다.',

  heroDescription:
    '기초연금을 신청했는데 왜 덜 받는지 의아했던 분들을 위해 감액 기준을 명확히 설명합니다. 국민연금 연계 감액과 부부 감액, 감액을 줄이는 방법까지 안내합니다.',

  keyPoints: [
    '국민연금 수령액이 기초연금 기준액의 150% 초과 시 연계 감액 적용',
    '부부가 함께 수급하면 각자 수령액의 20%가 감액됨',
    '소득·재산이 선정 기준에 가깝다면 신청 시기나 자산 구성 검토 필요',
  ],

  tags: ['기초연금감액', '기초연금', '국민연금연계', '부부감액', '노인연금'],
  hubKey: ['retirement-income', 'government-benefits'],
  order: 28,
  isFeatured: false,

  relatedCalculator: {
    brand: siteConfig.calculatorSiteName,
    name: '기초연금 수급 판정 계산기',
    url: 'https://www.jptcalc.kr/calc/pension-welfare/basic-pension/',
    openMode: 'new-tab',
    category: 'pension',
    crossSiteTrackingKey: 'guide-basic-pension-reduction',
  },
  calculatorCTA: {
    text: '기초연금 감액 여부 확인해보기',
    subText: `${siteConfig.calculatorSiteName} · 무료`,
  },

  officialSources: [
    { name: '국민연금공단', url: 'https://www.nps.or.kr', note: '기초연금 수급 안내 및 감액 기준' },
    { name: '보건복지부', url: 'https://www.mohw.go.kr', note: '기초연금 제도 안내' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr', note: '기초연금 모의 계산 및 신청' },
  ],

  sections: [
    {
      type: 'text',
      heading: '기초연금 감액이란?',
      body: '국민연금을 많이 받으면 기초연금을 못 받는다고 알고 있는 분들이 많은데, 실제로는 그렇지 않습니다. 국민연금이 아무리 많아도 소득 기준을 충족하면 기초연금은 받을 수 있습니다. 단, 수령액이 줄어들 수는 있습니다. [[basic-pension-application|기초연금]] 감액에는 크게 두 가지 유형이 있습니다. 국민연금 수령액과 연계하여 줄이는 연계 감액, 그리고 부부가 함께 받을 때 적용하는 부부 감액입니다. 두 감액이 동시에 적용될 수도 있습니다.',
    },
    {
      type: 'list',
      heading: '국민연금 연계 감액 기준',
      items: [
        '기초연금 기준연금액의 150%를 초과하는 국민연금을 받으면 감액 적용',
        '2026년 기준: 기준연금액 약 33만 4,810원 → 150%는 약 50만 2,215원',
        '국민연금 수령액이 50만 2,215원을 초과할 경우 초과분의 2분의 1만큼 감액',
        '단, 감액 후에도 기준연금액의 50% 이상은 보장됨 (최저 보장액)',
        '국민연금을 받지 않는 어르신은 연계 감액 해당 없음',
      ],
    },
    {
      type: 'list',
      heading: '부부 감액 기준',
      items: [
        '부부 모두 기초연금 수급 대상인 경우 각자 수령액의 20% 감액',
        '예: 각 33만 원 기준 → 26만 4,000원씩 수령 (2명 합계 약 52만 8,000원)',
        '부부 중 한 명만 수급 대상인 경우 감액 없음',
        '별거 중인 부부라도 법적 부부이면 부부 감액 적용',
        '사실혼 관계는 별도 기준으로 판단',
      ],
    },
    {
      type: 'info',
      heading: '두 감액이 동시에 적용되는 경우',
      body: '국민연금 연계 감액과 부부 감액이 동시에 해당되면 두 가지 감액이 중복 적용됩니다. 그러나 최저 보장액(기준연금액의 50%)은 반드시 보장되므로, 어떠한 경우에도 일정 금액 이상은 받을 수 있습니다. 정확한 수령 예상액은 국민연금공단(☎ 1355)에 문의하거나 복지로 모의 계산기를 활용하세요.',
    },
    {
      type: 'list',
      heading: '수급액을 최대화하는 방법',
      items: [
        '국민연금 조기 수령 여부 재검토 - 조기 수령 시 연금액이 줄어 연계 감액 가능성 낮아짐',
        '소득·재산 신고의 정확성 확인 - 실제보다 과다 신고되지 않았는지 점검',
        '금융재산 관리 - 일반 예금보다 소득 인정액 산정이 불리하지 않은 금융상품 검토',
        '주택 가격 현실화 - 공시가격 기준으로 산정되므로 실거래가와 차이 확인',
        '배우자 동시 수급 여부 재검토 - 소득 기준상 한 명만 수급 가능한지 확인',
      ],
    },
    {
      type: 'warning',
      heading: '감액 계산 착오에 주의하세요',
      body: '국민연금 연계 감액 계산은 복잡해서 본인이 직접 계산하다 보면 오류가 생기기 쉽습니다. 복지로(bokjiro.go.kr) 모의 계산기나 국민연금공단 상담(☎ 1355)을 통해 정확한 감액 적용 여부와 예상 수령액을 반드시 확인하세요. 또한 소득·재산 신고 내용이 실제와 다르게 등록되어 있으면 과다 감액이 발생할 수 있으니, 수령액이 예상보다 적다면 이의신청을 고려하세요.',
    },
    {
      type: 'tip',
      heading: '수급 탈락 이후에도 재신청 가능합니다',
      body: '소득·재산이 선정 기준을 초과하여 탈락했다면, 이후 소득이 줄거나 재산이 변경되면 다시 신청할 수 있습니다. [[national-pension-timing|국민연금 수령 시기]]도 기초연금 수급에 영향을 주므로, 퇴직 전에 전략적으로 검토하는 것이 좋습니다. 구체적인 상담은 ☎ 1355 (국민연금공단)로 문의하세요.',
    },
  ],

  faq: [
    {
      question: '국민연금을 많이 받으면 기초연금을 전혀 못 받나요?',
      answer: '국민연금이 아무리 많아도 기초연금 선정 기준 소득액 이하라면 기초연금을 받을 수 있습니다. 다만 연계 감액이 적용되어 기준연금액의 50% 수준까지만 받을 수 있습니다.',
    },
    {
      question: '배우자가 사망하면 부부 감액이 해제되나요?',
      answer: '네. 배우자가 사망하면 다음 달부터 부부 감액이 해제되어 원래 금액(국민연금 연계 감액만 적용)을 받게 됩니다. 주민센터 또는 국민연금공단(☎ 1355)에 배우자 사망 신고를 하면 됩니다.',
    },
    {
      question: '국민연금을 아예 받지 않으면 기초연금 전액을 받을 수 있나요?',
      answer: '국민연금을 수령하지 않는 경우 연계 감액이 적용되지 않아 전액 수령이 가능합니다. 단, 소득 인정액이 선정 기준액 이하여야 합니다.',
    },
  ],

  cautionNote:
    '이 글은 2026년 4월 기준으로 작성되었습니다. 기초연금 기준연금액과 감액 기준은 매년 물가 등에 따라 조정되므로 국민연금공단(☎ 1355) 또는 복지로에서 최신 금액을 확인하세요.',

  relatedSlugs: ['basic-pension-application', 'national-pension-timing', 'survivor-pension', 'near-poverty-benefits'],
};

export default article;
