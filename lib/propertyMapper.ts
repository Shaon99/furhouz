import { PropertyApiItem } from '@/types/propertyApi';
import { Property } from '@/app/property/types/property';

// Normalize image URL - remove double slashes and fix URL format
function normalizeImageUrl(url: string): string {
  if (!url || typeof url !== 'string') return '';
  let normalized = url.trim();
  
  // Remove double slashes (but keep http:// or https://)
  normalized = normalized.replace(/([^:]\/)\/+/g, '$1');
  
  // Fix escaped slashes from JSON
  normalized = normalized.replace(/\\\//g, '/');
  
  // Remove trailing slashes
  normalized = normalized.replace(/\/+$/, '');
  
  return normalized;
}

export function mapApiPropertyToProperty(apiProperty: PropertyApiItem): Property {
  // Handle galleries - can be array of strings (from API) or array of objects
  const galleries = apiProperty.galleries || [];
  const galleryImages = Array.isArray(galleries) && galleries.length > 0
    ? galleries
        .map(g => {
          const url = typeof g === 'string' ? g : (g as any)?.path || '';
          // Normalize and filter out empty strings
          return url && typeof url === 'string' && url.trim() !== '' ? normalizeImageUrl(url) : '';
        })
        .filter(Boolean)
    : [];

  // Use main image if available, otherwise use gallery images
  const mainImage = apiProperty.image && typeof apiProperty.image === 'string' && apiProperty.image.trim() !== '' 
    ? normalizeImageUrl(apiProperty.image.trim())
    : null;
  
  let images: string[] = [];
  
  if (mainImage) {
    images = [mainImage, ...galleryImages.filter(img => img && img !== mainImage && img.trim() !== '')];
  } else if (galleryImages.length > 0) {
    images = galleryImages;
  }
  
  // Remove duplicates and ensure we have at least placeholder
  images = [...new Set(images.filter(img => img && img.trim() !== ''))];
  
  // Debug logging
  if (typeof window !== 'undefined' && images.length === 0) {
    console.warn('PropertyMapper: No images found', {
      propertyId: apiProperty.id,
      mainImage: apiProperty.image,
      galleries: apiProperty.galleries,
      galleryImages
    });
  }

  return {
    id: apiProperty.id.toString(),
    slug: apiProperty.slug,
    code: apiProperty.property_id || undefined,
    title: apiProperty.title,
    road: apiProperty.address || '',
    location: apiProperty.location?.name || '',
    price: apiProperty.price || 0,
    areaSft: apiProperty.sqf ? parseInt(apiProperty.sqf) : 0,
    beds: parseInt(apiProperty.bed) || 0,
    baths: parseInt(apiProperty.bath) || 0,
    images: images.length > 0 ? images : ['/placeholder.png'],
    typeId: apiProperty.type?.id,
    typeTitle: apiProperty.type?.title,
    garage: apiProperty.grage ? parseInt(apiProperty.grage) : undefined,
    city: apiProperty.city || '',
    yearBuilt: apiProperty.date || '',
    balcony: apiProperty.balcony ? parseInt(apiProperty.balcony) : undefined,
    floor: apiProperty.floor,
    unitNo: apiProperty.unit_no,
    unitPerFloor: apiProperty.unit_per_floor ? parseInt(apiProperty.unit_per_floor) : undefined,
    maidRoom: apiProperty.maid_room === '1',
    serviceCharge: apiProperty.service_charge,
  };
}

