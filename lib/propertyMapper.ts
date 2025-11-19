import { PropertyApiItem } from '@/types/propertyApi';
import { Property } from '@/app/property/types/property';

export function mapApiPropertyToProperty(apiProperty: PropertyApiItem): Property {
  const galleries = apiProperty.galleries || [];
  const images = galleries.length > 0 
    ? galleries.map(g => g.path).filter(Boolean)
    : apiProperty.thumbnail 
      ? [apiProperty.thumbnail]
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
    images: images.length > 0 ? images.map(img => img || '/placeholder.png') : ['/placeholder.png'],
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

