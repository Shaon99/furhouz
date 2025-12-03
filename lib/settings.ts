import { Settings } from '@/types/settings';

export async function fetchSettings(): Promise<Settings> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://admin.furhouz.com';
  const url = `${baseUrl}/api/settings`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      // Cache for 1 hour (revalidate after 1 hour)
      next: { revalidate: 3600 }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch settings: ${response.statusText}`);
    }

    const data: Settings = await response.json();
    return data;
  } catch (error) {
    // Optional: Provide better error propagation
    if (error instanceof Error) {
      throw new Error(`fetchSettings error: ${error.message}`);
    }
    throw new Error('fetchSettings: Unknown error occurred');
  }
}