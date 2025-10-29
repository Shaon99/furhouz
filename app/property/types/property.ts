export type Property = {
    id: string;
    slug?: string;
    code?: string;
    title: string;
    road: string;
    location: string;
    price: number;
    areaSft: number;
    beds: number;
    baths: number;
    images: string[];
    // Additional fields for detailed property information
    garage?: number;
    balcony?: number;
    unitNo?: string;
    maidRoom?: boolean;
    yearBuilt?: string;
    serviceCharge?: string;
    floor?: string;
    unitPerFloor?: number;
    parking?: number;
    postalCode?: string;
    city?: string;
    country?: string;
    propertyStatus?: string;
  };
  