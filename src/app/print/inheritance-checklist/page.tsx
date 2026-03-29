import type { Metadata } from 'next';
import PrintPageShell from '@/components/print/PrintPageShell';

export const metadata: Metadata = {
  title: '상속·증여 점검 체크리스트',
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: '상속 사전 점검',
    color: 'text-blue-700',
    items: [
      { label: '재산 목록 정리', desc: '부동산·예금·보험·주식·채무 전체 목록 작성' },
      { label: '상속인 범위 확인', desc: '배우자 + 직계비속(자녀) 1순위. 가족관계증명서로 확인' },
      { label: '법정 상속분 계산', desc: '배우자 1.5 : 자녀 1 비율. 상속인 수에 따라 달라짐' },
      { label: '상속세 면제 한도', desc: '일괄공제 5억 원 + 배우자공제 최대 30억 원. 초과분에 과세' },
    ],
  },
  {
    title: '증여 점검',
    color: 'text-green-700',
    items: [
      { label: '증여세 면제 한도 (10년 합산)', desc: '배우자 6억, 성인 자녀 5천만, 미성년 2천만 원' },
      { label: '부동산 증여 시 취득세', desc: '시가표준액 기준 3.5% 취득세 별도 부과' },
      { label: '증여 시기 분산', desc: '10년 단위로 나눠 증여하면 면제 한도 반복 활용 가능' },
      { label: '증여세 신고 기한', desc: '증여일이 속한 달 말일부터 3개월 이내 세무서 신고' },
    ],
  },
  {
    title: '필요 서류',
    color: 'text-teal-700',
    items: [
      { label: '가족관계증명서', desc: '정부24 또는 주민센터에서 발급' },
      { label: '재산세 과세증명서', desc: '시·군·구청 세무과 또는 정부24에서 발급' },
      { label: '금융거래 확인서', desc: '은행·증권사별 잔액증명서 발급' },
      { label: '부동산 등기부등본', desc: '인터넷등기소(iros.go.kr)에서 발급' },
      { label: '보험 계약 내역', desc: '보험협회 내보험 찾아줌(cont.insure.or.kr)에서 조회' },
    ],
  },
  {
    title: '전문가 상담 체크',
    color: 'text-gray-700',
    items: [
      { label: '세무사 상담', desc: '상속세·증여세 절세 전략 및 신고 대행' },
      { label: '법무사·변호사 상담', desc: '유언장 작성, 상속등기, 분쟁 예방' },
      { label: '금융기관 상담', desc: '보험금 수령, 계좌 명의 변경 절차 안내' },
    ],
  },
];

export default function InheritanceChecklistPage() {
  return (
    <PrintPageShell
      title="상속·증여 점검 체크리스트"
      subtitle="미리 준비하면 세금도 줄이고 분쟁도 예방합니다"
    >
      {sections.map((section) => (
        <section key={section.title}>
          <h2 className={`font-bold text-base mb-3 ${section.color}`}>
            {section.title}
          </h2>
          <div className="space-y-2">
            {section.items.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-gray-400 text-white text-xs">
                </span>
                <div>
                  <span className="font-semibold text-gray-900">{item.label}</span>
                  <span className="text-gray-500"> - {item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="rounded-lg bg-blue-50 p-4 mt-2">
        <p className="font-semibold text-blue-800 mb-1">메모</p>
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border-b border-blue-200 pb-2 h-7" />
          ))}
        </div>
      </section>
    </PrintPageShell>
  );
}
