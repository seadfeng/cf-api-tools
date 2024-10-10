import { marked } from 'marked';
import type { NextRequest } from 'next/server';
export const runtime = 'edge'

export async function POST(request: NextRequest) {
  const { content } = await request.json() as {
    content: string;
  };
  const html = await marked(content);
  return new Response(html, {
    headers: { 'Content-Type': 'text/html' },
  });
}
