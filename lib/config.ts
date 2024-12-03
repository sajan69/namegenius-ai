export const config = {
  gemini: {
    apiKey: process.env.GEMINI_API_KEY ,
    model: 'gemini-pro',
  },
  maxNamesPerRequest: 5,
} as const;
