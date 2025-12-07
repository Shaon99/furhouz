/**
 * Generates the full area slug format for SEO-friendly URLs
 * Example: "gulshan" -> "furnished-apartment-for-rent-in-gulshan"
 */
export function getAreaSlug(locationSlug: string): string {
  if (!locationSlug) return '';
  
  // If already in full format, return as is
  if (locationSlug.startsWith('furnished-apartment-for-rent-in-')) {
    return locationSlug;
  }
  
  // Generate full format
  return `furnished-apartment-for-rent-in-${locationSlug}`;
}

/**
 * Extracts the short location slug from a full area slug
 * Example: "furnished-apartment-for-rent-in-gulshan" -> "gulshan"
 */
export function extractLocationSlug(fullSlug: string): string {
  if (!fullSlug) return '';
  
  // If it's already a short slug, return as is
  if (!fullSlug.startsWith('furnished-apartment-for-rent-in-')) {
    return fullSlug;
  }
  
  // Extract the location slug
  return fullSlug.replace('furnished-apartment-for-rent-in-', '');
}

