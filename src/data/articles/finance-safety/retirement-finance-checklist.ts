import type { ContentItem } from '@/types/content';
import { siteConfig } from '@/config/siteConfig';

const article: ContentItem = {
  slug: 'retirement-finance-checklist',
  title: '노후 재정 점검 체크리스트 - 지금 당장 확인해야 할 5가지',
  seoTitle: '노후 재정 점검 체크리스트 - 은퇴 준비 5가지 핵심 항목',
  seoDescription: '노후 재정이 충분한지 연금·저축·보험·부채·비상금 5가지로 점검해보세요. 국민연금 예상 수령액 조회 방법과 부족한 항목을 보완하는 방법도 함께 안내합니다.',
  category: 'finance-safety',
  template: 'checklist',
  targetUser: 'both',

  createdAt: '2025-03-12',
  updatedAt: '2026-04-16',
  reviewStatus: 'current',

  officialSources: [
    {
      name: '금융감독원',
      url: 'https://www.fss.or.kr',
      note: '노후 재정 계획 가이드',
    },
    {
      name: '국민연금공단',
      url: 'https://www.nps.or.kr',
      note: '예상 연금액 조회',
    },
    {
      name: '한국주택금융공사',
      url: 'https://www.hf.go.kr',
      note: '주택연금 안내',
    },
  ],

  summary:
    '노후 재정이 충분한지 어떻게 알 수 있을까요? 연금·저축·보험·부채·비상금 5가지 항목을 체크해보면 현재 상황을 파악하고 부족한 부분을 찾을 수 있습니다.',
  heroDescription:
    '부모님의 노후 재정이 걱정된다면, 지금 당장 5가지 항목을 점검해보세요. 복잡한 계산 없이 현재 상황을 파악하고 필요한 조치를 찾을 수 있는 실용 체크리스트입니다.',

  keyPoints: [
    '연금·저축·보험·부채·비상금 5가지 항목 점검',
    '공적연금 수령액은 국민연금공단에서 무료 조회 가능',
    '부족한 항목부터 우선순위를 정해 보완',
  ],

  tags: ['노후재정', '은퇴준비', '재정점검', '연금', '노후설계'],
  hubKey: ['retirement-income', 'financial-safety'],
  order: 3,
  isFeatured: false,

  sections: [
    {
      type: 'text',
      heading: '노인 부부 월 최소 생활비 240만 원, 준비되셨나요?',
      body: '국민연금연구원 조사에 따르면 노후에 부부 기준 월 최소 240만 원, 적정 수준은 340만 원 이상이 필요합니다. 그런데 국민연금 평균 수령액은 월 약 60만 원 수준입니다. 이 격차를 어떻게 메울 수 있을까요? 지금 재정 상황을 정확히 파악해야 부족한 부분을 미리 보완할 수 있습니다. 예상치 못한 의료비나 돌봄 비용이 생기면 준비된 자금이 빠르게 소진될 수 있으므로, 연금 수령액, 저축, 보험, 부채, 비상금 5가지를 체계적으로 점검하는 것이 중요합니다. [[basic-pension-application|기초연금]]이나 [[survivor-pension|유족연금]] 수급 여부도 함께 확인해보세요.',
    },
    {
      type: 'numbered-list',
      heading: '체크 항목 1: 월 연금 수령액 확인',
      items: [
        '국민연금 예상 수령액: 국민연금공단(1355) 또는 내연금 앱에서 조회',
        '기초연금 수령 여부: 만 65세 이상, 소득 하위 70%라면 신청 가능',
        '퇴직연금·개인연금: 가입 여부와 예상 수령액 확인',
        '목표: 월 생활비(최소 150~200만 원)의 70% 이상을 연금으로 충당',
      ],
    },
    {
      type: 'numbered-list',
      heading: '체크 항목 2: 예비 저축 및 금융 자산',
      items: [
        '예금·적금·펀드 등 금융 자산 총액 파악',
        '긴급 자금(예: 의료비·수리비)으로 즉시 사용 가능한 금액 확인',
        '목표: 월 생활비 6개월치 이상을 즉시 사용 가능한 형태로 보유',
      ],
    },
    {
      type: 'numbered-list',
      heading: '체크 항목 3: 의료·돌봄 보험 가입 여부',
      items: [
        '실손의료보험 가입 여부 및 갱신 조건 확인',
        '암·뇌졸중·심근경색 등 3대 질병 보장 여부 확인',
        '장기요양보험은 건강보험에 포함되어 별도 가입 불필요',
        '불필요하게 중복 가입된 보험이 있다면 정리 검토',
      ],
    },
    {
      type: 'numbered-list',
      heading: '체크 항목 4: 부채 현황',
      items: [
        '주택담보대출·카드론 등 현재 부채 총액 파악',
        '월 상환액이 월 소득의 30% 이하인지 확인',
        '금리가 높은 부채부터 상환 계획 수립',
        '불필요한 신용카드·할부 정리',
      ],
    },
    {
      type: 'numbered-list',
      heading: '체크 항목 5: 비상금·의료비 대비',
      items: [
        '입원·수술 등 예상치 못한 의료비 대비 비상금 보유 여부',
        '치매·뇌졸중 등 장기 치료가 필요할 경우 대비 계획',
        '주택 수리·교체 비용 (보일러, 냉장고 등) 예비비',
      ],
    },
    {
      type: 'summary',
      heading: '점검 결과 활용법',
      items: [
        '3개 이상 부족: 노후 재정 전문가(금융복지상담센터 무료 이용) 상담 권장',
        '1~2개 부족: 부족한 항목부터 순서대로 보완 시작',
        '모두 양호: 현재 계획 유지하되 1년마다 재점검',
      ],
    },
    {
      type: 'info',
      heading: '문의 연락처',
      body: '금융감독원 파인(fine.fss.or.kr) 또는 금융감독원 민원상담 ☎ 1332로 문의하세요.',
    },
  ],

  faq: [
    {
      question: '국민연금 예상 수령액은 어떻게 확인하나요?',
      answer:
        '스마트폰에서 "내연금" 앱을 설치하거나, 국민연금공단 홈페이지(nps.or.kr)에서 공인인증서 없이 간편 조회가 가능합니다. 콜센터(1355)에 전화해 안내받을 수도 있습니다.',
    },
    {
      question: '부모님이 가입한 보험이 무엇인지 파악하기 어려운데 어떻게 확인하나요?',
      answer:
        '금융감독원 금융소비자정보포털 "파인(fine.fss.or.kr)"에서 부모님 공인인증서나 간편 인증으로 로그인하면 가입된 보험 목록을 한 번에 조회할 수 있습니다. 불필요하게 중복 가입된 보험을 정리하면 매달 보험료를 아낄 수 있습니다.',
    },
  ],

  cautionNote:
    '이 글은 일반적인 노후 재정 점검 가이드이며 개인의 상황에 따라 적합한 방법이 다를 수 있습니다. 구체적인 재정 계획은 전문가 상담을 통해 수립하시기 바랍니다.',

  relatedSlugs: ['housing-pension', 'farmland-pension', 'basic-pension-application', 'retirement-pension-irp', 'pension-income-tax'],

  relatedCalculator: {
    brand: siteConfig.calculatorSiteName,
    name: '노후 생활비 계산기',
    url: 'https://www.jptcalc.kr/calc/pension-welfare/retirement-living/',
    openMode: 'new-tab',
    category: 'pension',
    crossSiteTrackingKey: 'guide-retirement-finance-checklist',
  },
  calculatorCTA: {
    text: '노후 필요 생활비 계산해보기',
    subText: `${siteConfig.calculatorSiteName} · 무료`,
  },
};

export default article;
