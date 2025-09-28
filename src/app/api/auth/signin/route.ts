import { NextResponse } from "next/server";

type Body = { email?: string; password?: string };

const ALLOWED = { email: "admin@example.com", password: "admin123" };

export async function POST(request: Request) {
  try {
    const body: Body = await request.json();
    const { email, password } = body || {};

    if (email === ALLOWED.email && password === ALLOWED.password) {
      // create a simple token (not JWT) — in real apps use secure tokens
      const token = Buffer.from(`${email}:${Date.now()}`).toString("base64");

      const res = NextResponse.json({ ok: true });
      // set httpOnly cookie valid for 1 hour
      res.cookies.set("token", token, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60,
        sameSite: "lax",
      });
      return res;
    }

    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
