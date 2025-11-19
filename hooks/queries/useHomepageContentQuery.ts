import { useQuery } from '@tanstack/react-query'
import { HomepageContentApiResponse, HomepageContent } from '@/types/homepageContent';

export function useHomepageContentQuery() {
    return useQuery<HomepageContent, Error>({
        queryKey: ['homepage-content'],
        queryFn: async () => {
            const response = await fetch('https://admin.furhouz.com/api/get-homepage-content');
            if (!response.ok) {
                throw new Error('Failed to fetch homepage content');
            }
            const data: HomepageContentApiResponse = await response.json();
            
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

