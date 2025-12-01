import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { FAQ, FAQApiResponse } from '@/types/faq';

export function useFaqQuery() {
    return useQuery<FAQ[], Error>({
        queryKey: ['faq'],
        queryFn: async () => {
            const response: FAQApiResponse = await apiFetch<FAQApiResponse>('/api/get-faq');
            
            if (!response.success || !response.data) {
                throw new Error('FAQ not found');
            }
            
            return response.data;
        },
        staleTime: 1000 * 60 * 5, // 5 minutes
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        refetchOnReconnect: false,
    });
}

