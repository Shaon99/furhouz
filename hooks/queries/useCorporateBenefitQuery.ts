import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { CorporateBenefit } from '@/types/corporateBenefit';

export function useCorporateBenefitQuery() {
    return useQuery<CorporateBenefit[], Error>({
        queryKey: ['corporate-benefit'],
        queryFn: () => apiFetch<CorporateBenefit[]>('/api/get-corporate-benefit'),
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });
}

