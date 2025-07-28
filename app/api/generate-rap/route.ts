// Next.js API Route using Google Gemini API (Free)
import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI with your free API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { lyrics, tone, style } = body;
    
    // Validate required fields
    if (!lyrics || !lyrics.trim()) {
      return NextResponse.json(
        {
          success: false,
          error: 'Starting lyrics are required'
        },
        { status: 400 }
      );
    }
    
    // Get the free Gemini model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = `You are a rap lyricist. The user has provided starting lyrics and wants you to continue the rap in their chosen style and tone.

Starting lyrics: "${lyrics}"

Style: ${style || 'modern rap'}
Tone: ${tone || 'confident'}

Instructions:
- Continue the rap from where the user left off
- Match the rhythm and flow of their starting lyrics
- Keep the same rhyme scheme if possible
- Add 8-12 more lines that flow naturally
- Make it authentic and creative
- Keep it clean and positive
- Don't repeat the starting lyrics, just continue from them

Generate only the additional lyrics that continue from their start:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const generatedLyrics = response.text();

    return NextResponse.json({
      success: true,
      originalLyrics: lyrics,
      generatedLyrics: generatedLyrics,
      completeLyrics: lyrics + '\n' + generatedLyrics,
      tone: tone,
      style: style,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error generating rap continuation:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to generate rap lyrics continuation',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ 
    status: 'OK', 
    service: 'Rap Lyrics Continuation Generator',
    model: 'Google Gemini 1.5 Flash (Free)',
    endpoint: '/api/generate-rap',
    usage: {
      method: 'POST',
      body: {
        lyrics: 'Your starting rap lyrics here...',
        tone: 'confident | aggressive | chill | emotional | playful',
        style: 'trap | boom-bap | drill | melodic | old-school'
      }
    }
  });
}

// Installation command:
// npm install @google/generative-ai
// Get your free API key from: https://aistudio.google.com/
// Add to your .env.local: GEMINI_API_KEY=your_free_api_key_here