import type { Metadata } from "next";
import PropertyOwnerPageClient from "./PropertyOwnerPageClient";
import { fetchPropertyOwnerDetails } from "@/lib/propertyOwner";
import { fetchSettings } from "@/lib/settings";
import type { Settings } from "@/types/settings";

// Default metadata values (matching layout defaults)
const DEFAULTS = {
  title: "Furhouz is the best furnished apartments provider.",
  description: "Furhouz is the best furnished apartments provider.",
  image: "/placeholder.png",
  siteName: "Furhouz",
};

export async function generateMetadata(): Promise<Metadata> {
  try {
    // Fetch property owner details and settings in parallel
    const [propertyOwnerData, settings] = await Promise.all([
      fetchPropertyOwnerDetails(),
      fetchSettings().catch(() => null),
    ]);

    // Get default values from settings or use hardcoded defaults
    // Note: API may return { data: Settings } or Settings directly
    const settingsData = (settings && typeof settings === 'object' && 'data' in settings
      ? (settings as { data: Settings }).data
      : settings) as Settings | null;
    const defaultTitle = settingsData?.meta_title?.trim() || DEFAULTS.title;
    const defaultDescription = settingsData?.meta_description?.trim() || DEFAULTS.description;
    const defaultImage = settingsData?.meta_image?.trim() || DEFAULTS.image;
    const siteName = settingsData?.site_name?.trim() || DEFAULTS.siteName;

    // Use property owner meta fields if available, otherwise use section titles/descriptions, then fallback to defaults
    const title = propertyOwnerData?.meta_title?.trim()
      || propertyOwnerData?.section1_title?.trim()
      || defaultTitle;

    const description = propertyOwnerData?.meta_description?.trim()
      || propertyOwnerData?.section1_short_description?.trim()
      || defaultDescription;

    const image = propertyOwnerData?.meta_image?.trim()
      || propertyOwnerData?.banner?.trim()
      || propertyOwnerData?.section1_image?.trim()
      || defaultImage;

    const keywords = propertyOwnerData?.meta_keywords?.trim() || undefined;

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://furhouz.com';
    const url = `${baseUrl}/property-owner`;

    const metadata: Metadata = {
      metadataBase: new URL(baseUrl),
      title,
      description,
      keywords: keywords ? keywords.split(',').map(k => k.trim()) : undefined,
      openGraph: {
        title,
        description,
        images: [{ url: image }],
        siteName,
        url,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
      },
    };

    return metadata;
  } catch (error) {
    console.error('Error generating property owner metadata:', error);
    // Fallback to defaults on error
    return {
      title: DEFAULTS.title,
      description: DEFAULTS.description,
      openGraph: {
        title: DEFAULTS.title,
        description: DEFAULTS.description,
        images: [{ url: DEFAULTS.image }],
        siteName: DEFAULTS.siteName,
      },
      twitter: {
        card: "summary_large_image",
        title: DEFAULTS.title,
        description: DEFAULTS.description,
        images: [DEFAULTS.image],
      },
    };
  }
}

export default function PropertyOwnerPage() {
  return <PropertyOwnerPageClient />;
}