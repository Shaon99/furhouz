import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { Area } from '@/types/area';

export function useAreaQuery() {
    return useQuery<Area[], Error>({
        queryKey: ['get-areas'],
        queryFn: () => apiFetch<Area[]>('/api/areas'),
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });
}

