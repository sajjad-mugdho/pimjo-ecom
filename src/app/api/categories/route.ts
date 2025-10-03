import { NextResponse } from "next/server";
import { mockCategories } from "@/lib/mockData";

export async function GET() {
  // Small artificial delay for demo
  await new Promise((r) => setTimeout(r, 180));
  return NextResponse.json({ items: mockCategories });
}
