import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { PageBanner, PageBannerApiResponse } from '@/types/pageBanner';

export function usePageBannerQuery(pagename: string = 'homepage') {
    return useQuery<PageBanner | null, Error>({
        queryKey: ['page-banner', pagename],
        queryFn: async () => {
            const response = await apiFetch<PageBannerApiResponse>('/api/page-banner');
            // Find banner for the specific page
            const banner = response.banner.find(b => b.pagename === pagename);
            return banner || null;
        },
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });
}

