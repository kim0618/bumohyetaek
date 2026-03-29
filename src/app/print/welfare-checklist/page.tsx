import type { Metadata } from 'next';
import PrintPageShell from '@/components/print/PrintPageShell';

export const metadata: Metadata = {
  title: '부모님 복지 혜택 체크리스트',
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: '연금·소득 지원',
    color: 'text-blue-700',
    items: [
      { label: '기초연금', desc: '만 65세 이상, 소득 하위 70% - 주민센터 또는 복지로 신청' },
      { label: '국민연금 유족연금', desc: '사망한 배우자의 연금 수령 가능 여부 확인 (국민연금공단 1355)' },
      { label: '노인일자리 지원사업', desc: '공익활동·시장형 등 월 27만~60만 원 수당 - 읍면동 주민센터 신청' },
    ],
  },
  {
    title: '의료·건강 지원',
    color: 'text-green-700',
    items: [
      { label: '의료급여', desc: '기초생활수급자 의료비 본인부담 최소화 - 주민센터 신청' },
      { label: '틀니·임플란트 건강보험 적용', desc: '만 65세 이상 본인부담 30% - 치과 진료 시 건강보험증 제시' },
      { label: '국가건강검진', desc: '짝수·홀수 출생연도 격년 무료 검진 - nhis.or.kr에서 대상 확인' },
      { label: '국가암검진 6종', desc: '위암·대장암·간암·유방암·자궁경부암·폐암 - 무료 또는 10% 본인부담' },
      { label: '치매안심센터 무료 검진', desc: '전국 256개 센터 - 가까운 보건소 내 치매안심센터 방문' },
    ],
  },
  {
    title: '돌봄·주거 지원',
    color: 'text-teal-700',
    items: [
      { label: '노인장기요양보험 등급 신청', desc: '국민건강보험공단(1577-1000) 방문 또는 전화 신청' },
      { label: '노인맞춤돌봄서비스', desc: '독거·취약 어르신 안전 확인·말벗·외출 동행 무료 - 주민센터 신청' },
      { label: '주거급여', desc: '기준 중위소득 48% 이하 임차료·수선비 지원 - 주민센터 신청' },
    ],
  },
  {
    title: '혜택 확인 방법',
    color: 'text-gray-700',
    items: [
      { label: '복지로 모의계산', desc: 'www.bokjiro.go.kr → 복지서비스 모의계산에서 수급 가능 혜택 조회' },
      { label: '주민센터 통합사례관리 상담', desc: '읍·면·동 주민센터 방문 시 담당자가 개인별 맞춤 혜택 안내' },
      { label: '보건복지상담센터', desc: '전화 129 (24시간 운영) - 복지 전반 무료 상담' },
    ],
  },
];

export default function WelfareChecklistPage() {
  return (
    <PrintPageShell
      title="부모님 복지 혜택 체크리스트"
      subtitle="놓치기 쉬운 복지 혜택을 한눈에 확인하세요"
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
