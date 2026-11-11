import React, { useState, useEffect } from "react";
import { COURSE_UNITS, TopicCard } from "../data/courseData";
import { TopicVisualDiagram } from "./TopicVisualDiagram";
import { askGeminiTutorClient } from "../lib/geminiRotation";
import {
  CheckCircle2,
  Circle,
  Sparkles,
  BookOpen,
  Lightbulb,
  Pin,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  FileText,
  ListFilter
} from "lucide-react";

interface StudyViewProps {
  selectedUnitId: string;
  onSelectUnit: (unitId: string) => void;
  completedTopicIds: string[];
  onToggleComplete: (topicId: string) => void;
  onAskAi: (
    prompt: string,
    contextTitle: string,
    mode: "explain_simple" | "generate_question"
  ) => void;
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

  const [inlineAiLoading, setInlineAiLoading] = useState(false);
  const [inlineAiResponse, setInlineAiResponse] = useState<string | null>(null);
  const [inlineAiError, setInlineAiError] = useState<string | null>(null);

  useEffect(() => {
    setCurrentTopicIndex(0);
    setShowAllSlides(false);
    setShowTopicList(false);
    setInlineAiResponse(null);
    setInlineAiError(null);
  }, [effectiveUnitId]);

  const topics = activeUnit.topics;
  const safeIndex = Math.min(currentTopicIndex, Math.max(0, topics.length - 1));
  const currentTopic: TopicCard = topics[safeIndex];
  const isCompleted = completedTopicIds.includes(currentTopic.id);

  const handleSelectTopicIndex = (idx: number) => {
    setCurrentTopicIndex(idx);
    setShowAllSlides(false);
    setShowTopicList(false);
    setInlineAiResponse(null);
    setInlineAiError(null);
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

  const askInlineAi = async (
    promptText: string,
    mode: "explain_simple" | "generate_question"
  ) => {
    if (inlineAiLoading) return;
    setInlineAiLoading(true);
    setInlineAiError(null);
    setInlineAiResponse(null);

    try {
      const data = await askGeminiTutorClient({
        prompt: promptText,
        context: currentTopic.title,
        mode
      });
      setInlineAiResponse(data.text || "Yanıt alındı.");
    } catch (err: unknown) {
      setInlineAiError(
        err instanceof Error ? err.message : "Bağlantı hatası oluştu."
      );
    } finally {
      setInlineAiLoading(false);
    }
  };

  const renderBoldText = (text: string) => {
    const cleaned = text.replace(/^#{1,4}\s*/gm, "");
    const parts = cleaned.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-bold text-indigo-950">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return <React.Fragment key={i}>{part}</React.Fragment>;
    });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {/* 1. Simple 4-Unit Selector (60 total cards: 15 per unit) */}
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

      {/* 2. Topic Step Bar (1..15) + Expandable Topic Index Drawer */}
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

        {/* Collapsible Quick Jump List of all 15 Topic Titles in Active Unit */}
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
            <span>Hiç Bilmeyene Basit Anlatım</span>
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

        {/* Optional Slide Bullet Notes + Instant Inline AI Buttons */}
        <div className="pt-2 border-t border-slate-100 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <button
              onClick={() => setShowAllSlides(!showAllSlides)}
              className="min-h-[38px] px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
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
                onClick={() =>
                  askInlineAi(currentTopic.aiPromptSuggestion, "explain_simple")
                }
                disabled={inlineAiLoading}
                className="min-h-[38px] px-3.5 py-1.5 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Günlük Örnekle Anlat (AI)</span>
              </button>

              <button
                onClick={() =>
                  askInlineAi(
                    `"${currentTopic.title}" konusuyla ilgili sınavda çıkabilecek 1 adet çoktan seçmeli soru ve çok basit açıklamasını yaz.`,
                    "generate_question"
                  )
                }
                disabled={inlineAiLoading}
                className="min-h-[38px] px-3.5 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors cursor-pointer disabled:opacity-50"
              >
                <span>Örnek Soru Üret (AI)</span>
              </button>
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

          {/* Inline AI Output Right Inside the Card */}
          {inlineAiLoading && (
            <div className="bg-blue-50/50 border border-blue-200 rounded-xl p-4 text-xs sm:text-sm text-blue-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600 animate-spin shrink-0" />
              <span>Yapay Zeka Hoca en basit örneği hazırlıyor...</span>
            </div>
          )}

          {inlineAiError && (
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-3.5 text-xs text-rose-800">
              {inlineAiError}
            </div>
          )}

          {inlineAiResponse && (
            <div className="bg-indigo-50/80 border-2 border-indigo-200 text-slate-800 rounded-2xl p-4 sm:p-5 space-y-2">
              <div className="flex items-center justify-between border-b border-indigo-200/70 pb-2">
                <span className="text-xs font-bold text-indigo-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  <span>Yapay Zeka Hoca'nın Basit Anlatımı</span>
                </span>
                <button
                  onClick={() => setInlineAiResponse(null)}
                  className="text-xs font-semibold text-indigo-700 hover:text-indigo-950 cursor-pointer"
                >
                  Kapat ✕
                </button>
              </div>
              <div className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap text-slate-800">
                {renderBoldText(inlineAiResponse)}
              </div>
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
