import { NextRequest, NextResponse } from 'next/server';
import { GeminiService } from '@/lib/services/gemini-service';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const { description, industry } = await request.json();

    if (!description || !industry) {
      return NextResponse.json({ error: 'Description and industry are required' }, { status: 400 });
    }

    const geminiService = GeminiService.getInstance();
    const names = await geminiService.generateNames(description, industry);

    return NextResponse.json({ names });
  } catch (error) {
    console.error('Generation error:', error);
    return NextResponse.json(
      {
        error: 'Failed to generate names',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
