export type Page = {
  id: number;
  title: string;
  slug: string;
  description: string; // HTML content
}

export type PageApiResponse = {
  success: boolean;
  message: string;
  data: Page[];
}

