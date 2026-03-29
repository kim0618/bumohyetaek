import type { Metadata } from 'next';
import PrintPageShell from '@/components/print/PrintPageShell';

export const metadata: Metadata = {
  title: '기초연금 신청 전 확인표',
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: '1단계 - 자격 확인',
    color: 'text-blue-700',
    items: [
      '만 65세 이상인지 확인 (생년월일 기준)',
      '소득인정액 확인 - 단독가구 월 213만 원 이하 (2025년 기준)',
      '부부 모두 신청 시 월 340.8만 원 이하인지 확인',
      '국민연금 수령액 확인 (감액 여부 사전 파악)',
    ],
  },
  {
    title: '2단계 - 구비서류 준비',
    color: 'text-green-700',
    items: [
      '신분증 (주민등록증 또는 운전면허증)',
      '본인 명의 통장 사본',
      '배우자 금융정보 제공 동의서 (부부 가구인 경우)',
      '전월세 임대차 계약서 (임차 중인 경우)',
    ],
  },
  {
    title: '3단계 - 신청 방법 선택',
    color: 'text-teal-700',
    items: [
      '방문 신청 - 주소지 읍·면·동 주민센터 방문',
      '방문 신청 - 국민연금공단 지사 방문',
      '온라인 신청 - 복지로(www.bokjiro.go.kr) 이용',
    ],
  },
  {
    title: '4단계 - 신청 후 확인',
    color: 'text-amber-700',
    items: [
      '결과 통보 수령 (우편 또는 문자 메시지)',
      '수급액 및 감액 여부 확인',
      '매월 25일 등록 계좌 입금 확인',
    ],
  },
];

const tips = [
  '만 65세 생일 1개월 전부터 신청 가능합니다. 생일 전달에 미리 신청하면 생일 달부터 수급이 시작됩니다.',
  '신청한 달부터 수급이 시작되므로 늦게 신청할수록 손해입니다.',
  '국민연금 수령액이 월 약 50만 원을 초과하면 기초연금이 최대 50%까지 감액될 수 있습니다.',
];

export default function BasicPensionChecklistPage() {
  return (
    <PrintPageShell
      title="기초연금 신청 전 확인표"
      subtitle="신청 전 아래 항목을 미리 확인하면 빠르게 처리됩니다"
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

      <section className="rounded-lg bg-amber-50 border border-amber-200 p-4">
        <p className="font-semibold text-amber-800 mb-2">알아두면 좋은 점</p>
        <ul className="space-y-1.5">
          {tips.map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-amber-900">
              <span className="shrink-0 font-bold">•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-lg bg-gray-50 p-4">
        <p className="font-semibold text-gray-700 mb-1">주요 연락처</p>
        <div className="grid grid-cols-2 gap-2 text-gray-600">
          <div><span className="font-medium">보건복지상담센터:</span> 129</div>
          <div><span className="font-medium">국민연금공단:</span> 1355</div>
          <div><span className="font-medium">복지로:</span> www.bokjiro.go.kr</div>
          <div><span className="font-medium">주민센터:</span> 주소지 읍·면·동</div>
        </div>
      </section>
    </PrintPageShell>
  );
}
