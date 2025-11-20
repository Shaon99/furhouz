import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { HomepageContentApiResponse, HomepageContent } from '@/types/homepageContent';

export function useHomepageContentQuery() {
    return useQuery<HomepageContent, Error>({
        queryKey: ['homepage-content'],
        queryFn: async () => {
            const data: HomepageContentApiResponse = await apiFetch<HomepageContentApiResponse>('/api/get-homepage-content');
            
            if (!data.success || !data.data) {
                throw new Error('Homepage content not found');
            }
            
            return data.data;
        },
        staleTime: 1000 * 60 * 5, // 5 minutes
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        refetchOnReconnect: false,
    });
}

