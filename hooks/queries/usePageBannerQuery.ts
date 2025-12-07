import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { PageBanner } from '@/types/pageBanner';

interface PageBannerApiResponse {
  success: boolean;
  message: string;
  banner: PageBanner[];
}

export function usePageBannerQuery(pagename: string = 'homepage') {
    return useQuery<PageBanner[], Error, PageBanner | null>({
        
        queryKey: ['page-banner', pagename],
        queryFn: async () => {
            const response = await apiFetch<PageBannerApiResponse>('/api/page-banner');
            if (response && typeof response === 'object' && 'banner' in response && Array.isArray(response.banner)) {
                return response.banner;
            }
            if (Array.isArray(response)) {
                return response;
            }
            return [];
        },
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        select: (data) => data.find(b => b.pagename === pagename) || null,
    });
}

