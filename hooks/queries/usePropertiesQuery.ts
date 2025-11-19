import { useQuery } from '@tanstack/react-query'
import { PropertiesApiResponse, PropertyApiItem } from '@/types/propertyApi';

export function usePropertiesQuery(page: number = 1) {
    return useQuery<PropertyApiItem[], Error>({
        queryKey: ['properties', page],
        queryFn: async () => {
            const response = await fetch(`https://admin.furhouz.com/api/properties?page=${page}`);
            if (!response.ok) {
                throw new Error('Failed to fetch properties');
            }
            const data: PropertiesApiResponse = await response.json();
            return data.data;
        },
        staleTime: 1000 * 60 * 5, // 5 minutes
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        refetchOnReconnect: false,
    });
}

