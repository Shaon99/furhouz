import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { CorporateBenefit, CorporateBenefitApiResponse } from '@/types/corporateBenefit';

export function useCorporateBenefitQuery() {
    return useQuery<CorporateBenefit[], Error>({
        queryKey: ['corporate-benefit'],
        queryFn: async () => {
            const response: CorporateBenefitApiResponse = await apiFetch<CorporateBenefitApiResponse>('/api/get-corporate-benefit');
            
            if (!response.success || !response.data) {
                throw new Error('Corporate benefits not found');
            }
            
            return response.data;
        },
        staleTime: 1000 * 60 * 5, // 5 minutes
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        refetchOnReconnect: false,
    });
}

