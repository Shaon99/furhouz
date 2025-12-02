import { useQuery } from '@tanstack/react-query'
import { useState, useEffect, useMemo } from 'react'
import { apiFetch } from '@/lib/apiFetch'
import { LocationDetailData } from '@/types/locationDetail'
import { Property } from '@/app/property/types/property'
import { mapApiPropertyToProperty } from '@/lib/propertyMapper'

export interface PaginationInfo {
  currentPage: number
  totalPages: number
  totalItems: number
  hasMore: boolean
  itemsPerPage: number
}

export interface UseLocationDetailResult {
  name: string
  description: string
  image?: string
  faqs?: Array<{ question: string; answer: string }>
  sections?: Array<{ title: string; description: string }>
  facilities?: Array<{ title: string; items: Array<{ title: string; description: string }> }>
  why_should_rent?: Array<{ title: string; items: Array<{ title: string; description: string }> }>
  totalProperties: number
  priceRange: string
  avgArea: string
  properties: Property[]
  pagination: PaginationInfo
  loadPage: (page: number) => void
  isLoading: boolean
  error: string | null
}

export function useLocationDetailQuery(
  slug: string,
  initialPage: number = 1,
  itemsPerPage: number = 8
): UseLocationDetailResult {
  const [currentPage, setCurrentPage] = useState(initialPage)
  
  const { data, isLoading, error } = useQuery<LocationDetailData, Error>({
    queryKey: ['location-detail', slug],
    queryFn: () => apiFetch<LocationDetailData>(`/api/location/${slug}`),
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  })

  useEffect(() => {
    setCurrentPage(initialPage)
  }, [slug, initialPage])

  const allProperties = useMemo(() => {
    return data?.properties?.map(mapApiPropertyToProperty) || []
  }, [data?.properties])

  const { priceRange, avgArea } = useMemo(() => {
    if (!data?.properties?.length) {
      return { priceRange: 'N/A', avgArea: 'N/A' }
    }

    const prices = data.properties.map(p => p.price).filter(p => p > 0)
    const priceRange = prices.length 
      ? `${(Math.min(...prices) / 100000).toFixed(1)}L - ${(Math.max(...prices) / 100000).toFixed(1)}L BDT`
      : 'N/A'

    const areas = data.properties
      .map(p => parseInt(p.sqf || '0', 10))
      .filter(a => a > 0)
    const avgArea = areas.length
      ? `${Math.round(areas.reduce((a, b) => a + b, 0) / areas.length).toLocaleString()} sqft`
      : 'N/A'

    return { priceRange, avgArea }
  }, [data?.properties])

  const totalItems = allProperties.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const properties = allProperties.slice(startIndex, startIndex + itemsPerPage)

  const pagination: PaginationInfo = {
    currentPage,
    totalPages,
    totalItems,
    hasMore: currentPage < totalPages,
    itemsPerPage
  }

  const loadPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  if (!data) {
    return {
      name: '',
      description: '',
      totalProperties: 0,
      priceRange: 'N/A',
      avgArea: 'N/A',
      properties: [],
      pagination: { currentPage: 1, totalPages: 0, totalItems: 0, hasMore: false, itemsPerPage },
      loadPage,
      isLoading,
      error: error?.message || null,
    }
  }

  return {
    name: data.name,
    description: data.description,
    image: data.image,
    faqs: data.faqs,
    sections: data.sections,
    facilities: data.facilities,
    why_should_rent: data.why_should_rent,
    totalProperties: data.properties.length,
    priceRange,
    avgArea,
    properties,
    pagination,
    loadPage,
    isLoading,
    error: error?.message || null,
  }
}

