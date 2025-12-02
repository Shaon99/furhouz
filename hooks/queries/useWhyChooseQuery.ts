import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { WhyChoose } from '@/types/whyChoose';

export function useWhyChooseQuery() {
    return useQuery<WhyChoose[], Error>({
        queryKey: ['get-why-choose'],
        queryFn: () => apiFetch<WhyChoose[]>('/api/get-why-choose'),
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });
}

