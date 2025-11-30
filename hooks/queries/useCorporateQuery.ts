import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { Corporate, CorporateApiResponse } from '@/types/corporate';

export function useCorporateQuery() {
    return useQuery<Corporate, Error>({
        queryKey: ['corporate'],
        queryFn: async () => {
            const response: CorporateApiResponse = await apiFetch<CorporateApiResponse>('/api/get-corporate');
            
            if (!response.success || !response.data) {
                throw new Error('Corporate data not found');
            }
            
            return response.data;
        },
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });
}

