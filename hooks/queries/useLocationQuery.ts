import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { Location, LocationApiResponse } from '@/types/location';

export function useLocationQuery() {
    return useQuery<Location[], Error>({
        queryKey: ['get-location'],
        queryFn: async () => {
            const response = await apiFetch<LocationApiResponse>('/api/get-location');
            return response.data;
        },
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });
}

