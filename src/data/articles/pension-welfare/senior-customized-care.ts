import type { ContentItem } from '@/types/content';
import { siteConfig } from '@/config/siteConfig';

const article: ContentItem = {
  slug: 'senior-customized-care',
  title: '노인맞춤돌봄서비스 신청 방법과 서비스 내용',
  seoTitle: '노인맞춤돌봄서비스 신청 방법 - 대상, 서비스 내용, 필요 서류',
  seoDescription: '만 65세 이상 독거·취약 노인을 위한 노인맞춤돌봄서비스의 대상, 서비스 유형, 신청 절차, 필요 서류, 처리 기간을 안내합니다. 주민센터 또는 복지로에서 신청 가능합니다.',
  category: 'pension-welfare',
  template: 'policy',
  targetUser: 'both',

  createdAt: '2026-03-31',
  updatedAt: '2026-03-31',
  effectiveDate: '2026-01-01',
  reviewStatus: 'current',

  summary:
    '만 65세 이상 독거·취약 노인이라면 노인맞춤돌봄서비스를 신청할 수 있습니다. 안전확인, 생활지원, 사회참여 프로그램 등을 무료로 제공하며, 주민센터 또는 복지로에서 신청합니다.',
  heroDescription:
    '노인맞춤돌봄서비스는 혼자 살거나 돌봄이 필요한 만 65세 이상 어르신에게 안전확인, 생활지원, 사회참여 등을 제공하는 국가 서비스입니다. 대상 조건부터 신청 서류, 처리 기간까지 한 번에 정리했습니다.',

  keyPoints: [
    '만 65세 이상 독거·취약 어르신 대상 무료 돌봄 서비스',
    '안전확인·생활지원·사회참여·긴급지원 등 맞춤형 제공',
    '주민센터 방문 또는 복지로 온라인 신청, 처리 약 30일',
  ],

  tags: ['노인맞춤돌봄', '독거노인', '돌봄서비스', '노인복지', '사회서비스'],
  hubKey: ['prepare-care', 'government-benefits'],
  order: 23,
  isFeatured: false,

  officialSources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr', note: '노인맞춤돌봄서비스 제도 안내' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr', note: '온라인 신청 및 서비스 안내' },
    { name: '중앙노인돌봄지원기관', url: 'https://www.1661-2129.or.kr', note: '돌봄서비스 전문 상담' },
  ],

  sections: [
    {
      type: 'text',
      heading: '노인맞춤돌봄서비스란?',
      body: '노인맞춤돌봄서비스는 일상생활 영위가 어려운 취약 노인에게 안전확인, 생활지원, 사회참여, 긴급지원 등을 제공하는 국가 사회서비스입니다. 2020년 기존 6개 노인돌봄사업을 통합해 운영 중이며, [[elderly-care-service|기존 돌봄서비스 안내]]에서 전체 개요를 확인할 수 있습니다. 장기요양등급을 받지 못했지만 돌봄이 필요한 어르신이 주요 대상입니다.',
    },
    {
      type: 'list',
      heading: '서비스 대상',
      items: [
        '만 65세 이상 독거 어르신 (혼자 사시는 분)',
        '만 65세 이상 고령 부부 가구 (부부 모두 65세 이상)',
        '신체적·정신적 기능 저하로 돌봄이 필요한 어르신',
        '고독사·자살 위험이 높은 어르신',
        '장기요양 등급 외 판정자 중 돌봄이 필요한 어르신',
      ],
    },
    {
      type: 'list',
      heading: '서비스 내용',
      items: [
        '안전확인: 정기적 방문·전화로 안전 상태 확인, 말벗 서비스 제공 ([[senior-emergency-alert|응급안전안심서비스]] 연계 가능)',
        '생활지원: 외출 동행, 가사 지원(일부), 식사 배달 연계 ([[senior-free-meal|경로식당 무료 급식]] 이용 가능)',
        '사회참여: 집단 프로그램, 자조모임, 문화·여가 활동 연계',
        '긴급지원: 위기 상황 발생 시 긴급 돌봄, 병원 동행, 일시 보호 서비스',
      ],
    },
    {
      type: 'list',
      heading: '신청 시 필요한 서류',
      items: [
        '신분증 (주민등록증 또는 운전면허증)',
        '건강보험증 사본',
        '소득·재산 확인 서류 (필요 시 담당자가 안내)',
        '장기요양인정서 (해당 시)',
        '돌봄서비스 신청서 (주민센터 비치)',
      ],
    },
    {
      type: 'numbered-list',
      heading: '신청 절차',
      items: [
        '거주지 읍·면·동 주민센터 방문 또는 복지로(www.bokjiro.go.kr)에서 온라인 신청',
        '담당 공무원이 신청 접수 후 서비스 필요도 조사 일정 안내',
        '전담사회복지사가 방문하여 돌봄 필요도 조사 실시',
        '조사 결과에 따라 서비스 유형(일반·중점·특화) 결정 및 대상자 선정',
        '지역 수행기관과 연계하여 서비스 제공 시작',
      ],
    },
    {
      type: 'info',
      heading: '처리 기간',
      body: '신청 접수일로부터 약 30일 이내에 대상자 선정 여부가 결정됩니다. 긴급 돌봄이 필요한 경우 우선 심사를 통해 조기 연계가 가능합니다. 신청 후 진행 상황은 주민센터 또는 보건복지상담센터(☎ 129)에 문의하세요.',
    },
    {
      type: 'tip',
      heading: '자녀가 대신 신청할 수 있습니다',
      body: '부모님이 직접 방문하기 어려우면 자녀나 보호자가 대리 신청할 수 있습니다. 어르신의 신분증 사본과 신청자 신분증을 함께 지참하세요. 신청 전 궁금한 점은 보건복지상담센터(☎ 129)에서 상담받을 수 있습니다.',
    },
  ],

  faq: [
    {
      question: '서비스 비용이 있나요?',
      answer: '노인맞춤돌봄서비스는 기본적으로 무료입니다. 다만 가사 지원 등 일부 서비스는 소득 수준에 따라 소액의 본인 부담이 발생할 수 있습니다.',
    },
    {
      question: '장기요양등급을 받은 어르신도 이용할 수 있나요?',
      answer: '장기요양 1-5등급 판정을 받으신 분은 대상에서 제외됩니다. 다만 인지지원등급 수급자는 일부 서비스를 이용할 수 있으니 주민센터에 문의하세요.',
    },
    {
      question: '서비스를 얼마나 자주 받을 수 있나요?',
      answer: '돌봄 필요도에 따라 일반형(월 16시간 내외)과 중점형(월 40시간 내외)으로 나뉩니다. 위기 상황에는 특화 서비스가 집중 제공됩니다.',
    },
  ],

  cautionNote:
    '이 글은 2026년 3월 기준으로 작성되었습니다. 서비스 내용과 대상 기준은 지역 및 예산에 따라 변경될 수 있으니 주민센터 또는 복지로에서 최신 정보를 확인하시기 바랍니다.',

  relatedSlugs: ['elderly-care-service', 'senior-emergency-alert', 'senior-free-meal', 'long-term-care-grade', 'dementia-family-respite'],

  relatedCalculator: {
    brand: siteConfig.calculatorSiteName,
    name: '장기요양 본인부담금 계산기',
    url: 'https://www.jptcalc.kr/calc/pension-welfare/long-term-care/',
    openMode: 'new-tab',
    category: 'pension',
    crossSiteTrackingKey: 'guide-senior-customized-care',
  },
  calculatorCTA: {
    text: '장기요양 본인부담금 계산해보기',
    subText: `${siteConfig.calculatorSiteName} · 무료`,
  },
};

export default article;
