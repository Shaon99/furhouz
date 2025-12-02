import { useMutation } from '@tanstack/react-query';
import { apiFetch } from '@/lib/apiFetch';

type CorporateRequestData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

type CorporateRequestResponse = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export function useCorporateRequestMutation() {
  return useMutation({
    mutationFn: (data: CorporateRequestData) =>
      apiFetch<CorporateRequestResponse>('https://admin.furhouz.com/api/corporate-request', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  });
}
