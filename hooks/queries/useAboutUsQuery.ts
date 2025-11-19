import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { AboutUsData, AboutUsApiResponse } from '@/types/aboutUs';

export function useAboutUsQuery() {
    return useQuery<AboutUsData, Error>({
        queryKey: ['get-about-us'],
        queryFn: async () => {
            const response = await apiFetch<AboutUsApiResponse>('/api/get-about-us');
            return response.data;
        },
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });
}

