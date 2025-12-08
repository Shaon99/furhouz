import { PropertyApiItem } from '@/types/propertyApi';

export async function fetchPropertyBySlug(slug: string): Promise<PropertyApiItem | null> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://admin.furhouz.com';
  const url = `${baseUrl}/api/property/${slug}`;

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
      return null;
    }

    const result = await response.json();

    // API may return { data: PropertyApiItem[] } or PropertyApiItem[] directly
    // Extract data property if it exists (similar to apiFetch behavior)
    let data: PropertyApiItem[];
    if (result && typeof result === 'object' && 'data' in result) {
      data = (result as { data: PropertyApiItem[] }).data;
    } else {
      data = result as PropertyApiItem[];
    }

    // API returns an array, return first item
    return data?.[0] || null;
  } catch (error) {
    console.error('Error fetching property:', error);
    return null;
  }
}
