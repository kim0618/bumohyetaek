import type { Metadata } from 'next';
import PrintPageShell from '@/components/print/PrintPageShell';

export const metadata: Metadata = {
  title: '금융사기 예방 체크리스트',
  robots: { index: false, follow: false },
};

const preventionItems = [
  '가족 확인 코드 단어 정해두기 (자녀 사칭 사기 대비)',
  '통신사 명의도용 방지 서비스 신청 (각 통신사 고객센터)',
  '금융기관 지연 이체 서비스 신청 (30분 지연 - 피해 예방)',
  '모르는 번호 전화는 일단 끊고 공식 번호로 재확인',
  'SNS·문자 링크는 확인 전 절대 클릭 금지',
  '은행 앱 외 출처 불명 앱 설치 금지',
];

const principleItems = [
  '전화로 계좌이체·앱 설치·현금 전달 요구 → 즉시 끊기',
  '의심되면 가족에게 먼저 연락해 사실 확인하기',
  '공공기관 사칭 의심 시 해당 기관 대표번호로 직접 전화',
];

const damageSteps = [
  { step: '1단계', label: '즉시 지급정지', desc: '거래 은행 고객센터 전화 → 계좌 지급정지 요청' },
  { step: '2단계', label: '신고', desc: '경찰(112) 또는 금융감독원(1332)에 피해 신고' },
  { step: '3단계', label: '악성 앱 제거', desc: '설치된 앱 즉시 삭제 후 스마트폰 초기화' },
  { step: '4단계', label: '피해 신고서 제출', desc: '가까운 경찰서 방문 → 피해 신고서 작성 제출' },
];

const contacts = [
  { label: '경찰 신고', value: '112' },
  { label: '금융감독원 피해신고', value: '1332' },
  { label: '금융결제원 계좌정보통합관리', value: '1577-5500' },
  { label: '금융감독원 홈페이지', value: 'www.fss.or.kr' },
  { label: '경찰청 사이버안전국', value: 'cyberbureau.police.go.kr' },
];

export default function FinancialSafetyChecklistPage() {
  return (
    <PrintPageShell
      title="금융사기 예방 체크리스트"
      subtitle="부모님과 함께 미리 확인하고 대비하세요"
    >
      <section>
        <h2 className="font-bold text-base mb-3 text-blue-700">평소 예방 수칙 (자녀가 부모님과 함께 확인)</h2>
        <div className="space-y-2">
          {preventionItems.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-gray-400" />
              <span className="text-gray-800">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-lg bg-red-50 border border-red-200 p-4">
        <h2 className="font-bold text-base mb-3 text-red-700">의심 상황 대처 3원칙</h2>
        <div className="space-y-2">
          {principleItems.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-600 text-white text-xs font-bold">
                {i + 1}
              </span>
              <span className="font-medium text-red-900">{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded bg-red-100 p-3">
          <p className="text-xs font-semibold text-red-800">
            핵심 원칙: 검찰·경찰·금융감독원·은행은 절대 전화로 계좌이체, 현금 전달, 앱 설치, 비밀번호를 요구하지 않습니다.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-bold text-base mb-3 text-amber-700">피해 발생 시 즉각 대처 순서</h2>
        <div className="space-y-2">
          {damageSteps.map((step) => (
            <div key={step.step} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-16 shrink-0 items-center justify-center rounded bg-amber-600 text-white text-xs font-bold px-2">
                {step.step}
              </span>
              <div>
                <span className="font-semibold text-gray-900">{step.label}</span>
                <span className="text-gray-600"> - {step.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-lg bg-gray-50 p-4">
        <p className="font-semibold text-gray-700 mb-2">주요 신고·상담 연락처</p>
        <div className="grid grid-cols-2 gap-2">
          {contacts.map((c) => (
            <div key={c.label} className="text-gray-700">
              <span className="font-medium">{c.label}: </span>
              <span className="font-bold text-gray-900">{c.value}</span>
            </div>
          ))}
        </div>
      </section>
    </PrintPageShell>
  );
}
