import { generateWithKeyRotation, GeminiTutorRequest } from "../src/lib/geminiRotation";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  try {
    const body: GeminiTutorRequest = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    if (!body || !body.prompt || typeof body.prompt !== "string") {
      res.status(400).json({ error: "Lütfen geçerli bir soru veya konu girin." });
      return;
    }

    const result = await generateWithKeyRotation({
      prompt: body.prompt,
      context: body.context,
      mode: body.mode
    });

    res.status(200).json(result);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Bilinmeyen bir hata oluştu.";
    res.status(500).json({ error: message });
  }
}
