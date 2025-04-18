import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { CookieKey } from "@/types";
import { APP_CONFIG } from "./config/app";

/**
 * Middleware function to handle authentication for admin routes.
 * It checks for the presence of an access token in the request cookies.
 * If the access token is missing, it redirects the user to the login page.
 * Otherwise, it allows the request to proceed to the next handler.
 *
 * Working in combination with the guardContent server action, this middleware prevents the unauthenticated users from accessing the admin routes by other means, e.g. by using the browser's back/forward buttons.
 *
 * @param request - The incoming Next.js request object.
 * @returns A Next.js response object either redirecting to login or proceeding to the next middleware/handler.
 */

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get(CookieKey.AccessToken)?.value;
  console.log("middleware runs", accessToken, request.url, {
    nextUrl: request.nextUrl,
    referrer: request.referrer,
  });
  if (!accessToken) {
    console.log("redirecting");

    return NextResponse.redirect(
      new URL(APP_CONFIG.routes.anonymous.login, request.url)
    );
  }
  console.log("falling through");

  return NextResponse.next();
}

// 🔒 Run middleware only on /admin routes
export const config = {
  matcher: ["/admin/:path*"],
};
