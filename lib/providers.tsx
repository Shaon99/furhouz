'use client'
import { ReactNode, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        // Enable queries to run on mount by default
        refetchOnMount: true,
        // But don't refetch on window focus (better UX)
        refetchOnWindowFocus: false,
        // Don't refetch on reconnect (data is likely still fresh)
        refetchOnReconnect: false,
        // Retry failed requests once
        retry: 1,
        // Default stale time - data is fresh for 5 minutes
        staleTime: 1000 * 60 * 5,
      },
    },
  }))

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}