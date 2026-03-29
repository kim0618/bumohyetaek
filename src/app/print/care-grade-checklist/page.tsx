import type { Metadata } from 'next';
import PrintPageShell from '@/components/print/PrintPageShell';

export const metadata: Metadata = {
  title: '장기요양 등급 신청 준비표',
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: '신청 전 준비',
    color: 'text-blue-700',
    items: [
      '신청인 신분증 준비 (주민등록증 또는 운전면허증)',
      '담당 의사에게 소견서(진단서) 발급 필요 여부 확인',
      '치매·뇌혈관질환·파킨슨 등 진단 이력 서류 정리',
      '최근 1년간 입퇴원 이력 메모',
    ],
  },
  {
    title: '방문 조사 당일 체크',
    color: 'text-teal-700',
    items: [
      '복용 중인 약 전체 목록 또는 약봉투 준비',
      '일상생활에서 가장 불편한 동작 미리 메모 (식사·이동·화장실·목욕 등)',
      '최악의 상태를 기준으로 솔직하게 설명하기 (좋은 날만 기준으로 말하면 불이익)',
      '가족 중 조사 현장에 함께 있을 사람 사전에 결정',
      '가능하면 담당 의사 소견서 첨부',
    ],
  },
  {
    title: '등급 결과 수령 후',
    color: 'text-green-700',
    items: [
      '판정 등급 확인 (1~5등급 또는 인지지원등급)',
      '이용 가능한 서비스 종류 확인 (재가급여·시설급여)',
      '장기요양 서비스 제공기관 선택 및 계약',
      '등급 불만족 시 이의신청 검토 (결과 통보일로부터 90일 내)',
    ],
  },
];

const gradeTable = [
  { grade: '1등급', standard: '95점 이상', desc: '일상생활 전반에 도움 필요', service: '시설·재가급여 모두 가능' },
  { grade: '2등급', standard: '75~95점 미만', desc: '상당 부분 도움 필요', service: '시설·재가급여 모두 가능' },
  { grade: '3등급', standard: '60~75점 미만', desc: '일부 도움 필요', service: '재가급여 우선' },
  { grade: '4등급', standard: '51~60점 미만', desc: '일정 부분 도움 필요', service: '재가급여 우선' },
  { grade: '5등급', standard: '45~51점 미만', desc: '치매 진단 필수', service: '치매 특별등급' },
  { grade: '인지지원', standard: '45점 미만', desc: '경도 치매 (진단 필수)', service: '주야간보호·인지활동형' },
];

export default function CareGradeChecklistPage() {
  return (
    <PrintPageShell
      title="장기요양 등급 신청 준비표"
      subtitle="방문 조사 전 준비하면 더 정확한 등급을 받을 수 있습니다"
    >
      {sections.map((section) => (
        <section key={section.title}>
          <h2 className={`font-bold text-base mb-3 ${section.color}`}>
            {section.title}
          </h2>
          <div className="space-y-2">
            {section.items.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-gray-400" />
                <span className="text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section>
        <h2 className="font-bold text-base mb-3 text-gray-700">등급 기준 요약표</h2>
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-2 py-1.5 text-left">등급</th>
              <th className="border border-gray-200 px-2 py-1.5 text-left">점수 기준</th>
              <th className="border border-gray-200 px-2 py-1.5 text-left">상태</th>
              <th className="border border-gray-200 px-2 py-1.5 text-left">이용 가능 서비스</th>
            </tr>
          </thead>
          <tbody>
            {gradeTable.map((row) => (
              <tr key={row.grade}>
                <td className="border border-gray-200 px-2 py-1.5 font-semibold">{row.grade}</td>
                <td className="border border-gray-200 px-2 py-1.5">{row.standard}</td>
                <td className="border border-gray-200 px-2 py-1.5">{row.desc}</td>
                <td className="border border-gray-200 px-2 py-1.5">{row.service}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="rounded-lg bg-gray-50 p-4">
        <p className="font-semibold text-gray-700 mb-1">주요 연락처</p>
        <div className="grid grid-cols-2 gap-2 text-gray-600">
          <div><span className="font-medium">국민건강보험공단:</span> 1577-1000</div>
          <div><span className="font-medium">장기요양 홈페이지:</span> longtermcare.or.kr</div>
        </div>
      </section>
    </PrintPageShell>
  );
}
