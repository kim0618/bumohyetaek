import type { ContentItem } from '@/types/content';
import { siteConfig } from '@/config/siteConfig';

const article: ContentItem = {
  slug: 'senior-job-program',
  title: '노인 일자리 사업 신청 방법과 종류',
  seoTitle: '노인 일자리 사업 - 종류별 신청 방법과 급여 안내',
  seoDescription: '만 60세 이상이라면 공익활동·사회서비스형·시장형 노인 일자리를 신청할 수 있습니다. 활동비, 신청 시기, 주민센터와 시니어클럽 신청 방법을 정리했습니다.',
  category: 'pension-welfare',
  template: 'standard',
  targetUser: 'senior',

  createdAt: '2025-03-10',
  updatedAt: '2026-04-14',
  reviewStatus: 'current',

  summary:
    '만 60세 이상 어르신이라면 노인 일자리 사업에 참여해 소득도 얻고 사회 활동도 이어갈 수 있습니다. 공익활동부터 시장형까지 유형별 특징과 신청 방법을 정리했습니다.',
  heroDescription:
    '노인 일자리 사업은 정부가 운영하는 노인 취업 지원 프로그램입니다. 단순한 용돈 벌이를 넘어 사회 참여와 건강 유지에도 도움이 됩니다. 최신 신청 방법을 안내합니다.',

  keyPoints: [
    '만 60세 이상이면 누구나 신청 가능 (유형별 나이 다름)',
    '공익활동은 월 최대 27만 원, 사회서비스형은 월 최대 76만 원',
    '매년 1-2월 신청, 주민센터 또는 시니어클럽 방문',
  ],

  tags: ['노인일자리', '시니어취업', '공익활동', '노후소득', '어르신일자리'],
  hubKey: ['retirement-income'],
  order: 6,
  isFeatured: false,

  officialSources: [
    {
      name: '한국노인인력개발원',
      url: 'https://www.kordi.or.kr',
      note: '노인 일자리 사업 정보 통합 포털',
    },
    {
      name: '복지로',
      url: 'https://www.bokjiro.go.kr',
      note: '서비스 신청 및 지역 기관 검색',
    },
  ],

  sections: [
    {
      type: 'text',
      heading: '노인 일자리 사업이란?',
      body: '보건복지부가 주관하는 노인 일자리 사업은 어르신의 경제적 자립과 사회 참여를 지원하기 위해 운영됩니다. 공공기관, 학교, 복지시설 등에서 다양한 유형의 일자리를 제공하며, 참여 기간 동안 활동비를 지급합니다. [[senior-welfare-center|노인복지관]]에서도 일자리 사업 참여 신청을 받는 경우가 많습니다.',
    },
    {
      type: 'numbered-list',
      heading: '사업 유형과 활동비',
      items: [
        '공익활동형: 만 65세 이상, 월 30시간, 활동비 월 27만 원 - 노노케어·교통안전·환경정비 등',
        '사회서비스형: 만 65세 이상, 월 최대 76만 원 - 취약계층 돌봄·교육지원·보육시설 보조 등',
        '시장형 사업단: 만 60세 이상, 수익에 따라 급여 변동 - 카페 운영·식품 제조·공동 작업장 등',
        '취업 알선형: 만 60세 이상, 민간 기업 취업 연계 - 경비·청소·주유 등 단기 일자리',
      ],
    },
    {
      type: 'info',
      heading: '신청 시기와 방법',
      body: '노인 일자리 사업은 매년 1-2월에 모집합니다. 연중 수시 모집하는 경우도 있으니 관심 있는 분은 주민센터에 미리 문의해두는 것이 좋습니다. 참여 중 다양한 [[senior-discount-guide|어르신 할인 혜택]]도 함께 활용하면 생활비를 더 아낄 수 있습니다.',
    },
    {
      type: 'numbered-list',
      heading: '신청 절차',
      items: [
        '가까운 주민센터 또는 시니어클럽·노인복지관 방문',
        '참여 신청서 작성 (희망 사업 유형 선택)',
        '담당자 면담 및 건강 상태 확인',
        '사업 배정 후 활동 시작',
      ],
    },
    {
      type: 'list',
      heading: '신청 시 필요한 서류',
      items: [
        '신분증',
        '노인일자리 신청서(현장 작성)',
        '통장 사본',
      ],
    },
    {
      type: 'info',
      heading: '기초연금·기초생활수급자도 신청 가능',
      body: '기초연금이나 [[basic-livelihood-benefit|기초생활수급]] 혜택을 받고 있어도 노인 일자리 사업에 참여할 수 있습니다. 단, 활동비가 소득으로 잡혀 수급액에 영향을 줄 수 있으니 참여 전에 주민센터에서 확인하세요. 노인 일자리 사업에 관한 상담은 보건복지상담센터(☎ 129) 또는 주민센터에 문의하세요.',
    },
  ],

  faq: [
    {
      question: '참여 중에 아프거나 그만두고 싶으면 어떻게 하나요?',
      answer:
        '건강 악화나 개인 사정으로 중도 포기할 수 있습니다. 담당 기관에 사유를 알리면 되며, 활동한 만큼의 활동비는 지급받을 수 있습니다.',
    },
    {
      question: '한 해에 여러 유형에 동시에 참여할 수 있나요?',
      answer:
        '원칙적으로 한 번에 한 가지 유형의 사업에만 참여할 수 있습니다. 사업이 종료된 후 다음 사업에 새로 신청하는 것은 가능합니다.',
    },
    {
      question: '자녀가 대신 신청해줄 수 있나요?',
      answer:
        '대부분의 경우 본인이 직접 방문해야 합니다. 거동이 불편한 경우 담당 기관에 사전 연락하면 방문 면담을 조율해주는 경우도 있습니다.',
    },
  ],

  cautionNote:
    '이 글은 2026년 기준으로 작성되었습니다. 모집 시기와 활동비는 지역·사업 유형에 따라 다를 수 있으므로 가까운 주민센터나 시니어클럽에 문의해 정확한 내용을 확인하세요.',

  relatedSlugs: ['basic-pension-application', 'elderly-care-service'],

  relatedCalculator: {
    brand: siteConfig.calculatorSiteName,
    name: '노후 생활비 계산기',
    url: 'https://www.jptcalc.kr/calc/pension-welfare/retirement-living/',
    openMode: 'new-tab',
    category: 'pension',
    crossSiteTrackingKey: 'guide-senior-job-program',
  },
  calculatorCTA: {
    text: '노후 필요 생활비 계산해보기',
    subText: `${siteConfig.calculatorSiteName} · 무료`,
  },
};

export default article;
