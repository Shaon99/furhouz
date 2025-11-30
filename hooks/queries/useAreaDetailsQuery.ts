import { useQuery } from '@tanstack/react-query';
import { apiFetch } from '@/lib/apiFetch';
import { AreaDetails, AreaDetailsApiResponse } from '@/types/areaDetails';

export function useAreaDetailsQuery(slug: string) {
  return useQuery<AreaDetails, Error>({
    queryKey: ['area-details', slug],
    queryFn: async () => {
      const response = await apiFetch<AreaDetailsApiResponse>(`/api/area/${slug}`);
      if (!response.success || !response.data) {
        throw new Error('Area details not found');
      }
      return response.data;
    },
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    refetchOnReconnect: false,
  });
}

