import { COURSE_UNITS, QUIZ_QUESTIONS, TopicCard, QuizQuestion } from "../data/courseData";
import { ALL_BANK_QUESTIONS } from "../data/questionBankCaseStudies";

export const FULL_QUESTION_BANK: QuizQuestion[] = [
  ...QUIZ_QUESTIONS,
  ...ALL_BANK_QUESTIONS
];

export function filterTopics(unitId: string, searchQuery: string): TopicCard[] {
  const allTopics =
    unitId === "all"
      ? COURSE_UNITS.flatMap((u) => u.topics)
      : COURSE_UNITS.find((u) => u.id === unitId)?.topics ?? [];

  const q = searchQuery.trim().toLowerCase();
  if (!q) return allTopics;

  return allTopics.filter(
    (t) =>
      t.title.toLowerCase().includes(q) ||
      t.subtitle.toLowerCase().includes(q) ||
      t.eli5.toLowerCase().includes(q) ||
      t.keepInMind.toLowerCase().includes(q) ||
      t.practicalTip.toLowerCase().includes(q) ||
      t.bulletPoints.some((b) => b.toLowerCase().includes(q))
  );
}

export function getQuestionsByUnit(unitId: string): QuizQuestion[] {
  if (unitId === "all") return FULL_QUESTION_BANK;
  return FULL_QUESTION_BANK.filter((q) => q.unitId === unitId);
}

export function pickRandomQuestions(
  pool: QuizQuestion[],
  count: number
): QuizQuestion[] {
  const copy = [...pool];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, Math.min(count, copy.length));
}

export interface QuizScoreSummary {
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  wrongCount: number;
  percentage: number;
  gradeMessage: string;
}

export function calculateQuizScore(
  questions: QuizQuestion[],
  selectedAnswers: Record<string, number>
): QuizScoreSummary {
  const totalQuestions = questions.length;
  let answeredCount = 0;
  let correctCount = 0;
  let wrongCount = 0;

  for (const q of questions) {
    const chosen = selectedAnswers[q.id];
    if (typeof chosen === "number") {
      answeredCount++;
      if (chosen === q.correctIndex) {
        correctCount++;
      } else {
        wrongCount++;
      }
    }
  }

  const percentage =
    answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  let gradeMessage = "Soruları çözmeye başla!";
  if (answeredCount > 0) {
    if (percentage >= 85) {
      gradeMessage = "Harika gidiyorsun! Doğruluk oranın çok yüksek.";
    } else if (percentage >= 65) {
      gradeMessage = "İyi gidiyorsun! Yanlış yaptığın konuların 'Aklında Tut' kutularına göz at.";
    } else {
      gradeMessage = "Biraz daha tekrara ihtiyacın var. Konu özetlerini okuyup tekrar dene!";
    }
  }

  return {
    totalQuestions,
    answeredCount,
    correctCount,
    wrongCount,
    percentage,
    gradeMessage
  };
}

export function calculateStudyProgress(
  completedTopicIds: string[]
): { completed: number; total: number; percent: number } {
  const allIds = COURSE_UNITS.flatMap((u) => u.topics.map((t) => t.id));
  const uniqueCompleted = allIds.filter((id) => completedTopicIds.includes(id)).length;
  const total = allIds.length;
  const percent = total > 0 ? Math.round((uniqueCompleted / total) * 100) : 0;
  return { completed: uniqueCompleted, total, percent };
}
