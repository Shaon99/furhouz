export type PropertyOwnerRule = {
  title: string;
  description: string;
}

export type PropertyOwnerFAQ = {
  question: string;
  answer: string;
}

export type PropertyOwnerGalleryImage = {
  id: number;
  image_path: string;
}

export type PropertyOwnerDetails = {
  section1_title: string;
  section1_short_description: string;
  section1_image: string;
  section2_title: string;
  section2_short_description: string;
  banner: string;
  rules: PropertyOwnerRule[];
  faqs: PropertyOwnerFAQ[];
  gallery_images: PropertyOwnerGalleryImage[];
  meta_title?: string | null;
  meta_description?: string | null;
  meta_image?: string | null;
  meta_keywords?: string | null;
}


