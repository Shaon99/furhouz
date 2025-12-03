export type AboutUsBanner = {
  title: string;
  subtitle: string;
  image: string;
}

export type AboutUsSection = {
  title: string;
  description: string;
  image: string;
}

export type AboutUsData = {
  id: number;
  banner: AboutUsBanner;
  section1: AboutUsSection;
  section2: AboutUsSection;
  section3: AboutUsSection;
  final_description: string;
}


