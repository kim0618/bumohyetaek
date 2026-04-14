import type { ContentItem } from '@/types/content';

const article: ContentItem = {
  slug: 'elderly-care-service',
  title: '노인맞춤돌봄서비스 신청 방법 및 지원 내용',
  seoTitle: '노인맞춤돌봄서비스 신청 방법 - 대상과 지원 내용',
  seoDescription: '혼자 사시는 어르신이라면 노인맞춤돌봄서비스를 신청해보세요. 안전 확인·말벗·외출 동행 등을 무료로 받을 수 있으며 주민센터 또는 복지로에서 신청할 수 있습니다.',
  category: 'pension-welfare',
  template: 'policy',
  targetUser: 'both',

  createdAt: '2025-03-01',
  updatedAt: '2026-04-14',
  effectiveDate: '2026-01-01',
  reviewStatus: 'current',

  summary:
    '혼자 사시는 어르신이나 돌봄이 필요한 부모님이라면 노인맞춤돌봄서비스를 신청해보세요. 안전 확인부터 외출 동행까지 일상을 지원하는 무료 서비스입니다.',
  heroDescription:
    '노인맞춤돌봄서비스는 혼자 사시거나 돌봄이 필요한 만 65세 이상 어르신에게 안전 확인, 사회참여, 생활지원 등을 제공하는 국가 서비스입니다. 신청 방법과 지원 내용을 정리했습니다.',

  keyPoints: [
    '만 65세 이상 독거·취약 어르신 대상 무료 서비스',
    '안전지원·사회참여·생활교육·일상생활지원 제공',
    '주민센터 방문 또는 복지로에서 신청',
  ],

  tags: ['노인맞춤돌봄', '독거노인', '돌봄서비스', '노인복지', '방문돌봄'],
  hubKey: ['prepare-care', 'government-benefits'],
  order: 3,
  isFeatured: false,

  officialSources: [
    {
      name: '보건복지부',
      url: 'https://www.mohw.go.kr',
      note: '노인맞춤돌봄서비스 제도 안내',
    },
    {
      name: '복지로',
      url: 'https://www.bokjiro.go.kr',
      note: '온라인 신청 포털',
    },
  ],

  sections: [
    {
      type: 'text',
      heading: '노인맞춤돌봄서비스란?',
      body: '노인맞춤돌봄서비스는 요양원에 가야만 받을 수 있는 서비스라고 생각하기 쉽지만, 실제로는 집에서 혼자 생활하는 어르신도 무료로 이용할 수 있습니다. 2020년 기존 6개 노인 돌봄 사업을 통합해 운영 중이며, 안전 확인부터 말벗·외출 동행까지 일상을 지원합니다. [[senior-welfare-center|노인복지관]]이나 지역 사회서비스 기관과 연계해 다양한 프로그램을 함께 이용할 수 있습니다.',
    },
    {
      type: 'info',
      heading: '서비스 대상',
      body: '만 65세 이상으로 아래 조건 중 하나에 해당하면 신청할 수 있습니다. 독거 어르신, 조손 가정, 고령 부부 가구가 주요 대상입니다.',
    },
    {
      type: 'list',
      items: [
        '독거 어르신 (혼자 사시는 만 65세 이상)',
        '고령 부부 가구 (부부 모두 만 65세 이상)',
        '신체적·정신적 기능 저하로 돌봄이 필요한 어르신',
        '고독사·자살 위험이 높은 어르신',
      ],
    },
    {
      type: 'text',
      heading: '제공 서비스 유형',
      body: '어르신의 상태와 필요에 따라 네 가지 유형의 서비스를 제공합니다.',
    },
    {
      type: 'list',
      items: [
        '안전지원: 주기적 안전 확인, 정보 제공, 말벗 서비스 ([[senior-emergency-alert|응급안전안심서비스]]와 함께 이용 가능)',
        '사회참여: 집단 프로그램, 자조모임 연계',
        '생활교육: 신체·인지 기능 향상 프로그램',
        '일상생활 지원: 이동 동행, 가사 지원 (일부 제공), [[senior-free-meal|경로식당 무료 급식]] 연계',
      ],
    },
    {
      type: 'list',
      heading: '신청 시 필요한 서류',
      items: [
        '신분증',
        '건강보험증',
        '장기요양인정서(해당 시)',
      ],
    },
    {
      type: 'numbered-list',
      heading: '신청 방법',
      items: [
        '읍·면·동 주민센터 방문 신청 (본인 또는 가족 신청 가능)',
        '복지로(www.bokjiro.go.kr) 온라인 신청',
        '담당자 방문 상담 후 서비스 필요도 조사',
        '서비스 대상자 선정 및 제공기관 연계',
      ],
    },
    {
      type: 'tip',
      heading: '자녀가 대신 신청할 수 있습니다',
      body: '부모님이 직접 신청하기 어려운 경우, 자녀나 보호자가 주민센터에 방문해 신청할 수 있습니다. 신청 시 어르신의 기본 정보와 현재 생활 상황을 간단히 설명하면 담당자가 적합한 서비스를 안내해 드립니다. 궁금한 점은 보건복지상담센터(☎ 129) 또는 주민센터에 문의하세요. 장기요양인정서 발급 후에는 즉시 서비스 이용이 가능합니다.',
    },
  ],

  faq: [
    {
      question: '서비스 비용은 얼마인가요?',
      answer:
        '노인맞춤돌봄서비스는 기본적으로 무료입니다. 단, 가사 지원 등 일부 서비스는 소득 수준에 따라 소액의 본인 부담이 발생할 수 있습니다. 신청 시 담당자에게 확인하세요.',
    },
    {
      question: '장기요양등급을 받은 어르신도 신청할 수 있나요?',
      answer:
        '장기요양 1~5등급을 받으신 분은 노인맞춤돌봄서비스 대상에서 제외됩니다. 다만 인지지원등급 수급자는 일부 서비스를 받을 수 있으니 주민센터에 문의하세요.',
    },
  ],

  cautionNote:
    '이 글은 2026년 기준 정보를 바탕으로 작성되었습니다. 서비스 내용과 대상 기준은 지역 및 예산에 따라 다를 수 있으니 주민센터에서 확인하시기 바랍니다.',

  relatedSlugs: ['long-term-care-grade', 'basic-pension-application', 'care-type-selection', 'senior-fall-prevention'],
};

export default article;
