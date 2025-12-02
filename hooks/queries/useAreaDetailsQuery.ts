import { useQuery } from '@tanstack/react-query';
import { apiFetch } from '@/lib/apiFetch';
import { AreaDetails } from '@/types/areaDetails';

export function useAreaDetailsQuery(slug: string) {
  return useQuery<AreaDetails, Error>({
    queryKey: ['area-details', slug],
    queryFn: () => apiFetch<AreaDetails>(`/api/area/${slug}`),
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
}

