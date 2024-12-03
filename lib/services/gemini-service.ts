import { GoogleGenerativeAI } from '@google/generative-ai';
import { config } from '../config';
import { generateNamePrompt } from '../prompts/name-generator';
import { BusinessName } from '../types/business-names';

export class GeminiService {
  private genAI: GoogleGenerativeAI;
  private model: any;

  constructor() {
    this.genAI = new GoogleGenerativeAI(config.gemini.apiKey);
    this.model = this.genAI.getGenerativeModel({ model: config.gemini.model });
  }

  public async generateNames(description: string, industry: string): Promise<BusinessName[]> {
    try {
      const prompt = generateNamePrompt(description, industry);
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      return this.parseResponse(text);
    } catch (error) {
      console.error('Gemini API error:', error);
      throw new Error('Failed to generate business names');
    }
  }

  private parseResponse(text: string): BusinessName[] {
    try {
      const parsed = JSON.parse(text);
      if (!Array.isArray(parsed)) {
        throw new Error('Invalid response format');
      }
      return parsed;
    } catch (error) {
      console.error('Parse error:', error);
      throw new Error('Failed to parse Gemini response');
    }
  }
}
