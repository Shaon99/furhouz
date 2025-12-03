

import type { Metadata } from 'next';
import { generateMetadataFromSettings } from './settings';

export interface PageMetadataOptions {
  title?: string;
  description?: string;
  image?: string;
  slug?: string;
}

export async function generatePageMetadata(
  options?: PageMetadataOptions
): Promise<Metadata> {
  return generateMetadataFromSettings(options);
}

export async function generatePageMetadataWithData<T>(
  fetchData: () => Promise<T>,
  options: (data: T) => PageMetadataOptions
): Promise<Metadata> {
  const data = await fetchData();
  return generateMetadataFromSettings(options(data));
}

