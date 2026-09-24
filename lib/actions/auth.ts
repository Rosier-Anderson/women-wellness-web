const API_BASE = process.env.BASE_API_URI || "http://localhost:4000/api/v1";

export class AuthApi {
  private baseUrl = `${API_BASE}/users`;
  private async request<T>(
    endpoint: string,
    body?: object,
    method = "POST",
  ): Promise<T> {
    const res = await fetch(`${this.baseUrl}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : undefined,
    });
    if (!res.ok) {
      const error = await res.json().catch(() => ({
        message: "Something went wrong!",
      }));
      throw new Error(error.message || `Request failed: ${res.status}`);
    }
    return res.json();
  }
  forgotPassword(email: string) {
    return this.request<{ message: string }>("/forgotPassword", { email });
  }
}
