export type Banner = {
  id: number;
  image: string;
  title: string;
  description: string;
}

export type BannerApiResponse = {
  success: boolean;
  message: string;
  data: Banner[];
}