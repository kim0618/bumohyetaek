'use client';

/**
 * 광고 슬롯 컴포넌트 (Kakao AdFit)
 *
 * ── 동작 모드 ──────────────────────────────────────────────────
 * 개발(dev)            : 위치·사이즈를 보여주는 점선 플레이스홀더
 * 프로덕션, 유닛 미설정 : null (DOM에 흔적 없음)
 * 프로덕션, 유닛 설정   : AdFit <ins class="kakao_ad_area">를 정적 HTML에 렌더 + 로더 실행
 *
 * ── jptcalc(애드핏 통과 레퍼런스)와 동일한 삽입 방식 ──────────
 * jptcalc 정적 사이트는 아래 마크업을 HTML에 그대로 박는다:
 *   <ins class="kakao_ad_area" style="display:none" data-ad-unit="DAN-..."
 *        data-ad-width="300" data-ad-height="250"></ins>
 *   <script async src="//t1.kakaocdn.net/kas/static/ba.min.js"></script>
 * 본 컴포넌트도 ins를 정적 HTML에 동일하게 렌더한다(소스에 그대로 노출).
 * 단 ba.min.js는 innerHTML로 넣으면 실행되지 않으므로(브라우저 보안),
 * useEffect에서 createElement로 주입해 마운트마다 실행한다.
 * → 직접 진입(SEO 유입)·SPA 라우팅 이동 양쪽에서 광고가 채워진다.
 *
 * ── 연결 방법 ──────────────────────────────────────────────────
 * 1. 카카오 애드핏 → 매체(bumohyetaek.kr) → 광고단위 생성(300x250)
 * 2. 발급된 DAN-xxxx 코드를 아래 AD_UNIT_MAP의 unit 자리에 입력
 * 3. npm run build → 배포 → 애드핏에서 검수 요청
 *
 * ── 배치 원칙 (허용 위치만 이 컴포넌트로 표시됨) ──────────────
 * 금지: 첫 스크린 안 1개 초과
 * 금지: 헤더·대상독자박스·검토상태·3줄요약 영역
 * 금지: 본문(ContentBody) 상단 직하단
 * 금지: numbered-list(신청 절차) 섹션 내부
 * 금지: CautionBox·OfficialSources 인접 (공식 정보로 오인 방지)
 * 허용: 본문 전체가 끝난 직후
 * 허용: OfficialSources 이후 ~ FAQ 사이
 * 허용: 허브 글 목록 하단
 * 허용: 홈 카테고리 섹션 이후
 */

import { useEffect } from 'react';

/* ── AdFit 광고단위 매핑 ───────────────────────────────────────
   카카오 애드핏에서 광고단위를 생성한 뒤 unit 자리에 DAN-xxxx 입력.
   unit이 빈 문자열이면 해당 위치는 광고 미노출(구조는 그대로 유지).
   사이즈는 jptcalc(애드핏 통과 레퍼런스)와 동일하게 전부 300x250 통일.
   (300x250은 PC·모바일 양쪽에 그대로 들어가 반응형 분기 불필요)
   ─────────────────────────────────────────────────────────── */
const AD_UNIT_MAP = {
  /** 가이드 본문(ContentBody) 종료 직후 - 300x250 */
  'guide-mid-content':     { unit: 'DAN-LKDJ96K9RChRZb7i', width: 300, height: 250 },
  /** 가이드 OfficialSources 이후 ~ FAQSection 사이 - 300x250 (2번째 유닛 발급 예정) */
  'guide-after-sources':   { unit: '', width: 300, height: 250 },
  /** 허브 전체 글 목록 하단 - 300x250 (유닛 발급 예정) */
  'hub-after-articles':    { unit: '', width: 300, height: 250 },
  /** 홈 카테고리 섹션 이후 - 300x250 (유닛 발급 예정) */
  'home-after-categories': { unit: '', width: 300, height: 250 },
} as const;

export type AdPosition = keyof typeof AD_UNIT_MAP;

interface Props {
  /** 광고 삽입 위치 - AD_UNIT_MAP 키와 1:1 대응 */
  position: AdPosition;
  /** @deprecated 애드핏은 광고단위가 사이즈를 결정 - 호출부 호환용으로만 유지 */
  format?: 'auto' | 'rectangle' | 'horizontal';
  className?: string;
}

const IS_DEV = process.env.NODE_ENV === 'development';
const ADFIT_LOADER = '//t1.kakaocdn.net/kas/static/ba.min.js';

export default function AdSlot({ position, className = '' }: Props) {
  const { unit, width, height } = AD_UNIT_MAP[position];

  /* ba.min.js 로더를 마운트마다 실행 (innerHTML 스크립트는 실행 안 되므로 별도 주입) */
  useEffect(() => {
    if (IS_DEV || !unit) return;
    const loader = document.createElement('script');
    loader.type = 'text/javascript';
    loader.async = true;
    loader.src = ADFIT_LOADER;
    document.body.appendChild(loader);
    return () => {
      loader.remove();
    };
  }, [unit]);

  /* ── 개발 환경: 위치·사이즈 플레이스홀더 ──────────────────── */
  if (IS_DEV) {
    return (
      <div
        className={`my-6 ${className}`}
        role="complementary"
        aria-label={`광고 영역 플레이스홀더 - ${position}`}
      >
        <div
          className="flex flex-col items-center justify-center gap-0.5 rounded border-2 border-dashed border-gray-200 bg-gray-50"
          style={{ minHeight: `${height}px` }}
        >
          <span className="text-[11px] font-mono font-semibold text-gray-400 select-none">
            광고 (AdFit)
          </span>
          <span className="text-[10px] font-mono text-gray-300 select-none">{position}</span>
          <span className="text-[10px] font-mono text-gray-300 select-none">
            {unit ? `${width}x${height}` : '유닛 미설정'}
          </span>
        </div>
      </div>
    );
  }

  /* ── 프로덕션, 유닛 미설정: DOM에 아무것도 남기지 않음 ─────── */
  if (!unit) return null;

  /* ── 프로덕션 + 유닛 설정 ──────────────────────────────────
     jptcalc와 동일한 ins 마크업을 정적 HTML에 그대로 렌더.
     값은 전부 내부 상수(DAN-id, 사이즈)라 XSS 위험 없음. */
  const adMarkup =
    `<ins class="kakao_ad_area" style="display:none" ` +
    `data-ad-unit="${unit}" data-ad-width="${width}" data-ad-height="${height}"></ins>`;

  return (
    <div
      className={`my-6 overflow-hidden ${className}`}
      role="complementary"
      aria-label="광고"
    >
      {/* "광고" 고지 레이블 - 정보 콘텐츠와 시각적 구분 (공식 정보 오인 방지) */}
      <p className="mb-1 text-right text-[10px] leading-none text-gray-500 select-none">
        광고
      </p>
      <div
        className="adfit-slot flex justify-center"
        dangerouslySetInnerHTML={{ __html: adMarkup }}
      />
    </div>
  );
}
