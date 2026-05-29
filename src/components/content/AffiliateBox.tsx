'use client';

import type { AffiliateLink } from '@/types/content';
import { trackEvent } from '@/lib/analytics';

interface Props {
  affiliate: AffiliateLink;
  /** 추적용 글 slug (affiliate_click 이벤트의 article_slug) */
  articleSlug?: string;
}

/**
 * 제휴(어필리에이트) 링크 박스
 *
 * 설계 원칙:
 * - "제휴 광고" 고지 라벨 필수 (공정위 표시 의무)
 * - 공식 정보 박스(box-info 등)와 시각적으로 구분 (회색 톤 + 광고 라벨)
 * - 외부 링크: 새 탭 + rel="sponsored noopener noreferrer" (어필리에이트 표준)
 * - 클릭 시 affiliate_click 이벤트 발송
 * - 문구는 데이터(label/note)를 그대로 노출 - 과장·효능 보장 표현 금지
 *
 * 사용: ContentBody가 section.type === 'affiliate'일 때 렌더링.
 */
export default function AffiliateBox({ affiliate, articleSlug }: Props) {
  function handleClick() {
    trackEvent('affiliate_click', {
      merchant:      affiliate.merchant,
      affiliate_url: affiliate.url,
      article_slug:  articleSlug ?? '',
    });
  }

  const ariaLabel = `${affiliate.label} - ${affiliate.merchant} (제휴 광고, 새 탭에서 열림)`;

  return (
    <div
      className="my-6 rounded-lg border border-gray-200 bg-gray-50 px-5 py-4"
      role="complementary"
      aria-label="제휴 광고"
    >
      <p className="mb-1 text-[11px] font-medium leading-none text-gray-400 select-none">
        제휴 광고
      </p>

      <p className="mt-1 mb-0 text-sm text-gray-700">
        <strong className="text-gray-900">{affiliate.merchant}</strong>
        {affiliate.note && (
          <span className="mt-1 block text-gray-500">{affiliate.note}</span>
        )}
      </p>

      <div className="mt-3">
        <a
          href={affiliate.url}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="btn-outline inline-flex no-underline"
          aria-label={ariaLabel}
          onClick={handleClick}
        >
          {affiliate.label}
          <span aria-hidden="true" className="ml-1 text-gray-400">↗</span>
          <span className="sr-only"> (제휴 광고, 새 탭에서 열림)</span>
        </a>
      </div>
    </div>
  );
}
