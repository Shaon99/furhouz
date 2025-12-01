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

export type HomepageLocation = {
  id: number;
  title: string;
  description: string;
  content_items: HomepageContentItem[];
  main_description?: string;
}

export type HomepageContent = {
  main: HomepageMainContent[];
  facilities: HomepageFacility[];
  locations: HomepageLocation[];
}

export type HomepageContentApiResponse = {
  success: boolean;
  message: string;
  data: HomepageContent;
}

