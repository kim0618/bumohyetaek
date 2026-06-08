import type { ContentItem } from '@/types/content';
import { siteConfig } from '@/config/siteConfig';

const article: ContentItem = {
  slug: 'national-pension-additional-location',
  title: '국민연금 추납 신청처 찾기 2026 - 전국 지사·온라인·전화 안내',
  seoTitle: '국민연금 추납 신청처 안내 - 지사 찾기와 온라인 신청 방법',
  seoDescription:
    '국민연금 추납은 전국 어느 지사에서나 신청 가능합니다. 가까운 지사 찾기, 방문 예약, 내연금 포털 온라인 신청 방법을 단계별로 정리했습니다.',
  category: 'pension-welfare',
  template: 'policy',
  targetUser: 'both',

  createdAt: '2026-06-04',
  updatedAt: '2026-06-04',
  reviewStatus: 'current',
  order: 66,

  summary:
    '국민연금 추납은 주소지와 관계없이 전국 어느 국민연금공단 지사에서나 신청할 수 있습니다. 방문 신청, 내연금 포털 온라인 신청, ☎ 1355 전화 신청 세 가지 방법을 단계별로 안내합니다.',

  heroDescription:
    '국민연금 추납 신청을 위해 어디를 찾아가야 할지 막막한 분들이 많습니다. 내 주소지 관할 지사에만 신청해야 한다고 생각하기 쉽지만, 전국 어느 지사를 방문해도 신청이 가능합니다.',

  keyPoints: [
    '전국 어느 국민연금공단 지사나 방문 가능 - 주소지 제한 없음',
    '온라인 신청: 내연금 포털(nps.or.kr) 로그인 후 추후납부 신청 메뉴',
    '방문 전 ☎ 1355로 납부예외 기간 확인 후 가면 상담 시간 단축',
  ],

  tags: ['국민연금', '추납', '추후납부', '국민연금공단지사', '추납신청처'],
  hubKey: ['retirement-income'],
  relatedSlugs: [
    'national-pension-additional',
    'national-pension-back-payment-strategy',
    'national-pension-voluntary',
    'nps-retirement-readiness-service',
  ],

  officialSources: [
    {
      name: '국민연금공단 - 지사 안내',
      url: 'https://www.nps.or.kr',
      note: '전국 지사 위치·전화번호·운영시간 검색',
    },
    {
      name: '복지로 - 국민연금 추후납부',
      url: 'https://www.bokjiro.go.kr',
      note: '온라인 추납 신청 및 안내',
    },
  ],

  faq: [
    {
      question: '꼭 내 주소지 지사를 찾아가야 하나요?',
      answer:
        '아닙니다. 국민연금 추납은 전국 어느 지사에서나 신청할 수 있습니다. 회사 근처나 외출 중인 지역 지사를 방문해도 됩니다. 방문 전 ☎ 1355로 납부예외 기간 내역을 미리 확인해두면 상담이 훨씬 빠르게 끝납니다.',
    },
    {
      question: '온라인으로 추납 신청이 가능한가요?',
      answer:
        '가능합니다. 국민연금공단 내연금 포털(nps.or.kr)에 공인인증서 또는 간편인증으로 로그인한 후 "서비스 신청 > 추후납부 신청" 메뉴에서 접수합니다. 추납 기간 선택과 납부 방식(일시납·분할납) 선택까지 온라인에서 처리되며, 복지로(bokjiro.go.kr)에서도 동일하게 신청할 수 있습니다.',
    },
    {
      question: '방문 전 예약이 필요한가요?',
      answer:
        '예약 없이 방문해도 되지만, 대기 시간이 길 수 있습니다. 국민연금공단 홈페이지(nps.or.kr) "지사방문 예약" 메뉴에서 원하는 지사·날짜·시간대를 사전 예약하면 대기 없이 상담받을 수 있습니다.',
    },
  ],

  cautionNote:
    '추납 대상 기간과 보험료 금액은 개인 가입 이력에 따라 다릅니다. 방문 전 국민연금공단(☎ 1355)에 전화해 납부예외 기간과 예상 보험료를 미리 파악하면 불필요한 왕복을 줄일 수 있습니다.',

  sections: [
    {
      type: 'text',
      heading: '내 동네 지사만 가야 한다는 건 오해입니다',
      body: '추납 신청 전 가장 먼저 드는 의문이 "어느 지사를 찾아가야 하나요?"입니다. "내 주소지 관할 지사에만 신청할 수 있다"는 오해가 많은데, 실제로는 전국 100여 개 국민연금공단 지사 어디서나 추납 신청이 가능합니다. 직장 근처나 자녀 집 방문길에 들르는 지사를 이용해도 됩니다. 추납 제도 자체가 궁금하다면 [[national-pension-additional|국민연금 추납 제도 개요]]를 먼저 확인하세요.',
    },
    {
      type: 'info',
      heading: '추납 신청 채널 3가지',
      body: '방문: 전국 국민연금공단 지사 (주소지 무관, 월~금 09:00~18:00)\n온라인: 내연금 포털(nps.or.kr) 로그인 후 추후납부 신청 - 공인인증·간편인증 필요\n전화: ☎ 1355 (평일 09:00~18:00) - 상담 후 우편·팩스 신청도 안내\n복지로(bokjiro.go.kr)에서도 온라인 접수 가능',
    },
    {
      type: 'numbered-list',
      heading: '지사 방문 신청 단계별 절차',
      items: [
        '지사 확인: 국민연금공단 홈페이지(nps.or.kr) > 공단 소개 > 지사 안내에서 가까운 지사 주소·전화·운영시간 검색',
        '사전 예약(선택): 홈페이지 "지사방문 예약" 또는 ☎ 1355로 예약하면 대기 없이 상담 가능',
        '신분증 지참 후 지사 방문',
        '담당 직원에게 추납 신청 의사 전달 - 납부예외 기간 조회 및 예상 보험료 안내',
        '추후납부 신청서 작성 + 납부 방식(일시납 또는 분할납 최대 60회) 선택',
        '신청 완료 후 보험료 납부 (가상계좌 또는 창구 납부)',
      ],
    },
    {
      type: 'list',
      heading: '신청 시 필요한 서류',
      items: [
        '신분증 (주민등록증, 운전면허증, 여권 중 1개)',
        '추납보험료 납부 신청서 (지사 현장 작성 가능)',
        '통장 사본 (분할납부 자동이체 선택 시)',
        '대리 신청 시: 위임장 + 대리인 신분증 + 가입자 신분증 사본',
      ],
    },
    {
      type: 'tip',
      heading: '방문 전 ☎ 1355로 미리 확인하면 유리합니다',
      body: '지사를 찾아가기 전에 국민연금공단 콜센터(☎ 1355)에 전화해 "추납 가능 기간 조회"를 요청하면, 납부예외 기간이 몇 개월인지와 예상 보험료를 미리 파악할 수 있습니다. 일시납과 분할납의 총 납부액 차이도 안내받을 수 있어 방문 상담이 훨씬 빠르게 끝납니다. 납부 방식을 결정하기 전에 [[national-pension-back-payment-strategy|일시납 vs 분할납 비교]]도 읽어두면 좋습니다.',
    },
    {
      type: 'warning',
      heading: '추납은 본인 신청 후 납부까지 완료해야 합니다',
      body: '추납은 자동 처리되지 않으며 가입자 본인이 직접 신청해야 합니다. 대리 신청은 가능하지만, 가입자 본인이 서명한 위임장이 필요합니다. 신청 후 납부를 미루면 가입 기간으로 인정되지 않습니다. 분할납을 선택했다면 회차별 납부기한을 놓치지 않도록 자동이체를 설정하는 것이 안전합니다.',
    },
    {
      type: 'summary',
      heading: '핵심 요약',
      items: [
        '신청처: 전국 어느 국민연금공단 지사나 가능 (주소지 무관)',
        '온라인: nps.or.kr 로그인 후 추후납부 신청 메뉴',
        '전화 사전 상담: ☎ 1355 (평일 09:00~18:00)',
        '방문 예약: 홈페이지 또는 전화 예약 시 대기 단축',
        '신청 서류: 신분증 필수, 분할납 시 통장 사본 추가',
      ],
    },
  ],
  relatedCalculator: {
    brand: siteConfig.calculatorSiteName,
    name: '국민연금 수령액 계산기',
    url: 'https://www.jptcalc.kr/calc/pension-welfare/national-pension/',
    openMode: 'new-tab',
    category: 'pension',
    crossSiteTrackingKey: 'guide-national-pension-additional-location',
  },
  calculatorCTA: {
    text: '내 국민연금 예상 수령액 계산하기',
    subText: `${siteConfig.calculatorSiteName} · 무료`,
  },
};

export default article;
