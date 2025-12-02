import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { Settings } from '@/types/settings';

export function useSettingsQuery() {
    return useQuery<Settings, Error>({
        queryKey: ['get-settings'],
        queryFn: () => {
            // DISABLED FOR TESTING
            return Promise.resolve({} as Settings);
            // return apiFetch<Settings>('/api/settings');
        },
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        enabled: false, // Disable query
    });
}

