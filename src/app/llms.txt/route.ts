import { getSiteUrl } from '@/config/siteConfig';
import { categories } from '@/data/categories';
import { hubs } from '@/data/hubs';
import { getAllContent, getFeaturedContent, sortByDate } from '@/lib/content';

/**
 * llms.txt - 생성형 AI(ChatGPT 등) 검색 최적화(GEO) 진입점.
 * jptcalc.kr/llms.txt 형식을 따르되, bumo 데이터(허브·카테고리·가이드)에서 자동 생성.
 * 글을 추가하면 빌드 시 자동 반영되므로 수동 관리 불필요.
 * 정적 export 호환을 위해 force-static (sitemap.ts와 동일 방식).
 */
export const dynamic = 'force-static';

/** 긴 설명에서 첫 문장만 추출 (목록 한 줄용) */
function firstSentence(text: string): string {
  const m = text.match(/^[^.!?]*[.!?]/);
  return (m ? m[0] : text).trim();
}

export function GET(): Response {
  const base = getSiteUrl();

  // 주요 가이드: isFeatured 우선, 부족하면 최신순으로 채움
  const featured = getFeaturedContent(12);
  const guides =
    featured.length >= 6 ? featured : sortByDate(getAllContent()).slice(0, 12);

  const lines: string[] = [
    '# 부모혜택 (bumohyetaek.kr)',
    '',
    '> 시니어와 가족을 위한 복지·건강보험·은퇴 실무 가이드. 기초연금·국민연금·건강검진·장기요양·노후 재정과 금융사기 예방을 2026년 한국 제도 기준으로 단계별로 안내한다.',
    '',
    '모든 가이드는 수급 자격, 신청 절차, 기준 수치표, 공식 출처(국민연금공단·건강보험공단·보건복지부 등)를 함께 제공한다. 제이퍼 계산기(jptcalc.kr)와 연계해 연금·세금 예상액을 직접 계산할 수 있다. 정보는 2026년 법령과 실제 신청 절차를 반영한다.',
    '',
    '## 분야별 허브 (상황별 가이드 묶음)',
    ...hubs.map((h) => `- [${h.title}](${base}${h.href}/): ${h.description}`),
    '',
    '## 카테고리',
    ...categories.map(
      (c) => `- [${c.label}](${base}${c.href}/): ${firstSentence(c.description)}`,
    ),
    '',
    '## 주요 가이드',
    ...guides.map((g) => `- [${g.title}](${base}/guide/${g.slug}/): ${g.summary}`),
    '',
    '## 안내',
    `- [서비스 소개](${base}/about/)`,
    `- [편집 방침](${base}/editorial-policy/)`,
    `- [출처 정책](${base}/source-policy/)`,
    `- [문의](${base}/contact/)`,
    `- 전체 페이지 목록: ${base}/sitemap.xml`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
