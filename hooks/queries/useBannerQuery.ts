import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { Banner } from '@/types/banner';

export function useBannerQuery() {
    return useQuery<Banner[], Error>({
        queryKey: ['get-banner'],
        queryFn: () => apiFetch<Banner[]>('/api/get-banner'),
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });
}