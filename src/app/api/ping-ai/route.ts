import { generateText } from 'ai';
import { gateway } from '@ai-sdk/gateway';

export const runtime = 'nodejs';

export async function GET() {
  const { text } = await generateText({
    model: gateway('anthropic/claude-sonnet-4-6'),
    prompt: 'Say "Virtual Builder is online." in one sentence.',
  });

  return Response.json({ message: text });
}
