// Server-side API fetch (for use in server components)
export async function apiFetchServer<T = unknown>(endpoint: string): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseUrl) throw new Error("Backend URL is not set");

  const url = endpoint.startsWith("http") ? endpoint : `${baseUrl}${endpoint}`;

  const res = await fetch(url, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    cache: 'no-store', 
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.statusText}`);
  }

  return res.json();
}

