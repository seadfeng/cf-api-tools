import type { NextRequest } from 'next/server';
export const runtime = 'edge'

export async function POST(request: NextRequest) {
  const body = await request.json() as {
    content: string;
  };
  return new Response(JSON.stringify(body))
}
