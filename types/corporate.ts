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


