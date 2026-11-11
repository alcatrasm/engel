import React, { useState, useEffect, useRef } from "react";
import { Sparkles, Send, RotateCcw } from "lucide-react";
import { askGeminiTutorClient } from "../lib/geminiRotation";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  contextTitle?: string;
}

interface AiTutorViewProps {
  initialPrompt?: string;
  initialContext?: string;
  initialMode?: "explain_simple" | "generate_question" | "free_chat" | "case_analysis";
  onClearInitialPrompt: () => void;
}

const QUICK_PROMPTS: {
  label: string;
  prompt: string;
  context: string;
  mode: "explain_simple" | "generate_question" | "case_analysis";
}[] = [
  {
    label: "💡 Modeller vs Kuramlar",
    prompt: "Ahlaki, Tıbbi, Sosyal ve İnsan Hakları Modelleri ile Damgalama, Ekolojik Sistemler ve Crip Teorisi arasındaki farkları hiç bilmeyen birine en basit örneklerle anlatır mısın?",
    context: "Modeller ve Kuramlar",
    mode: "explain_simple"
  },
  {
    label: "⚖️ Makul Düzenleme Farkı",
    prompt: "Biçimsel eşitlik, maddi eşitlik, erişilebilirlik, evrensel tasarım ve makul düzenleme kavramlarını günlük hayattan tek bir okul örneğiyle en duru ve sade dille anlatır mısın?",
    context: "Engellilik ve İnsan Hakları",
    mode: "explain_simple"
  },
  {
    label: "🔢 Tüm Sayılar & Kanunlar",
    prompt: "Derste geçen tüm önemli sayıları (%40 DMK, 3 yaş 6 belirti Otizm, 16 yaş Zihinsel, 6m-60cm Kör, 4857 %3-%4 kota, 2022, 2828, 5378 kanunları, ÇÖZGER) tek tabloda sınav şifresi gibi özetler misin?",
    context: "Sayı ve Kanun Özeti",
    mode: "explain_simple"
  },
  {
    label: "🦽 Mert Vakasını Çöz",
    prompt: "24 yaşında motosiklet kazası sonucu parapleji olan, asansörsüz 3. katta yaşayan ve babasının kuruma yatırmak istediği Mert vakasını ICF çerçevesinde ve Mikro-Mezzo-Makro düzeylerde çöz.",
    context: "Mert Vakası",
    mode: "case_analysis"
  },
  {
    label: "🎯 Sürpriz Sınav Sorusu",
    prompt: "SHZ237 Engellilerle Sosyal Hizmet dersinin tüm konularından vize/finalde çıkması en muhtemel 1 adet çoktan seçmeli soru yaz ve cevabını açıkla.",
    context: "Sınav Hazırlık",
    mode: "generate_question"
  }
];

export const AiTutorView: React.FC<AiTutorViewProps> = ({
  initialPrompt,
  initialContext,
  initialMode = "explain_simple",
  onClearInitialPrompt
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Merhaba! Ben SHZ237 Engellilerle Sosyal Hizmet dersinin yapay zeka çalışma koçuyum.\n\nÜstteki hazır butonlardan birine tıklayabilir veya aklına takılan herhangi bir konuyu aşağıya yazabilirsin. Sana **en sade, anlaşılır Türkçe ile** ve sınav şifreleriyle yardımcı olacağım!"
    }
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState<string | null>(null);
  const lastTriggeredPromptRef = useRef<string | null>(null);

  const renderFormattedContent = (text: string) => {
    const cleaned = text.replace(/^#{1,4}\s*/gm, "");
    const parts = cleaned.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-bold text-slate-950">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  const sendToGemini = async (
    promptText: string,
    contextTitle?: string,
    mode: "explain_simple" | "generate_question" | "free_chat" | "case_analysis" = "free_chat"
  ) => {
    const trimmed = promptText.trim();
    if (!trimmed || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmed,
      contextTitle
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);
    setErrorText(null);

    try {
      const data = await askGeminiTutorClient({
        prompt: trimmed,
        context: contextTitle,
        mode
      });

      const assistantMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        role: "assistant",
        content: data.text || "Yanıt alındı ancak içerik boş."
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Bağlantı sırasında bir hata oluştu.";
      setErrorText(message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (initialPrompt && initialPrompt !== lastTriggeredPromptRef.current) {
      lastTriggeredPromptRef.current = initialPrompt;
      sendToGemini(initialPrompt, initialContext, initialMode);
      onClearInitialPrompt();
    }
  }, [initialPrompt, initialContext, initialMode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendToGemini(input, undefined, "explain_simple");
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {/* Quick Study Buttons */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-600">
            Tek Tıkla Hazır Konu Özeti & Soru İste:
          </span>
          <button
            onClick={() => {
              setMessages([messages[0]]);
              setErrorText(null);
            }}
            className="text-xs font-medium text-slate-500 hover:text-slate-900 flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Temizle</span>
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {QUICK_PROMPTS.map((item, idx) => (
            <button
              key={idx}
              disabled={isLoading}
              onClick={() => sendToGemini(item.prompt, item.context, item.mode)}
              className="min-h-[38px] px-3 py-1.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 rounded-xl transition-colors cursor-pointer disabled:opacity-50"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Single-Column Chat Card */}
      <div className="bg-white border border-slate-200 rounded-2xl flex flex-col overflow-hidden shadow-2xs">
        <div className="p-5 space-y-4 max-h-[480px] min-h-[320px] overflow-y-auto bg-slate-50/40">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${
                msg.role === "user" ? "items-end" : "items-start"
              }`}
            >
              {msg.contextTitle && (
                <span className="text-[11px] text-slate-500 mb-1 px-1">
                  {msg.contextTitle}
                </span>
              )}
              <div
                className={`max-w-xl rounded-2xl p-4 text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-white border border-slate-200 text-slate-800"
                }`}
              >
                {msg.role === "assistant"
                  ? renderFormattedContent(msg.content)
                  : msg.content}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="bg-white border border-slate-200 rounded-2xl p-4 text-sm text-slate-600 flex items-center gap-2.5 max-w-md">
              <Sparkles className="w-4 h-4 text-blue-600 animate-spin shrink-0" />
              <span>En basit Türkçe ve sınav şifresiyle hazırlanıyor...</span>
            </div>
          )}

          {errorText && (
            <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 text-xs sm:text-sm text-rose-900">
              {errorText}
            </div>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-3.5 bg-white border-t border-slate-200 flex items-center gap-2"
        >
          <input
            type="text"
            aria-label="Yapay Zeka Hoca'ya sorunuzu yazın"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Anlamadığın bir konuyu yaz (Örn: Crip teorisi ne demek?)..."
            className="flex-1 min-h-[44px] px-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="min-h-[44px] px-5 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 rounded-xl flex items-center gap-1.5 transition-colors shrink-0 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Sor</span>
          </button>
        </form>
      </div>
    </div>
  );
};
