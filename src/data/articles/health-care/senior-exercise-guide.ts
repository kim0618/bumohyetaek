import type { ContentItem } from '@/types/content';
import { siteConfig } from '@/config/siteConfig';

const article: ContentItem = {
  slug: 'senior-exercise-guide',
  title: '시니어 안전 운동 가이드 - 종류별 효과와 주의사항',
  seoTitle: '노인 운동 가이드 - 걷기 수영 근력운동 종류별 효과와 안전 수칙',
  seoDescription: '노인에게 좋은 운동 종류와 효과, 관절 보호 요령, 낙상 예방 운동, 보건소 무료 운동 프로그램까지 시니어 안전 운동법을 정리했습니다.',
  category: 'health-care',
  template: 'standard',
  targetUser: 'senior',

  createdAt: '2026-03-31',
  updatedAt: '2026-03-31',
  reviewStatus: 'current',

  summary:
    '노인에게 좋은 운동 종류와 안전한 운동 방법을 정리했습니다. 걷기, 수영, 근력운동의 효과와 주의사항, 보건소 무료 운동 프로그램 활용법을 안내합니다.',
  heroDescription:
    '규칙적인 운동은 낙상 예방, 만성 질환 관리, 정신 건강에 모두 도움이 됩니다. 무리하지 않는 범위에서 꾸준히 움직이세요.',

  keyPoints: [
    '주 3-5회, 하루 30분 이상 걷기가 가장 안전하고 효과적',
    '근력운동은 근감소증 예방의 핵심 - 주 2회 이상 권장',
    '보건소 운동 프로그램은 무료 - 전문 지도사와 함께 안전하게',
  ],

  tags: ['노인운동', '걷기운동', '근력운동', '낙상예방', '보건소프로그램'],
  hubKey: ['health-checkup'],
  order: 23,
  isFeatured: false,

  officialSources: [
    {
      name: '보건복지부',
      url: 'https://www.mohw.go.kr',
      note: '노인 건강증진 및 운동 프로그램 사업 안내',
    },
    {
      name: '국민건강보험공단',
      url: 'https://www.nhis.or.kr',
      note: '건강검진 후 운동 처방 연계 안내',
    },
  ],

  sections: [
    {
      type: 'text',
      heading: '노인 운동이 중요한 이유',
      body: '규칙적인 운동은 근력 유지, 균형감각 향상, 심폐 기능 강화, 만성 질환(당뇨, 고혈압) 관리에 효과적입니다. 특히 [[senior-fall-prevention|낙상 예방]]에 운동이 가장 효과적인 방법으로 알려져 있습니다. 운동을 하는 노인은 하지 않는 노인에 비해 낙상 위험이 약 23% 낮다는 연구 결과도 있습니다.',
    },
    {
      type: 'list',
      heading: '노인에게 좋은 운동 종류',
      items: [
        '걷기 - 가장 안전하고 쉬운 유산소 운동, 하루 30분 이상 권장',
        '수영·아쿠아로빅 - 관절에 부담이 적고 전신 운동 효과',
        '체조·스트레칭 - 유연성 유지와 관절 가동 범위 확보',
        '근력운동(밴드·가벼운 아령) - 근감소증 예방의 핵심',
        '태극권·요가 - 균형감각 향상과 낙상 예방에 효과적',
      ],
    },
    {
      type: 'info',
      heading: '운동 강도와 빈도 가이드',
      body: '세계보건기구(WHO)는 만 65세 이상에게 주 150분 이상의 중강도 유산소 운동(빠르게 걷기)과 주 2회 이상 근력운동을 권장합니다. 처음 시작할 때는 하루 10분씩 걷기부터 시작해 점차 늘려가세요. 운동 중 대화가 가능한 정도가 적절한 강도입니다. 숨이 많이 차거나 가슴 통증이 느껴지면 즉시 중단하세요.',
    },
    {
      type: 'list',
      heading: '관절 보호와 안전 수칙',
      items: [
        '운동 전 5-10분 가벼운 스트레칭으로 준비운동',
        '무릎·허리에 통증이 있으면 해당 부위에 무리가 가는 동작 피하기',
        '미끄럽지 않은 운동화와 편한 옷 착용',
        '혼자보다 동료와 함께 - 응급 상황 대비와 동기 부여',
        '여름철 폭염과 겨울철 빙판길에는 실내 운동으로 대체',
        '만성 질환자는 운동 전 의사와 상담 - 특히 심장 질환, [[senior-diabetes-management|당뇨]] 환자',
      ],
    },
    {
      type: 'info',
      heading: '보건소 무료 운동 프로그램',
      body: '전국 보건소에서는 어르신을 위한 무료 운동 교실을 운영합니다. 체조, 걷기, 근력운동 등을 전문 운동 지도사와 함께 안전하게 배울 수 있습니다. 일부 보건소는 운동 처방 프로그램도 운영하여 개인 건강 상태에 맞는 맞춤 운동을 안내받을 수 있습니다. 가까운 보건소에 문의하거나 ☎ 129 (보건복지상담센터)로 연락하세요.',
    },
    {
      type: 'warning',
      heading: '운동 전 반드시 확인하세요',
      body: '심장 질환, 뇌혈관 질환, 심한 골다공증이 있는 분은 반드시 의사와 상담 후 운동을 시작하세요. 급격한 고강도 운동은 오히려 위험할 수 있습니다. 운동 중 어지러움, 가슴 통증, 심한 숨참이 나타나면 즉시 중단하고 휴식하세요.',
    },
  ],

  faq: [
    {
      question: '무릎이 안 좋은데 어떤 운동을 해야 하나요?',
      answer:
        '무릎 관절이 좋지 않으면 수영, 아쿠아로빅, 실내 자전거 등 관절에 부담이 적은 운동이 좋습니다. 걷기도 가능하지만 평탄한 길에서 짧은 시간부터 시작하세요. 계단 오르기, 등산, 달리기 등 무릎에 충격이 가는 운동은 피하는 것이 좋습니다.',
    },
    {
      question: '보건소 운동 프로그램은 어떻게 신청하나요?',
      answer:
        '가까운 보건소에 전화하거나 직접 방문하여 신청할 수 있습니다. 대부분 만 65세 이상이면 무료로 참여 가능하며, 일부 프로그램은 건강검진 결과를 지참하면 맞춤 운동 처방을 받을 수 있습니다. 프로그램은 보건소마다 다르니 사전에 확인하세요.',
    },
    {
      question: '매일 운동해야 하나요?',
      answer:
        '매일 할 필요는 없습니다. 주 3-5회가 적절하며, 하루 걸러 운동하면 근육 회복 시간을 확보할 수 있습니다. 다만 가벼운 걷기나 스트레칭은 매일 해도 좋습니다. 중요한 것은 무리하지 않으면서 꾸준히 하는 것입니다.',
    },
  ],

  cautionNote:
    '이 글은 일반적인 운동 가이드이며 개인의 건강 상태에 따라 적합한 운동이 다릅니다. 만성 질환이 있는 분은 반드시 의사와 상담 후 운동을 시작하세요.',

  relatedSlugs: ['senior-fall-prevention', 'senior-diabetes-management', 'national-health-checkup-guide'],

  relatedCalculator: {
    brand: siteConfig.calculatorSiteName,
    name: 'BMI 계산기',
    url: 'https://www.jptcalc.kr/calc/health/bmi/',
    openMode: 'new-tab',
    category: 'health',
    crossSiteTrackingKey: 'guide-exercise-bmi',
  },
  calculatorCTA: {
    text: '내 BMI 확인하기',
    subText: `${siteConfig.calculatorSiteName} - 무료`,
  },
};

export default article;
