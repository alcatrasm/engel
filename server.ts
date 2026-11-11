import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { generateWithKeyRotation, GeminiTutorRequest } from "./src/lib/geminiRotation";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json({ limit: "2mb" }));

  app.post("/api/gemini", async (req, res) => {
    try {
      const body = req.body as GeminiTutorRequest;
      if (!body || !body.prompt || typeof body.prompt !== "string" || !body.prompt.trim()) {
        res.status(400).json({ error: "Lütfen bir soru veya konu yazın." });
        return;
      }

      const result = await generateWithKeyRotation({
        prompt: body.prompt,
        context: body.context,
        mode: body.mode
      });

      res.json(result);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Yapay zeka yanıt verirken hata oluştu.";
      res.status(500).json({ error: message });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
