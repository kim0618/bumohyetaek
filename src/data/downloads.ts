import type { PdfDownload } from '@/types/download';

/**
 * PDF 다운로드 자료 목록
 *
 * 파일 배치 경로: public/downloads/{fileName}
 * status='available'로 변경 시 fileName을 함께 설정할 것.
 *
 * gateType은 현재 전부 'direct'.
 * 향후 이메일/카카오 연동 시 해당 항목의 gateType을 변경하면 됨.
 */
export const downloads: PdfDownload[] = [

  /* ── 1. 부모님 복지 혜택 체크리스트 ────────────────────────── */
  {
    id: 'welfare-checklist',
    title: '부모님 복지 혜택 체크리스트',
    description: '기초연금·의료급여·바우처 등 신청 가능한 혜택을 한 표로 정리했습니다.',
    status: 'available',
    fileName: 'welfare-checklist.pdf',
    gateType: 'direct',
    relatedGuides: ['basic-pension-application'],
    relatedHubs:   ['government-benefits', 'retirement-income'],
    category: 'pension-welfare',
    tags: ['기초연금', '복지혜택', '체크리스트'],
    printUrl: '/print/welfare-checklist',
  },

  /* ── 2. 기초연금 신청 전 확인표 ─────────────────────────────── */
  {
    id: 'basic-pension-checklist',
    title: '기초연금 신청 전 확인표',
    description: '신청 자격부터 구비서류, 방문 일정까지 빠짐없이 확인하는 준비표입니다.',
    status: 'available',
    fileName: 'basic-pension-checklist.pdf',
    gateType: 'direct',
    relatedGuides: ['basic-pension-application'],
    relatedHubs:   ['retirement-income'],
    category: 'pension-welfare',
    tags: ['기초연금', '신청준비', '체크리스트'],
    printUrl: '/print/basic-pension-checklist',
  },

  /* ── 3. 장기요양 등급 신청 준비표 ──────────────────────────── */
  {
    id: 'care-grade-checklist',
    title: '장기요양 등급 신청 준비표',
    description: '방문 조사 전 준비할 서류와 확인 사항을 단계별로 정리했습니다.',
    status: 'available',
    fileName: 'care-grade-checklist.pdf',
    gateType: 'direct',
    relatedGuides: ['long-term-care-grade'],
    relatedHubs:   ['prepare-care'],
    category: 'health-care',
    tags: ['장기요양', '등급신청', '준비물'],
    printUrl: '/print/care-grade-checklist',
  },

  /* ── 4. 병원 방문 준비물 체크리스트 ────────────────────────── */
  {
    id: 'hospital-visit-checklist',
    title: '병원·입원 준비물 체크리스트',
    description: '외래 진료부터 입원까지, 부모님 병원 동행 시 필요한 준비물 목록입니다.',
    status: 'available',
    fileName: 'hospital-visit-checklist.pdf',
    gateType: 'direct',
    relatedGuides: ['national-health-checkup-guide'],
    relatedHubs:   ['prepare-care'],
    category: 'health-care',
    tags: ['병원', '입원준비', '체크리스트'],
    printUrl: '/print/hospital-visit-checklist',
  },

  /* ── 5. 금융사기 예방 체크리스트 ───────────────────────────── */
  {
    id: 'financial-safety-checklist',
    title: '금융사기 예방 체크리스트',
    description: '보이스피싱 유형별 예방법과 피해 발생 시 대응 절차를 정리했습니다.',
    status: 'available',
    fileName: 'financial-safety-checklist.pdf',
    gateType: 'direct',
    relatedGuides: ['prevent-voice-phishing'],
    relatedHubs:   ['financial-safety'],
    category: 'finance-safety',
    tags: ['보이스피싱', '금융사기', '예방'],
    printUrl: '/print/financial-safety-checklist',
  },

  /* ── 6. 유족연금 신청 준비표 ────────────────────────────────── */
  {
    id: 'survivor-pension-checklist',
    title: '유족연금 신청 준비표',
    description: '유족연금 수급 자격 확인부터 구비서류, 신청 절차까지 한눈에 정리했습니다.',
    status: 'available',
    fileName: 'survivor-pension-checklist.pdf',
    gateType: 'direct',
    relatedGuides: ['survivor-pension'],
    relatedHubs:   ['retirement-income'],
    category: 'pension-welfare',
    tags: ['유족연금', '신청준비', '체크리스트'],
    printUrl: '/print/survivor-pension-checklist',
  },

  /* ── 7. 어르신 예방접종 일정표 ────────────────────────────── */
  {
    id: 'vaccination-schedule',
    title: '어르신 예방접종 일정표',
    description: '65세 이상 무료 예방접종 종류, 접종 시기, 준비사항을 달력형으로 정리했습니다.',
    status: 'available',
    fileName: 'vaccination-schedule.pdf',
    gateType: 'direct',
    relatedGuides: ['senior-vaccination'],
    relatedHubs:   ['health-checkup'],
    category: 'health-care',
    tags: ['예방접종', '독감', '폐렴구균'],
    printUrl: '/print/vaccination-schedule',
  },

  /* ── 8. 상속·증여 점검 체크리스트 ─────────────────────────── */
  {
    id: 'inheritance-checklist',
    title: '상속·증여 점검 체크리스트',
    description: '상속세 계산, 증여 한도, 필요 서류 등 사전에 점검할 항목을 정리했습니다.',
    status: 'available',
    fileName: 'inheritance-checklist.pdf',
    gateType: 'direct',
    relatedGuides: ['inheritance-gift-planning'],
    relatedHubs:   ['financial-safety'],
    category: 'finance-safety',
    tags: ['상속', '증여', '세금'],
    printUrl: '/print/inheritance-checklist',
  },

];

/** 전체 다운로드 목록 */
export function getAllDownloads(): PdfDownload[] {
  return downloads;
}

/** 특정 허브에 연관된 다운로드 자료 */
export function getDownloadsByHub(hubSlug: string): PdfDownload[] {
  return downloads.filter((d) => d.relatedHubs?.includes(hubSlug));
}

/** 특정 가이드에 연관된 다운로드 자료 */
export function getDownloadsByGuide(guideSlug: string): PdfDownload[] {
  return downloads.filter((d) => d.relatedGuides?.includes(guideSlug));
}
