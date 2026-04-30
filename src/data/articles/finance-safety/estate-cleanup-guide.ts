import type { ContentItem } from '@/types/content';
import { siteConfig } from '@/config/siteConfig';

const article: ContentItem = {
  slug: 'estate-cleanup-guide',
  title: '유품 정리 절차와 비용 가이드 - 마음의 준비부터 실무까지',
  seoTitle: '유품 정리 절차 비용 가이드 - 전문업체 DIY 비교',
  seoDescription: '가족이 돌아가신 후 유품을 정리하는 시기, 전문 업체 비용, 직접 정리하는 방법, 감정적 준비까지 실질적인 정보를 정리했습니다.',
  category: 'finance-safety',
  template: 'standard',
  targetUser: 'family',

  createdAt: '2026-03-30',
  updatedAt: '2026-04-26',
  reviewStatus: 'current',

  summary:
    '가족이 돌아가신 후 유품 정리는 감정적으로도 실무적으로도 쉽지 않습니다. 적절한 시기, 전문 업체 활용법, 비용, 직접 정리하는 방법을 안내합니다.',
  heroDescription:
    '유품 정리는 서두를 필요가 없습니다. 충분히 슬퍼한 후, 준비가 되었을 때 시작하세요. 절차와 비용을 미리 알아두면 마음의 부담을 줄일 수 있습니다.',

  keyPoints: [
    '유품 정리 적정 시기는 사망 후 49일-3개월 사이 권장',
    '전문 업체 비용은 원룸 50-80만 원, 아파트 100-300만 원 수준',
    '중요 서류·귀중품은 반드시 먼저 분류 후 정리 시작',
  ],

  tags: ['유품정리', '유품정리비용', '유품정리업체', '사후처리', '장례후절차'],
  hubKey: ['prepare-care'],
  order: 19,
  isFeatured: false,

  officialSources: [
    { name: '한국소비자원', url: 'https://www.kca.go.kr', note: '유품 정리 서비스 관련 소비자 상담' },
    { name: '보건복지부', url: 'https://www.mohw.go.kr', note: '관련 안내' },
    { name: '한국사회서비스원', url: 'https://www.soci.kr', note: '관련 안내' },
  ],

  sections: [
    {
      type: 'text',
      heading: '결론부터, 유품 정리는 서두를 필요가 없습니다',
      body: '법적으로 유품 정리의 기한은 없습니다. 임대주택이라면 계약 종료 전에 처리해야 하지만, 자가 주택이라면 충분히 슬퍼한 뒤 준비가 됐을 때 시작해도 됩니다. 장례 후 49일에서 3개월 사이에 시작하는 경우가 많고, [[funeral-preparation-guide|장례 절차]] 이후 행정 처리가 마무리될 때쯤이 가장 수월합니다. 먼저 중요 서류와 귀중품을 분류해두면 나머지 정리가 훨씬 쉬워집니다.',
    },
    {
      type: 'numbered-list',
      heading: '유품 정리 전 준비',
      items: [
        '중요 서류 분류: 부동산 등기권리증, 보험 증권, 통장, 유언장 등 먼저 확보',
        '귀중품 확인: 현금, 귀금속, 수집품 등 분류',
        '가족 간 협의: 남기고 싶은 물건, 기증할 물건, 처분할 물건 구분',
        '사진 촬영: 정리 전 방 전체를 사진으로 기록 (분쟁 예방)',
        '[[inheritance-gift-planning|상속·증여]] 관련 재산이 유품 중에 있을 수 있으므로 확인 필수',
      ],
    },
    {
      type: 'info',
      heading: '전문 업체 이용',
      body: '유품 정리 전문 업체는 분류, 운반, 폐기, 청소까지 일괄 처리합니다. 비용은 공간 크기에 따라 다르며, 원룸은 50-80만 원, 일반 아파트(20-30평)는 100-300만 원 수준입니다. 업체 선정 시 견적을 2-3곳에서 비교하고, 후기와 사업자 등록 여부를 확인하세요. 폐기물 처리 확인서를 받아두는 것이 좋습니다.',
    },
    {
      type: 'numbered-list',
      heading: '직접 정리하는 방법',
      items: [
        '한 방씩 나눠서 진행 - 하루에 전부 하려고 하지 않기',
        '"남기기·기증·폐기" 세 박스로 분류',
        '의류·침구: 깨끗한 것은 기부(아름다운가게, 굿윌스토어 등)',
        '가전·가구: 사용 가능한 것은 중고 거래 또는 기부',
        '폐기물: 대형 폐기물은 구청에 신고 후 스티커 부착 배출',
        '개인 정보 포함 서류: 파쇄 처리',
      ],
    },
    {
      type: 'tip',
      heading: '감정적으로 힘들 때',
      body: '유품 정리는 감정적으로 매우 힘든 과정입니다. 혼자 하지 말고 가족이나 친구와 함께 하세요. 고인의 물건 중 하나를 기념품으로 남기는 것도 좋은 방법입니다. 심리적으로 힘들다면 정신건강복지센터(1577-0199) 상담을 이용할 수 있습니다.',
    },
    {
      type: 'warning',
      heading: '유품 중 재산 관련 물건 주의',
      body: '고인의 유품 중 부동산 등기권리증, 주식 증서, 보험 증권, 채권 등이 있을 수 있습니다. 이런 서류는 상속 절차에 필요하므로 절대 폐기하지 마세요. [[survivor-pension|유족연금]] 신청에 필요한 서류도 확인하세요.',
    },
    {
      type: 'list',
      heading: '행정 처리 시 필요한 서류',
      items: [
        '사망진단서',
        '가족관계증명서',
        '신분증',
        '위임장(가족이 대행하는 경우)',
      ],
    },
    {
      type: 'info',
      heading: '문의 연락처',
      body: '보건복지상담센터 ☎ 129 또는 지역 주민센터에 문의하세요. 상속 포기는 사망 인지 후 3개월 이내에 반드시 신청해야 합니다.',
    },
  ],

  faq: [
    {
      question: '유품 정리 업체를 어떻게 찾나요?',
      answer:
        '인터넷 검색이나 지역 커뮤니티를 통해 찾을 수 있습니다. 반드시 사업자 등록 여부와 견적의 투명성을 확인하세요. 장례식장에서 연계해주는 경우도 있습니다. 2~3곳에서 견적을 비교하고 계약서에 추가 비용 발생 조건을 명시해 달라고 요청하세요. 소비자 분쟁 시 한국소비자원(☎ 1372)에 상담할 수 있습니다.',
    },
    {
      question: '고인의 스마트폰·컴퓨터는 어떻게 처리하나요?',
      answer:
        '스마트폰과 컴퓨터에는 금융 정보, 사진, 개인 기록 등이 있을 수 있습니다. 통신사 해지 신청 전에 중요 데이터를 백업하고, 금융 앱 계좌 확인 및 자동이체 내역을 파악해 두세요. 개인정보를 완전히 삭제한 후 폐기하거나 초기화 후 기부할 수 있습니다. 통신사 명의 해지는 사망진단서와 상속인 신분증으로 가능합니다.',
    },
  ],

  cautionNote:
    '유품 정리 업체의 서비스 품질과 비용은 업체마다 크게 다릅니다. 계약 전 반드시 견적서를 서면으로 받고, 추가 비용 발생 여부를 확인하세요.',

  relatedSlugs: ['funeral-preparation-guide', 'inheritance-gift-planning', 'survivor-pension', 'inheritance-debt-rejection'],

  relatedCalculator: {
    brand: siteConfig.calculatorSiteName,
    name: '상속세 계산기',
    url: 'https://www.jptcalc.kr/calc/realestate/inheritance/',
    openMode: 'new-tab',
    category: 'finance',
    crossSiteTrackingKey: 'guide-estate-inheritance-tax',
  },
  calculatorCTA: {
    text: '상속세 계산해보기',
    subText: `${siteConfig.calculatorSiteName} - 무료`,
  },
};

export default article;
