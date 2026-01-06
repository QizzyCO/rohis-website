
import { GoogleGenAI } from "@google/genai";

/**
 * Menghasilkan respon spiritual menggunakan model Gemini 3 Flash.
 */
export const getSpiritualResponse = async (prompt: string) => {
  // Mencoba mendeteksi API_KEY dari berbagai kemungkinan lokasi environment variable
  const apiKey = (typeof process !== 'undefined' && process.env?.API_KEY) || 
                 (window as any).API_KEY || 
                 (window as any).process?.env?.API_KEY;

  if (!apiKey) {
    console.error("AI Configuration Error: Kunci API tidak ditemukan di environment.");
    return "Maaf, sistem 'Noor' belum terhubung dengan kunci API yang valid di Vercel. Mohon periksa kembali konfigurasi Environment Variables.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: apiKey as string });

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `Anda adalah "Noor", asisten spiritual yang cerdas dan futuristik untuk ROHIS SMAN Colomadu (SMANC). 
        Tujuan Anda adalah memberikan jawaban Islami yang menyejukkan, moderat, dan relevan dengan gaya hidup pemuda masa kini. 
        Gunakan Bahasa Indonesia yang santun namun modern. Jangan memberikan fatwa hukum yang berat, melainkan berikan perspektif hikmah. 
        Jika ada pertanyaan yang sangat sensitif, arahkan untuk berdiskusi dengan guru agama di SMANC.`,
        temperature: 0.8,
      },
    });

    const result = response.text;
    if (!result) throw new Error("Respon kosong");
    return result;

  } catch (error: any) {
    console.error("Gemini API Error:", error);
    
    if (error?.message?.includes("fetch")) {
      return "Koneksi internet terputus. Saya kesulitan menjangkau server saat ini.";
    }
    
    if (error?.message?.includes("API key") || error?.message?.includes("403")) {
      return "Terjadi masalah otorisasi. Pastikan API_KEY di Vercel sudah benar dan aktif.";
    }

    return "Cahaya panduan saya sedang mengalami gangguan teknis. Mohon ulangi pertanyaan Anda dalam beberapa saat.";
  }
};
