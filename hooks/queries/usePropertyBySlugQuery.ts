import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { PropertyApiItem } from '@/types/propertyApi';

export function usePropertyBySlugQuery(slug: string) {
    return useQuery<PropertyApiItem[], Error, PropertyApiItem | undefined>({
        queryKey: ['property', slug],
        queryFn: () => apiFetch<PropertyApiItem[]>(`/api/property/${slug}`),
        enabled: !!slug,
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        select: (data) => data?.[0],
    });
}

