import { PropertyApiItem } from '@/types/propertyApi';
import { Property } from '@/app/property/types/property';

export function mapApiPropertyToProperty(apiProperty: PropertyApiItem): Property {
  // Handle galleries - can be array of strings (from API) or array of objects
  const galleries = apiProperty.galleries || [];
  const galleryImages = Array.isArray(galleries) && galleries.length > 0
    ? galleries.map(g => typeof g === 'string' ? g : (g as any).path || '').filter(Boolean)
    : [];

  // Use main image if available, otherwise use gallery images
  const mainImage = apiProperty.image || null;
  const images = mainImage 
    ? [mainImage, ...galleryImages.filter(img => img !== mainImage)]
    : galleryImages.length > 0 
      ? galleryImages
      : [];

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

