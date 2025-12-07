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
  meta_title: string | null;
  meta_image: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  images: CorporateImage[];
}


