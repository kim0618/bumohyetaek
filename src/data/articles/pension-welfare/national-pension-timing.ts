import type { ContentItem } from '@/types/content';
import { siteConfig } from '@/config/siteConfig';

const article: ContentItem = {
  slug: 'national-pension-timing',
  title: '국민연금 조기수령 vs 연기수령, 언제 받는 게 유리할까?',
  seoTitle: '국민연금 조기수령 연기수령 비교 - 손익분기점 계산',
  seoDescription: '국민연금을 일찍 받으면 손해일까요? 조기노령연금과 연기연금의 차이, 손익분기점 계산법, 나에게 맞는 수령 시기 선택 기준을 정리했습니다.',
  category: 'pension-welfare',
  template: 'comparison',
  targetUser: 'both',

  createdAt: '2025-03-20',
  updatedAt: '2026-04-14',
  reviewStatus: 'current',

  summary:
    '국민연금은 언제 받느냐에 따라 총 수령액이 크게 달라집니다. 조기수령(최대 5년 일찍, 월 6% 감액)과 연기수령(최대 5년 연기, 월 7.2% 증액)의 손익분기점과 선택 기준을 정리했습니다.',
  heroDescription:
    '국민연금 수령 시기는 노후 재정에 큰 영향을 미칩니다. 조기에 받을지, 늦게 받을지 결정하기 전에 손익분기점과 건강·소득 상황을 함께 고려해야 합니다.',

  keyPoints: [
    '조기수령: 최대 5년 일찍, 1년당 6% 감액 (최대 30% 감액)',
    '연기수령: 최대 5년 연기, 1년당 7.2% 증액 (최대 36% 증액)',
    '건강 상태·다른 소득·배우자 상황을 함께 고려해 결정',
  ],

  tags: ['국민연금', '조기수령', '연기수령', '연금수령시기', '노후준비'],
  hubKey: ['retirement-income'],
  order: 8,
  isFeatured: false,

  officialSources: [
    { name: '국민연금공단', url: 'https://www.nps.or.kr', note: '수령 시기별 예상 연금액 조회' },
    { name: '내연금 알아보기', url: 'https://csa.nps.or.kr', note: '개인별 연금 예상액 확인' },
  ],

  sections: [
    {
      type: 'text',
      heading: '국민연금 수령 시기의 기본 구조',
      body: '국민연금 노령연금은 원칙적으로 만 63세(1963~1964년생 기준, 이후 출생자는 단계적으로 만 65세까지 상향)부터 수령합니다. 이 시점보다 일찍 받는 것을 조기노령연금, 늦게 받는 것을 연기연금이라고 합니다. [[basic-pension-application|기초연금]]과 달리 수령 시기 선택이 중요한 변수입니다.',
    },
    {
      type: 'summary',
      heading: '조기수령 vs 연기수령 한눈에 비교',
      items: [
        '조기수령: 최대 5년 일찍 수령, 1년당 6% 감액(최대 -30%), 소득 없고 생활비가 필요한 경우 유리',
        '연기수령: 최대 5년 늦게 수령, 1년당 7.2% 증액(최대 +36%), 다른 소득이 있고 건강이 양호한 경우 유리',
      ],
    },
    {
      type: 'text',
      heading: '조기수령이 유리한 경우',
      body: '조기수령은 정해진 시기보다 최대 5년 일찍 연금을 받는 방식입니다. 1년 앞당길 때마다 월 6%씩 감액되어 5년 일찍 받으면 30% 줄어든 금액을 평생 받습니다.',
    },
    {
      type: 'list',
      items: [
        '다른 소득이 없어 당장 생활비가 필요한 경우',
        '건강 상태가 좋지 않아 기대수명이 짧을 것으로 예상되는 경우',
        '배우자의 소득이나 다른 연금으로 생활이 어렵지 않으나 여유 자금이 필요한 경우',
      ],
    },
    {
      type: 'text',
      heading: '연기수령이 유리한 경우',
      body: '연기수령은 정해진 시기보다 최대 5년 늦게 받는 방식입니다. 1년 늦출 때마다 월 7.2%씩 증액되어 5년 연기하면 36% 늘어난 금액을 평생 받습니다.',
    },
    {
      type: 'list',
      items: [
        '재취업·사업 등 근로소득이 있어 당장 연금이 필요 없는 경우',
        '건강 상태가 양호하고 기대수명이 길 것으로 예상되는 경우',
        '배우자보다 연금액을 높여 유족연금 수준을 높이고 싶은 경우',
      ],
    },
    {
      type: 'info',
      heading: '손익분기점 계산법',
      body: '조기수령과 정상수령의 손익분기점: 감액분을 조기 수령 기간으로 나누어 계산합니다. 예를 들어 월 100만 원 연금을 5년 일찍 받으면 월 70만 원을 받게 됩니다. 30만 원 × 60개월(5년) = 1,800만 원을 먼저 받지만, 이후 매달 30만 원씩 손해입니다. 손익분기점은 약 60개월(5년) ÷ 0.3 = 약 16~17년 후, 즉 80세 전후가 됩니다.',
    },
    {
      type: 'tip',
      heading: '국민연금공단에서 개인별 예상액을 확인하세요',
      body: '국민연금공단 홈페이지(nps.or.kr) 또는 내 곁에 국민연금 앱에서 본인의 예상 수령액과 수령 시기별 금액을 직접 확인할 수 있습니다. 결정 전에 반드시 개인별 시뮬레이션을 해보세요.',
    },
    {
      type: 'warning',
      heading: '조기수령 신청 후 취소는 어렵습니다',
      body: '조기노령연금은 한번 신청하면 수령액이 영구적으로 감액됩니다. 나중에 취소하거나 변경하기 어려우므로 신중하게 결정해야 합니다. 결정이 어렵다면 국민연금공단 상담(☎ 1355)을 먼저 받아보세요.',
    },
  ],

  faq: [
    {
      question: '조기수령 중에 취업하면 연금이 정지되나요?',
      answer: '조기노령연금 수령 중 소득이 일정 기준(월 286만 원, 2026년 기준)을 초과하면 연금 지급이 정지될 수 있습니다. 재취업 전에 국민연금공단에 문의하세요.',
    },
    {
      question: '연기수령 중에 사망하면 어떻게 되나요?',
      answer: '연기 중 사망하면 유족연금이 지급됩니다. 연기 기간 동안 받지 못한 금액에 대한 별도 보상은 없으므로, 건강 상태를 고려해 결정하는 것이 중요합니다.',
    },
    {
      question: '연기수령과 기초연금을 동시에 받을 수 있나요?',
      answer: '국민연금 연기수령 중에도 만 65세가 되면 [[basic-pension-application|기초연금]] 신청이 가능합니다. 단, 국민연금 수령액이 기준을 초과하면 기초연금이 감액될 수 있습니다.',
    },
  ],

  cautionNote:
    '이 글은 2026년 기준으로 작성되었습니다. 수령 기준 연령, 감액률, 소득 기준은 법령 개정에 따라 변경될 수 있습니다. 개인별 상황에 맞는 결정을 위해 국민연금공단(1355) 상담을 권장합니다.',

  relatedSlugs: ['basic-pension-application', 'housing-pension', 'survivor-pension', 'national-pension-lump-sum', 'pension-income-tax', 'national-pension-reform-2026', 'national-pension-increase-strategy'],

  relatedCalculator: {
    brand: siteConfig.calculatorSiteName,
    name: '국민연금 수령액 계산기',
    url: 'https://www.jptcalc.kr/calc/pension-welfare/national-pension/',
    openMode: 'new-tab',
    category: 'pension',
    crossSiteTrackingKey: 'guide-national-pension-timing',
  },
  calculatorCTA: {
    text: '국민연금 예상 수령액 계산해보기',
    subText: `${siteConfig.calculatorSiteName} · 무료`,
  },
};

export default article;
