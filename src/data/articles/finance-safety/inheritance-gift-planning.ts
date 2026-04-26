import type { ContentItem } from '@/types/content';
import { siteConfig } from '@/config/siteConfig';

const article: ContentItem = {
  slug: 'inheritance-gift-planning',
  title: '부모님 상속·증여 미리 준비하는 방법',
  seoTitle: '상속·증여 준비 방법 - 절세 방법과 필수 서류 총정리',
  seoDescription: '부모님이 살아계실 때 미리 상속·증여를 준비하면 세금을 줄이고 분쟁을 막을 수 있습니다. 증여세 면제 한도, 상속세 기초공제, 유언장 작성 방법을 정리했습니다.',
  category: 'finance-safety',
  template: 'standard',
  targetUser: 'both',

  createdAt: '2025-03-10',
  updatedAt: '2026-04-20',
  reviewStatus: 'current',

  summary:
    '상속은 사망 후에 처리하는 것이지만, 준비는 미리 해두어야 가족 간 분쟁과 세금 부담을 줄일 수 있습니다. 증여·유언·재산 목록 정리까지 단계별로 안내합니다.',
  heroDescription:
    '부모님이 건강하실 때 상속·증여를 미리 준비하면 가족 간 갈등을 예방하고 세금도 줄일 수 있습니다. 복잡하게 생각하지 말고 재산 목록 정리부터 시작해보세요.',

  keyPoints: [
    '자녀 1인당 10년간 5,000만 원까지 증여세 없이 증여 가능',
    '상속세 일괄공제 5억 원 - 총 상속재산이 5억 이하면 세금 없음',
    '유언장은 자필 또는 공증 방식으로 작성 가능',
  ],

  tags: ['상속', '증여', '상속세', '증여세', '유언장', '재산정리'],
  hubKey: ['financial-safety'],
  order: 4,
  isFeatured: false,

  officialSources: [
    {
      name: '국세청 홈택스',
      url: 'https://www.hometax.go.kr',
      note: '상속·증여세 신고 및 세액 계산',
    },
    {
      name: '법무부 법령정보',
      url: 'https://www.moleg.go.kr',
      note: '유언장 작성 관련 법령 안내',
    },
  ],

  sections: [
    {
      type: 'text',
      heading: '왜 미리 준비해야 하나요?',
      body: '부모님이 갑작스럽게 입원하신 상황에서 형제들이 모여 재산 이야기를 시작하면, 서로 감정이 상하고 분쟁으로 이어지기 쉽습니다. 미리 재산 목록을 정리하고 부모님의 뜻을 문서로 남겨두면 이런 상황을 예방할 수 있습니다. 특히 치매가 진행되기 전에 준비하는 것이 중요합니다. 증여세 절감과 유언장 작성, 상속세 기본 구조까지 단계별로 안내합니다. [[adult-guardianship|성년후견제도]]나 임의후견계약도 함께 고려하세요.',
    },
    {
      type: 'numbered-list',
      heading: '1단계 - 재산 목록 정리',
      items: [
        '부동산: 등기부등본으로 소유 현황 확인 (인터넷 등기소)',
        '금융 자산: 은행·증권·보험 계좌 목록 정리 - 금융정보 한 눈에 서비스(어카운트인포) 활용',
        '부채: 대출·보증 현황 파악',
        '주요 서류 보관 위치 가족에게 공유',
      ],
    },
    {
      type: 'info',
      heading: '2단계 - 증여를 활용한 절세',
      body: '자녀 1인당 10년간 5,000만 원(미성년자 2,000만 원)까지 증여세 없이 재산을 넘길 수 있습니다. 예를 들어 자녀 2명에게 각각 5,000만 원씩 증여하면 1억 원을 세금 없이 이전할 수 있습니다. 10년 단위로 나눠 증여하면 절세 효과가 커집니다.',
    },
    {
      type: 'info',
      heading: '상속세 기본 구조',
      body: '상속세는 상속받은 총 재산에서 공제액을 뺀 금액에 세금이 붙습니다. 기본 일괄공제 5억 원이 적용되므로, 총 상속재산이 5억 원 이하라면 상속세가 없습니다. 배우자가 있으면 배우자공제(최소 5억 원)가 추가되어 공제 한도가 훨씬 커집니다. [[housing-pension|주택연금]]으로 생활비를 받는 경우에도 주택 가치가 상속 재산에 포함될 수 있으므로 미리 확인하세요.',
    },
    {
      type: 'numbered-list',
      heading: '3단계 - 유언장 작성',
      items: [
        '자필증서 유언: 전문·날짜·주소·성명을 직접 쓰고 도장 날인 - 비용 없음, 분실 위험 있음',
        '공증 유언(공정증서 유언): 공증인 앞에서 구술 후 작성 - 법적 효력 강하고 원본 보존',
        '법정상속분과 다르게 분배하려면 반드시 유언장 필요',
        '유류분 주의: 배우자·자녀에게는 법정상속분의 1/2 최소 보장',
      ],
    },
    {
      type: 'warning',
      heading: '상속 신고 기한을 놓치지 마세요',
      body: '상속세 신고 기한은 피상속인(사망자) 사망일로부터 6개월 이내입니다. 기한 내에 신고하지 않으면 가산세가 붙습니다. 상속이 발생하면 세무사나 국세청(126)에 빠르게 문의하세요.',
    },
    {
      type: 'list',
      heading: '신청 시 필요한 서류',
      items: [
        '신분증',
        '가족관계증명서',
        '부동산 등기부등본(부동산 증여 시)',
        '증여계약서',
        '증여세 신고서(세무서 제출)',
      ],
    },
    {
      type: 'info',
      heading: '문의 및 처리 기간',
      body: '가까운 세무서 또는 국세청 ☎ 126으로 문의하세요. 증여세 신고는 증여일로부터 3개월 이내 필수입니다.',
    },
  ],

  faq: [
    {
      question: '부동산을 증여받으면 취득세도 내야 하나요?',
      answer:
        '네, 증여로 부동산을 받으면 증여세 외에 취득세(시가의 약 3.5-4%)도 납부해야 합니다. 상속의 경우 취득세율은 약 0.8-2.8%로 낮습니다. 세금 전체를 비교해 유리한 방법을 선택하세요.',
    },
    {
      question: '형제 중 한 명이 부모님을 오래 모셨다면 더 받을 수 있나요?',
      answer:
        '기여분 제도를 활용하면 부모님 부양이나 재산 증가에 기여한 상속인이 법정상속분보다 더 받을 수 있습니다. 단, 상속인 간 협의가 되지 않으면 법원에 기여분 결정 청구를 해야 합니다.',
    },
    {
      question: '상속을 포기하고 싶으면 어떻게 하나요?',
      answer:
        '부모님 빚이 재산보다 많다면 상속을 포기하거나 한정승인을 선택할 수 있습니다. 사망을 안 날로부터 3개월 이내에 가정법원에 신청해야 합니다. 한정승인은 상속받은 재산 한도 내에서만 빚을 갚는 방식입니다.',
    },
    {
      question: '배우자에게 재산을 증여할 때 면제 한도는 얼마인가요?',
      answer:
        '배우자에게는 10년간 최대 6억 원까지 증여세 없이 증여할 수 있습니다. 자녀의 면제 한도(5,000만 원)보다 훨씬 크므로 배우자 간 증여는 절세 효과가 높습니다. 다만 배우자 증여 후 10년 이내 사망하면 해당 금액이 상속세 계산에 합산될 수 있어, 증여 시기와 방법은 세무사와 사전에 상담하는 것이 안전합니다.',
    },
  ],

  cautionNote:
    '이 글은 일반적인 정보 제공을 목적으로 작성되었으며 개인의 상황에 따라 세금과 법적 처리 방법이 크게 달라질 수 있습니다. 구체적인 상속·증여 계획은 세무사 또는 변호사와 상담하세요.',

  relatedSlugs: ['retirement-finance-checklist', 'housing-pension', 'home-sale-tax-exemption'],

  relatedCalculator: {
    brand: siteConfig.calculatorSiteName,
    name: '상속세 계산기',
    url: 'https://www.jptcalc.kr/calc/realestate/inheritance/',
    openMode: 'new-tab',
    category: 'finance',
    crossSiteTrackingKey: 'guide-inheritance-gift-inheritance-tax',
  },
  calculatorCTA: {
    text: '상속세 미리 계산해보기',
    subText: `${siteConfig.calculatorSiteName} · 무료`,
  },
};

export default article;
