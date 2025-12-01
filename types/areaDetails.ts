export type AreaSection = {
  title: string;
  content: string;
};

export type AreaContentItem = {
  title: string;
  description?: string;
};

export type AreaContentSection = {
  title: string;
  content_items: AreaContentItem[];
};

export type AreaFAQ = {
  question: string;
  answer: string;
};

export type AreaDetails = {
  id: number;
  name: string;
  slug: string;
  image: string;
  banner: string;
  banner_title: string;
  banner_description: string;
  banner_url: string | null;
  sections: AreaSection[];
  placetovisit: AreaContentSection[];
  restaurants: AreaContentSection[];
  hotels: AreaContentSection[];
  embassies: AreaContentSection[];
  faqs: AreaFAQ[];
  final_words: string;
};

export type AreaDetailsApiResponse = {
  success: boolean;
  message: string;
  data: AreaDetails;
};

