import type { ContentItem } from '@/types/content';
import { siteConfig } from '@/config/siteConfig';

const article: ContentItem = {
  slug: 'senior-deposit-protection',
  title: '노인 예적금 보호와 금리 활용법 - 안전한 노후 자금 관리',
  seoTitle: '노인 예적금 보호 방법 - 예금자보호법·고금리 예금 선택 가이드',
  seoDescription: '부모님 노후 자금을 안전하게 지키려면 예금자보호 한도와 금리 활용법을 알아야 합니다. 예금자보호제도와 고금리 예금 선택 전략을 정리했습니다.',
  category: 'finance-safety',
  template: 'standard',
  targetUser: 'both',

  createdAt: '2026-04-02',
  updatedAt: '2026-05-03',
  reviewStatus: 'current',

  summary:
    '부모님 예금을 안전하게 관리하려면 예금자보호 한도(5,000만 원)와 금융기관 선택 기준을 알아야 합니다. 안전성과 금리를 동시에 챙기는 방법을 안내합니다.',
  heroDescription:
    '노후 자금은 원금 보호가 최우선입니다. 예금자보호 한도 5,000만 원 기준으로 안전하게 분산 예치하는 방법과 금리 혜택을 함께 챙기는 방법을 정리했습니다.',

  keyPoints: [
    '예금자보호법으로 1개 금융기관당 최대 5,000만 원(원금+이자) 보호',
    '자금이 5,000만 원 초과 시 여러 금융기관에 분산 예치 필요',
    '저축은행·상호금융 예금도 예금자보호 대상이나 기관 건전성 확인 필수',
  ],

  tags: ['예금자보호', '노후자금', '예금금리', '재테크', '노인자산관리'],
  hubKey: ['financial-safety', 'retirement-income'],
  order: 31,
  isFeatured: false,

  relatedCalculator: {
    brand: siteConfig.calculatorSiteName,
    name: '예금 이자 계산기',
    url: 'https://www.jptcalc.kr/calc/finance/deposit/',
    openMode: 'new-tab',
    category: 'finance',
  },
  calculatorCTA: {
    text: '예금 이자 수익 미리 계산해보기',
    subText: '제이퍼 계산기에서 무료로 이용',
  },

  officialSources: [
    {
      name: '예금보험공사',
      url: 'https://www.kdic.or.kr',
      note: '예금자보호 제도 안내 및 보호 한도 확인',
    },
    {
      name: '금융감독원',
      url: 'https://www.fss.or.kr',
      note: '금융기관 건전성 정보 조회',
    },
  ],

  sections: [
    {
      type: 'text',
      heading: '예금자보호제도란?',
      body: '결론부터 말하면, 부모님 예금을 금융기관당 5,000만 원 한도 내로 나눠 예치하면 그 기관이 파산해도 전액 보호받을 수 있습니다. 예금자보호법에 따라 1개 금융기관당 최대 5,000만 원(원금+이자 합산)까지 국가가 보장합니다. 자금이 그 이상이라면 여러 금융기관에 분산 예치하는 것이 원칙입니다. [[retirement-budget-planning|노후 예산 계획]]과 함께 자금 운용 전략을 세워보세요.',
    },
    {
      type: 'list',
      heading: '예금자보호 대상 금융기관과 상품',
      items: [
        '보호 대상: 은행·저축은행·증권사(예탁금)·보험사(보험계약)·상호금융 일부',
        '보호 상품: 예금·적금·퇴직보험·개인연금신탁 등',
        '보호 제외: 주식·채권·펀드·ELS·금 통장(실물 연계) 등 투자 상품',
        '보호 제외: 외화예금(일부 외화예금은 보호 가능, 기관별 확인 필요)',
        '한도: 1인당 1개 금융기관 기준 5,000만 원 (이자 포함)',
      ],
    },
    {
      type: 'info',
      heading: '안전한 예금 분산 전략',
      body: '자금이 1억 원이라면 은행 A에 5,000만 원, 은행 B에 5,000만 원으로 나누면 전액 예금자보호를 받습니다. 저축은행은 금리가 높지만 파산 위험이 일반 은행보다 크므로 금융감독원의 저축은행 경영 공시(sb.fss.or.kr)를 통해 건전성을 확인하세요. 저축은행·상호금융도 5,000만 원까지 보호됩니다. 문의는 ☎ 1588-0037(예금보험공사)로 하세요.',
    },
    {
      type: 'list',
      heading: '고금리 예금 선택 시 확인사항',
      items: [
        '금리 비교: 은행연합회 소비자포털(portal.kfb.or.kr)에서 은행별 금리 비교',
        '우대금리 조건 확인: 첫 거래·급여이체·카드 사용 등 조건부 우대금리 주의',
        '만기 후 금리: 자동 연장 시 금리가 크게 내려가는 경우 있음',
        '중도해지 이율: 만기 전 해지 시 약정 금리의 20~50%만 지급되는 경우',
        '세금 우대: 만 65세 이상은 세금우대저축 이용 시 이자소득세 감면',
      ],
    },
    {
      type: 'tip',
      heading: '만 65세 이상 세금 우대 혜택',
      body: '만 65세 이상 어르신은 1인당 3,000만 원 한도로 세금우대저축을 이용하면 이자소득세(15.4%)가 우대 세율(9.5%)로 감면됩니다. 또한 비과세종합저축을 이용하면 5,000만 원까지 이자·배당소득이 완전 비과세됩니다. [[senior-tax-benefit|노인 세금 감면 혜택]]과 함께 활용하면 절세 효과가 더 커집니다.',
    },
    {
      type: 'summary',
      heading: '핵심 요약',
      items: [
        '예금 5,000만 원 초과 시 여러 금융기관으로 분산 - 전액 예금자보호',
        '저축은행 이용 시 금감원 경영공시로 건전성 먼저 확인',
        '만 65세 이상 비과세종합저축 5,000만 원까지 이자소득 비과세',
      ],
    },
  ],

  faq: [
    {
      question: '같은 은행에 남편과 아내 각각 5,000만 원씩 예치하면 둘 다 보호받나요?',
      answer:
        '예금자보호는 1인당 기준이므로 남편 5,000만 원, 아내 5,000만 원은 각각 보호됩니다. 단, 공동 명의 예금이 있다면 각자의 지분을 합산해 1인 한도를 계산합니다. 자세한 사항은 ☎ 1588-0037(예금보험공사)에서 확인하세요.',
    },
    {
      question: '이미 가입한 예금 금리를 높일 수 있는 방법이 있나요?',
      answer:
        '중도 해지 후 재예치하면 높은 금리를 적용받을 수 있지만, 중도 해지 시 이자를 거의 못 받는 경우가 많습니다. 대신 만기 도래 시점에 금리를 비교해 갱신하거나 다른 기관으로 이전하는 방법이 좋습니다. 은행연합회 소비자포털에서 현재 최고 금리 상품을 비교해보세요.',
    },
  ],

  cautionNote:
    '예금자보호 한도(5,000만 원)는 금융기관 파산 시 기준이며, 정상 영업 중에는 전액 출금 가능합니다. 원금 보장이 안 되는 투자 상품과 혼동하지 마세요.',

  relatedSlugs: ['retirement-budget-planning', 'senior-tax-benefit', 'retirement-finance-checklist', 'seizure-protected-account'],
};

export default article;
