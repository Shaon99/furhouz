export type Area = {
  id: number;
  name: string;
  slug: string;
  image: string;
}

export type AreaApiResponse = {
  success: boolean;
  message: string;
  data: Area[];
}

