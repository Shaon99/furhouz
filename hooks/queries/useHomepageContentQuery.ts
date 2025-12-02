import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { HomepageContent } from '@/types/homepageContent';

export function useHomepageContentQuery() {
    return useQuery<HomepageContent, Error>({
        queryKey: ['homepage-content'],
        queryFn: () => apiFetch<HomepageContent>('/api/get-homepage-content'),
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });
}

