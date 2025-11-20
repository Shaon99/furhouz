import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { HomepageSectionApiResponse, HomepageSection } from '@/types/homepageSection';

export function useHomepageSectionQuery() {
    return useQuery<HomepageSection[], Error>({
        queryKey: ['homepage-section'],
        queryFn: async () => {
            const response: HomepageSectionApiResponse = await apiFetch<HomepageSectionApiResponse>('/api/get-homepage-section');
            
            if (!response.success || !response.data) {
                throw new Error('Homepage sections not found');
            }
            
            // Convert object to array and sort by key to maintain order
            const sections = Object.keys(response.data)
                .sort((a, b) => Number(a) - Number(b))
                .map(key => response.data[key]);
            
            return sections;
        },
        staleTime: 1000 * 60 * 5, // 5 minutes
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        refetchOnReconnect: false,
    });
}

