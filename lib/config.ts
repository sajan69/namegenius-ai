export const config = {
  gemini: {
    apiKey: process.env.GEMINI_API_KEY || 'AIzaSyCYs9M6BotN4znnd0BS2X10pRpTXPgS0FU',
    model: 'gemini-pro',
  },
  maxNamesPerRequest: 5,
} as const;
