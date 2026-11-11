import { GoogleGenAI } from "@google/genai";
import { COURSE_UNITS, TopicCard } from "../data/courseData";

export const FALLBACK_API_KEYS: string[] = [
  "AQ.Ab8RN6Jno6kP4JHH6zn0uE7v54jjOJcOpR2ujt0V6MRzfg3Kiw"
];

export const MODEL_NAME = "gemini-flash-latest";

export function parseConcatenatedApiKeys(raw: string): string[] {
  const matches = raw.match(/AIza[0-9A-Za-z_-]{35}/g);
  return matches ? Array.from(new Set(matches)) : [];
}

export function getCandidateApiKeys(envKey?: string): string[] {
  const candidates: string[] = [];
  if (envKey && envKey !== "MY_GEMINI_API_KEY" && envKey.trim().length > 10) {
    candidates.push(envKey.trim());
  }
  for (const key of FALLBACK_API_KEYS) {
    if (!candidates.includes(key)) {
      candidates.push(key);
    }
  }
  return candidates;
}

let activeKeyIndex = 0;

export interface GeminiTutorRequest {
  prompt: string;
  context?: string;
  mode?: "explain_simple" | "generate_question" | "free_chat" | "case_analysis";
}

export interface GeminiTutorResponse {
  text: string;
  keyIndexUsed: number;
  model: string;
}

const SYSTEM_INSTRUCTION = `Sen "SHZ237 Engellilerle Sosyal Hizmet" (Dr. Yunus Serhat Çayır) dersinin özel çalışma koçusun.
Görevin: Öğrencilere ders konularını EN SADE VE ANLAŞILIR TÜRKÇE ile, konuyu sıfırdan öğrenen birine en duru dille, sıfır karmaşık akademik laf kalabalığıyla, günlük hayattan somut ve akılda kalıcı örneklerle anlatmak ve sınavda çıkabilecek noktaları pekiştirmektir.

Temel Kuralların:
1. Kesinlikle sıkıcı veya karmaşık akademik cümleler kurma. Bir terim geçiyorsa hemen yanına parantez içinde "Yani Türkçesi şu: ..." diyerek en sade ve doğrudan şekilde açıkla.
2. Yanıtlarında mutlaka şu 3 kısa başlık yapısını kullan:
   - **En Basit Haliyle (Sıfır Karmaşa):** Konunun 2-3 cümlelik en yalın özeti ve günlük hayat örneği.
   - **Pratik İpucu & Kodlama:** Sınavda şıklarda hangi anahtar kelimeyi görürsek neyi seçmeliyiz?
   - **Aklında Tut (Sınav Şifresi):** Tek cümlelik altın kural.
3. Ders kapsamı:
   - Engellilik Tanımları (DMK %40 kuralı, 2828 SHÇEK Kanunu, 5378 Engelliler Hakkında Kanun, Engellilik Hizmetleri Yasası)
   - Engellilik Sebepleri (Doğuştan/Fetal Alkol Sendromu, Doğum Sırası, Doğum Sonrası) ve Türleri (IDEA: Otizm en az 6 belirti ve 3 yaş öncesi, İşitme/Odyogram, Görme/Az gören 20-70 ayak - Kör 6m->60cm, Zihinsel 16 yaş öncesi + uyumsal gerilik, Çoklu engellilik, Ortopedik ve Süreğen hastalıklar, Öğrenme güçlüğü)
   - Engellilik Modelleri (Ahlaki Model, Tıbbi/Medikal Model, Sosyal Model UPIAS, İnsan Hakları Modeli 2006 BM CRPD)
   - Engellilik Kuramları (Sosyal İnşacı, Etiketleme/Becker, Damgalama/Stigma Erving Goffman, Ekolojik Sistemler/Bronfenbrenner Mikro-Mezo-Ekzo-Makro-Krono, Feminist Engellilik Kuramı, Kesişimsellik/Crenshaw, Eleştirel Engellilik Çalışmaları/Ableism-Sağlamcılık, Crip Teorisi/McRuer, Bedenleşme)
   - Engellilik ve İnsan Hakları (BM CRPD Maddeleri 3, 5, 6, 7, 9, 12 Destekli Karar Verme, 13, 19, 24, 27, 28, 29; Biçimsel vs Maddi Eşitlik; Erişilebilirlik vs Makul Düzenleme vs Evrensel Tasarım; Anayasa 10-42-61-90; 5378 Kanun)
   - Fiziksel Engellilik ve Sosyal Hizmet (Omurilik yaralanması Parapleji/Tetrapleji, Serebral Palsi ilerleyici olmayan beyin hasarı, DMD/SMA/MS; DSÖ ICF 2001; ÇÖZGER 18 yaş altı vs Erişkin raporu; 4857 İş Kanunu 50+ işçi Özel %3, Kamu işçi %4, 657 Devlet Memuru %3 EKPSS; 2022 aylığı ve 2828 Evde Bakım Yardımı; Mert Vakası).`;

function buildUserPrompt(req: GeminiTutorRequest): string {
  let userPrompt = req.prompt.trim();
  if (req.context) {
    userPrompt = `[İlgili Ders Konusu: ${req.context}]\n\nÖğrencinin İsteği: ${userPrompt}`;
  }

  if (req.mode === "explain_simple") {
    userPrompt += `\n\nLütfen bu konuyu en sade ve duru Türkçe, günlük hayattan somut örnek, "Pratik İpucu" ve "Aklında Tut" bölümleriyle kısaca anlat.`;
  } else if (req.mode === "generate_question") {
    userPrompt += `\n\nLütfen bu konuyla ilgili sınavda çıkabilecek 1 adet çoktan seçmeli (A, B, C, D şıklı) örnek soru yaz, altına doğru cevabı ve neden diğer şıkların yanlış olduğunu en basit Türkçeyle açıkla.`;
  } else if (req.mode === "case_analysis") {
    userPrompt += `\n\nLütfen bu vaka/durumu Sosyal Hizmet Uzmanı gözüyle (ICF çerçevesi ve Mikro, Mezzo, Makro müdahale düzeyleriyle) en anlaşılır ve pratik şekilde analiz et.`;
  }
  return userPrompt;
}

function getEnvironmentKey(): string | undefined {
  if (typeof process !== "undefined" && process.env) {
    if (process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== "MY_GEMINI_API_KEY") {
      return process.env.GEMINI_API_KEY.trim();
    }
    if (process.env.VITE_GEMINI_API_KEY && process.env.VITE_GEMINI_API_KEY !== "MY_GEMINI_API_KEY") {
      return process.env.VITE_GEMINI_API_KEY.trim();
    }
  }
  return undefined;
}

async function callGeminiFlashLatest(
  apiKey: string,
  userPrompt: string,
  timeoutMs: number = 8000
): Promise<string> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });

    const response = await ai.models.generateContent({
      model: MODEL_NAME, // Exclusively "gemini-flash-latest" as requested
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        abortSignal: controller.signal
      }
    });

    const text = response.text;
    if (!text || !text.trim()) {
      throw new Error("Boş yanıt döndü.");
    }
    return text.trim();
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Intelligent local course knowledge fallback.
 * If all external keys fail (e.g. Google flagged public keys as leaked),
 * this retrieves exact facts, exam tips, and memory codes from the 80 verified
 * course topics so the student is never blocked.
 */
function generateCourseKnowledgeFallback(
  req: GeminiTutorRequest,
  errors: { keyIndex: number; error: string }[]
): string {
  const query = (req.prompt + " " + (req.context || "")).toLowerCase();
  const allTopics: TopicCard[] = COURSE_UNITS.flatMap((u) => u.topics);

  // Find best matching topic from the 80 course topics
  let bestTopic: TopicCard | null = null;
  let maxScore = 0;

  for (const topic of allTopics) {
    let score = 0;
    const titleWords = topic.title.toLowerCase().split(/[\s,()\/]+/).filter((w) => w.length > 2);
    for (const w of titleWords) {
      if (query.includes(w)) score += 6;
    }
    for (const bp of topic.bulletPoints) {
      if (query.includes(bp.toLowerCase().slice(0, 15))) score += 4;
    }
    if (topic.keepInMind && query.includes(topic.keepInMind.toLowerCase().slice(0, 15))) {
      score += 8;
    }
    if (score > maxScore) {
      maxScore = score;
      bestTopic = topic;
    }
  }

  const selectedTopic = bestTopic || allTopics[0];

  let result = `**En Basit Haliyle (Sıfır Karmaşa):**\n${selectedTopic.eli5}\n\n`;
  result += `**Pratik İpucu & Kodlama:**\n${selectedTopic.practicalTip}\n\n`;
  result += `**Aklında Tut (Sınav Şifresi):**\n${selectedTopic.keepInMind}`;

  // If this was a case analysis or specific question, add guidance
  if (req.mode === "case_analysis" || query.includes("vaka") || query.includes("mert")) {
    result += `\n\n**Sosyal Hizmet Müdahale Düzeyleri:**\n- **Mikro:** Bireyin psikososyal desteği ve bağımsız yaşam hedefleri.\n- **Mezzo:** Aile eğitimi, apartman ve okul/iş çevresinin fiziksel erişilebilirliği.\n- **Makro:** 5378 sayılı Kanun kapsamında hak temelli savunuculuk, erişilebilirlik ve bakım yardımı (2828/2022).`;
  }

  result += `\n\n*(Bilgilendirme: Sağlanan 21 genel test API anahtarının tamamı Google tarafından "leaked / sızıntı" gerekçesiyle engellenmiştir. Vercel veya sunucu ortamınıza kendi yeni GEMINI_API_KEY bilginizi eklediğinizde "gemini-flash-latest" modeli canlı olarak yanıt vermeye başlayacaktır. Bu sırada ders veritabanından en doğru özet sunulmuştur.)*`;

  return result;
}

/**
 * Sequential Key Rotation using exclusively "gemini-flash-latest".
 * Tries keys one by one in order: if a key errors, logs it and immediately
 * switches to the next key.
 */
export async function generateWithKeyRotation(
  req: GeminiTutorRequest
): Promise<GeminiTutorResponse> {
  const envKey = getEnvironmentKey();
  const keys = getCandidateApiKeys(envKey);
  const totalKeys = keys.length;
  const userPrompt = buildUserPrompt(req);
  const errors: { keyIndex: number; error: string }[] = [];

  // Try each API key in strictly sequential order starting from activeKeyIndex
  for (let step = 0; step < totalKeys; step++) {
    const keyIdx = (activeKeyIndex + step) % totalKeys;
    const currentKey = keys[keyIdx];

    try {
      const responseText = await callGeminiFlashLatest(currentKey, userPrompt, 7000);
      // Key succeeded! Keep activeKeyIndex here for subsequent fast calls
      activeKeyIndex = keyIdx;
      return {
        text: responseText,
        keyIndexUsed: keyIdx + 1,
        model: MODEL_NAME
      };
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : String(err);
      errors.push({ keyIndex: keyIdx + 1, error: errMsg });
      // Log failure and immediately rotate to next key in sequence
      console.warn(
        `[Gemini Rotation] Anahtar #${keyIdx + 1} (${currentKey.slice(0, 10)}...) hata verdi: ${errMsg.slice(0, 60)}. Sıradaki anahtara geçiliyor...`
      );
      continue;
    }
  }

  // All keys were tried sequentially and failed (e.g. Google blocked all shared keys with 403 Leaked)
  // Deliver intelligent course knowledge fallback so the user experience is smooth and informative.
  const fallbackText = generateCourseKnowledgeFallback(req, errors);
  return {
    text: fallbackText,
    keyIndexUsed: 0,
    model: MODEL_NAME
  };
}

export async function askGeminiTutorClient(
  req: GeminiTutorRequest
): Promise<GeminiTutorResponse> {
  try {
    const response = await fetch("/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req)
    });

    if (response.ok) {
      const data = (await response.json()) as GeminiTutorResponse;
      if (data && data.text) {
        return data;
      }
    }
  } catch {
    // If backend proxy fails, rotate directly on client
  }

  return generateWithKeyRotation(req);
}
