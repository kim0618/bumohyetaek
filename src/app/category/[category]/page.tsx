import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCategoryBySlug, categories } from '@/data/categories';
import { getCategoryDetailBySlug } from '@/data/categoryDetails';
import { getCategoryListItems } from '@/lib/content';
import { buildCategoryMetadata } from '@/lib/seo';
import { buildWebPageJsonLd, buildBreadcrumbJsonLd, buildFaqPageJsonLd } from '@/lib/jsonld';
import CategoryArticleList from '@/components/content/CategoryArticleList';
import { FAQSection } from '@/components/content';
import JsonLd from '@/components/seo/JsonLd';
import { Breadcrumb } from '@/components/ui';

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};
  return buildCategoryMetadata(cat.label, cat.description, cat.slug);
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const articles = getCategoryListItems(category as 'pension-welfare' | 'health-care' | 'finance-safety');
  const detail = getCategoryDetailBySlug(category);

  const accentColor =
    cat.slug === 'pension-welfare' ? 'bg-blue-600' :
    cat.slug === 'health-care'     ? 'bg-green-600' :
                                     'bg-amber-500';

  const schemas = [
    buildWebPageJsonLd({
      title:       cat.label,
      description: cat.description,
      path:        `${cat.href}/`,
    }),
    buildBreadcrumbJsonLd([
      { name: '홈',      href: '/' },
      { name: cat.label, href: `${cat.href}/` },
    ]),
    ...(detail && detail.faq.length > 0
      ? [buildFaqPageJsonLd(detail.faq)]
      : []),
  ];

  return (
    <div>
      <JsonLd schemas={schemas} />

      {/* 컬러 헤더 */}
      <section className="bg-blue-50 border-b border-blue-100">
        <div className="container-wide py-10">
          <Breadcrumb
            className="mb-4"
            items={[{ label: '홈', href: '/' }, { label: cat.label }]}
          />

          <span className={`mb-3 block h-1 w-10 rounded-full ${accentColor}`} aria-hidden="true" />
          <h1 className="mb-3">{cat.label}</h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
            {cat.description}
          </p>
          {detail && (
            <p className="mt-4 text-gray-700 leading-relaxed max-w-2xl">
              {detail.introParagraph}
            </p>
          )}
          <p className="mt-3 text-sm text-gray-500">글 {articles.length}편</p>
        </div>
      </section>

      <div className="container-wide py-10 space-y-14">

        {/* 상황별 진입 가이드 */}
        {detail && detail.scenarios.length > 0 && (
          <section aria-labelledby="scenarios-heading">
            <h2 id="scenarios-heading" className="mb-6">상황별 가이드</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {detail.scenarios.map((scenario, i) => (
                <div key={i} className="card p-6 space-y-3">
                  <h3 className="text-base font-semibold text-gray-900">{scenario.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">{scenario.body}</p>
                  <ul className="space-y-1">
                    {scenario.relatedSlugs.map((slug) => {
                      const article = articles.find((a) => a.slug === slug);
                      if (!article) return null;
                      return (
                        <li key={slug}>
                          <Link
                            href={`/guide/${slug}/`}
                            className="text-sm text-blue-700 hover:underline"
                          >
                            {article.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 글 목록 */}
        <section aria-labelledby="articles-heading">
          <h2 id="articles-heading" className="mb-5">전체 가이드 목록</h2>
          {articles.length > 0 ? (
            <CategoryArticleList items={articles} />
          ) : (
            <p className="text-gray-500">관련 글을 준비 중입니다.</p>
          )}
        </section>

        {/* 핵심 정책 개요 */}
        {detail && (
          <section aria-labelledby="policy-heading" className="box-info">
            <h2 id="policy-heading" className="mb-4">{detail.policyHeading}</h2>
            <div className="space-y-4 text-gray-800 leading-relaxed whitespace-pre-line text-sm">
              {detail.policyBody}
            </div>
          </section>
        )}

        {/* 자주 묻는 질문 */}
        {detail && detail.faq.length > 0 && (
          <FAQSection items={detail.faq} />
        )}

        {/* 관련 허브·카테고리 링크 */}
        {detail && detail.relatedLinks.length > 0 && (
          <section aria-labelledby="related-links-heading">
            <h2 id="related-links-heading" className="mb-4">함께 보면 좋은 페이지</h2>
            <ul className="flex flex-wrap gap-3">
              {detail.relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="btn-outline text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

      </div>
    </div>
  );
}
