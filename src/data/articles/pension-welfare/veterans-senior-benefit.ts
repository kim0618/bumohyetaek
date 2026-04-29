import type { ContentItem } from '@/types/content';
import { siteConfig } from '@/config/siteConfig';

const article: ContentItem = {
  slug: 'veterans-senior-benefit',
  title: '국가유공자 노인 혜택 총정리 - 연금, 의료, 생활 지원 안내',
  seoTitle: '국가유공자 노인 혜택 총정리 - 보훈연금, 의료, 교통, 복지 지원',
  seoDescription: '국가유공자 어르신이 받을 수 있는 보훈연금, 의료 감면, 교통 할인, 주거 지원 등 다양한 혜택을 한곳에 정리했습니다. 등록 방법과 신청 절차도 안내합니다.',
  category: 'pension-welfare',
  template: 'policy',
  targetUser: 'both',

  createdAt: '2026-04-02',
  updatedAt: '2026-04-29',
  effectiveDate: '2026-01-01',
  reviewStatus: 'current',

  summary:
    '국가유공자 어르신은 보훈연금, 의료비 감면, 교통 할인, 주거 지원, 취업 우선 등 다양한 혜택을 받을 수 있습니다. 국가보훈처(☎ 1811-1811) 또는 가까운 보훈청에서 신청하세요.',

  heroDescription:
    '국가를 위해 헌신하신 어르신은 국가유공자 등록을 통해 연금부터 의료·교통·주거까지 폭넓은 국가 지원을 받을 수 있습니다. 어떤 혜택이 있고 어떻게 신청하는지 안내합니다.',

  keyPoints: [
    '국가유공자 등록 시 보훈연금·수당, 의료비 감면, 교통 할인 등 다중 혜택 제공',
    '6·25 참전유공자, 베트남전 참전, 독립유공자 등 다양한 유형 포함',
    '국가보훈처(☎ 1811-1811) 또는 가까운 지방보훈청·보훈지청에서 신청',
  ],

  tags: ['국가유공자', '보훈연금', '참전유공자', '보훈혜택', '노인복지'],
  hubKey: ['government-benefits'],
  order: 32,
  isFeatured: false,

  relatedCalculator: {
    brand: siteConfig.calculatorSiteName,
    name: '만 나이 계산기',
    url: 'https://www.jptcalc.kr/calc/date/age/',
    openMode: 'new-tab',
    category: 'finance',
    crossSiteTrackingKey: 'guide-veterans-senior-benefit-age',
  },

  calculatorCTA: {
    text: '보훈대상자 나이별 혜택 확인하기',
    subText: `${siteConfig.calculatorSiteName} - 무료`,
  },

  officialSources: [
    { name: '국가보훈처', url: 'https://www.mpva.go.kr', note: '국가유공자 등록 및 혜택 안내' },
    { name: '보훈복지의료공단', url: 'https://www.vwfc.or.kr', note: '보훈 의료 및 복지 서비스' },
    { name: '국가보훈처 콜센터', url: 'https://www.mpva.go.kr', note: '☎ 1811-1811 (국가보훈처)' },
  ],

  sections: [
    {
      type: 'text',
      heading: '국가유공자 노인 혜택 개요',
      body: '아버지가 6·25전쟁에 참전하셨다는 사실은 알고 있었지만, 국가유공자 등록을 따로 해야 한다는 것을 뒤늦게 알게 되는 경우가 많습니다. 이미 돌아가신 뒤에야 혜택을 받지 못했다는 걸 후회하는 가족도 있습니다. 독립운동·6·25·베트남전 기여자와 유가족은 국가유공자로 등록하면 보훈 급여부터 의료·교통·주거까지 폭넓은 지원을 받을 수 있습니다. [[basic-pension-application|기초연금]]과도 중복 수령이 가능합니다.',
    },
    {
      type: 'list',
      heading: '주요 보훈 급여 (연금·수당)',
      items: [
        '보훈연금: 상이등급에 따라 월 수십만 원-수백만 원 지급',
        '참전유공자 수당: 6·25·베트남전 참전자에게 매월 지급 (2026년 기준 약 40만 원)',
        '고령 수당: 만 80세 이상 고령 국가유공자에게 추가 지급',
        '사망 일시금·유족 연금: 유공자 사망 후 유족에게 지급',
        '생활 조정 수당: 생활이 어려운 유공자에게 추가 지원',
      ],
    },
    {
      type: 'list',
      heading: '의료 혜택',
      items: [
        '보훈병원 이용 시 진료비 전액 또는 일부 감면 (상이등급별 상이)',
        '위탁 병원 이용 시 의료비 감면 (일반병원 이용 가능)',
        '보조기기 지원: 의지(義肢), 보청기, 안경 등 지원',
        '건강 검진: 보훈 전담 의료기관에서 특별 검진',
        '의료 급여: 상이 1-3급은 의료 급여 1종 혜택 적용',
      ],
    },
    {
      type: 'list',
      heading: '생활 및 이동 혜택',
      items: [
        '교통 할인: 철도(KTX·일반 열차) 30-50% 할인, 고속버스 30% 할인',
        '항공 할인: 국내선 항공 10-20% 할인 (일부 항공사)',
        '주거 지원: 보훈 임대 주택 우선 공급, 주택 개조 지원',
        '교육 지원: 자녀·손자녀 대학 등록금 지원 (소득 기준 충족 시)',
        '취업 우선: 공기업·공무원 시험 가산점, 취업 연계',
      ],
    },
    {
      type: 'info',
      heading: '국가유공자 등록 방법',
      body: '국가유공자 등록은 국가보훈처 누리집(www.mpva.go.kr) 또는 가까운 지방보훈청·보훈지청에서 신청합니다. 전화 신청은 ☎ 1811-1811로 가능합니다. 등록 후 심사를 거쳐 유공자 확인 및 등록증이 발급되며, 이후 각 혜택별로 개별 신청이 필요합니다.',
    },
    {
      type: 'list',
      heading: '신청 시 필요한 서류',
      items: [
        '국가유공자 등록 신청서 (보훈청 비치)',
        '신분증 (주민등록증 또는 운전면허증)',
        '참전 증빙 서류 (복무 확인서, 훈장 수여 증서 등)',
        '의료 기록 (상이 등급 신청 시 필요)',
        '가족 관계 증명서 (유족 신청 시)',
        '처리 기간: 등록 심사까지 약 3-6개월 소요',
      ],
    },
    {
      type: 'tip',
      heading: '미등록 국가유공자 혜택을 놓치지 마세요',
      body: '많은 어르신이 국가유공자 자격이 있음에도 등록하지 않아 혜택을 받지 못하고 있습니다. 6·25전쟁 참전 어르신, 베트남전 참전 어르신이라면 반드시 보훈청에 문의하세요. 이미 돌아가신 분의 경우 유족이 사후 등록을 신청할 수도 있습니다. ☎ 1811-1811로 문의하세요.',
    },
  ],

  faq: [
    {
      question: '기초연금과 보훈연금을 동시에 받을 수 있나요?',
      answer: '네, 가능합니다. 단, 보훈 급여가 소득 인정액에 포함되므로 보훈 급여가 높으면 기초연금 선정 기준을 초과할 수 있습니다. 국민연금공단(☎ 1355) 또는 보훈청(☎ 1811-1811)에서 정확한 수령 가능 여부를 확인하세요.',
    },
    {
      question: '유공자가 사망한 후 가족도 혜택을 받을 수 있나요?',
      answer: '유족연금, 일시금 등 유족 지원 혜택이 있습니다. 유족의 자격 기준은 배우자, 자녀, 부모 순서로 적용되며 각자 별도 등록 신청이 필요합니다. 자세한 내용은 ☎ 1811-1811로 문의하세요.',
    },
  ],

  cautionNote:
    '이 글은 2026년 4월 기준으로 작성되었습니다. 보훈 급여 금액과 혜택 기준은 매년 변경될 수 있으니 국가보훈처(☎ 1811-1811) 또는 가까운 보훈청에서 최신 정보를 확인하세요.',

  relatedSlugs: ['basic-pension-application', 'national-pension-timing', 'senior-transport-discount', 'senior-discount-guide'],
};

export default article;
