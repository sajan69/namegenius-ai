import { config } from '../config';

export const generateNamePrompt = (description: string, industry: string) => `
Generate ${config.maxNamesPerRequest} unique and creative business names for a ${industry} business with the following description: "${description}".
For each name, provide:
1. The business name
2. A brief explanation of why it works
3. Suggested domain variations (com, io, co)

Format as JSON array with objects containing: name, explanation, domains

Example format:
[
  {
    "name": "Example Name",
    "explanation": "This name works because...",
    "domains": ["examplename.com", "examplename.io"]
  }
]`;
