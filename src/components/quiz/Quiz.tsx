'use client';

import { useState } from 'react';
import type { QuizResult, ResultTier } from './types';
import { getQuizById } from '@/data/quizzes';
import { trackEvent } from '@/lib/analytics';

interface Props {
  quizId: string;
  articleSlug: string;
}

const TIER_STYLE: Record<ResultTier, { bg: string; border: string; icon: string }> = {
  high:       { bg: 'bg-green-50',  border: 'border-green-400', icon: '✓' },
  medium:     { bg: 'bg-blue-50',   border: 'border-blue-400',  icon: '?' },
  low:        { bg: 'bg-amber-50',  border: 'border-amber-400', icon: '!' },
  ineligible: { bg: 'bg-gray-50',   border: 'border-gray-400',  icon: '✕' },
};

export default function Quiz({ quizId, articleSlug }: Props) {
  const config = getQuizById(quizId);
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<QuizResult | null>(null);
  const [startTime, setStartTime] = useState<number>(0);

  if (!config) return null;

  const handleStart = () => {
    setStarted(true);
    setStartTime(Date.now());
    trackEvent('quiz_start', { quiz_id: config.id, article_slug: articleSlug });
  };

  const handleSelect = (questionId: string, value: string, terminates?: boolean) => {
    const next = { ...answers, [questionId]: value };
    setAnswers(next);

    if (terminates) {
      const res = config.getResult(next);
      setResult(res);
      trackEvent('quiz_complete', {
        quiz_id: config.id,
        article_slug: articleSlug,
        result_tier: res.tier,
        duration_sec: Math.round((Date.now() - startTime) / 1000),
      });
      return;
    }

    if (step + 1 >= config.questions.length) {
      const res = config.getResult(next);
      setResult(res);
      trackEvent('quiz_complete', {
        quiz_id: config.id,
        article_slug: articleSlug,
        result_tier: res.tier,
        duration_sec: Math.round((Date.now() - startTime) / 1000),
      });
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleReset = () => {
    setStarted(false);
    setStep(0);
    setAnswers({});
    setResult(null);
  };

  /* ── 시작 전 ──────────────────────────────────────────────── */
  if (!started) {
    return (
      <div className="my-8 rounded-xl border border-blue-200 bg-blue-50 p-6">
        <p className="text-sm font-semibold text-blue-700 mb-1">자가진단</p>
        <h2 className="text-xl font-bold text-gray-900 mb-2">{config.title}</h2>
        <p className="text-gray-600 mb-5">{config.description}</p>
        <button
          onClick={handleStart}
          className="btn-primary"
        >
          진단 시작하기
        </button>
      </div>
    );
  }

  /* ── 결과 ─────────────────────────────────────────────────── */
  if (result) {
    const style = TIER_STYLE[result.tier];
    return (
      <div className={`my-8 rounded-xl border-2 ${style.border} ${style.bg} p-6`}>
        <p className="text-sm font-semibold text-gray-500 mb-1">자가진단 결과</p>
        <div className="flex items-start gap-3 mb-4">
          <span className="text-2xl font-bold">{style.icon}</span>
          <h2 className="text-xl font-bold text-gray-900">{result.title}</h2>
        </div>
        <p className="text-gray-700 mb-4">{result.description}</p>
        <p className="text-sm text-gray-500 mb-5">{result.disclaimer}</p>
        <div className="flex flex-wrap gap-3">
          {result.ctaUrl && result.ctaText && (
            <a
              href={result.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {result.ctaText}
            </a>
          )}
          <button onClick={handleReset} className="btn-outline">
            다시 진단하기
          </button>
        </div>
      </div>
    );
  }

  /* ── 질문 ─────────────────────────────────────────────────── */
  const question = config.questions[step];
  const progress = Math.round(((step) / config.questions.length) * 100);

  return (
    <div className="my-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* 진행률 */}
      <div className="mb-5">
        <div className="flex justify-between text-sm text-gray-500 mb-1">
          <span>자가진단</span>
          <span>{step + 1} / {config.questions.length}</span>
        </div>
        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* 질문 */}
      <p className="text-lg font-semibold text-gray-900 mb-1">{question.text}</p>
      {question.subText && (
        <p className="text-sm text-gray-500 mb-4">{question.subText}</p>
      )}

      {/* 선택지 */}
      <div className="flex flex-col gap-2 mt-4">
        {question.options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => handleSelect(question.id, opt.value, opt.terminates)}
            className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50 transition-colors min-h-[44px] text-gray-800"
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* 뒤로가기 */}
      {step > 0 && (
        <button
          onClick={handleBack}
          className="mt-4 text-sm text-gray-500 hover:text-gray-700 underline"
        >
          이전 질문으로
        </button>
      )}
    </div>
  );
}
