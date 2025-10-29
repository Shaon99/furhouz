import { useState, useEffect, useCallback } from 'react';
import { Property } from '@/app/property/types/property';
import { getAreaPropertiesPaginated } from '@/app/area/data/areaData';

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  hasMore: boolean;
  itemsPerPage: number;
}

export interface UseAreaPropertiesResult {
  properties: Property[];
  pagination: PaginationInfo;
  isLoading: boolean;
  error: string | null;
  loadPage: (page: number) => void;
}

export function useAreaProperties(
  slug: string, 
  initialPage: number = 1, 
  itemsPerPage: number = 8
): UseAreaPropertiesResult {
  const [properties, setProperties] = useState<Property[]>([]);
  const [pagination, setPagination] = useState<PaginationInfo>({
    currentPage: initialPage,
    totalPages: 0,
    totalItems: 0,
    hasMore: false,
    itemsPerPage
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadPage = useCallback((page: number) => {
    if (isLoading) return;
    
    try {
      setIsLoading(true);
      setError(null);
      
      const result = getAreaPropertiesPaginated(slug, page, itemsPerPage);
      
      if (!result.properties.length && page === 1) {
        throw new Error('No properties found for this area');
      }
      
      setProperties(result.properties);
      
      const totalPages = Math.ceil(result.totalItems / itemsPerPage);
      setPagination({
        currentPage: page,
        totalPages,
        totalItems: result.totalItems,
        hasMore: result.hasMore,
        itemsPerPage
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  }, [slug, itemsPerPage, isLoading]);

  // Load initial page
  useEffect(() => {
    if (slug) {
      loadPage(initialPage);
    }
  }, [slug, initialPage, loadPage]);

  return {
    properties,
    pagination,
    isLoading,
    error,
    loadPage
  };
}
