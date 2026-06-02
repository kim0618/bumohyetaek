'use client';

import { useState } from 'react';
import type { ContentListItem } from '@/types/content';
import ArticleCard from './ArticleCard';

const PAGE_SIZE = 12;

interface Props {
  items: ContentListItem[];
  hubSlug: string;
}

/**
 * 허브 "관련 정보 모아보기" 글 목록.
 * 카테고리 페이지(CategoryArticleList)와 동일한 12개 단위 페이지네이션 적용.
 * (허브는 태그 필터 없이 페이지 이동만 제공)
 */
export default function HubArticleList({ items, hubSlug }: Props) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(items.length / PAGE_SIZE);
  const paginated = items.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        {paginated.map((article) => (
          <ArticleCard
            key={article.slug}
            item={article}
            sourceHub={{ slug: hubSlug, isFeatured: false }}
          />
        ))}
      </div>

      {/* 페이지네이션 (카테고리 페이지와 동일 디자인) */}
      {totalPages > 1 && (
        <nav className="mt-8 flex items-center justify-center gap-2" aria-label="페이지 이동">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="이전 페이지"
          >
            &larr; 이전
          </button>

          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPage(p)}
                className={`min-w-[36px] rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  p === page
                    ? 'bg-blue-700 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                aria-label={`${p}페이지`}
                aria-current={p === page ? 'page' : undefined}
              >
                {p}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="다음 페이지"
          >
            다음 &rarr;
          </button>
        </nav>
      )}
    </div>
  );
}
