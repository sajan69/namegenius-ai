import { config } from '../config';
export const generateNamePrompt = (description: string, industry: string) => `
You are an expert business naming consultant. Your task is to generate ${config.maxNamesPerRequest} unique and creative business names.

Constraints:
- Business Type: ${industry}
- Business Description: "${description}"
- Response MUST be a valid, parseable JSON array
- Each name object must include: name, explanation, domains

Strictly follow this JSON schema:
[
  {
    "name": "string",
    "explanation": "string",
    "domains": ["string", "string"]
  }
]

Example:
[
  {
    "name": "TechNova Solutions",
    "explanation": "Combines 'technology' and 'nova' to suggest innovative, bright beginnings in tech",
    "domains": ["technova.com", "technova.io"]
  }
]

Your response:`;