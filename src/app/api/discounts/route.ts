import { NextResponse } from "next/server";
import { mockDiscountCards } from "@/lib/mockData";

export async function GET() {
  // Small artificial delay for demo
  await new Promise((r) => setTimeout(r, 170));
  return NextResponse.json({ items: mockDiscountCards });
}
