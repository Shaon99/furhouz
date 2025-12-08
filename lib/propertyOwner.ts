import { PropertyOwnerDetails } from '@/types/propertyOwner';

export async function fetchPropertyOwnerDetails(): Promise<PropertyOwnerDetails | null> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://admin.furhouz.com';
  const url = `${baseUrl}/api/property-owner-details`;

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

    // API may return { data: PropertyOwnerDetails } or PropertyOwnerDetails directly
    // Extract data property if it exists (similar to apiFetch behavior)
    let data: PropertyOwnerDetails;
    if (result && typeof result === 'object' && 'data' in result) {
      data = (result as { data: PropertyOwnerDetails }).data;
    } else {
      data = result as PropertyOwnerDetails;
    }

    return data || null;
  } catch (error) {
    console.error('Error fetching property owner details:', error);
    return null;
  }
}
