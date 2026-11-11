import React, { useState, useEffect, useMemo } from "react";
import { COURSE_UNITS, QuizQuestion } from "../data/courseData";
import {
  FULL_QUESTION_BANK,
  getQuestionsByUnit,
  pickRandomQuestions,
  calculateQuizScore
} from "../utils/studyLogic";
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  Pin,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
  Shuffle,
  Loader2,
  X
} from "lucide-react";
import { askGeminiTutorClient } from "../lib/geminiRotation";

interface QuizViewProps {
  initialUnitId?: string;
  onAskAiForQuestion?: (questionText: string, explanationText: string) => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  initialUnitId = "all"
}) => {
  const [unitFilter, setUnitFilter] = useState<string>(initialUnitId);
  const [customRandomSet, setCustomRandomSet] = useState<QuizQuestion[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showClue, setShowClue] = useState(false);

  // Inline AI states to answer right on the Quiz page without switching tabs
  const [inlineAiLoading, setInlineAiLoading] = useState(false);
  const [inlineAiResponse, setInlineAiResponse] = useState<string | null>(null);
  const [inlineAiError, setInlineAiError] = useState<string | null>(null);
  const [inlineAiForQuestionId, setInlineAiForQuestionId] = useState<string | null>(null);

  useEffect(() => {
    setUnitFilter(initialUnitId);
    setCustomRandomSet(null);
    setCurrentIndex(0);
    setShowClue(false);
    setInlineAiResponse(null);
    setInlineAiError(null);
  }, [initialUnitId]);

  const unitPool = useMemo(() => getQuestionsByUnit(unitFilter), [unitFilter]);
  const questions = customRandomSet || unitPool;

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
    setCurrentIndex(0);
    setShowClue(false);
    setInlineAiResponse(null);
    setInlineAiError(null);
  };

  const handleStartRandomExam = () => {
    const picked = pickRandomQuestions(unitPool, 20);
    setCustomRandomSet(picked);
    setCurrentIndex(0);
    setShowClue(false);
    setInlineAiResponse(null);
    setInlineAiError(null);
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
    setCurrentIndex(0);
    setShowClue(false);
    setInlineAiResponse(null);
    setInlineAiError(null);
  };

  const handleAskInlineAi = async () => {
    if (!currentQuestion) return;
    const userChoice = selectedAnswers[currentQuestion.id];
    const userChoiceText =
      typeof userChoice === "number"
        ? `Öğrencinin İşaretlediği Şık: ${letters[userChoice]} (${currentQuestion.options[userChoice] || ""})`
        : "Öğrenci henüz bir şık işaretlemedi.";

    const promptText = `Aşağıdaki sınav sorusunu adım adım analiz et:
Soru: "${currentQuestion.question}"
Şıklar:
A) ${currentQuestion.options[0]}
B) ${currentQuestion.options[1]}
C) ${currentQuestion.options[2]}
D) ${currentQuestion.options[3]}

Doğru Şık: ${letters[currentQuestion.correctIndex]} (${currentQuestion.options[currentQuestion.correctIndex]})
${userChoiceText}

Lütfen:
1. Doğru cevabın neden kesinlikle doğru olduğunu açıkla.
2. Diğer seçeneklerin (ve özellikle öğrencinin işaretlediği şıkkın) neden bu soruya uymadığını açıkla.
3. Bu soru sınavda tekrar çıkarsa kaçırmamak için 1 cümlelik pratik şifre (Aklında Tut) ver.
Anlatımın en sade, duru ve anlaşılır Türkçe ile olsun.`;

    setInlineAiLoading(true);
    setInlineAiError(null);
    setInlineAiForQuestionId(currentQuestion.id);

    try {
      const res = await askGeminiTutorClient({
        prompt: promptText,
        context: `Soru #${safeIndex + 1}: ${currentQuestion.question.slice(0, 60)}...`,
        mode: "explain_simple"
      });
      setInlineAiResponse(res.text);
    } catch (err: unknown) {
      setInlineAiError(
        err instanceof Error ? err.message : "AI Hoca yanıt veremedi. Lütfen tekrar deneyin."
      );
    } finally {
      setInlineAiLoading(false);
    }
  };

  const renderFormattedText = (text: string) => {
    const cleaned = text.replace(/^#{1,4}\s*/gm, "");
    const parts = cleaned.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-bold text-slate-900">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  if (!currentQuestion) {
    return null;
  }

  const userChoice = selectedAnswers[currentQuestion.id];
  const isAnswered = typeof userChoice === "number";
  const isCorrect = isAnswered && userChoice === currentQuestion.correctIndex;
  const unitObj = COURSE_UNITS.find((u) => u.id === currentQuestion.unitId);

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
              aria-selected={unitFilter === "all" && !customRandomSet}
              onClick={() => handleSelectUnitFilter("all")}
              className={`min-h-[36px] px-3 py-1.5 text-xs font-semibold rounded-xl transition-colors cursor-pointer ${
                unitFilter === "all" && !customRandomSet
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Tüm Sorular ({FULL_QUESTION_BANK.length})
            </button>
            {COURSE_UNITS.map((u) => {
              const count = getQuestionsByUnit(u.id).length;
              const isSelected = unitFilter === u.id && !customRandomSet;
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

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleStartRandomExam}
              className={`min-h-[36px] px-3 py-1.5 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer ${
                customRandomSet
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

        {/* Instant Detailed Explanation Box when Answered */}
        {isAnswered && (
          <div className="pt-3 border-t border-slate-100 space-y-3">
            {/* If Wrong: Show distinct "Senin Seçtiğin Şık Neden Yanlış?" + "Doğru Cevap Neden Doğru?" */}
            {!isCorrect ? (
              <div className="space-y-2.5">
                {/* 1. Neden Yanlış */}
                <div className="bg-rose-50/90 border border-rose-200 rounded-xl p-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-rose-900">
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>
                      Senin Seçimin: {letters[userChoice]} ({currentQuestion.options[userChoice]}) — Neden Yanlış?
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-rose-950 leading-relaxed">
                    İşaretlediğin <strong>{letters[userChoice]} seçeneği</strong> bu soru kökündeki kriteri karşılamaz. Soruda istenen temel kavram bu şık ile uyuşmamaktadır.
                  </p>
                </div>

                {/* 2. Neden Doğru */}
                <div className="bg-emerald-50/90 border border-emerald-200 rounded-xl p-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      Doğru Cevap: {letters[currentQuestion.correctIndex]} ({currentQuestion.options[currentQuestion.correctIndex]}) — Neden Doğru?
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                    {currentQuestion.simpleExplanation}
                  </p>
                </div>
              </div>
            ) : (
              /* If Correct: Clean Celebration + Explanation */
              <div className="bg-emerald-50/90 border border-emerald-200 rounded-xl p-4 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Harika! Doğru Cevap: {letters[currentQuestion.correctIndex]} ({currentQuestion.options[currentQuestion.correctIndex]})
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                  {currentQuestion.simpleExplanation}
                </p>
              </div>
            )}

            {/* Aklında Tut & Inline AI Hoca Trigger Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-amber-50/80 border border-amber-200 rounded-xl p-3.5">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-amber-950">
                <Pin className="w-4 h-4 text-amber-700 shrink-0" />
                <span>
                  <strong>Aklında Tut:</strong> {currentQuestion.keepInMind}
                </span>
              </div>

              <button
                onClick={handleAskInlineAi}
                disabled={inlineAiLoading}
                className="min-h-[38px] px-3.5 py-1.5 text-xs font-semibold text-blue-700 bg-white hover:bg-blue-50 border border-blue-200 rounded-lg flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer disabled:opacity-60 transition-colors shadow-2xs"
              >
                {inlineAiLoading ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-blue-600" />
                    <span>AI Hoca Hazırlıyor...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span>AI Hoca'ya Sor (Bu Sayfada Açıkla)</span>
                  </>
                )}
              </button>
            </div>

            {/* Inline AI Hoca Answer Display (DIRECTLY ON THIS PAGE) */}
            {inlineAiResponse && inlineAiForQuestionId === currentQuestion.id && (
              <div className="bg-gradient-to-br from-indigo-50/95 to-blue-50/95 border-2 border-indigo-200 rounded-2xl p-4 sm:p-5 space-y-3 shadow-xs">
                <div className="flex items-center justify-between gap-2 border-b border-indigo-100 pb-2.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-indigo-950">
                    <Sparkles className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>AI Hoca Soru Analizi & Şık Karşılaştırması</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={handleAskInlineAi}
                      disabled={inlineAiLoading}
                      className="text-[11px] font-semibold text-indigo-700 hover:text-indigo-900 px-2.5 py-1 rounded-lg bg-white border border-indigo-200 cursor-pointer"
                    >
                      Yeniden Sor
                    </button>
                    <button
                      onClick={() => setInlineAiResponse(null)}
                      aria-label="Kapat"
                      className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-white/60 cursor-pointer transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line space-y-1">
                  {renderFormattedText(inlineAiResponse)}
                </div>
              </div>
            )}

            {inlineAiError && inlineAiForQuestionId === currentQuestion.id && (
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 text-xs text-rose-800 flex items-center justify-between gap-2">
                <span>{inlineAiError}</span>
                <button
                  onClick={handleAskInlineAi}
                  className="font-bold underline text-rose-900 cursor-pointer"
                >
                  Tekrar Dene
                </button>
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
