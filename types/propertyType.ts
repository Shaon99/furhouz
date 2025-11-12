export type PropertyType = {
  id: number;
  title: string;
  image: string | null;
  description: string;
}

export type PropertyTypeApiResponse = {
  success: boolean;
  message: string;
  data: PropertyType[];
}

