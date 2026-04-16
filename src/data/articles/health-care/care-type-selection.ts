import type { ContentItem } from '@/types/content';
import { siteConfig } from '@/config/siteConfig';

const article: ContentItem = {
  slug: 'care-type-selection',
  title: '재가급여 vs 시설급여 - 부모님 상황에 맞는 장기요양 서비스 선택',
  seoTitle: '재가급여 시설급여 차이 - 장기요양 서비스 선택 가이드',
  seoDescription: '장기요양 등급을 받은 후 재가급여(집에서 돌봄)와 시설급여(요양원 입소) 중 선택해야 합니다. 비용과 서비스 차이, 선택 기준을 정리했습니다.',
  category: 'health-care',
  template: 'standard',
  targetUser: 'family',

  createdAt: '2026-03-29',
  updatedAt: '2026-04-15',
  reviewStatus: 'current',
  effectiveDate: '2026-01-01',

  summary:
    '장기요양 등급을 받으면 집에서 돌봄 서비스를 받는 재가급여와 요양원에 입소하는 시설급여 중 선택할 수 있습니다. 부모님 상태와 가족 상황에 따라 최적의 선택이 다릅니다.',
  heroDescription:
    '장기요양 등급을 받고 나서 "그래서 어떻게 하면 되나요?"라는 질문이 생깁니다. 집에서 서비스를 받는 방법과 시설에 입소하는 방법, 각각 어떤 상황에 맞는지 정리했습니다.',

  keyPoints: [
    '재가급여: 집에서 방문요양·방문목욕·주야간보호 등 이용',
    '시설급여: 요양원 입소 (1~2등급 또는 등급 외 특례)',
    '비용은 재가급여가 낮고, 24시간 돌봄이 필요하면 시설급여 고려',
  ],

  tags: ['재가급여', '시설급여', '장기요양', '방문요양', '요양원선택'],
  isFeatured: false,
  hubKey: ['prepare-care'],
  order: 10,

  officialSources: [
    { name: '국민건강보험공단 장기요양보험', url: 'https://www.longtermcare.or.kr', note: '등급별 급여 안내' },
    { name: '보건복지부', url: 'https://www.mohw.go.kr', note: '관련 안내' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr', note: '관련 안내' },
  ],

  sections: [
    {
      type: 'text',
      heading: '등급은 받았는데 다음 단계가 막막하시죠',
      body: '장기요양 등급 통지서를 받고 나면 "재가급여"와 "시설급여"라는 낯선 용어 앞에서 어떤 선택이 부모님께 맞는 건지 걱정이 앞서게 됩니다. 집에서 돌보는 게 나을지, 요양원에 모시는 게 나을지. 정답은 없지만 부모님의 신체 상태, 가족의 돌봄 여건, 비용 부담까지 따져보면 방향이 잡힙니다. [[long-term-care-grade|장기요양 등급 신청]]을 아직 안 하셨다면 그것부터 시작하세요.',
    },
    {
      type: 'info',
      heading: '재가급여란?',
      body: '집에서 생활하면서 요양보호사나 사회복지사 등 전문인력이 방문해 제공하는 서비스입니다. [[home-visiting-care|방문요양]](일상생활 지원), 방문목욕, 방문간호, 주야간보호(낮 동안 시설 이용), 단기보호(일시 입소) 등이 포함됩니다. 1~5등급 및 인지지원등급 모두 이용 가능합니다.',
    },
    {
      type: 'info',
      heading: '시설급여란?',
      body: '[[care-facility-comparison|요양원]](노인요양시설 또는 노인요양공동생활가정)에 입소해 24시간 돌봄을 받는 서비스입니다. 원칙적으로 1~2등급이 대상이며, 3~5등급은 등급 외 특례(독거, 가족이 돌볼 수 없는 경우 등)에 해당해야 시설급여를 받을 수 있습니다.',
    },
    {
      type: 'list',
      heading: '재가급여와 시설급여, 어떤 상황에 맞을까',
      items: [
        '[재가급여] 가족 중 돌봄을 보조할 수 있는 사람이 있는 경우',
        '[재가급여] 어르신이 집에 있기를 원하는 경우',
        '[재가급여] 3~5등급으로 스스로 어느 정도 생활이 가능한 경우',
        '[재가급여] 비용 부담을 줄이고 싶은 경우 - 치매 초기라면 익숙한 환경이 도움됨',
        '[시설급여] 1~2등급으로 혼자 일상생활이 거의 불가능한 경우',
        '[시설급여] 가족이 24시간 돌봄을 제공하기 어려운 경우',
        '[시설급여] 낙상·욕창 등 위험 관리가 필요하거나 독거 어르신인 경우',
        '[시설급여] 치매가 심해 전문 케어가 필요한 경우',
      ],
    },
    {
      type: 'info',
      heading: '비용 비교',
      body: '재가급여 본인부담은 월 이용금액의 15%(일반 기준), 시설급여는 20%입니다. 실제 비용은 등급과 이용량에 따라 다르지만 재가급여가 일반적으로 저렴합니다. 단, 가족의 돌봄 공백을 채우기 위해 유료 간병인을 별도 고용하면 재가급여가 더 비쌀 수 있습니다.',
    },
    {
      type: 'tip',
      heading: '처음에는 재가급여로 시작',
      body: '[[long-term-care-grade|등급]]을 받았다면 처음에는 재가급여로 시작해보세요. 상태가 나빠지거나 가족 돌봄이 어려워지면 시설급여로 전환할 수 있습니다. 장기요양 등급은 상태에 따라 재판정을 받아 조정됩니다.',
    },
    {
      type: 'info',
      heading: '문의처',
      body: '장기요양 서비스 상담 및 등급 신청 문의: ☎ 1577-1000 (국민건강보험공단)',
    },
    {
      type: 'warning',
      heading: '의료 안내 사항',
      body: '이 글은 일반적인 건강 정보를 제공하며, 의학적 진단이나 치료를 대체하지 않습니다. 증상이 있거나 치료가 필요한 경우 반드시 의사와 상담하세요. 개인의 건강 상태에 따라 적합한 치료법이 다를 수 있습니다. 응급 상황 시 ☎ 119, 건강 상담은 ☎ 1577-1000(국민건강보험공단)으로 문의하세요.',
    },
  ],

  faq: [
    {
      question: '재가급여와 시설급여를 동시에 받을 수 있나요?',
      answer: '원칙적으로 동시 이용은 불가합니다. 시설급여(요양원 입소) 중에는 재가급여를 받을 수 없습니다. 단, 시설 입소 전후로 단기보호나 주야간보호 등 재가급여를 이용하는 것은 가능합니다.',
    },
    {
      question: '3등급인데 요양원에 들어갈 수 있나요?',
      answer: '3~5등급은 원칙적으로 시설급여 대상이 아니지만, 독거노인이거나 가족이 돌볼 수 없다는 등의 예외 사유가 인정되면 입소할 수 있습니다. 국민건강보험공단(1577-1000)에 상담하면 가능 여부를 확인할 수 있습니다.',
    },
    {
      question: '요양원 입소 후 집으로 다시 돌아올 수 있나요?',
      answer: '언제든 퇴소하고 재가급여로 전환할 수 있습니다. 시설급여에서 재가급여로 바꾸는 데 별도 제한은 없습니다.',
    },
  ],

  cautionNote:
    '급여 기준과 본인부담률은 변경될 수 있습니다. 개인 상황에 맞는 서비스 선택은 국민건강보험공단 장기요양 담당자 또는 장기요양 기관에 상담하세요.',

  relatedCalculator: {
    brand: siteConfig.calculatorSiteName,
    name: '장기요양 본인부담금 계산기',
    url: 'https://www.jptcalc.kr/calc/pension-welfare/long-term-care/',
    openMode: 'new-tab',
    category: 'pension',
    crossSiteTrackingKey: 'guide-care-type-selection',
  },
  calculatorCTA: {
    text: '등급별 본인부담금 계산해보기',
    subText: `${siteConfig.calculatorSiteName} · 무료`,
  },

  relatedSlugs: ['long-term-care-grade', 'home-visiting-care', 'care-facility-comparison'],
};

export default article;
