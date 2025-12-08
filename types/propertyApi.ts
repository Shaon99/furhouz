export type PropertyLocation = {
  id: number;
  name: string;
  slug: string;
}

export type PropertyType = {
  id: number;
  title: string;
  slug: string;
}

export type GalleryItem = {
  variant: string;
  path: string;
}

export type PropertyApiItem = {
  id: number;
  property_id: string | null;
  title: string;
  slug: string;
  price: number;
  bed: string;
  bath: string;
  grage: string;
  sqf: string;
  address: string;
  city: string;
  image: string | null;
  galleries: string[];
  rating: number;
  date: string;
  location: PropertyLocation;
  type: PropertyType;
  balcony?: string;
  floor?: string;
  unit_no?: string;
  unit_per_floor?: string;
  maid_room?: string;
  service_charge?: string;
  meta_title?: string | null;
  meta_description?: string | null;
  meta_img?: string | null;
  meta_keywords?: string | null;
}


