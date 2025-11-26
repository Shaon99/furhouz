import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { PropertyOwnerDetailsApiResponse, PropertyOwnerDetails } from '@/types/propertyOwner';

export function usePropertyOwnerDetailsQuery() {
    return useQuery<PropertyOwnerDetails, Error>({
        queryKey: ['property-owner-details'],
        queryFn: async () => {
            const data: PropertyOwnerDetailsApiResponse = await apiFetch<PropertyOwnerDetailsApiResponse>('/api/property-owner-details');
            
            if (!data.success || !data.data) {
                throw new Error('Property owner details not found');
            }
            
            return data.data;
        },
        staleTime: 1000 * 60 * 5, 
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        refetchOnReconnect: false,
    });
}

