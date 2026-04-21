import type { QuizConfig } from '@/components/quiz/types';

/**
 * 장기요양등급 해당 가능성 자가진단
 *
 * 장기요양등급은 건강보험공단 방문 조사 후 등급판정위원회가 결정합니다.
 * 이 퀴즈는 신청 전 해당 가능성만 간이 판단하는 용도입니다.
 *
 * 등급 기준 (장기요양인정점수):
 * 1등급: 95점 이상 (최중증)
 * 2등급: 75~95점 미만
 * 3등급: 60~75점 미만
 * 4등급: 51~60점 미만
 * 5등급: 인지지원등급 (45~51점, 치매 한정)
 * 인지지원등급: 45점 미만이나 치매 진단 있는 경우
 */
const longTermCareQuiz: QuizConfig = {
  id: 'long-term-care',
  title: '장기요양등급 해당 가능성 자가진단',
  description: '4가지 질문으로 장기요양 서비스 신청이 필요한지 미리 확인해보세요. 결과는 참고용이며 실제 등급은 공단 조사 후 결정됩니다.',
  questions: [
    {
      id: 'eligibility',
      text: '다음 중 해당되는 경우가 있으신가요?',
      subText: '장기요양보험은 노인성 질환자 또는 고령자를 대상으로 합니다.',
      options: [
        { label: '만 65세 이상입니다', value: 'age65' },
        { label: '65세 미만이지만 치매·뇌혈관질환·파킨슨 등 노인성 질환이 있습니다', value: 'disease' },
        { label: '해당 없습니다', value: 'none', terminates: true },
      ],
    },
    {
      id: 'adl',
      text: '일상생활 동작 중 혼자 하기 어려운 항목이 몇 개인가요?',
      subText: '식사, 옷 입기, 세수·양치, 목욕, 화장실 이용, 이동(실내) 등을 기준으로 합니다.',
      options: [
        { label: '4개 이상 (대부분 도움 필요)', value: 'severe' },
        { label: '2~3개 (부분적으로 도움 필요)', value: 'moderate' },
        { label: '1개 이하 (거의 독립적으로 가능)', value: 'mild' },
      ],
    },
    {
      id: 'cognition',
      text: '인지 기능이나 행동에 문제가 있으신가요?',
      subText: '날짜·장소 혼동, 가족 못 알아보기, 배회, 수면 장애, 의심·망상 등이 해당됩니다.',
      options: [
        { label: '예, 자주 나타납니다', value: 'yes' },
        { label: '가끔 나타납니다', value: 'sometimes' },
        { label: '해당 없습니다', value: 'no' },
      ],
    },
    {
      id: 'care_now',
      text: '현재 가족이 돌봄을 전담하고 있나요?',
      subText: '돌봄 부담이 크다면 장기요양 서비스를 통해 재가 방문요양, 주간보호, 요양원 등을 지원받을 수 있습니다.',
      options: [
        { label: '예, 가족이 24시간 돌봄 중입니다', value: 'full' },
        { label: '부분적으로 가족이 돌봅니다', value: 'partial' },
        { label: '아직 큰 어려움이 없습니다', value: 'none' },
      ],
    },
  ],
  getResult(answers) {
    const DISCLAIMER =
      '이 결과는 간이 추정이며 실제 장기요양등급은 국민건강보험공단 방문 조사 후 등급판정위원회가 결정합니다. 신청은 공단(☎ 1577-1000)이나 주민센터에서 할 수 있습니다.';

    if (answers.eligibility === 'none') {
      return {
        tier: 'ineligible',
        title: '현재 신청 대상이 아닐 가능성이 높습니다',
        description: '장기요양보험은 만 65세 이상이거나 65세 미만이라도 치매·뇌혈관질환·파킨슨 등 노인성 질환이 있는 경우에 신청할 수 있습니다.',
        disclaimer: DISCLAIMER,
      };
    }

    const adl = answers.adl;
    const cognition = answers.cognition;
    const careNow = answers.care_now;

    const careNoteMap: Record<string, string> = {
      full: ' 가족이 24시간 돌봄 중이시라면 재가 방문요양, 주간보호센터를 통해 가족 부담을 크게 줄일 수 있습니다.',
      partial: ' 가족이 부분적으로 돌보고 계신 상황이라면 재가 방문요양·목욕·간호 서비스로 돌봄 공백을 보완할 수 있습니다.',
      none: ' 지금은 큰 어려움이 없더라도 상태 변화에 대비해 미리 신청 절차를 알아두시는 것이 좋습니다.',
    };
    const careNote = careNoteMap[careNow] ?? '';

    if (adl === 'severe' || (adl === 'moderate' && cognition === 'yes')) {
      return {
        tier: 'high',
        title: '장기요양 서비스 신청을 권장합니다',
        description: `일상생활 도움이 많이 필요한 상태입니다. 3~4등급 이상 해당 가능성이 있으니 국민건강보험공단에 신청하세요. 재가 방문요양, 주간보호, 요양원 입소 등 다양한 서비스를 받을 수 있습니다.${careNote}`,
        disclaimer: DISCLAIMER,
        ctaText: '장기요양 본인부담금 계산해보기',
        ctaUrl: 'https://www.jptcalc.kr/calc/pension-welfare/long-term-care/',
        ctaCalculatorName: '장기요양 본인부담금 계산기',
        ctaCalculatorCategory: 'pension',
        ctaCrossSiteTrackingKey: 'quiz-long-term-care',
      };
    }

    if (adl === 'moderate' || cognition === 'yes') {
      return {
        tier: 'medium',
        title: '신청 검토를 권장합니다',
        description: `일부 일상생활에 도움이 필요한 상태입니다. 4~5등급 해당 가능성이 있습니다. 치매 진단이 있다면 인지지원등급도 받을 수 있으니 공단에 신청해보세요.${careNote}`,
        disclaimer: DISCLAIMER,
        ctaText: '장기요양 본인부담금 계산해보기',
        ctaUrl: 'https://www.jptcalc.kr/calc/pension-welfare/long-term-care/',
        ctaCalculatorName: '장기요양 본인부담금 계산기',
        ctaCalculatorCategory: 'pension',
        ctaCrossSiteTrackingKey: 'quiz-long-term-care',
      };
    }

    if (adl === 'mild' && cognition === 'no') {
      if (careNow === 'full' || careNow === 'partial') {
        return {
          tier: 'medium',
          title: '등급 판정은 어려울 수 있지만 상담을 권장합니다',
          description: '일상생활과 인지 기능 기준으로는 등급 판정이 어려울 수 있습니다. 다만 가족이 돌봄을 전담 중이시라면 공단(☎ 1577-1000) 상담으로 이용 가능한 다른 지원 제도(노인맞춤돌봄서비스 등)를 안내받으실 수 있습니다.',
          disclaimer: DISCLAIMER,
        };
      }
      return {
        tier: 'low',
        title: '현재는 해당 가능성이 낮습니다',
        description: '일상생활을 대부분 독립적으로 하고 인지 기능도 양호한 경우 장기요양 등급 판정이 어려울 수 있습니다. 상태가 변하면 다시 신청할 수 있습니다.',
        disclaimer: DISCLAIMER,
      };
    }

    return {
      tier: 'medium',
      title: '신청 검토를 권장합니다',
      description: `정확한 판단을 위해 국민건강보험공단(☎ 1577-1000)에 문의하거나 신청서를 제출해보세요. 신청 자체는 무료이며 등급 결과에 따라 서비스를 받을 수 있습니다.${careNote}`,
      disclaimer: DISCLAIMER,
      ctaText: '장기요양 본인부담금 계산해보기',
      ctaUrl: 'https://www.jptcalc.kr/calc/pension-welfare/long-term-care/',
    };
  },
};

export default longTermCareQuiz;
