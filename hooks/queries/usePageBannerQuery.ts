import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { PageBanner } from '@/types/pageBanner';

export function usePageBannerQuery(pagename: string = 'homepage') {
    return useQuery<PageBanner[], Error>({
        queryKey: ['page-banner', pagename],
        queryFn: () => apiFetch<PageBanner[]>('/api/page-banner'),
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        select: (data) => data.find(b => b.pagename === pagename) || null,
    });
}

