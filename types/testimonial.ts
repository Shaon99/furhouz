export type Testimonial = {
  id: number;
  name: string;
  image: string | null;
  designation: string;
  message: string | null;
  description: string | null;
}

export type TestimonialApiResponse = {
  success: boolean;
  message: string;
  data: Testimonial[];
}

