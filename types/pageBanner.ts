export type PageBanner = {
  id: number;
  pagename: string;
  title: string;
  subtitle: string;
  image: string;
  url: string | null;
}

export type PageBannerApiResponse = {
  success: boolean;
  message: string;
  banner: PageBanner[];
}

