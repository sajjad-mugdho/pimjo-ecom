export async function apiGet<T>(path: string): Promise<T> {
  const res = await fetch(path, { cache: "no-store" });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API ${path} failed: ${res.status} ${text}`);
  }
  return (await res.json()) as T;
}
