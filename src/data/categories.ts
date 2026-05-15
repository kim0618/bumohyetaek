import type { Category } from '@/types/navigation';

/**
 * 3개 메인 카테고리 정의.
 * 내비게이션, 카테고리 목록 페이지, JSON-LD에서 이 배열을 참조.
 */
export const categories: Category[] = [
  {
    slug: 'pension-welfare',
    label: '연금·복지·혜택',
    description:
      '기초연금·국민연금·노인 복지급여 신청 방법부터 65세 이후 받을 수 있는 정부 지원혜택까지 단계별로 정리합니다. 수급 자격 기준과 신청 절차를 쉽고 상세하게 안내하므로, 처음 신청하는 분도 어렵지 않게 따라할 수 있습니다.',
    href: '/category/pension-welfare',
  },
  {
    slug: 'health-care',
    label: '건강보험·검진·돌봄',
    description:
      '건강보험 본인부담 절감, 국가검진 활용, 장기요양·돌봄 서비스 신청 방법을 안내합니다. 만성질환 관리부터 요양원 입소 결정, 보조기기 급여까지 노인 건강 관련 실무 가이드를 모았습니다.',
    href: '/category/health-care',
  },
  {
    slug: 'finance-safety',
    label: '금융·생활안전',
    description:
      '보이스피싱·스미싱·불법 대출 권유 등 노인을 표적으로 한 금융 범죄 예방부터 은퇴 후 지출 관리, 연금·IRP 세금 신고, 상속·유언 준비까지 노후 금융 안전을 위한 실무 가이드를 모았습니다. 치매나 인지 저하 시 재산을 지키는 성년후견·임의후견 제도, 예금자보호 한도 관리, 퇴직금·연금 수령 전략도 함께 안내합니다. 각 글은 2026년 기준 법령과 실제 신청 절차를 반영했습니다.',
    href: '/category/finance-safety',
  },
];

/** slug로 카테고리 단건 조회 */
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
