import { useMutation } from '@tanstack/react-query';
import { apiFetch } from '@/lib/apiFetch';

type OwnerRequestData = {
  name: string;
  email: string;
  phone: string;
  city: string;
  area: string;
  address: string;
  total_sqm: number;
  bed: number;
  bath: number;
  parking: number;
  rental_value: number;
  remarks: string;
};

type OwnerRequestResponse = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export function useOwnerRequestMutation() {
  return useMutation({
    mutationFn: (data: OwnerRequestData) =>
      apiFetch<OwnerRequestResponse>('https://admin.furhouz.com/api/owner-request', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  });
}

