import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { AboutUsData } from '@/types/aboutUs';

export function useAboutUsQuery() {
    return useQuery<AboutUsData, Error>({
        queryKey: ['get-about-us'],
        queryFn: () => apiFetch<AboutUsData>('/api/get-about-us'),
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });
}

