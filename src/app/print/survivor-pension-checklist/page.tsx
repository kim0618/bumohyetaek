import type { Metadata } from 'next';
import PrintPageShell from '@/components/print/PrintPageShell';

export const metadata: Metadata = {
  title: '유족연금 신청 준비표',
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: '수급 자격 확인',
    color: 'text-blue-700',
    items: [
      { label: '사망자 국민연금 가입 기간', desc: '10년 이상 납부 또는 가입 중 사망 시 유족연금 수급 가능' },
      { label: '유족 범위 확인', desc: '배우자, 자녀(25세 미만), 부모(60세 이상), 손자녀, 조부모 순위' },
      { label: '소득 요건', desc: '배우자는 소득 제한 없음. 자녀·부모는 장애 또는 소득 기준 확인' },
      { label: '사망일 기준 청구 기한', desc: '사망일로부터 5년 이내 청구해야 소급 지급 가능' },
    ],
  },
  {
    title: '구비서류 체크',
    color: 'text-green-700',
    items: [
      { label: '사망진단서 (사체검안서)', desc: '병원 또는 의원에서 발급' },
      { label: '가족관계증명서', desc: '관계 확인용 - 주민센터 또는 정부24 발급' },
      { label: '유족연금 청구서', desc: '국민연금공단 지사 또는 홈페이지에서 양식 다운로드' },
      { label: '사망자 통장 사본', desc: '마지막 연금 수령 계좌 확인용' },
      { label: '청구인 신분증 + 통장 사본', desc: '유족연금 수령할 본인 계좌' },
    ],
  },
  {
    title: '신청 절차',
    color: 'text-teal-700',
    items: [
      { label: '1단계: 국민연금공단 연락', desc: '전화 1355 또는 가까운 지사 방문 예약' },
      { label: '2단계: 서류 지참 방문', desc: '위 구비서류 모두 원본 지참 (일부 온라인 신청 가능)' },
      { label: '3단계: 심사 대기', desc: '접수 후 약 1~2개월 소요. 추가 서류 요청 가능' },
      { label: '4단계: 지급 개시', desc: '매월 25일 지정 계좌로 입금' },
    ],
  },
  {
    title: '함께 확인할 사항',
    color: 'text-gray-700',
    items: [
      { label: '반환일시금 vs 유족연금', desc: '둘 중 유리한 쪽 선택 가능 - 공단 상담 필수' },
      { label: '기초연금 중복 수급', desc: '유족연금과 기초연금은 동시 수령 가능 (일부 감액)' },
      { label: '건강보험 피부양자 전환', desc: '사망자 명의 건강보험 자격 변동 확인 (1577-1000)' },
    ],
  },
];

export default function SurvivorPensionChecklistPage() {
  return (
    <PrintPageShell
      title="유족연금 신청 준비표"
      subtitle="신청 전 빠짐없이 확인하세요"
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
