export type FAQ = {
  id: number;
  question: string;
  answer: string; // HTML content
}

export type FAQApiResponse = {
  success: boolean;
  message: string;
  data: FAQ[];
}

