import test from "node:test";
import assert from "node:assert/strict";
import {
  FULL_QUESTION_BANK,
  filterTopics,
  getQuestionsByUnit,
  pickRandomQuestions,
  calculateQuizScore,
  calculateStudyProgress
} from "./studyLogic";
import { FALLBACK_API_KEYS, parseConcatenatedApiKeys, getCandidateApiKeys } from "../lib/geminiRotation";

test("FALLBACK_API_KEYS has all 21 user-provided keys in exact order", () => {
  assert.equal(FALLBACK_API_KEYS.length, 21);
  assert.equal(FALLBACK_API_KEYS[0], "AIzaSyAaGCgVqISrQc7EzF8cZOBXQsQRrgfREK0");
  assert.equal(FALLBACK_API_KEYS[20], "AIzaSyDm0braU7aFyip-VQBVfCQfv-n9fkxdmRg");
});

test("parseConcatenatedApiKeys splits concatenated AIza keys accurately", () => {
  const raw =
    "AIzaSyAaGCgVqISrQc7EzF8cZOBXQsQRrgfREK0AIzaSyDGwt3_N1vu0uArQaADqN8nSR4xKJQYdg0";
  const parsed = parseConcatenatedApiKeys(raw);
  assert.deepEqual(parsed, [
    "AIzaSyAaGCgVqISrQc7EzF8cZOBXQsQRrgfREK0",
    "AIzaSyDGwt3_N1vu0uArQaADqN8nSR4xKJQYdg0"
  ]);
});

test("getCandidateApiKeys preserves order and ignores placeholder env key", () => {
  const keys = getCandidateApiKeys("MY_GEMINI_API_KEY");
  assert.equal(keys.length, 21);
});

test("FULL_QUESTION_BANK has 250+ valid exam questions across all 4 units", () => {
  assert.ok(
    FULL_QUESTION_BANK.length >= 250,
    `Expected at least 250 questions, got ${FULL_QUESTION_BANK.length}`
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

test("filterTopics filters by unit and search keyword across 60 topic cards", () => {
  const unit1Topics = filterTopics("unit-1", "");
  assert.equal(unit1Topics.length, 15);

  const allTopics = filterTopics("all", "");
  assert.equal(allTopics.length, 60);

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

test("calculateStudyProgress computes topic completion percentage across 60 cards", () => {
  const progress = calculateStudyProgress(["u1-t1", "u1-t2", "u1-t3"]);
  assert.equal(progress.completed, 3);
  assert.equal(progress.total, 60);
  assert.equal(progress.percent, 5);
});
