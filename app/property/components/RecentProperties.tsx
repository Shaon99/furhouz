"use client";

import { useMemo, useState, useEffect, useCallback, useRef } from "react";
import PropertyCard from "./PropertyCard";
import { PROPERTIES } from "../data/properties";

export default function RecentProperties() {
  const [visibleCount, setVisibleCount] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<HTMLDivElement>(null);

  // Repeat sample properties to simulate a longer list
  const repeatedProperties = useMemo(() => {
    const total = 120;
    return Array.from({ length: total }, (_, i) => {
      const base = PROPERTIES[i % PROPERTIES.length];
      return { ...base, id: `${base.id}-${i}` };
    });
  }, []);

  const visibleItems = useMemo(
    () => repeatedProperties.slice(0, visibleCount),
    [repeatedProperties, visibleCount]
  );

  // Load more function
  const loadMore = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      setVisibleCount(prev => {
        const newCount = prev + 12;
        if (newCount >= repeatedProperties.length) {
          setHasMore(false);
        }
        return newCount;
      });
      setIsLoading(false);
    }, 800);
  }, [isLoading, hasMore, repeatedProperties.length]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [loadMore, hasMore, isLoading]);

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

        {/* Responsive grid: mobile (1), sm (2), lg (3), xl (4) */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleItems.map((p, index) => (
            <div
              key={p.id}
              className="transform transition-all duration-500 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <PropertyCard p={p} />
            </div>
          ))}
        </div>

        {/* Enhanced loading indicator */}
        {isLoading && (
          <div className="mt-16 flex justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-slate-200"></div>
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent absolute top-0 left-0"></div>
              </div>
              <div className="text-center">
                <span className="text-slate-700 font-semibold text-lg">Loading more properties...</span>
                <p className="text-slate-500 text-sm mt-1">Please wait while we fetch the best properties for you</p>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced end of results message */}
        {!hasMore && visibleItems.length > 0 && (
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl text-slate-700 border border-green-200/50 shadow-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-lg">You&apos;ve reached the end! All properties loaded.</span>
            </div>
          </div>
        )}

        {/* Intersection observer target */}
        <div ref={observerRef} className="h-4" />
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
