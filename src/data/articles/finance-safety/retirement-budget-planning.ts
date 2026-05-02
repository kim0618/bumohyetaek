import type { ContentItem } from '@/types/content';
import { siteConfig } from '@/config/siteConfig';

const article: ContentItem = {
  slug: 'retirement-budget-planning',
  title: '노후 생활비 설계와 월별 지출 관리 가이드',
  seoTitle: '노후 생활비 설계 - 월별 지출 관리와 수입원 점검',
  seoDescription: '은퇴 후 필요한 생활비 규모와 수입원 점검 방법, 지출 항목별 관리 전략을 정리했습니다. 의료비 대비와 생활비 절약 팁까지 노후 재정 설계 가이드입니다.',
  category: 'finance-safety',
  template: 'standard',
  targetUser: 'both',

  createdAt: '2026-03-31',
  updatedAt: '2026-04-17',
  reviewStatus: 'current',

  summary:
    '은퇴 후 부부 기준 월 평균 생활비는 약 277만 원(2026년 통계청 기준)입니다. 연금, 근로소득, 금융소득 등 수입원을 점검하고 항목별 지출을 관리하는 방법을 안내합니다.',
  heroDescription:
    '노후에 얼마가 필요하고, 어디서 그 돈이 나올 수 있는지 구체적으로 점검하는 것이 은퇴 재정 설계의 첫걸음입니다. 통계 기반 생활비 기준부터 실천 가능한 절약 팁까지 정리합니다.',

  keyPoints: [
    '은퇴 후 부부 기준 월 평균 필요 생활비 약 277만 원(통계청)',
    '연금+근로+금융소득으로 수입원 3층 구조 점검 필수',
  ],

  tags: ['노후생활비', '은퇴설계', '지출관리', '재정계획', '노후준비'],
  hubKey: ['retirement-income'],
  order: 22,
  isFeatured: false,

  officialSources: [
    {
      name: '통계청',
      url: 'https://kostat.go.kr',
      note: '가계금융복지조사 - 은퇴 후 적정 생활비',
    },
    {
      name: '금융감독원',
      url: 'https://www.fss.or.kr',
      note: '재정 상담 및 금융 소비자 보호',
    },
  ],

  sections: [
    {
      type: 'text',
      heading: '노후에 필요한 생활비는 얼마일까?',
      body: '통계청 2026년 가계금융복지조사에 따르면, 은퇴 부부 가구의 월 최소 생활비는 약 198만 원, 적정 생활비는 약 277만 원입니다. 여기에 70대 이후 급증하는 의료비를 더하면 실질 필요 금액은 300만 원을 훌쩍 넘는 경우도 많습니다. 반면 국민연금 평균 수령액은 월 65만 원(2026년 기준)에 불과합니다. 이 격차를 어떻게 채울지가 노후 재정 설계의 핵심입니다. [[retirement-finance-checklist|은퇴 재정 체크리스트]]로 현재 준비 상태를 먼저 점검해 보세요.',
    },
    {
      type: 'info',
      heading: '핵심 수치 정리',
      body: '은퇴 후 필요 생활비(부부 기준): 최소 198만 원 / 적정 277만 원 / 의료비 포함 시 300만 원 이상. 국민연금 평균 수령액: 월 65만 원. 기초연금(소득 하위 70%): 최대 약 33만 원. 두 연금 합산 최대 약 98만 원으로, 적정 생활비와의 격차는 약 180만 원 이상입니다. 이 격차를 퇴직연금·개인연금·근로소득으로 메워야 합니다. 문의: ☎ 1332 (금융감독원 무료 재정 상담)',
    },
    {
      type: 'list',
      heading: '수입원 3층 구조 점검',
      items: [
        '1층 - 공적연금: 국민연금, 기초연금(소득하위 70%)',
        '2층 - 퇴직연금/개인연금: 퇴직급여, IRP, 연금저축 등',
        '3층 - 근로·금융소득: 파트타임 근로, 예금 이자, 배당, 임대소득 등',
      ],
    },
    {
      type: 'text',
      heading: '지출 항목별 관리 전략',
      body: '은퇴 후 지출은 고정비(주거비, 관리비, 보험료)와 변동비(식비, 교통비, 여가비)로 나눠 관리하면 효과적입니다. 고정비는 줄이기 어렵지만 불필요한 보험 정리, 통신비 절감 등으로 월 10~20만 원 절약이 가능합니다. 변동비는 월 예산을 미리 정하고, 주 단위로 지출을 점검하는 습관이 중요합니다.',
    },
    {
      type: 'list',
      heading: '의료비 대비 방법',
      items: [
        '실손보험 유지 여부 점검 - 갱신형 보험료 부담 대비 혜택 비교',
        '국민건강보험 본인부담 상한제 활용 - 연간 의료비 상한 초과분 환급',
        '만성질환 관리비 별도 예산 편성 (월 10~20만 원 권장)',
        '건강검진 정기 수검으로 조기 발견 - 치료비 절감 효과',
      ],
    },
    {
      type: 'tip',
      heading: '생활비 절약 실천 팁',
      body: '통신비는 시니어 전용 요금제로 변경하면 월 2~3만 원 절약 가능합니다. 관리비는 에너지 캐시백 제도를 활용하고, 경로우대 교통카드로 대중교통 무료 혜택을 적극 이용하세요. 금융감독원 ☎ 1332에서 무료 재정 상담도 받을 수 있습니다.',
    },
    {
      type: 'text',
      heading: '가족과의 재정 논의',
      body: '부모님의 재정 상황을 자녀와 미리 공유하면 갑작스러운 의료비나 요양비 발생 시 당황하지 않을 수 있습니다. 연금 수령액, 보유 자산, 보험 현황, 희망하는 생활 수준 등을 가족 회의를 통해 함께 정리해두는 것을 권합니다. 주택을 활용한 소득 확보가 필요하다면 주택연금도 검토해보세요.',
    },
  ],

  faq: [
    {
      question: '은퇴 후 생활비가 부족하면 어떻게 하나요?',
      answer:
        '기초연금(소득하위 70% 대상), 주거급여, 의료급여 등 정부 지원 제도를 먼저 확인하세요. 추가로 주택연금, 파트타임 근로, 정부 노인일자리 사업 등을 활용할 수 있습니다.',
    },
    {
      question: '노후 생활비에서 가장 큰 비중을 차지하는 항목은 무엇인가요?',
      answer:
        '통계적으로 식비(약 30%)와 주거·관리비(약 20%)가 가장 큰 비중을 차지합니다. 의료비는 나이가 들수록 비중이 커지므로 70대 이후에는 별도 예산을 넉넉히 잡아야 합니다.',
    },
    {
      question: '국민연금만으로 노후 생활비를 충당할 수 있나요?',
      answer:
        '현실적으로 어렵습니다. 국민연금 평균 수령액은 월 65만 원(2026년 기준) 수준으로, 적정 노후 생활비 277만 원의 약 23%에 불과합니다. 기초연금(최대 약 33만 원)을 더해도 100만 원에 미치지 못합니다. 나머지는 퇴직연금, 개인연금(IRP·연금저축), 근로소득, 금융소득으로 채워야 합니다. 지금 당장 부족하다면 노인일자리 사업(☎ 1577-1000) 참여나 주택연금 가입도 검토해보세요.',
    },
  ],

  cautionNote:
    '이 글은 2026년 통계청 자료를 바탕으로 작성되었으며, 물가 변동과 정책 변경에 따라 수치가 달라질 수 있습니다. 구체적인 재정 설계는 금융감독원(1332) 또는 전문 재무설계사와 상담하시기 바랍니다.',

  relatedCalculator: {
    brand: siteConfig.calculatorSiteName,
    name: '노후 생활비 계산기',
    url: 'https://www.jptcalc.kr/calc/pension-welfare/retirement-living/',
    openMode: 'new-tab',
    category: 'pension',
    crossSiteTrackingKey: 'guide-retirement-budget-planning',
  },
  calculatorCTA: {
    text: '노후 필요 생활비 계산해보기',
    subText: `${siteConfig.calculatorSiteName} · 무료`,
  },

  relatedSlugs: ['retirement-finance-checklist', 'housing-pension', 'farmland-pension', 'national-pension-timing', 'national-pension-increase-strategy'],
};

export default article;
