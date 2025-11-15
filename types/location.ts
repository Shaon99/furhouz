export type Location = {
  id: number;
  name: string;
  slug: string;
  image: string | null;
  description: string;
}

export type LocationApiResponse = {
  success: boolean;
  message: string;
  data: Location[];
}

