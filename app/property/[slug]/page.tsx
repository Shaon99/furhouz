import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PropertyPageClient from "./PropertyPageClient";
import { fetchPropertyBySlug } from "@/lib/property";
import { fetchSettings } from "@/lib/settings";
import type { Settings } from "@/types/settings";

type Props = { params: Promise<{ slug: string }> };

// Default metadata values (matching layout defaults)
const DEFAULTS = {
  title: "Furhouz is the best furnished apartments provider.",
  description: "Furhouz is the best furnished apartments provider.",
  image: "/placeholder.png",
  siteName: "Furhouz",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  try {
    // Fetch property and settings in parallel
    const [property, settings] = await Promise.all([
      fetchPropertyBySlug(slug),
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

    // Use property meta fields if available, otherwise fallback to defaults
    const title = property?.meta_title?.trim() || defaultTitle;
    const description = property?.meta_description?.trim() || defaultDescription;
    const image = property?.meta_img?.trim() || property?.image?.trim() || defaultImage;
    const keywords = property?.meta_keywords?.trim() || undefined;

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://furhouz.com';
    const url = `${baseUrl}/property/${slug}`;

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
    console.error('Error generating property metadata:', error);
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

export default async function PropertyPage({ params }: Props) {
  const { slug } = await params;

  try {
    const property = await fetchPropertyBySlug(slug);

    if (!property) {
      console.error(`Property not found for slug: ${slug}`);
      notFound();
    }

    return <PropertyPageClient params={Promise.resolve({ slug })} />;
  } catch (error) {
    console.error(`Error fetching property for slug ${slug}:`, error);
    notFound();
  }
}
