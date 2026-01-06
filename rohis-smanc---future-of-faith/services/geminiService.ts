
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getSpiritualResponse = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are "Noor", a friendly, knowledgeable, and futuristic spiritual assistant for an Islamic organization called ROHIS SMANC. 
        Your goal is to provide inspiring, accurate, and moderate Islamic guidance. 
        Always be respectful, use modern language, and if asked about complex theological matters, suggest consulting a local scholar while providing general wisdom. 
        Keep responses concise and helpful. You are part of a high-tech, forward-thinking community platform.`,
        temperature: 0.7,
      },
    });
    return response.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The light is currently flickering. Please try again in a moment.";
  }
};
