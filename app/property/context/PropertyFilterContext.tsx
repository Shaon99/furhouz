"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type PropertyFilters = {
  propertyId: string;
  location: string;
  type: string;
  price: string;
};

type PropertyFilterContextType = {
  filters: PropertyFilters;
  setFilters: (filters: Partial<PropertyFilters>) => void;
  clearFilters: () => void;
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

  return (
    <PropertyFilterContext.Provider value={{ filters, setFilters, clearFilters }}>
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
    };
  }
  return context;
}

