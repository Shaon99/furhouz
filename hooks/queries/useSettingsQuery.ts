import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { Settings, SettingsApiResponse } from '@/types/settings';

export function useSettingsQuery() {
    return useQuery<Settings, Error>({
        queryKey: ['get-settings'],
        queryFn: async () => {
            const response = await apiFetch<SettingsApiResponse>('/api/settings');
            return response.data;
        },
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });
}

