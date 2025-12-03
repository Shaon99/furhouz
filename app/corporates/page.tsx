import type { Metadata } from "next";
import CorporateRouteClient from "./route-client";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://admin.furhouz.com';
  
  try {
    // API থেকে corporate data fetch
    const response = await fetch(`${baseUrl}/api/get-corporate`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      next: { revalidate: 3600 } // 1 hour cache
    });

    if (!response.ok) {
      throw new Error('Failed to fetch corporate data');
    }

    const json = await response.json();
    const corporate = json?.data;

    const siteName = "Furhouz";
    const titleText = corporate?.meta_title || corporate?.title || 'Corporate Apartments';
    const title = `${titleText} - ${siteName}`;
    const description = corporate?.meta_description || corporate?.subtitle || 'Rent corporate apartments saving time and money. Your business travellers will love them.';

    return {
      title,
      description,
      openGraph: { title, description },
      twitter: { card: "summary_large_image", title, description },
    };
  } catch (error) {
    console.error('Error fetching corporate metadata:', error);
    // Error হলে default metadata
    const siteName = "Furhouz";
    const title = `Corporate Apartments - ${siteName}`;
    const description = 'Rent corporate apartments saving time and money. Your business travellers will love them.';
    
    return {
      title,
      description,
      openGraph: { title, description },
      twitter: { card: "summary_large_image", title, description },
    };
  }
}

export default function CorporatePage() {
  return <CorporateRouteClient />;
}
