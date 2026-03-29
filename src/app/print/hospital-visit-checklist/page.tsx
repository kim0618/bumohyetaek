import type { Metadata } from 'next';
import PrintPageShell from '@/components/print/PrintPageShell';

export const metadata: Metadata = {
  title: '병원·입원 준비물 체크리스트',
  robots: { index: false, follow: false },
};

const oupatientItems = [
  '신분증 (주민등록증 또는 운전면허증)',
  '건강보험증 또는 의료급여증',
  '진료비 결제 수단 (카드·현금)',
  '복용 중인 약 전체 또는 약봉투',
  '타 병원 방문 시: 이전 진료기록·영상 CD',
  '노트 및 펜 (의사 설명 메모용)',
  '실손보험 가입 여부 사전 확인',
];

const personalItems = [
  '속옷·양말·편한 옷 3~4벌',
  '세면도구 (치약·칫솔·비누·샴푸·수건)',
  '슬리퍼 (미끄럼 방지 권장)',
  '핸드폰 충전기·보조배터리',
  '안경·보청기·틀니 보관함',
  '개인 베개 (필요 시)',
  '소액 현금 및 간식',
];

const adminItems = [
  '입원동의서용 신분증 (본인 또는 보호자)',
  '실손의료보험 증권번호 및 보험사 연락처 메모',
  '산재·자동차보험 해당 시 관련 서류',
  '국가유공자·의료급여 수급자 증명서',
  '비상 연락처 목록 (가족·지인 2~3명)',
];

const dischargeItems = [
  '진단서·소견서 발급 요청',
  '처방전 수령 및 약국 방문',
  '다음 외래 예약 일정 확인',
  '입원 영수증 및 세부 내역서 수령 (보험 청구용)',
  '간호 교육 내용 메모 (복약·처치 방법 등)',
];

export default function HospitalVisitChecklistPage() {
  return (
    <PrintPageShell
      title="병원·입원 준비물 체크리스트"
      subtitle="외래 진료부터 입원까지 필요한 것을 미리 챙기세요"
    >
      <section>
        <h2 className="font-bold text-base mb-3 text-blue-700">외래 진료 시 기본 준비물</h2>
        <div className="space-y-2">
          {oupatientItems.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-gray-400" />
              <span className="text-gray-800">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-bold text-base mb-3 text-teal-700">입원 시 추가 준비물</h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          <div>
            <p className="font-semibold text-gray-600 mb-2 text-xs uppercase tracking-wide">개인용품</p>
            <div className="space-y-2">
              {personalItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-gray-400" />
                  <span className="text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold text-gray-600 mb-2 text-xs uppercase tracking-wide">행정·보험 서류</p>
            <div className="space-y-2">
              {adminItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-gray-400" />
                  <span className="text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-bold text-base mb-3 text-amber-700">퇴원 시 챙길 것</h2>
        <div className="space-y-2">
          {dischargeItems.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-gray-400" />
              <span className="text-gray-800">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-lg bg-gray-50 p-4">
        <p className="font-semibold text-gray-700 mb-2">메모 (담당 의사·간호사 이름, 병실 번호 등)</p>
        <div className="space-y-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="border-b border-gray-300 pb-2 h-7" />
          ))}
        </div>
      </section>
    </PrintPageShell>
  );
}
