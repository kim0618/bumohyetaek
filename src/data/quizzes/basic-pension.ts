import type { QuizConfig } from '@/components/quiz/types';

/**
 * 기초연금 수급 자격 자가진단
 *
 * 2026년 기준:
 * - 선정기준액: 단독가구 247만 원, 부부가구 395.2만 원 (보건복지부 고시, 2026-01-01 시행)
 * - 최대 수령액: 단독 349,700원 / 부부 각 279,760원 (20% 감액)
 * - 대상: 만 65세 이상, 소득인정액 기준 하위 70%
 * - 출처: basic-pension-application.ts 글의 2026년 기준 동기화
 */
const basicPensionQuiz: QuizConfig = {
  id: 'basic-pension',
  title: '기초연금 수급 가능성 자가진단',
  description: '5가지 질문으로 기초연금 수급 가능성을 미리 확인해보세요. 결과는 참고용이며 법적 효력은 없습니다.',
  questions: [
    {
      id: 'age',
      text: '현재 만 나이가 65세 이상이신가요?',
      subText: '기초연금은 만 65세 이상 어르신을 대상으로 합니다.',
      options: [
        { label: '네, 만 65세 이상입니다', value: 'yes' },
        { label: '아니요, 아직 65세 미만입니다', value: 'no', terminates: true },
      ],
    },
    {
      id: 'citizenship',
      text: '대한민국 국적을 가지고 국내에 거주하고 계신가요?',
      subText: '외국 국적자 또는 해외 장기 거주자는 수급 대상에서 제외됩니다.',
      options: [
        { label: '네, 대한민국 국적 + 국내 거주 중입니다', value: 'yes' },
        { label: '아니요 (외국 국적 또는 해외 거주)', value: 'no', terminates: true },
      ],
    },
    {
      id: 'household',
      text: '배우자가 계신가요?',
      subText: '가구 형태에 따라 소득인정액 기준이 달라집니다.',
      options: [
        { label: '배우자 없음 (단독가구)', value: 'single' },
        { label: '배우자 있음 (부부가구)', value: 'couple' },
      ],
    },
    {
      id: 'income',
      text: '월 소득인정액이 어느 정도인가요?',
      subText: '소득인정액 = 월 소득 + 재산의 월 환산액. 2026년 기준: 단독 247만 원, 부부 395.2만 원 이하면 대상입니다.',
      options: [
        { label: '단독 120만 원 미만 / 부부 190만 원 미만', value: 'low' },
        { label: '단독 120~247만 원 / 부부 190~395.2만 원', value: 'mid' },
        { label: '단독 247만 원 초과 / 부부 395.2만 원 초과', value: 'high', terminates: true },
        { label: '잘 모르겠습니다', value: 'unknown' },
      ],
    },
    {
      id: 'pension_type',
      text: '공무원·군인·사학연금을 받고 계신가요? (배우자 포함)',
      subText: '직역연금(공무원·군인·사학·별정우체국) 수급자와 배우자는 원칙적으로 제외됩니다.',
      options: [
        { label: '아니요, 해당 없습니다', value: 'no' },
        { label: '예, 해당됩니다', value: 'yes', terminates: true },
      ],
    },
  ],
  getResult(answers) {
    const DISCLAIMER =
      '이 결과는 입력값 기반의 간이 추정이며, 법적 효력이 없습니다. 정확한 자격은 국민연금공단(☎ 1355) 또는 주민센터에서 확인하세요.';

    const isCouple = answers.household === 'couple';
    const householdLabel = isCouple ? '부부가구' : '단독가구';
    const maxAmount = isCouple ? '각 279,760원' : '월 349,700원';

    if (answers.age === 'no') {
      return {
        tier: 'ineligible',
        title: '현재 수급 대상이 아닙니다',
        description: '기초연금은 만 65세 이상부터 신청할 수 있습니다. 65세 생일이 속한 달의 1개월 전부터 미리 신청할 수 있으니, 시기가 되면 주민센터 또는 국민연금공단에 신청하세요.',
        disclaimer: DISCLAIMER,
      };
    }

    if (answers.citizenship === 'no') {
      return {
        tier: 'ineligible',
        title: '수급 대상에서 제외될 가능성이 높습니다',
        description: '기초연금은 대한민국 국적을 가지고 국내에 거주하는 어르신을 대상으로 합니다. 정확한 사항은 국민연금공단에 문의하세요.',
        disclaimer: DISCLAIMER,
      };
    }

    if (answers.income === 'high') {
      const limit = isCouple ? '395.2만 원' : '247만 원';
      return {
        tier: 'low',
        title: '소득인정액 기준 초과 가능성이 있습니다',
        description: `2026년 기준 ${householdLabel} 선정기준액 ${limit}을 초과하면 수급이 어렵습니다. 다만 소득인정액 계산에는 재산 환산이 포함돼 실제 금액이 달라질 수 있으니 계산기로 확인해보세요.`,
        disclaimer: DISCLAIMER,
        ctaText: '기초연금 계산기로 정확히 확인',
        ctaUrl: 'https://www.jptcalc.kr/calc/pension-welfare/basic-pension/',
        ctaCalculatorName: '기초연금 계산기',
        ctaCalculatorCategory: 'pension',
        ctaCrossSiteTrackingKey: 'quiz-basic-pension',
      };
    }

    if (answers.pension_type === 'yes') {
      return {
        tier: 'low',
        title: '직역연금 수급자는 대부분 제외됩니다',
        description: '공무원·군인·사학연금을 받고 계신 경우(배우자 포함) 원칙적으로 기초연금 수급이 어렵습니다. 일부 예외(퇴직유족연금 등)가 있으니 국민연금공단에 문의하세요.',
        disclaimer: DISCLAIMER,
      };
    }

    if (answers.income === 'low') {
      return {
        tier: 'high',
        title: '수급 가능성이 높습니다',
        description: `나이·국적·소득 조건을 모두 충족할 가능성이 높습니다. ${householdLabel} 최대 수령액은 ${maxAmount}입니다. 가까운 주민센터 또는 국민연금공단(☎ 1355)에 신청하세요. 만 65세 생일 1개월 전부터 신청할 수 있습니다.`,
        disclaimer: DISCLAIMER,
        ctaText: '기초연금 계산기로 예상 수령액 확인',
        ctaUrl: 'https://www.jptcalc.kr/calc/pension-welfare/basic-pension/',
        ctaCalculatorName: '기초연금 계산기',
        ctaCalculatorCategory: 'pension',
        ctaCrossSiteTrackingKey: 'quiz-basic-pension',
      };
    }

    if (answers.income === 'mid') {
      const limit = isCouple ? '395.2만 원' : '247만 원';
      return {
        tier: 'high',
        title: '수급 가능성이 높습니다',
        description: `소득인정액이 2026년 ${householdLabel} 선정기준액(${limit}) 이하로 보입니다. 정확한 금액은 재산 환산 계산이 필요하니 계산기로 확인 후 신청하세요.`,
        disclaimer: DISCLAIMER,
        ctaText: '기초연금 계산기로 정확히 확인',
        ctaUrl: 'https://www.jptcalc.kr/calc/pension-welfare/basic-pension/',
        ctaCalculatorName: '기초연금 계산기',
        ctaCalculatorCategory: 'pension',
        ctaCrossSiteTrackingKey: 'quiz-basic-pension',
      };
    }

    // income === 'unknown'
    const limit = isCouple ? '395.2만 원' : '247만 원';
    return {
      tier: 'medium',
      title: '계산기로 정확한 소득인정액을 확인하세요',
      description: `소득인정액은 월 소득과 재산을 합산한 금액입니다. 2026년 기준 ${householdLabel}은 ${limit} 이하면 수급 가능성이 있습니다. 계산기로 먼저 확인해보세요.`,
      disclaimer: DISCLAIMER,
      ctaText: '기초연금 소득인정액 계산하기',
      ctaUrl: 'https://www.jptcalc.kr/calc/pension-welfare/basic-pension/',
    };
  },
};

export default basicPensionQuiz;
