import { NextResponse } from "next/server";
import { mockTestimonials } from "@/lib/mockData";

export async function GET() {
  // Small artificial delay for demo
  await new Promise((r) => setTimeout(r, 160));
  return NextResponse.json({ items: mockTestimonials });
}
