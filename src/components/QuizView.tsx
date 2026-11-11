import React, { useState, useEffect, useMemo } from "react";
import { COURSE_UNITS, QuizQuestion } from "../data/courseData";
import {
  FULL_QUESTION_BANK,
  getQuestionsByUnit,
  pickRandomQuestions,
  calculateQuizScore
} from "../utils/studyLogic";
import {
  getWrongOptionReason,
  getAllOptionsAnalysis
} from "../utils/optionExplanations";
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  Pin,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
  Shuffle,
  ListChecks,
  AlertCircle
} from "lucide-react";

interface QuizViewProps {
  initialUnitId?: string;
}

export const QuizView: React.FC<QuizViewProps> = ({
  initialUnitId = "all"
}) => {
  const [unitFilter, setUnitFilter] = useState<string>(initialUnitId);
  const [customRandomSet, setCustomRandomSet] = useState<QuizQuestion[] | null>(null);
  const [onlyMistakesMode, setOnlyMistakesMode] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showClue, setShowClue] = useState(false);
  const [showAllOptionsBreakdown, setShowAllOptionsBreakdown] = useState(false);

  useEffect(() => {
    setUnitFilter(initialUnitId);
    setCustomRandomSet(null);
    setOnlyMistakesMode(false);
    setCurrentIndex(0);
    setShowClue(false);
    setShowAllOptionsBreakdown(false);
  }, [initialUnitId]);

  const unitPool = useMemo(() => getQuestionsByUnit(unitFilter), [unitFilter]);

  const mistakeQuestions = useMemo(() => {
    return FULL_QUESTION_BANK.filter((q) => {
      const ans = selectedAnswers[q.id];
      return typeof ans === "number" && ans !== q.correctIndex;
    });
  }, [selectedAnswers]);

  const questions = useMemo(() => {
    if (onlyMistakesMode && mistakeQuestions.length > 0) {
      return mistakeQuestions;
    }
    return customRandomSet || unitPool;
  }, [onlyMistakesMode, mistakeQuestions, customRandomSet, unitPool]);

  const safeIndex = Math.min(currentIndex, Math.max(0, questions.length - 1));
  const currentQuestion = questions[safeIndex];
  const scoreSummary = calculateQuizScore(questions, selectedAnswers);

  // Sliding window of 10 question buttons around safeIndex
  const windowSize = 10;
  const windowStart = Math.floor(safeIndex / windowSize) * windowSize;
  const visibleSlice = questions.slice(windowStart, windowStart + windowSize);

  const letters = ["A", "B", "C", "D"];

  const handleSelectUnitFilter = (id: string) => {
    setUnitFilter(id);
    setCustomRandomSet(null);
    setOnlyMistakesMode(false);
    setCurrentIndex(0);
    setShowClue(false);
    setShowAllOptionsBreakdown(false);
  };

  const handleStartRandomExam = () => {
    const picked = pickRandomQuestions(unitPool, 20);
    setCustomRandomSet(picked);
    setOnlyMistakesMode(false);
    setCurrentIndex(0);
    setShowClue(false);
    setShowAllOptionsBreakdown(false);
  };

  const handleToggleMistakesMode = () => {
    if (mistakeQuestions.length === 0) return;
    setOnlyMistakesMode(!onlyMistakesMode);
    setCurrentIndex(0);
    setShowClue(false);
    setShowAllOptionsBreakdown(false);
  };

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleResetQuiz = () => {
    const next = { ...selectedAnswers };
    for (const q of questions) {
      delete next[q.id];
    }
    setSelectedAnswers(next);
    setOnlyMistakesMode(false);
    setCurrentIndex(0);
    setShowClue(false);
    setShowAllOptionsBreakdown(false);
  };

  if (!currentQuestion) {
    return null;
  }

  const userChoice = selectedAnswers[currentQuestion.id];
  const isAnswered = typeof userChoice === "number";
  const isCorrect = isAnswered && userChoice === currentQuestion.correctIndex;
  const unitObj = COURSE_UNITS.find((u) => u.id === currentQuestion.unitId);
  const allOptionsAnalysis = getAllOptionsAnalysis(currentQuestion);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {/* 1. Simple Filter & Mode Strip */}
      <div className="bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-4 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div
            role="tablist"
            aria-label="Test Ünite Seçimi"
            className="flex flex-wrap items-center gap-1.5"
          >
            <button
              role="tab"
              aria-selected={unitFilter === "all" && !customRandomSet && !onlyMistakesMode}
              onClick={() => handleSelectUnitFilter("all")}
              className={`min-h-[36px] px-3 py-1.5 text-xs font-semibold rounded-xl transition-colors cursor-pointer ${
                unitFilter === "all" && !customRandomSet && !onlyMistakesMode
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Tüm Sorular ({FULL_QUESTION_BANK.length})
            </button>
            {COURSE_UNITS.map((u) => {
              const count = getQuestionsByUnit(u.id).length;
              const isSelected = unitFilter === u.id && !customRandomSet && !onlyMistakesMode;
              return (
                <button
                  key={u.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleSelectUnitFilter(u.id)}
                  className={`min-h-[36px] px-3 py-1.5 text-xs font-semibold rounded-xl transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {u.order}. {u.shortTitle} ({count})
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {mistakeQuestions.length > 0 && (
              <button
                onClick={handleToggleMistakesMode}
                className={`min-h-[36px] px-3 py-1.5 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer ${
                  onlyMistakesMode
                    ? "bg-rose-600 text-white"
                    : "bg-rose-50 text-rose-800 hover:bg-rose-100 border border-rose-200"
                }`}
              >
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Yanlışlarımı Çöz ({mistakeQuestions.length})</span>
              </button>
            )}

            <button
              onClick={handleStartRandomExam}
              className={`min-h-[36px] px-3 py-1.5 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer ${
                customRandomSet && !onlyMistakesMode
                  ? "bg-purple-600 text-white"
                  : "bg-purple-50 text-purple-800 hover:bg-purple-100 border border-purple-200"
              }`}
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>Rastgele 20 Soru Deneme</span>
            </button>

            <button
              onClick={handleResetQuiz}
              className="min-h-[36px] px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Sıfırla</span>
            </button>
          </div>
        </div>

        {/* Clean 10-Question Sliding Window + Quick Jump + Live Score */}
        <div className="pt-2.5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => {
                setCurrentIndex(Math.max(0, windowStart - windowSize));
                setShowClue(false);
                setShowAllOptionsBreakdown(false);
              }}
              disabled={windowStart === 0}
              aria-label="Önceki 10 soru grubu"
              className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 disabled:opacity-35 flex items-center justify-center text-slate-700 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {visibleSlice.map((q, sliceIdx) => {
              const actualIdx = windowStart + sliceIdx;
              const ans = selectedAnswers[q.id];
              const answered = typeof ans === "number";
              const right = answered && ans === q.correctIndex;
              const active = actualIdx === safeIndex;

              let pillClass = "bg-slate-100 text-slate-600 hover:bg-slate-200";
              if (active) {
                pillClass = "bg-slate-900 text-white ring-2 ring-blue-500/30";
              } else if (answered) {
                pillClass = right
                  ? "bg-emerald-100 text-emerald-800 font-bold"
                  : "bg-rose-100 text-rose-800 font-bold";
              }

              return (
                <button
                  key={q.id}
                  onClick={() => {
                    setCurrentIndex(actualIdx);
                    setShowClue(false);
                    setShowAllOptionsBreakdown(false);
                  }}
                  className={`min-w-[32px] h-8 px-1.5 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 transition-colors cursor-pointer ${pillClass}`}
                >
                  {actualIdx + 1}
                </button>
              );
            })}

            <button
              onClick={() => {
                setCurrentIndex(
                  Math.min(questions.length - 1, windowStart + windowSize)
                );
                setShowClue(false);
                setShowAllOptionsBreakdown(false);
              }}
              disabled={windowStart + windowSize >= questions.length}
              aria-label="Sonraki 10 soru grubu"
              className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 disabled:opacity-35 flex items-center justify-center text-slate-700 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-3 text-xs tabular-nums shrink-0">
            <span className="text-emerald-700 font-bold">
              ✓ {scoreSummary.correctCount} Doğru
            </span>
            <span className="text-rose-700 font-bold">
              ✕ {scoreSummary.wrongCount} Yanlış
            </span>
            <span className="text-blue-700 font-bold">
              Başarı: %{scoreSummary.percentage}
            </span>
          </div>
        </div>
      </div>

      {/* 2. SINGLE FOCUSED QUESTION CARD */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 space-y-5 shadow-2xs">
        <div className="flex items-center justify-between gap-2">
          <div className="text-xs font-semibold text-blue-600">
            Soru {safeIndex + 1} / {questions.length} · {unitObj?.shortTitle}
          </div>

          <button
            onClick={() => setShowClue(!showClue)}
            className="min-h-[34px] px-3 py-1 text-xs font-semibold text-amber-900 bg-amber-100 hover:bg-amber-200 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-700" />
            <span>{showClue ? "İpucunu Gizle" : "İpucu Göster"}</span>
          </button>
        </div>

        {showClue && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-xs sm:text-sm text-amber-950 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>Sınav Şifresi:</strong> {currentQuestion.keepInMind}
            </span>
          </div>
        )}

        <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
          {currentQuestion.question}
        </h2>

        {/* Options */}
        <div className="grid grid-cols-1 gap-2.5">
          {currentQuestion.options.map((opt, optIdx) => {
            const isThisSelected = userChoice === optIdx;
            const isThisCorrect = currentQuestion.correctIndex === optIdx;

            let buttonStyle =
              "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800";

            if (isAnswered) {
              if (isThisCorrect) {
                buttonStyle =
                  "bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold";
              } else if (isThisSelected && !isThisCorrect) {
                buttonStyle = "bg-rose-50 border-rose-400 text-rose-950";
              } else {
                buttonStyle =
                  "bg-white border-slate-200 text-slate-500 opacity-75";
              }
            }

            return (
              <button
                key={optIdx}
                onClick={() => handleSelectOption(currentQuestion.id, optIdx)}
                className={`w-full min-h-[52px] px-4 py-3 text-left text-sm sm:text-base rounded-xl border-2 transition-colors flex items-center justify-between gap-3 cursor-pointer ${buttonStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono font-bold text-xs w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-slate-700">
                    {letters[optIdx]}
                  </span>
                  <span>{opt}</span>
                </div>
                {isAnswered && isThisCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                )}
                {isAnswered && isThisSelected && !isThisCorrect && (
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Instant Specific Option-by-Option Explanation when Answered */}
        {isAnswered && (
          <div className="pt-3 border-t border-slate-100 space-y-3">
            {!isCorrect ? (
              <div className="space-y-2.5">
                {/* 1. Specific Explanation of Why the Selected Option is Wrong */}
                <div className="bg-rose-50/90 border border-rose-200 rounded-xl p-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-rose-900">
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>
                      Senin Seçimin Yanlış: {letters[userChoice]}) {currentQuestion.options[userChoice]} — Neden Yanlış?
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-rose-950 leading-relaxed">
                    {getWrongOptionReason(currentQuestion, userChoice)}
                  </p>
                </div>

                {/* 2. Specific Explanation of Why the Correct Option is Right */}
                <div className="bg-emerald-50/90 border border-emerald-200 rounded-xl p-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      Doğru Cevap: {letters[currentQuestion.correctIndex]}) {currentQuestion.options[currentQuestion.correctIndex]} — Neden Doğru?
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                    {currentQuestion.simpleExplanation}
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-emerald-50/90 border border-emerald-200 rounded-xl p-4 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Harika! Doğru Cevap: {letters[currentQuestion.correctIndex]}) {currentQuestion.options[currentQuestion.correctIndex]} — Neden Doğru?
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                  {currentQuestion.simpleExplanation}
                </p>
              </div>
            )}

            {/* Aklında Tut + All 4 Options Breakdown Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-amber-50/80 border border-amber-200 rounded-xl p-3.5">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-amber-950">
                <Pin className="w-4 h-4 text-amber-700 shrink-0" />
                <span>
                  <strong>Aklında Tut:</strong> {currentQuestion.keepInMind}
                </span>
              </div>

              <button
                onClick={() => setShowAllOptionsBreakdown(!showAllOptionsBreakdown)}
                className="min-h-[38px] px-3.5 py-1.5 text-xs font-bold text-blue-700 bg-white hover:bg-blue-50 border border-blue-200 rounded-lg flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer transition-colors shadow-2xs"
              >
                <ListChecks className="w-3.5 h-3.5 text-blue-600" />
                <span>
                  {showAllOptionsBreakdown
                    ? "Şık Analizini Gizle"
                    : "Tüm Şıkları Tek Tek İncele (A-B-C-D)"}
                </span>
              </button>
            </div>

            {/* All 4 Options Detailed Breakdown Card (Inline on Same Page) */}
            {showAllOptionsBreakdown && (
              <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-4 space-y-2.5">
                <div className="text-xs font-bold text-slate-900 border-b border-slate-200 pb-2">
                  Tüm Seçeneklerin Tek Tek Analizi (Neden Doğru / Neden Yanlış?)
                </div>
                {allOptionsAnalysis.map((item) => (
                  <div
                    key={item.index}
                    className={`rounded-xl p-3 border text-xs sm:text-sm space-y-1 ${
                      item.isCorrect
                        ? "bg-emerald-50/80 border-emerald-300 text-emerald-950"
                        : "bg-white border-slate-200 text-slate-800"
                    }`}
                  >
                    <div className="flex items-center gap-2 font-bold">
                      {item.isCorrect ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      ) : (
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      )}
                      <span>
                        {item.letter}) {item.optionText}{" "}
                        {item.isCorrect ? "— [DOĞRU CEVAP]" : "— [YANLIŞ ŞIK]"}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed pl-6">{item.explanation}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Bottom Prev / Next Question Bar */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            onClick={() => {
              setCurrentIndex(Math.max(0, safeIndex - 1));
              setShowClue(false);
              setShowAllOptionsBreakdown(false);
            }}
            disabled={safeIndex === 0}
            className="min-h-[44px] px-4 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Önceki Soru</span>
          </button>

          <button
            onClick={() => {
              setCurrentIndex(Math.min(questions.length - 1, safeIndex + 1));
              setShowClue(false);
              setShowAllOptionsBreakdown(false);
            }}
            disabled={safeIndex === questions.length - 1}
            className="min-h-[44px] px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Sonraki Soru</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
