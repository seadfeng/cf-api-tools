
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  // Create a new response with updated headers
  const response = NextResponse.next();
  const apikey = req.headers.get("x-api-key");

  // Access the environment variable
  const expectedApiKey = process.env.NEXT_API_KEY;

  console.log("expectedApiKey", expectedApiKey);
  if (apikey !== expectedApiKey) return new NextResponse('Access Denied', { status: 403 });
  response.headers.set('x-request-url', req.url);

  return response;
}

export const config = {
  matcher: ["/(.*)"],
};
