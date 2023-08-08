import { NextResponse, userAgent } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { device } = userAgent(request);

  if (device.type === "mobile") {
    return NextResponse.redirect(`${request.nextUrl.origin}/mobile`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login"],
};
