import { GoogleGenAI } from "@google/genai";

export const FALLBACK_API_KEYS: string[] = [
  "AIzaSyAaGCgVqISrQc7EzF8cZOBXQsQRrgfREK0",
  "AIzaSyDGwt3_N1vu0uArQaADqN8nSR4xKJQYdg0",
  "AIzaSyBktUIGYXogliSysyg3vZkKpw-N0lUCoCo",
  "AIzaSyDG4dn-JBmuD6yqUvBQCOr9jtHFHiVP_L0",
  "AIzaSyA-iZfPpcUVinQ3tlMrXW9HhBhXCyqyW4I",
  "AIzaSyDfUd_iP7yoeEeQzdc_30Nfn6dXhn4Pm9U",
  "AIzaSyBl9mVsi8MCoklKJS365D1q4p5qCjyb190",
  "AIzaSyCPiE2mW5bWAK8V3DYClJxdeHvkrvAii9A",
  "AIzaSyBh4e5K96vnhUytvA78kMbGcOXSvI8dNo4",
  "AIzaSyCtNTb4ud0kB5bwR5CkeVjRs38WwVXJHlU",
  "AIzaSyA2XGpRSdv6rvuhfajtwS74yU1GkkwbEhc",
  "AIzaSyCllV8YanCkAJ5SYXCgAdpMu9VKsIS5xzI",
  "AIzaSyCuBZ84EnJOVrbW0JC3eoCmDVhhFM6Zjns",
  "AIzaSyDsYz4y-aU3J4SQfgK6obBZuIS522Cq35A",
  "AIzaSyD9hyBA8aH-WqfGVDOQRmpR19sKRKVK6O4",
  "AIzaSyBt_leNcmJbQbxJZxkrT57BvGBhnLPc6Bw",
  "AIzaSyBxkKib-9BmvYpdMlRrkZgVp5ccOtnaIek",
  "AIzaSyDFIt0dX1XbBjgpxsZ434QTOWwptbS-aGA",
  "AIzaSyCz1LagzC5ZBRm-VxTclWDB_2p-1L90yao",
  "AIzaSyAmMPoIyhKjJJGxBP_MXr4tL_FIv7Bhi-0",
  "AIzaSyDm0braU7aFyip-VQBVfCQfv-n9fkxdmRg"
];

export const MODEL_NAME = "gemini-flash-latest";
const CANDIDATE_MODELS = [
  "gemini-flash-latest",
  "gemini-3.1-flash-lite",
  "gemini-3-flash-preview"
];

export function parseConcatenatedApiKeys(raw: string): string[] {
  const matches = raw.match(/AIza[0-9A-Za-z_-]{35}/g);
  return matches ? Array.from(new Set(matches)) : [];
}

export function getCandidateApiKeys(envKey?: string): string[] {
  const candidates: string[] = [...FALLBACK_API_KEYS];
  if (envKey && envKey !== "MY_GEMINI_API_KEY" && envKey.trim().length > 10) {
    if (!candidates.includes(envKey.trim())) {
      candidates.push(envKey.trim());
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

async function tryKeyAndModel(
  apiKey: string,
  keyIndex: number,
  modelName: string,
  userPrompt: string,
  timeoutMs: number
): Promise<GeminiTutorResponse> {
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
      model: modelName,
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        abortSignal: controller.signal
      }
    });

    const text = response.text;
    if (!text || !text.trim()) {
      throw new Error("Empty response");
    }

    return {
      text: text.trim(),
      keyIndexUsed: keyIndex + 1,
      model: MODEL_NAME
    };
  } finally {
    clearTimeout(timer);
  }
}

export async function generateWithKeyRotation(
  req: GeminiTutorRequest
): Promise<GeminiTutorResponse> {
  const keys = getCandidateApiKeys(
    typeof process !== "undefined" && process.env ? process.env.GEMINI_API_KEY : undefined
  );
  const totalKeys = keys.length;
  const userPrompt = buildUserPrompt(req);
  const errors: string[] = [];

  // Step through the 21 keys in order starting from activeKeyIndex.
  // To prevent 503 high-demand hangs on gemini-flash-latest from stalling the user,
  // each key races gemini-flash-latest and flash-lite with a 5.5s window, and we walk
  // sequentially across windows of keys until one succeeds.
  const WINDOW_SIZE = 3;
  for (let offset = 0; offset < totalKeys; offset += WINDOW_SIZE) {
    const windowPromises: Promise<GeminiTutorResponse>[] = [];

    for (let w = 0; w < WINDOW_SIZE && offset + w < totalKeys; w++) {
      const idx = (activeKeyIndex + offset + w) % totalKeys;
      const key = keys[idx];

      for (const candidateModel of CANDIDATE_MODELS) {
        windowPromises.push(
          tryKeyAndModel(key, idx, candidateModel, userPrompt, 5500)
        );
      }
    }

    try {
      const winner = await Promise.any(windowPromises);
      activeKeyIndex = winner.keyIndexUsed - 1;
      return winner;
    } catch (aggErr: unknown) {
      if (aggErr instanceof AggregateError && Array.isArray(aggErr.errors)) {
        for (const e of aggErr.errors.slice(0, 2)) {
          errors.push(e instanceof Error ? e.message.slice(0, 80) : String(e));
        }
      }
    }
  }

  throw new Error(
    `Tüm API anahtarları denendi ancak yanıt alınamadı. Detay: ${errors.slice(0, 2).join(" | ")}`
  );
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
    // Fallback to direct client-side key rotation below
  }

  return generateWithKeyRotation(req);
}
