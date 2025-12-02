import { useMutation } from '@tanstack/react-query';
import { apiFetch } from '@/lib/apiFetch';

type PropertyRequestData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  property_id: string;
};

type PropertyRequestResponse = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export function usePropertyRequestMutation() {
  return useMutation({
    mutationFn: (data: PropertyRequestData) =>
      apiFetch<PropertyRequestResponse>('/api/property-request', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  });
}
