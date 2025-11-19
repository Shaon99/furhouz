import { useQuery } from '@tanstack/react-query'
import { PropertyOwnerDetailsApiResponse, PropertyOwnerDetails } from '@/types/propertyOwner';

export function usePropertyOwnerDetailsQuery() {
    return useQuery<PropertyOwnerDetails, Error>({
        queryKey: ['property-owner-details'],
        queryFn: async () => {
            const response = await fetch('https://admin.furhouz.com/api/property-owner-details');
            if (!response.ok) {
                throw new Error('Failed to fetch property owner details');
            }
            const data: PropertyOwnerDetailsApiResponse = await response.json();
            
            if (!data.success || !data.data) {
                throw new Error('Property owner details not found');
            }
            
            return data.data;
        },
        staleTime: 1000 * 60 * 5, // 5 minutes
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        refetchOnReconnect: false,
    });
}

