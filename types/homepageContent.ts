export type HomepageContentItem = {
  title: string;
  description: string;
}

export type HomepageMainContent = {
  id: number;
  title: string;
  description: string;
  content_items: HomepageContentItem[];
}

export type HomepageFacility = {
  id: number;
  title: string | null;
  description: string | null;
  content_items: HomepageContentItem[];
}

export type HomepageContent = {
  main: HomepageMainContent[];
  facilities: HomepageFacility[];
  locations: any[];
}

export type HomepageContentApiResponse = {
  success: boolean;
  message: string;
  data: HomepageContent;
}

