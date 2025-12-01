import { useMutation } from '@tanstack/react-query';
import { apiFetch } from '@/lib/apiFetch';

type TenantRequestData = {
  name: string;
  email: string;
  phone: string;
  apartment: string;
  message: string;
};

type TenantRequestResponse = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export function useTenantRequestMutation() {
  return useMutation({
    mutationFn: (data: TenantRequestData) =>
      apiFetch<TenantRequestResponse>('https://admin.furhouz.com/api/tenant-request', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  });
}
