import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { Page } from '@/types/page';

export function usePageQuery(slug: string) {
    return useQuery<Page[], Error>({
        queryKey: ['page', slug],
        queryFn: () => apiFetch<Page[]>('/api/get-page'),
        enabled: !!slug,
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        select: (data) => data.find(p => p.slug === slug) || null,
    });
}

