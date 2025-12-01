import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { PropertiesApiResponse, PropertyApiItem } from '@/types/propertyApi';

type PropertyFilters = {
  location_id?: number;
  minPrice?: number;
  maxPrice?: number;
  property_id?: string;
};

export function usePropertiesQuery(
  page: number = 1,
  filters: PropertyFilters = {}
) {
    return useQuery<PropertyApiItem[], Error>({
        queryKey: ['properties', page, filters],
        queryFn: async () => {
            const params = new URLSearchParams();
            params.append('page', page.toString());
            
            if (filters.location_id !== undefined) {
                params.append('location_id', filters.location_id.toString());
            }
            if (filters.minPrice !== undefined) {
                params.append('minPrice', filters.minPrice.toString());
            }
            if (filters.maxPrice !== undefined) {
                params.append('maxPrice', filters.maxPrice.toString());
            }
            if (filters.property_id) {
                params.append('property_id', filters.property_id);
            }
            
            const data: PropertiesApiResponse = await apiFetch<PropertiesApiResponse>(`/api/properties?${params.toString()}`);
            return data.data;
        },
        staleTime: 1000 * 60 * 5, // 5 minutes
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        refetchOnReconnect: false,
    });
}

