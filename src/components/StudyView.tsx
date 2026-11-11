import React, { useState, useEffect, useMemo } from "react";
import { COURSE_UNITS, TopicCard } from "../data/courseData";
import { TopicVisualDiagram } from "./TopicVisualDiagram";
import { FULL_QUESTION_BANK } from "../utils/studyLogic";
import {
  getTopicDailyExample,
  getQuestionsForTopic,
  getWrongOptionReason
} from "../utils/optionExplanations";
import {
  CheckCircle2,
  Circle,
  BookOpen,
  Lightbulb,
  Pin,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  FileText,
  ListFilter,
  HelpCircle,
  XCircle,
  Briefcase
} from "lucide-react";

interface StudyViewProps {
  selectedUnitId: string;
  onSelectUnit: (unitId: string) => void;
  completedTopicIds: string[];
  onToggleComplete: (topicId: string) => void;
  onStartUnitQuiz: (unitId: string) => void;
}

export const StudyView: React.FC<StudyViewProps> = ({
  selectedUnitId,
  onSelectUnit,
  completedTopicIds,
  onToggleComplete,
  onStartUnitQuiz
}) => {
  const effectiveUnitId =
    selectedUnitId === "all" ? COURSE_UNITS[0].id : selectedUnitId;
  const activeUnit =
    COURSE_UNITS.find((u) => u.id === effectiveUnitId) || COURSE_UNITS[0];

  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const [showAllSlides, setShowAllSlides] = useState(false);
  const [showTopicList, setShowTopicList] = useState(false);
  const [showDailyExample, setShowDailyExample] = useState(false);
  const [showMiniQuiz, setShowMiniQuiz] = useState(false);
  const [miniQuizAnswer, setMiniQuizAnswer] = useState<number | null>(null);

  useEffect(() => {
    setCurrentTopicIndex(0);
    setShowAllSlides(false);
    setShowTopicList(false);
    setShowDailyExample(false);
    setShowMiniQuiz(false);
    setMiniQuizAnswer(null);
  }, [effectiveUnitId]);

  const topics = activeUnit.topics;
  const safeIndex = Math.min(currentTopicIndex, Math.max(0, topics.length - 1));
  const currentTopic: TopicCard = topics[safeIndex];
  const isCompleted = completedTopicIds.includes(currentTopic.id);

  const dailyExample = useMemo(
    () => getTopicDailyExample(currentTopic),
    [currentTopic]
  );

  const matchedQuestions = useMemo(
    () => getQuestionsForTopic(currentTopic, FULL_QUESTION_BANK),
    [currentTopic]
  );
  const miniQuestion = matchedQuestions[0];

  const handleSelectTopicIndex = (idx: number) => {
    setCurrentTopicIndex(idx);
    setShowAllSlides(false);
    setShowTopicList(false);
    setShowDailyExample(false);
    setShowMiniQuiz(false);
    setMiniQuizAnswer(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextTopic = () => {
    if (safeIndex < topics.length - 1) {
      handleSelectTopicIndex(safeIndex + 1);
    } else {
      const unitIdx = COURSE_UNITS.findIndex((u) => u.id === activeUnit.id);
      if (unitIdx >= 0 && unitIdx < COURSE_UNITS.length - 1) {
        onSelectUnit(COURSE_UNITS[unitIdx + 1].id);
      }
    }
  };

  const handlePrevTopic = () => {
    if (safeIndex > 0) {
      handleSelectTopicIndex(safeIndex - 1);
    } else {
      const unitIdx = COURSE_UNITS.findIndex((u) => u.id === activeUnit.id);
      if (unitIdx > 0) {
        onSelectUnit(COURSE_UNITS[unitIdx - 1].id);
      }
    }
  };

  const handleCompleteAndNext = () => {
    if (!isCompleted) {
      onToggleComplete(currentTopic.id);
    }
    handleNextTopic();
  };

  const letters = ["A", "B", "C", "D"];

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {/* 1. Simple 4-Unit Selector (80 total cards: 20 per unit) */}
      <div
        role="tablist"
        aria-label="Ünite Seçimi"
        className="grid grid-cols-2 sm:grid-cols-4 gap-2"
      >
        {COURSE_UNITS.map((unit) => {
          const isSelected = unit.id === activeUnit.id;
          const unitDoneCount = unit.topics.filter((t) =>
            completedTopicIds.includes(t.id)
          ).length;

          return (
            <button
              key={unit.id}
              role="tab"
              aria-selected={isSelected}
              onClick={() => onSelectUnit(unit.id)}
              className={`min-h-[52px] px-3 py-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                isSelected
                  ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center justify-between text-[11px] opacity-85">
                <span>{unit.order}. Ünite</span>
                <span>
                  {unitDoneCount}/{unit.topics.length} Kart
                </span>
              </div>
              <div className="font-bold text-xs sm:text-sm truncate mt-0.5">
                {unit.shortTitle}
              </div>
            </button>
          );
        })}
      </div>

      {/* 2. Topic Step Bar (1..20) + Expandable Topic Index Drawer */}
      <div className="bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 space-y-2.5">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
            {topics.map((t, idx) => {
              const done = completedTopicIds.includes(t.id);
              const active = idx === safeIndex;
              return (
                <button
                  key={t.id}
                  onClick={() => handleSelectTopicIndex(idx)}
                  title={t.title}
                  className={`min-h-[34px] px-2.5 py-1 rounded-lg text-xs font-bold transition-colors flex items-center gap-1 shrink-0 cursor-pointer ${
                    active
                      ? "bg-slate-900 text-white"
                      : done
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  <span>{idx + 1}</span>
                  {done && <CheckCircle2 className="w-3 h-3 text-emerald-500" />}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => setShowTopicList(!showTopicList)}
              className="min-h-[34px] px-2.5 py-1 rounded-lg text-xs font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 flex items-center gap-1 cursor-pointer"
            >
              <ListFilter className="w-3.5 h-3.5" />
              <span>Başlıklar ({topics.length})</span>
            </button>

            <a
              href={activeUnit.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-slate-500 hover:text-slate-900 flex items-center gap-1 px-2 py-1"
              title="Orijinal Ders Slaytını Aç"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">PDF</span>
            </a>
          </div>
        </div>

        {/* Collapsible Quick Jump List of all 20 Topic Titles in Active Unit */}
        {showTopicList && (
          <div className="border-t border-slate-100 pt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-72 overflow-y-auto">
            {topics.map((t, idx) => {
              const done = completedTopicIds.includes(t.id);
              const active = idx === safeIndex;
              return (
                <button
                  key={t.id}
                  onClick={() => handleSelectTopicIndex(idx)}
                  className={`px-3 py-2 rounded-lg text-left text-xs flex items-center justify-between gap-2 transition-colors cursor-pointer ${
                    active
                      ? "bg-blue-600 text-white font-bold"
                      : done
                      ? "bg-emerald-50/70 text-emerald-900 border border-emerald-200"
                      : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <span className="truncate">
                    {idx + 1}. {t.title}
                  </span>
                  {done && (
                    <CheckCircle2
                      className={`w-3.5 h-3.5 shrink-0 ${
                        active ? "text-white" : "text-emerald-600"
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* 3. SINGLE FOCUSED VISUAL STUDY CARD */}
      <article className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 space-y-5 shadow-2xs">
        {/* Card Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-blue-600">
              {activeUnit.order}. Ünite · Konu Kartı {safeIndex + 1} / {topics.length} (Toplam 80 Kart)
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 leading-snug">
              {currentTopic.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              {currentTopic.subtitle}
            </p>
          </div>

          <button
            onClick={() => onToggleComplete(currentTopic.id)}
            aria-label={`${currentTopic.title} konusunu ${
              isCompleted ? "okunmadı" : "çalışıldı"
            } olarak işaretle`}
            className={`min-h-[40px] px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer ${
              isCompleted
                ? "bg-emerald-600 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {isCompleted ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>Öğrendim</span>
              </>
            ) : (
              <>
                <Circle className="w-4 h-4" />
                <span>İşaretle</span>
              </>
            )}
          </button>
        </div>

        {/* BESPOKE VISUAL DIAGRAM FOR THIS TOPIC */}
        <TopicVisualDiagram
          topicId={currentTopic.id}
          visualSchema={currentTopic.visualSchema}
          keepInMind={currentTopic.keepInMind}
        />

        {/* 1. EN BASİT VE DURU ANLATIM */}
        <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-4 sm:p-5">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-900 mb-1.5">
            <BookOpen className="w-4 h-4 text-blue-700 shrink-0" />
            <span>En Sade ve Anlaşılır Özeti</span>
          </div>
          <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
            {currentTopic.eli5}
          </p>
        </div>

        {/* 2. PRATİK İPUCU & 3. AKLINDA TUT (Clean 2-Box Row) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-950">
              <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Sınav İpucu (Soruda Ne Geçer?)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {currentTopic.practicalTip}
            </p>
            {currentTopic.examClue && (
              <p className="text-xs text-amber-900/90 pt-1 border-t border-amber-200/70">
                <strong>Dikkat:</strong> {currentTopic.examClue}
              </p>
            )}
          </div>

          <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-4">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-950 mb-1.5">
              <Pin className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Aklında Tut! (Tek Cümle Şifre)</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed">
              {currentTopic.keepInMind}
            </p>
          </div>
        </div>

        {/* Built-In Interactive Reinforcement Tools: Slide Details, Daily Case Example, and Topic Mini-Question */}
        <div className="pt-2 border-t border-slate-100 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <button
              onClick={() => setShowAllSlides(!showAllSlides)}
              className="min-h-[38px] px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {showAllSlides ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  <span>Slayt Maddelerini Gizle</span>
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  <span>Slayttaki Detay Maddeler ({currentTopic.bulletPoints.length})</span>
                </>
              )}
            </button>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setShowDailyExample(!showDailyExample)}
                className={`min-h-[38px] px-3.5 py-1.5 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer border ${
                  showDailyExample
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border-indigo-200"
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>
                  {showDailyExample ? "Vaka Örneğini Gizle" : "Günlük Hayat & Vaka Örneği"}
                </span>
              </button>

              {miniQuestion && (
                <button
                  onClick={() => setShowMiniQuiz(!showMiniQuiz)}
                  className={`min-h-[38px] px-3.5 py-1.5 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer border ${
                    showMiniQuiz
                      ? "bg-emerald-600 text-white border-emerald-600"
                      : "text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border-emerald-200"
                  }`}
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>
                    {showMiniQuiz ? "Örnek Soruyu Gizle" : "Bu Konunun Sınav Sorusu"}
                  </span>
                </button>
              )}
            </div>
          </div>

          {showAllSlides && (
            <ul className="space-y-2 bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-700">
              {currentTopic.bulletPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="font-bold text-slate-400">{i + 1}.</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Built-in Daily Life & Social Work Case Example */}
          {showDailyExample && (
            <div className="bg-indigo-50/80 border border-indigo-200 rounded-2xl p-4 sm:p-5 space-y-2.5">
              <div className="text-xs font-bold text-indigo-950 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-indigo-700 shrink-0" />
                <span>{dailyExample.title}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                <strong>Somut Durum:</strong> {dailyExample.scenario}
              </p>
              <p className="text-xs sm:text-sm text-indigo-950 leading-relaxed bg-white/80 border border-indigo-100 rounded-xl p-3">
                <strong>Sosyal Hizmet Uzmanı Ne Yapar?</strong> {dailyExample.socialWorkAction}
              </p>
            </div>
          )}

          {/* Built-in Topic Mini-Question with Wrong/Right Option Explanation */}
          {showMiniQuiz && miniQuestion && (
            <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-4 sm:p-5 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-lg">
                  Konu Pekiştirme Sorusu
                </span>
                {miniQuizAnswer !== null && (
                  <button
                    onClick={() => setMiniQuizAnswer(null)}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
                  >
                    Tekrar Çöz
                  </button>
                )}
              </div>

              <p className="text-sm sm:text-base font-bold text-slate-900">
                {miniQuestion.question}
              </p>

              <div className="grid grid-cols-1 gap-2">
                {miniQuestion.options.map((opt, idx) => {
                  const isAnswered = miniQuizAnswer !== null;
                  const isSelected = miniQuizAnswer === idx;
                  const isRight = miniQuestion.correctIndex === idx;

                  let btnClass =
                    "bg-white hover:bg-slate-100 border-slate-200 text-slate-800";
                  if (isAnswered) {
                    if (isRight) {
                      btnClass =
                        "bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold";
                    } else if (isSelected && !isRight) {
                      btnClass = "bg-rose-50 border-rose-400 text-rose-950";
                    } else {
                      btnClass = "bg-white border-slate-200 text-slate-400 opacity-75";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => setMiniQuizAnswer(idx)}
                      className={`w-full px-3.5 py-2.5 text-left text-xs sm:text-sm rounded-xl border-2 transition-colors flex items-center justify-between gap-2 cursor-pointer ${btnClass}`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono font-bold text-xs w-6 h-6 rounded-md bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 text-slate-700">
                          {letters[idx]}
                        </span>
                        <span>{opt}</span>
                      </div>
                      {isAnswered && isRight && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                      {isAnswered && isSelected && !isRight && (
                        <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {miniQuizAnswer !== null && (
                <div className="space-y-2 pt-2">
                  {miniQuizAnswer !== miniQuestion.correctIndex && (
                    <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 text-xs text-rose-950 space-y-1">
                      <div className="font-bold text-rose-900">
                        ✕ Seçtiğin Şık ({letters[miniQuizAnswer]}: {miniQuestion.options[miniQuizAnswer]}) Neden Yanlış?
                      </div>
                      <p className="leading-relaxed">
                        {getWrongOptionReason(miniQuestion, miniQuizAnswer)}
                      </p>
                    </div>
                  )}

                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-950 space-y-1">
                    <div className="font-bold text-emerald-900">
                      ✓ Doğru Cevap ({letters[miniQuestion.correctIndex]}: {miniQuestion.options[miniQuestion.correctIndex]}) Neden Doğru?
                    </div>
                    <p className="leading-relaxed">{miniQuestion.simpleExplanation}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* 4. Bottom Step Navigation Buttons */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            onClick={handlePrevTopic}
            disabled={activeUnit.order === 1 && safeIndex === 0}
            className="min-h-[46px] px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Önceki Konu</span>
          </button>

          {safeIndex === topics.length - 1 ? (
            <button
              onClick={() => {
                if (!isCompleted) onToggleComplete(currentTopic.id);
                onStartUnitQuiz(activeUnit.id);
              }}
              className="min-h-[46px] px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Ünite Bitti! Şimdi Testini Çöz →</span>
            </button>
          ) : (
            <button
              onClick={handleCompleteAndNext}
              className="min-h-[46px] px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Öğrendim, Sonraki Konu</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </article>
    </div>
  );
};
