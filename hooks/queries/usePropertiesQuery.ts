import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { PropertiesApiResponse, PropertyApiItem } from '@/types/propertyApi';

export function usePropertiesQuery(page: number = 1) {
    return useQuery<PropertyApiItem[], Error>({
        queryKey: ['properties', page],
        queryFn: async () => {
            const data: PropertiesApiResponse = await apiFetch<PropertiesApiResponse>(`/api/properties?page=${page}`);
            return data.data;
        },
        staleTime: 1000 * 60 * 5, // 5 minutes
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        refetchOnReconnect: false,
    });
}

