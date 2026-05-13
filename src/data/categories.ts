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
      '노후 금융 관리, 보이스피싱·금융사기 예방, 생활 속 안전 정보를 정리합니다.',
    href: '/category/finance-safety',
  },
];

/** slug로 카테고리 단건 조회 */
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
