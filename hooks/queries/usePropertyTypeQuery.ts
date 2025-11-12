import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { PropertyType, PropertyTypeApiResponse } from '@/types/propertyType';

export function usePropertyTypeQuery() {
    return useQuery<PropertyType[], Error>({
        queryKey: ['get-type'],
        queryFn: async () => {
            const response = await apiFetch<PropertyTypeApiResponse>('/api/get-type');
            return response.data;
        },
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });
}

