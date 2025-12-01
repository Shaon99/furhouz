"use client";

import { createContext, useContext, useState, ReactNode, useCallback } from "react";

type PropertyFilters = {
  propertyId: string;
  location: string;
  type: string;
  price: string; // Format: "min-max" or empty string
};

type PropertyFilterContextType = {
  filters: PropertyFilters;
  setFilters: (filters: Partial<PropertyFilters>) => void;
  clearFilters: () => void;
  getApiFilters: () => {
    location_id?: number;
    minPrice?: number;
    maxPrice?: number;
    property_id?: string;
  };
  hasActiveFilters: () => boolean;
};

const PropertyFilterContext = createContext<PropertyFilterContextType | undefined>(undefined);

export function PropertyFilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFiltersState] = useState<PropertyFilters>({
    propertyId: "",
    location: "",
    type: "",
    price: "",
  });

  const setFilters = (newFilters: Partial<PropertyFilters>) => {
    setFiltersState((prev) => ({ ...prev, ...newFilters }));
  };

  const clearFilters = () => {
    setFiltersState({
      propertyId: "",
      location: "",
      type: "",
      price: "",
    });
  };

  const getApiFilters = useCallback(() => {
    const apiFilters: {
      location_id?: number;
      minPrice?: number;
      maxPrice?: number;
      property_id?: string;
    } = {};

    if (filters.location) {
      // location is stored as string (location ID as string), convert to number
      const locationId = Number(filters.location);
      if (!isNaN(locationId)) {
        apiFilters.location_id = locationId;
      }
    }

    if (filters.price) {
      const [min, max] = filters.price.split('-').map(Number);
      if (!isNaN(min)) apiFilters.minPrice = min;
      if (!isNaN(max)) apiFilters.maxPrice = max;
    }

    if (filters.propertyId) {
      apiFilters.property_id = filters.propertyId;
    }

    return apiFilters;
  }, [filters]);

  const hasActiveFilters = useCallback(() => {
    return !!(filters.propertyId || filters.location || filters.price || filters.type);
  }, [filters]);

  return (
    <PropertyFilterContext.Provider 
      value={{ filters, setFilters, clearFilters, getApiFilters, hasActiveFilters }}
    >
      {children}
    </PropertyFilterContext.Provider>
  );
}

export function usePropertyFilters() {
  const context = useContext(PropertyFilterContext);
  if (context === undefined) {
    // Return default context if not within provider (for components used outside property page)
    return {
      filters: {
        propertyId: "",
        location: "",
        type: "",
        price: "",
      },
      setFilters: () => {},
      clearFilters: () => {},
      getApiFilters: () => ({}),
      hasActiveFilters: () => false,
    };
  }
  return context;
}

