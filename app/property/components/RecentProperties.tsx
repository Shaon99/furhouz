"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import PropertyCard from "./PropertyCard";
import PropertyCardSkeleton from "@/components/ui/PropertyCardSkeleton";
import { usePropertiesQuery } from "@/hooks/queries/usePropertiesQuery";
import { mapApiPropertyToProperty } from "@/lib/propertyMapper";
import { Property } from "../types/property";

export default function RecentProperties() {
  const [page, setPage] = useState(1);
  const [allProperties, setAllProperties] = useState<Property[]>([]);
  const observerRef = useRef<HTMLDivElement>(null);
  
  const { data: properties = [], isLoading, isFetching } = usePropertiesQuery(page);

  useEffect(() => {
    if (properties.length > 0) {
      setAllProperties(prev => {
        const newProperties = properties.filter(
          p => !prev.some(existing => existing.id === p.id.toString())
        );
        return [...prev, ...newProperties.map(mapApiPropertyToProperty)];
      });
    }
  }, [properties]);

  const loadMore = useCallback(() => {
    if (isLoading || isFetching) return;
    setPage(prev => prev + 1);
  }, [isLoading, isFetching]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading && !isFetching && properties.length > 0) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [loadMore, isLoading, isFetching, properties.length]);

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }} />
      </div>

      <div className="mx-auto container px-4 relative">
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-700 font-semibold text-sm mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            Premium Properties
          </div>
          <h2 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent mb-6">
            We&apos;ve recently added some new properties.
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover your dream home from our carefully curated collection of premium properties. 
            Each property is handpicked for quality, location, and value.
          </p>
        </header>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {isLoading && allProperties.length === 0 ? (
            Array.from({ length: 12 }).map((_, i) => (
              <PropertyCardSkeleton key={i} />
            ))
          ) : (
            <>
              {allProperties.map((p) => (
                <PropertyCard key={p.id} p={p} />
              ))}
              {isFetching && Array.from({ length: 4 }).map((_, i) => (
                <PropertyCardSkeleton key={`skeleton-${i}`} />
              ))}
            </>
          )}
        </div>

        {!isLoading && !isFetching && properties.length === 0 && allProperties.length > 0 && (
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-green-50 rounded-2xl text-slate-700 border border-green-200">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="font-semibold">All properties loaded.</span>
            </div>
          </div>
        )}

        {!isLoading && !isFetching && allProperties.length === 0 && (
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-slate-50 rounded-2xl text-slate-700 border border-slate-200">
              <span className="font-semibold">No properties found.</span>
            </div>
          </div>
        )}

        <div ref={observerRef} className="h-4" />
      </div>
    </section>
  );
}
