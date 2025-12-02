import { PropertyApiItem } from './propertyApi';

export type LocationDetailFAQ = {
  question: string;
  answer: string;
};

export type LocationDetailSection = {
  title: string;
  description: string;
};

export type LocationDetailFacility = {
  title: string;
  description: string;
};

export type LocationDetailFacilities = {
  title: string;
  items: LocationDetailFacility[];
};

export type LocationDetailWhyRent = {
  title: string;
  items: LocationDetailFacility[];
};

export type LocationDetailData = {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  faqs: LocationDetailFAQ[];
  sections: LocationDetailSection[];
  facilities: LocationDetailFacilities[];
  why_should_rent: LocationDetailWhyRent[];
  properties: PropertyApiItem[];
};


