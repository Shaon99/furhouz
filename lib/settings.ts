import { Settings,} from '@/types/settings';
import type { Metadata } from 'next';


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
    console.error('Error fetching settings:', error);
    // Return default settings as fallback
    return {
      id: 1,
      site_name: 'Furhouz',
      logo: '',
      favicon: '',
      address: '',
      fb_link: '',
      instagram_link: '',
      youtube_link: '',
      linkedin_link: '',
      twitter_link: '',
      whatsapp_number: '',
      phone_number: '',
      email_address: '',
      copyright_text: null,
      meta_title: 'Furhouz',
      meta_image: '',
      meta_description: 'Furhouz is a property platform that helps you find your dream home.',
    };
  }
}


export async function generateMetadataFromSettings(options?: {
  title?: string;
  description?: string;
  image?: string;
  slug?: string;
}): Promise<Metadata> {
  const settings = await fetchSettings();
  

  const title = options?.title 
    ? `${options.title} | ${settings.site_name}`
    : settings.meta_title || settings.site_name;
  

  const description = options?.description || settings.meta_description || '';
  

  const image = options?.image || settings.meta_image || settings.logo || settings.favicon || '';
  
  return {
    title,
    description,
    icons: {
      icon: settings.favicon || '/logo.png',
      shortcut: settings.favicon || '/logo.png',
      apple: settings.favicon || '/logo.png',
    },
    openGraph: {
      title,
      description,
      images: image ? [{ url: image }] : undefined,
      siteName: settings.site_name,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

