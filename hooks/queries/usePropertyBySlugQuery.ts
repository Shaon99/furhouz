import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { PropertyApiResponse, PropertyApiItem } from '@/types/propertyApi';

export function usePropertyBySlugQuery(slug: string) {
    return useQuery<PropertyApiItem, Error>({
        queryKey: ['property', slug],
        queryFn: async () => {
            const data: PropertyApiResponse = await apiFetch<PropertyApiResponse>(`/api/property/${slug}`);
            
            if (!data.success || !data.data || data.data.length === 0) {
                throw new Error('Property not found');
            }
            
            return data.data[0];
        },
        enabled: !!slug,
        staleTime: 1000 * 60 * 5, // 5 minutes
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        refetchOnReconnect: false,
    });
}

