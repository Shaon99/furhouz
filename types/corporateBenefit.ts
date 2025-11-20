export type CorporateBenefit = {
  id: number;
  image: string | null;
  title: string;
  description: string;
}

export type CorporateBenefitApiResponse = {
  success: boolean;
  message: string;
  data: CorporateBenefit[];
}

