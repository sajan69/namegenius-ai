import { GoogleGenerativeAI } from '@google/generative-ai';
import { config } from './config';

const genAI = new GoogleGenerativeAI(config.gemini.apiKey);

export async function generateBusinessNames(description: string, industry: string) {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

  const prompt = `Generate 5 unique and creative business names for a ${industry} business with the following description: "${description}". 
    For each name, provide:
    1. The business name
    2. A brief explanation of why it works
    3. Suggested domain variations (com, io, co)
    
    Return the response in this exact JSON format:
    [
      {
        "name": "Business Name",
        "explanation": "Why this name works...",
        "domains": ["businessname.com", "businessname.io", "businessname.co"]
      }
    ]`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    try {
      const parsed = JSON.parse(text);
      if (!Array.isArray(parsed)) {
        throw new Error('Invalid response format');
      }
      return parsed;
    } catch (error) {
      console.error('Failed to parse Gemini response:', text);
      throw new Error('Failed to parse Gemini response');
    }
  } catch (error) {
    console.error('Gemini API error:', error);
    throw error;
  }
}
