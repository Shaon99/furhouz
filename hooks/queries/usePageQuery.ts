import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { Page, PageApiResponse } from '@/types/page';

export function usePageQuery(slug: string) {
    return useQuery<Page | null, Error>({
        queryKey: ['page', slug],
        queryFn: async () => {
            const response: PageApiResponse = await apiFetch<PageApiResponse>('/api/get-page');
            
            if (!response.success || !response.data) {
                throw new Error('Page not found');
            }
            
            // Find page by slug
            const page = response.data.find(p => p.slug === slug);
            
            return page || null;
        },
        enabled: !!slug, // Only fetch if slug is provided
        staleTime: 1000 * 60 * 5, // 5 minutes
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        refetchOnReconnect: false,
    });
}

