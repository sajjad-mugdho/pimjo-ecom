import { NextRequest, NextResponse } from "next/server";

const ALLOWED_EMAIL = "admin@example.com";

function base64Decode(input: string) {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (typeof atob === "function") return atob(input);
  } catch {
    // ignore
  }
  try {
    // Node buffer fallback (may not be available in edge runtime)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return Buffer.from(input, "base64").toString("utf8");
  } catch {
    return "";
  }
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // protect /dashboard and any nested routes
  if (pathname.startsWith("/dashboard")) {
    const token = req.cookies.get("token")?.value;

    if (!token) {
      const signInUrl = new URL("/sign-in", req.url);
      signInUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(signInUrl);
    }

    const decoded = base64Decode(token || "");
    if (!decoded.startsWith(ALLOWED_EMAIL + ":")) {
      const signInUrl = new URL("/sign-in", req.url);
      signInUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(signInUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
