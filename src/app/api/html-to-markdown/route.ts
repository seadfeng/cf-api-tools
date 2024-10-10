import type { NextRequest } from 'next/server';
import showdown from 'showdown';
export const runtime = 'edge';

/**
 * HTML to Markdown with showdown 
 * 
 * @returns 
 */
export async function POST(request: NextRequest) {
  const { content } = await request.json() as {
    content: string;
  };
  const converter = new showdown.Converter();
  const markdown = converter.makeMarkdown(content);
  return new Response(markdown, {
    headers: { 'Content-Type': 'text/html' },
  });
}
