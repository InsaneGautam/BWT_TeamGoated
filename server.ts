import 'dotenv/config';
import express from 'express';
import { createServer as createViteServer } from 'vite';
import { generateMockData, analyzeData } from './src/services/analysisService';
import { GoogleGenAI } from "@google/genai";

const app = express();
const PORT = 3000;

// Initialize Gemini
// Note: In a real app, handle missing key gracefully. Here we assume it's injected.
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Middleware to parse JSON
app.use(express.json());

// In-memory store for simulation
let activityLogs = generateMockData(500); // Generate 500 initial logs
let analysisResults = analyzeData(activityLogs);

// API Routes
app.get('/api/logs', (req, res) => {
  res.json(activityLogs);
});

app.get('/api/analysis', (req, res) => {
  res.json(analysisResults);
});

app.post('/api/refresh', (req, res) => {
  activityLogs = generateMockData(500);
  analysisResults = analyzeData(activityLogs);
  res.json({ message: 'Data refreshed', logs: activityLogs, analysis: analysisResults });
});

app.post('/api/analyze-user/:userId', async (req, res) => {
  const { userId } = req.params;
  const userStats = analysisResults.users.find(u => u.user_id === userId);
  
  if (!userStats) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Get user logs
  const userLogs = activityLogs.filter(l => l.user_id === userId).slice(0, 20); // Limit to 20 for prompt size

  try {
    const prompt = `
      Analyze the following user activity logs for insider threat detection.
      User: ${userStats.username} (${userStats.role})
      Risk Score: ${userStats.risk_score}
      Anomalies Detected: ${userStats.anomalies.join(', ')}

      Logs:
      ${JSON.stringify(userLogs.map(l => ({
        time: l.timestamp,
        action: l.action,
        resource: l.resource,
        data_mb: l.data_transferred_mb
      })), null, 2)}

      Provide a concise, professional security assessment. 
      1. Summarize the suspicious behavior.
      2. Assess the intent (malicious vs negligent).
      3. Recommend immediate action.
      Keep it under 150 words.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    res.json({ analysis: response.text });
  } catch (error) {
    console.error('AI Analysis failed:', error);
    res.status(500).json({ error: 'Failed to generate AI analysis' });
  }
});

// Vite middleware setup
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve static files from dist (handled by build process usually, 
    // but for this container setup, we focus on dev mode mostly or standard static serving)
    app.use(express.static('dist'));
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
