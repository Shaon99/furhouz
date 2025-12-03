import { useMutation } from '@tanstack/react-query';
import { apiFetch } from '@/lib/apiFetch';

type ContactRequestData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type ContactRequestResponse = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export function useContactRequestMutation() {
  return useMutation({
    mutationFn: (data: ContactRequestData) =>
      apiFetch<ContactRequestResponse>('/api/contact-request', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  });
}

