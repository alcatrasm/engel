import test from "node:test";
import assert from "node:assert/strict";
import { COURSE_UNITS } from "../data/courseData";
import {
  FULL_QUESTION_BANK,
  filterTopics,
  getQuestionsByUnit,
  pickRandomQuestions,
  calculateQuizScore,
  calculateStudyProgress
} from "./studyLogic";
import {
  getWrongOptionReason,
  getAllOptionsAnalysis,
  getTopicDailyExample,
  getQuestionsForTopic
} from "./optionExplanations";

test("FULL_QUESTION_BANK has 340 valid exam questions across all 4 units", () => {
  assert.ok(
    FULL_QUESTION_BANK.length >= 300,
    `Expected at least 300 questions, got ${FULL_QUESTION_BANK.length}`
  );

  for (const q of FULL_QUESTION_BANK) {
    assert.equal(q.options.length, 4);
    assert.ok(q.correctIndex >= 0 && q.correctIndex < 4);
    assert.ok(q.question.length > 10);
    assert.ok(q.simpleExplanation.length > 10);
    assert.ok(q.keepInMind.length > 5);
  }

  const picked20 = pickRandomQuestions(FULL_QUESTION_BANK, 20);
  assert.equal(picked20.length, 20);
});

test("Every wrong option in FULL_QUESTION_BANK produces a clear, non-empty explanation of why it is wrong", () => {
  for (const q of FULL_QUESTION_BANK) {
    const analysis = getAllOptionsAnalysis(q);
    assert.equal(analysis.length, 4);

    for (let idx = 0; idx < 4; idx++) {
      if (idx === q.correctIndex) {
        assert.equal(analysis[idx].isCorrect, true);
        assert.ok(analysis[idx].explanation.length > 15);
      } else {
        assert.equal(analysis[idx].isCorrect, false);
        const wrongReason = getWrongOptionReason(q, idx);
        assert.ok(wrongReason.length > 20);
        // Should mention the selected wrong option text or explain why it doesn't fit
        assert.ok(wrongReason.includes(q.options[q.correctIndex]));
      }
    }
  }
});

test("Every one of the 80 Topic Cards has a daily life case example and matched exam questions", () => {
  const allTopics = COURSE_UNITS.flatMap((u) => u.topics);
  assert.equal(allTopics.length, 80);

  for (const topic of allTopics) {
    const example = getTopicDailyExample(topic);
    assert.ok(example.title.includes(topic.title));
    assert.ok(example.scenario.length > 30);
    assert.ok(example.socialWorkAction.length > 20);

    const matched = getQuestionsForTopic(topic, FULL_QUESTION_BANK);
    assert.ok(matched.length >= 1);
  }
});

test("filterTopics filters by unit and search keyword across 80 topic cards", () => {
  const unit1Topics = filterTopics("unit-1", "");
  assert.equal(unit1Topics.length, 20);

  const unit2Topics = filterTopics("unit-2", "");
  assert.equal(unit2Topics.length, 20);

  const unit3Topics = filterTopics("unit-3", "");
  assert.equal(unit3Topics.length, 20);

  const unit4Topics = filterTopics("unit-4", "");
  assert.equal(unit4Topics.length, 20);

  const allTopics = filterTopics("all", "");
  assert.equal(allTopics.length, 80);

  const goffmanSearch = filterTopics("all", "Goffman");
  assert.ok(goffmanSearch.length >= 2);
});

test("calculateQuizScore computes accurate score and percentage", () => {
  const unit1Questions = getQuestionsByUnit("unit-1");
  assert.ok(unit1Questions.length >= 60);

  const answers: Record<string, number> = {
    [unit1Questions[0].id]: unit1Questions[0].correctIndex,
    [unit1Questions[1].id]: unit1Questions[1].correctIndex,
    [unit1Questions[2].id]: (unit1Questions[2].correctIndex + 1) % 4
  };

  const result = calculateQuizScore(unit1Questions, answers);
  assert.equal(result.totalQuestions, unit1Questions.length);
  assert.equal(result.answeredCount, 3);
  assert.equal(result.correctCount, 2);
  assert.equal(result.wrongCount, 1);
  assert.equal(result.percentage, 67);
});

test("calculateStudyProgress computes topic completion percentage across 80 cards", () => {
  const progress = calculateStudyProgress(["u1-t1", "u1-t2", "u1-t3", "u1-t4"]);
  assert.equal(progress.completed, 4);
  assert.equal(progress.total, 80);
  assert.equal(progress.percent, 5);
});
