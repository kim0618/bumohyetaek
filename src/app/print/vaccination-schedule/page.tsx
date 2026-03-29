import type { Metadata } from 'next';
import PrintPageShell from '@/components/print/PrintPageShell';

export const metadata: Metadata = {
  title: '어르신 예방접종 일정표',
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: '매년 접종 (필수)',
    color: 'text-blue-700',
    items: [
      { label: '인플루엔자 (독감)', desc: '매년 10~12월 접종. 만 65세 이상 무료. 보건소·지정 의료기관' },
    ],
  },
  {
    title: '1회 접종 (평생)',
    color: 'text-green-700',
    items: [
      { label: '폐렴구균 (PPSV23)', desc: '만 65세 이상 1회 무료. 보건소 방문 접종' },
      { label: '대상포진', desc: '만 65세 이상 1회 무료 (2025년 기준). 보건소 방문 접종' },
    ],
  },
  {
    title: '상황별 접종',
    color: 'text-teal-700',
    items: [
      { label: '파상풍·디프테리아 (Td/Tdap)', desc: '10년마다 1회 추가 접종 권장. 상처 발생 시 확인' },
      { label: 'B형간염', desc: '항체 검사 후 미보유 시 3회 접종. 건강검진에서 확인 가능' },
      { label: '코로나19', desc: '고위험군 추가 접종 권고. 시기별 보건소 안내 확인' },
    ],
  },
  {
    title: '접종 전 확인사항',
    color: 'text-amber-700',
    items: [
      { label: '현재 복용 중인 약', desc: '항응고제 등 복용 시 의사에게 미리 알릴 것' },
      { label: '알레르기 이력', desc: '달걀·젤라틴 알레르기 시 독감 백신 접종 전 상담' },
      { label: '발열·급성 질환', desc: '37.5도 이상 열 시 접종 연기. 회복 후 접종' },
      { label: '이전 접종 기록', desc: '예방접종도우미(nip.kdca.go.kr)에서 조회 가능' },
    ],
  },
  {
    title: '접종 장소·준비물',
    color: 'text-gray-700',
    items: [
      { label: '보건소', desc: '무료 접종 가능. 사전 예약 권장 (전화 또는 방문)' },
      { label: '지정 의료기관', desc: '독감 무료 접종 가능. 예방접종도우미에서 기관 검색' },
      { label: '준비물', desc: '신분증 + 건강보험증. 이전 접종 기록 있으면 지참' },
    ],
  },
];

export default function VaccinationSchedulePage() {
  return (
    <PrintPageShell
      title="어르신 예방접종 일정표"
      subtitle="65세 이상 무료 예방접종을 빠짐없이 챙기세요"
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

      <section className="rounded-lg bg-green-50 p-4 mt-2">
        <p className="font-semibold text-green-800 mb-1">접종 일정 메모</p>
        <div className="grid grid-cols-2 gap-3">
          {['독감 접종일:', '폐렴 접종일:', '대상포진 접종일:', '기타:'].map((label) => (
            <div key={label} className="border-b border-green-200 pb-2">
              <span className="text-xs text-green-700">{label}</span>
            </div>
          ))}
        </div>
      </section>
    </PrintPageShell>
  );
}
