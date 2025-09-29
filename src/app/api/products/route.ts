import { NextResponse } from "next/server";
import { mockProducts } from "@/lib/mockData";

export async function GET() {
  // small artificial delay for demo
  await new Promise((r) => setTimeout(r, 200));
  return NextResponse.json({ items: mockProducts });
}
