import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { PropertyOwnerDetails } from '@/types/propertyOwner';

export function usePropertyOwnerDetailsQuery() {
    return useQuery<PropertyOwnerDetails, Error>({
        queryKey: ['property-owner-details'],
        queryFn: () => apiFetch<PropertyOwnerDetails>('/api/property-owner-details'),
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });
}

