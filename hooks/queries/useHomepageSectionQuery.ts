import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { HomepageSection } from '@/types/homepageSection';

export function useHomepageSectionQuery() {
    return useQuery<{ [key: string]: HomepageSection }, Error, HomepageSection[]>({
        queryKey: ['homepage-section'],
        queryFn: () => apiFetch<{ [key: string]: HomepageSection }>('/api/get-homepage-section'),
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        select: (data) => Object.keys(data)
            .sort((a, b) => Number(a) - Number(b))
            .map(key => data[key]),
    });
}

