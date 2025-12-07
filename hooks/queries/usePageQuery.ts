import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { Page } from '@/types/page';

interface PageDetailsApiResponse {
  success: boolean;
  message: string;
  data: Page;
}

export function usePageQuery(slug: string) {
    return useQuery<Page, Error>({
        queryKey: ['page-details', slug],
        queryFn: async () => {
            const response = await apiFetch<PageDetailsApiResponse>(`/api/page-details/${slug}`);
            if (response && typeof response === 'object' && 'data' in response) {
                return response.data;
            }
            if (response && typeof response === 'object' && 'id' in response && 'title' in response) {
                return response as Page;
            }
            throw new Error('Invalid page data format');
        },
        enabled: !!slug,
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });
}

