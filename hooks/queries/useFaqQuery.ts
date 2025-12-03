import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { FAQ } from '@/types/faq';

export function useFaqQuery() {
    return useQuery<FAQ[], Error>({
        queryKey: ['faq'],
        queryFn: () => apiFetch<FAQ[]>('/api/get-faq'),
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });
}

