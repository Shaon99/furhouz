import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/apiFetch'
import { Settings } from '@/types/settings';

export function useSettingsQuery() {
    return useQuery<Settings, Error>({
        queryKey: ["get-settings-data"],
        queryFn: () => apiFetch<Settings>("/api/settings"),
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });
}
