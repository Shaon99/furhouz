import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { Area, AreaApiResponse } from '@/types/area';

export function useAreaQuery() {
    return useQuery<Area[], Error>({
        queryKey: ['get-areas'],
        queryFn: async () => {
            const response = await apiFetch<AreaApiResponse>('/api/areas');
            return response.data;
        },
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });
}

