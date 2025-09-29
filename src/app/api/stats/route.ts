import { NextResponse } from "next/server";
import { mockStats } from "@/lib/mockData";

export async function GET() {
  await new Promise((r) => setTimeout(r, 250));
  return NextResponse.json({ summary: mockStats });
}
