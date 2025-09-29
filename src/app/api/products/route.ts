import { NextResponse } from "next/server";
import { mockProducts } from "@/lib/mockData";

// Note: this lives only in the dev server process and will reset on restart.

export async function GET() {
  // small artificial delay for demo
  await new Promise((r) => setTimeout(r, 200));
  return NextResponse.json({ items: mockProducts });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const nextId = Math.max(0, ...mockProducts.map((p) => p.id)) + 1;
    const product = { id: nextId, ...body };
    mockProducts.push(product);
    return NextResponse.json({ item: product }, { status: 201 });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    if (!body?.id)
      return NextResponse.json({ error: "id required" }, { status: 400 });
    const idx = mockProducts.findIndex((p) => p.id === body.id);
    if (idx === -1)
      return NextResponse.json({ error: "not found" }, { status: 404 });
    mockProducts[idx] = { ...mockProducts[idx], ...body };
    return NextResponse.json({ item: mockProducts[idx] });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = Number(searchParams.get("id"));
    if (!id)
      return NextResponse.json({ error: "id required" }, { status: 400 });
    const idx = mockProducts.findIndex((p) => p.id === id);
    if (idx === -1)
      return NextResponse.json({ error: "not found" }, { status: 404 });
    const [removed] = mockProducts.splice(idx, 1);
    return NextResponse.json({ item: removed });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
