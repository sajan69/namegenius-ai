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
      // Trim whitespace and remove any markdown code block indicators
      const cleanedText = text.trim().replace(/^```json\n|```$/g, '');
  
      const parsed = JSON.parse(cleanedText);
      
      if (!Array.isArray(parsed)) {
        throw new Error('Response is not a JSON array');
      }
  
      // Validate each business name object
      parsed.forEach(item => {
        if (!item.name || !item.explanation || !Array.isArray(item.domains)) {
          throw new Error('Invalid business name object structure');
        }
      });
  
      return parsed;
    } catch (error) {
      console.error('Full response text:', text);
      console.error('Parse error:', error);
      throw new Error(`Failed to parse Gemini response: ${error.message}`);
    }
  }
}
