export type CorporateImage = {
  image: string;
  link: string;
}

export type Corporate = {
  id: number;
  title: string;
  subtitle: string;
  banner: string;
  link: string;
  images: CorporateImage[];
}

export type CorporateApiResponse = {
  success: boolean;
  message: string;
  data: Corporate;
}

