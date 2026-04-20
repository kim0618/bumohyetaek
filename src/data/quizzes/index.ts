import type { QuizConfig } from '@/components/quiz/types';
import basicPensionQuiz from './basic-pension';
import longTermCareQuiz from './long-term-care';

const QUIZ_MAP: Record<string, QuizConfig> = {
  'basic-pension':  basicPensionQuiz,
  'long-term-care': longTermCareQuiz,
};

export function getQuizById(id: string): QuizConfig | null {
  return QUIZ_MAP[id] ?? null;
}
