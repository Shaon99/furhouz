import { useMutation } from '@tanstack/react-query';
import { apiFetch } from '@/lib/apiFetch';

type GetRequestData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type GetRequestResponse = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export function useGetRequestMutation() {
  return useMutation({
    mutationFn: (data: GetRequestData) =>
      apiFetch<GetRequestResponse>('/api/get-request', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  });
}
