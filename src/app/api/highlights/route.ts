import { NextResponse } from "next/server";
import { mockHighlightProducts } from "@/lib/mockData";

export async function GET() {
  // Small artificial delay for demo
  await new Promise((r) => setTimeout(r, 200));
  return NextResponse.json({ items: mockHighlightProducts });
}
