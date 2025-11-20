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
}

export type PropertiesApiResponse = {
  success: boolean;
  status: number;
  data: PropertyApiItem[];
  links: {
    first: [string, string] | null;
    last: [string, string] | null;
    prev: [string, string] | null;
    next: [string, string] | null;
  };
  meta: {
    current_page: [number, number];
    from: [number, number];
    last_page: [number, number];
    links: Array<{
      url: string | null;
      label: string;
      active: boolean;
    }>;
    path: string;
    per_page: [number, number];
    to: [number, number];
    total: [number, number];
  };
}

export type PropertyApiResponse = {
  success: boolean;
  status: number;
  data: PropertyApiItem[];
}

