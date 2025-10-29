import { useState, useEffect } from 'react';
import { getAreaData, AreaData } from '@/app/area/data/areaData';

export interface UseAreaDataResult {
  areaData: AreaData | null;
  isLoading: boolean;
  error: string | null;
}

export function useAreaData(slug: string): UseAreaDataResult {
  const [areaData, setAreaData] = useState<AreaData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAreaData = () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const data = getAreaData(slug);
        
        if (!data) {
          throw new Error('Area not found');
        }
        
        setAreaData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setAreaData(null);
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      loadAreaData();
    }
  }, [slug]);

  return { areaData, isLoading, error };
}
