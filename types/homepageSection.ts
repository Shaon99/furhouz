export type HomepageSection = {
  id: number;
  title: string;
  image: string | null;
  description: string;
  link: string | null;
}

export type HomepageSectionApiResponse = {
  success: boolean;
  message: string;
  data: {
    [key: string]: HomepageSection;
  };
}

