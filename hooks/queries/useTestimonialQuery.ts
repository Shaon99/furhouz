import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { Testimonial, TestimonialApiResponse } from '@/types/testimonial';

export function useTestimonialQuery() {
    return useQuery<Testimonial[], Error>({
        queryKey: ['get-testimonial'],
        queryFn: async () => {
            const response = await apiFetch<TestimonialApiResponse>('/api/get-testimonial');
            return response.data;
        },
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });
}

