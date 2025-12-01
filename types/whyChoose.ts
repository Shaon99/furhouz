export type WhyChoose = {
  id: number;
  image: string;
  title: string;
  description: string;
}

export type WhyChooseApiResponse = {
  success: boolean;
  message: string;
  data: WhyChoose[];
}

