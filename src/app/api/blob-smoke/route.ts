import { put } from '@vercel/blob';

export const runtime = 'nodejs';

export async function GET() {
  const blob = await put('smoke-test.txt', 'Virtual Builder blob smoke test', {
    access: 'public',
    addRandomSuffix: false,
  });

  return Response.json({ url: blob.url });
}
