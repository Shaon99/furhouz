export type AboutUsSection = {
  title: string;
  description: string;
  image: string;
}

export type AboutUsData = {
  id: number;
  section1: AboutUsSection;
  section2: AboutUsSection;
  section3: AboutUsSection;
  final_description: string;
}

export type AboutUsApiResponse = {
  success: boolean;
  message: string;
  data: AboutUsData;
}

