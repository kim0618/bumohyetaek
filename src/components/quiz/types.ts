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
}

export interface QuizConfig {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
  getResult: (answers: Record<string, string>) => QuizResult;
}
