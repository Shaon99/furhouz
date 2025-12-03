import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { Corporate } from '@/types/corporate';

export function useCorporateQuery() {
    return useQuery<Corporate, Error>({
        queryKey: ['corporate'],
        queryFn: () => apiFetch<Corporate>('/api/get-corporate'),
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });
}

