import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { Testimonial } from '@/types/testimonial';

export function useTestimonialQuery() {
    return useQuery<Testimonial[], Error>({
        queryKey: ['get-testimonial'],
        queryFn: () => apiFetch<Testimonial[]>('/api/get-testimonial'),
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });
}

