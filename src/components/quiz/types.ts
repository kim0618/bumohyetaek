export interface QuizOption {
  label: string;
  value: string;
  /** 이 옵션 선택 시 즉시 ineligible 판정 (조기 종료) */
  terminates?: boolean;
}

export interface QuizQuestion {
  id: string;
  text: string;
  subText?: string;
  options: QuizOption[];
}

export type ResultTier = 'high' | 'medium' | 'low' | 'ineligible';

export interface QuizResult {
  tier: ResultTier;
  title: string;
  description: string;
  disclaimer: string;
  ctaText?: string;
  ctaUrl?: string;
  /**
   * CTA가 jptcalc 계산기로 이동하는 경우 트래킹 메타데이터.
   * 세 필드가 모두 있으면 UTM 자동 부착 + trackJptcalcClick() 발송.
   */
  ctaCalculatorName?: string;
  ctaCalculatorCategory?: 'finance' | 'health' | 'pension';
  ctaCrossSiteTrackingKey?: string;
}

export interface QuizConfig {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
  getResult: (answers: Record<string, string>) => QuizResult;
}
