import type { ContentItem } from '@/types/content';
import { siteConfig } from '@/config/siteConfig';

const article: ContentItem = {
  slug: 'retirement-pension-irp',
  title: '퇴직연금(IRP) 수령 방법 - 일시금 vs 연금, 세금 차이',
  seoTitle: '퇴직연금 IRP 수령 방법 - 일시금 연금 세금 비교',
  seoDescription: '퇴직연금(DB·DC·IRP)은 55세 이후 연금 또는 일시금으로 수령할 수 있습니다. 수령 방식별 세금 차이와 절세 방법을 정리했습니다.',
  category: 'finance-safety',
  template: 'standard',
  targetUser: 'both',

  createdAt: '2026-03-29',
  updatedAt: '2026-03-29',
  reviewStatus: 'current',
  effectiveDate: '2026-01-01',

  summary:
    '퇴직연금은 일시금으로 받으면 퇴직소득세, 연금으로 받으면 연금소득세가 적용됩니다. 연금으로 수령하면 세금이 30~40% 줄어들어 대부분의 경우 연금 수령이 유리합니다.',
  heroDescription:
    '퇴직금을 한꺼번에 받을지, 나눠서 연금으로 받을지 고민이라면 세금 차이부터 확인하세요. 같은 금액이라도 수령 방식에 따라 수백만 원 차이가 날 수 있습니다.',

  keyPoints: [
    '연금 수령 시 퇴직소득세의 30~40% 절감 (10년 초과 시 40%)',
    '55세 이후 IRP 계좌에서 연금 수령 가능',
    '연금 수령 기간 최소 10년 이상 권장 (절세 효과 극대화)',
  ],

  tags: ['퇴직연금', 'IRP', '퇴직금수령', '연금수령', '퇴직소득세'],
  isFeatured: false,
  hubKey: ['retirement-income', 'financial-safety'],
  order: 8,

  officialSources: [
    { name: '금융감독원 통합연금포털', url: 'https://100lifeplan.fss.or.kr', note: '퇴직연금 현황 조회' },
    { name: '국세청', url: 'https://www.nts.go.kr', note: '퇴직소득세·연금소득세 안내' },
  ],

  sections: [
    {
      type: 'info',
      heading: '퇴직연금 종류',
      body: 'DB형(확정급여형)은 회사가 운용하며 퇴직 시 약정된 급여를 받습니다. DC형(확정기여형)은 근로자가 직접 운용하며 운용 성과에 따라 수령액이 달라집니다. IRP(개인형 퇴직연금)는 이직·퇴직 시 퇴직금을 이전하거나 개인이 추가 납입하는 계좌입니다. 국민연금과 퇴직연금을 합산할 때 [[national-pension-lump-sum|국민연금 가입 기간]]도 함께 확인해두면 노후 수령 계획을 세우는 데 도움이 됩니다.',
    },
    {
      type: 'info',
      heading: '수령 방식별 세금 비교',
      body: '일시금 수령 시 퇴직소득세가 전액 부과됩니다. 연금 수령 시 퇴직소득세의 70%(10년 이하) 또는 60%(10년 초과)만 납부하면 됩니다. 예를 들어 퇴직소득세가 300만 원이라면 연금으로 10년 초과 수령 시 180만 원만 납부합니다.',
    },
    {
      type: 'list',
      heading: '연금 수령 조건',
      items: [
        '만 55세 이상',
        'IRP 또는 연금저축 계좌 개설 후 5년 이상 경과',
        '수령 기간 10년 이상으로 설정 권장',
        '연간 연금 수령액이 1,500만 원 초과 시 종합소득세 대상',
        '금융기관 방문 또는 앱에서 연금 수령 신청',
      ],
    },
    {
      type: 'list',
      heading: '수령 절차',
      items: [
        '퇴직 시 회사가 IRP 계좌로 퇴직금 이전 (의무)',
        '금융기관 앱 또는 방문으로 연금 수령 신청',
        '수령 방식(월·분기·연 단위) 및 기간 설정',
        '매년 연금소득세 원천징수 후 입금',
        '연간 수령액 1,500만 원 초과 시 다음 해 5월 종합소득세 신고',
      ],
    },
    {
      type: 'tip',
      heading: '세금 줄이는 방법',
      body: '연금 수령 기간을 10년 이상으로 설정하면 퇴직소득세를 40% 아낄 수 있습니다. 또한 연간 연금 수령액을 1,500만 원 이하로 유지하면 분리과세(3.3~5.5%)만 적용되어 종합소득세를 피할 수 있습니다. 국민연금·기초연금 수령액도 합산되므로 총 연금 수령 계획을 세워두는 것이 좋습니다. [[pension-income-tax|연금소득세 과세 기준]]을 미리 파악해두면 절세 전략을 짜는 데 유리합니다.',
    },
    {
      type: 'warning',
      heading: '중도 인출 시 불이익',
      body: 'IRP를 55세 이전에 중도 해지하거나 일시금으로 수령하면 기타소득세 16.5%가 부과됩니다. 퇴직소득세 절감 혜택도 사라집니다. 긴급 자금이 필요하다면 IRP 담보대출을 먼저 고려하세요. 인지 능력이 저하될 것을 대비해 [[adult-guardianship|성년후견]] 또는 임의후견계약을 미리 체결해 두면 연금 자산을 안전하게 보호할 수 있습니다.',
    },
    {
      type: 'list',
      heading: '신청 시 필요한 서류',
      items: [
        '신분증',
        '퇴직금 수령 확인서',
        '통장 사본(IRP 계좌)',
        '퇴직소득 원천징수영수증',
      ],
    },
    {
      type: 'info',
      heading: '문의 및 처리 기간',
      body: '가입 금융기관 고객센터 또는 금융감독원 민원상담 ☎ 1332로 문의하세요. IRP 계좌 개설은 즉시 가능하며, 퇴직금 입금은 14일 이내 완료됩니다.',
    },
  ],

  faq: [
    {
      question: '퇴직연금이 어느 금융사에 있는지 모르겠어요.',
      answer: '금융감독원 통합연금포털(100lifeplan.fss.or.kr)에서 본인의 모든 퇴직연금·연금저축 현황을 한번에 조회할 수 있습니다. 공동인증서로 로그인하면 확인 가능합니다.',
    },
    {
      question: '여러 회사 다니면서 쌓인 퇴직금을 합칠 수 있나요?',
      answer: '이전 직장 퇴직금을 IRP에 이전해두었다면 하나의 계좌로 통합 관리할 수 있습니다. 각 금융사에 분산된 IRP도 하나로 통합 가능합니다.',
    },
    {
      question: '연금 수령 중 사망하면 남은 금액은 어떻게 되나요?',
      answer: '남은 잔액은 상속인에게 승계되며, 상속인이 일시금 또는 연금으로 수령할 수 있습니다. 이때 퇴직소득세 혜택이 적용된 금액에 대해서는 세금 정산이 이뤄집니다.',
    },
    {
      question: '일시금이 무조건 불리한가요?',
      answer: '꼭 그렇지는 않습니다. 퇴직소득세 자체가 적거나(납입 기간이 짧거나 퇴직금이 소액인 경우), 당장 큰 자금이 필요한 경우에는 일시금이 합리적일 수 있습니다. 세금 계산 후 비교해보세요.',
    },
  ],

  cautionNote:
    '세율과 공제 기준은 변경될 수 있습니다. 개인 상황에 따라 절세 방법이 다르므로 수령 전 가입 금융기관 또는 세무사와 상담을 권장합니다.',

  relatedCalculator: {
    brand: siteConfig.calculatorSiteName,
    name: '연금소득세 계산기',
    url: 'https://www.jptcalc.kr/calc/pension-welfare/pension-tax/',
    openMode: 'new-tab',
    category: 'pension',
    crossSiteTrackingKey: 'guide-retirement-pension-irp',
  },
  calculatorCTA: {
    text: '연금 수령 시 세금 계산해보기',
    subText: `${siteConfig.calculatorSiteName} · 무료`,
  },

  relatedSlugs: ['national-pension-timing', 'retirement-finance-checklist', 'housing-pension'],
};

export default article;
