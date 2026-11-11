import React, { useState, useEffect } from "react";
import { StudyView } from "./components/StudyView";
import { QuizView } from "./components/QuizView";
import { AiTutorView } from "./components/AiTutorView";
import { SyllabusView } from "./components/SyllabusView";
import { calculateStudyProgress } from "./utils/studyLogic";
import { BookOpen, CheckSquare, Sparkles, Calendar } from "lucide-react";

type ActiveTab = "study" | "quiz" | "ai" | "syllabus";

const STORAGE_KEY_COMPLETED = "shz237_completed_topics_v1";

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("study");
  const [selectedUnitId, setSelectedUnitId] = useState<string>("unit-1");
  const [quizUnitId, setQuizUnitId] = useState<string>("all");
  const [completedTopicIds, setCompletedTopicIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_COMPLETED);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [aiQueuedPrompt, setAiQueuedPrompt] = useState<string | undefined>(undefined);
  const [aiQueuedContext, setAiQueuedContext] = useState<string | undefined>(undefined);
  const [aiQueuedMode, setAiQueuedMode] = useState<
    "explain_simple" | "generate_question" | "free_chat" | "case_analysis"
  >("explain_simple");

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_COMPLETED, JSON.stringify(completedTopicIds));
    } catch {
      // Ignore storage errors
    }
  }, [completedTopicIds]);

  const handleToggleComplete = (topicId: string) => {
    setCompletedTopicIds((prev) =>
      prev.includes(topicId) ? prev.filter((id) => id !== topicId) : [...prev, topicId]
    );
  };

  const handleAskAi = (
    prompt: string,
    contextTitle: string,
    mode: "explain_simple" | "generate_question"
  ) => {
    setAiQueuedPrompt(prompt);
    setAiQueuedContext(contextTitle);
    setAiQueuedMode(mode);
    setActiveTab("ai");
  };

  const handleAskAiFromQuiz = (questionText: string, explanationText: string) => {
    setAiQueuedPrompt(
      `Şu sınav sorusunu ve diğer şıkların neden yanlış olduğunu hiç bilmeyen birine en basit şekilde açıklar mısın?\n\nSoru: ${questionText}\nKısa Bilgi: ${explanationText}`
    );
    setAiQueuedContext("Test Sorusu Açıklaması");
    setAiQueuedMode("explain_simple");
    setActiveTab("ai");
  };

  const handleStartUnitQuiz = (unitId: string) => {
    setQuizUnitId(unitId);
    setActiveTab("quiz");
  };

  const handleOpenUnitFromSyllabus = (unitId: string) => {
    setSelectedUnitId(unitId);
    setActiveTab("study");
  };

  const progress = calculateStudyProgress(completedTopicIds);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] pb-24 md:pb-12">
      {/* Ultra-Simple Single Header Bar */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 py-3">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
          {/* Left: Clean Brand Wordmark */}
          <a
            href="#study"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("study");
            }}
            className="text-base sm:text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 font-display"
          >
            SHZ237 Kolay Çalış
          </a>

          {/* Center: Simple Mode Switcher (Desktop) */}
          <nav
            aria-label="Ana Menü"
            className="hidden md:flex items-center gap-1 bg-slate-100 p-1 rounded-xl"
          >
            <button
              onClick={() => setActiveTab("study")}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                activeTab === "study"
                  ? "bg-white text-blue-600 shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Konu Kartları
            </button>
            <button
              onClick={() => setActiveTab("quiz")}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                activeTab === "quiz"
                  ? "bg-white text-blue-600 shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Test Çöz
            </button>
            <button
              onClick={() => setActiveTab("ai")}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                activeTab === "ai"
                  ? "bg-white text-blue-600 shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              AI Hoca
            </button>
            <button
              onClick={() => setActiveTab("syllabus")}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                activeTab === "syllabus"
                  ? "bg-white text-blue-600 shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              PDF & Plan
            </button>
          </nav>

          {/* Right: Compact Progress Indicator */}
          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-1.5 text-xs font-bold text-emerald-900 shrink-0 tabular-nums">
            <span>✓ {progress.completed}/{progress.total} Konu</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="px-4 sm:px-6 pt-5">
        {activeTab === "study" && (
          <StudyView
            selectedUnitId={selectedUnitId}
            onSelectUnit={setSelectedUnitId}
            completedTopicIds={completedTopicIds}
            onToggleComplete={handleToggleComplete}
            onAskAi={handleAskAi}
            onStartUnitQuiz={handleStartUnitQuiz}
          />
        )}

        {activeTab === "quiz" && (
          <QuizView
            initialUnitId={quizUnitId}
            onAskAiForQuestion={handleAskAiFromQuiz}
          />
        )}

        {activeTab === "ai" && (
          <AiTutorView
            initialPrompt={aiQueuedPrompt}
            initialContext={aiQueuedContext}
            initialMode={aiQueuedMode}
            onClearInitialPrompt={() => setAiQueuedPrompt(undefined)}
          />
        )}

        {activeTab === "syllabus" && (
          <SyllabusView onOpenUnit={handleOpenUnitFromSyllabus} />
        )}
      </main>

      {/* Mobile Fixed Bottom Navigation Bar */}
      <nav
        aria-label="Mobil Alt Menü"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 grid grid-cols-4 items-center h-16 px-2"
      >
        <button
          onClick={() => setActiveTab("study")}
          className={`min-h-[48px] flex flex-col items-center justify-center rounded-xl transition-colors cursor-pointer ${
            activeTab === "study" ? "text-blue-600 font-bold" : "text-slate-500"
          }`}
        >
          <BookOpen className="w-5 h-5" />
          <span className="text-[11px] mt-0.5 whitespace-nowrap">Konu Kartı</span>
        </button>

        <button
          onClick={() => setActiveTab("quiz")}
          className={`min-h-[48px] flex flex-col items-center justify-center rounded-xl transition-colors cursor-pointer ${
            activeTab === "quiz" ? "text-blue-600 font-bold" : "text-slate-500"
          }`}
        >
          <CheckSquare className="w-5 h-5" />
          <span className="text-[11px] mt-0.5 whitespace-nowrap">Test Çöz</span>
        </button>

        <button
          onClick={() => setActiveTab("ai")}
          className={`min-h-[48px] flex flex-col items-center justify-center rounded-xl transition-colors cursor-pointer ${
            activeTab === "ai" ? "text-blue-600 font-bold" : "text-slate-500"
          }`}
        >
          <Sparkles className="w-5 h-5" />
          <span className="text-[11px] mt-0.5 whitespace-nowrap">AI Hoca</span>
        </button>

        <button
          onClick={() => setActiveTab("syllabus")}
          className={`min-h-[48px] flex flex-col items-center justify-center rounded-xl transition-colors cursor-pointer ${
            activeTab === "syllabus" ? "text-blue-600 font-bold" : "text-slate-500"
          }`}
        >
          <Calendar className="w-5 h-5" />
          <span className="text-[11px] mt-0.5 whitespace-nowrap">PDF & Plan</span>
        </button>
      </nav>
    </div>
  );
}
