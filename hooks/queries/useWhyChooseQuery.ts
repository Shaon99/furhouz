import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { WhyChoose, WhyChooseApiResponse } from '@/types/whyChoose';

export function useWhyChooseQuery() {
    return useQuery<WhyChoose[], Error>({
        queryKey: ['get-why-choose'],
        queryFn: async () => {
            const response = await apiFetch<WhyChooseApiResponse>('/api/get-why-choose');
            return response.data;
        },
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });
}

