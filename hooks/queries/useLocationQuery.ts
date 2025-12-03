import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { Location } from '@/types/location';

export function useLocationQuery() {
    return useQuery<Location[], Error>({
        queryKey: ['get-location'],
        queryFn: () => apiFetch<Location[]>('/api/get-location'),
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });
}

