import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { Banner, BannerApiResponse } from '@/types/banner';

export function useBannerQuery() {
    return useQuery<Banner[], Error>({
        queryKey: ['get-banner'],
        queryFn: async () => {
            const response = await apiFetch<BannerApiResponse>('/api/get-banner');
            return response.data;
        },
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });
}