class HttpError extends Error {
    status: number;
    body?: any;
    retryAfter?: number;
    constructor(message: string, status: number, body?: any, retryAfter?: number) {
      super(message);
      this.name = "HttpError";
      this.status = status;
      this.body = body;
      this.retryAfter = retryAfter;
    }
  }
  
  function readTokenFromStorage(): string | null {
    if (typeof window === "undefined") return null;
    try {
      const raw = localStorage.getItem("auth");
      const parsed = raw ? JSON.parse(raw) : null;
      return parsed?.state?.token ?? null;
    } catch {
      return null;
    }
  }
  
  export async function apiFetch<T = any>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    if (!baseUrl) throw new Error("Backend URL is not set");
  
    const url = endpoint.startsWith("http") ? endpoint : `${baseUrl}${endpoint}`;
  
    const headers = new Headers(options.headers ?? {});
    const bodyIsFormData =
      typeof FormData !== "undefined" && options.body instanceof FormData;
  
    // Accept header is fine to keep for both JSON & multipart
    if (!headers.has("Accept")) headers.set("Accept", "application/json");
  
    // IMPORTANT: don't set JSON content-type for FormData
    if (bodyIsFormData) {
      // remove any preexisting content-type (let browser set boundary)
      if (headers.has("Content-Type")) headers.delete("Content-Type");
    } else if (options.body && !headers.has("Content-Type")) {
      headers.set("Content-Type", "application/json");
    }
  
    const token = readTokenFromStorage();
    if (token && !headers.has("Authorization")) {
      headers.set("Authorization", `Bearer ${token}`);
    }
  
    const res = await fetch(url, { ...options, headers });
  
    const contentType = res.headers.get("content-type") || "";
    const isJson = contentType.includes("application/json");
  
    const rawText = await res.text();
    let parsed: any = null;
    if (isJson) {
      try { parsed = rawText ? JSON.parse(rawText) : null; } catch { parsed = null; }
    }
  
    if (!res.ok) {
      if (res.status === 401 && typeof window !== "undefined") {
        try {
          const raw = localStorage.getItem("auth");
          if (raw) {
            const state = JSON.parse(raw);
            if (state?.state) {
              state.state.token = null;
              state.state.user = null;
              localStorage.setItem("auth", JSON.stringify(state));
            }
          }
        } catch {}
      }
  
      if (res.status === 429) {
        const retryAfterHeader = res.headers.get("retry-after");
        const retryAfter = retryAfterHeader ? Number(retryAfterHeader) : undefined;
        const message =
          (parsed && (parsed.message || parsed.error)) ||
          "Too many requests. Please try again shortly.";
        throw new HttpError(
          retryAfter ? `${message} Try again in ${retryAfter}s.` : message,
          429,
          parsed ?? rawText,
          retryAfter
        );
      }
  
      let message =
        (parsed && (parsed.message || parsed.error)) ||
        res.statusText ||
        "Request failed";
  
      if (!isJson && rawText) message = `${message} (HTTP ${res.status})`;
      throw new HttpError(message, res.status, parsed ?? rawText);
    }
  
    return (isJson ? (parsed as T) : (rawText as unknown as T));
  }
  