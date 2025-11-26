"use client";

import { use } from "react";
import PropertySearch from "@/app/property/components/PropertySearch";
import PropertyCard from "@/app/property/components/PropertyCard";
import PropertyCardSkeleton from "@/components/ui/PropertyCardSkeleton";
import { SkeletonText, SkeletonHeader } from "@/components/ui/skeletons";
import Pagination from "@/components/ui/pagination";
import { useLocationDetailQuery } from "@/hooks/queries/useLocationDetailQuery";
import FurnishedSections from "@/components/furnished/FurnishedSections";
import { Sparkles, MapPin, Diamond, Building2 } from "lucide-react";

export default function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  const {
    name,
    description,
    priceRange,
    avgArea,
    properties,
    pagination,
    isLoading,
    error,
    loadPage,
    faqs,
    sections,
    facilities,
    why_should_rent,
  } = useLocationDetailQuery(slug, 1, 8);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-tl from-blue-50 via-white to-pink-50">
        {/* Hero Skeleton */}
        <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-800 text-white py-24 relative overflow-hidden">
          <div className="container mx-auto text-center relative z-10">
            <div className="flex items-center justify-center gap-3 mb-5">
              <SkeletonHeader height={48} className="w-12 h-12 rounded-full" />
              <SkeletonText width="half" lines={1} className="h-12" />
            </div>
            <SkeletonText width="3/4" lines={1} className="h-8 mx-auto mb-10" />
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white/20 px-8 py-4 rounded-xl min-w-[180px] backdrop-blur border border-white/30">
                  <SkeletonText width="full" lines={2} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Property Search Skeleton */}
        <div className="max-w-[1350px] mx-auto px-2 sm:px-4 md:px-6 -mt-16 z-10 relative">
          <div className="shadow-2xl bg-white rounded-2xl p-3 sm:p-5 md:p-8 lg:p-10 h-auto md:h-[170px]">
            <SkeletonHeader height={60} className="rounded-xl" />
          </div>
        </div>

        {/* Properties Grid Skeleton */}
        <section className="container mx-auto py-20">
          <div className="max-w-[1350px] mx-auto">
            <SkeletonText width="half" lines={1} className="h-10 mx-auto mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {Array.from({ length: 8 }).map((_, i) => (
                <PropertyCardSkeleton key={i} />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (error || !name) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 to-blue-200">
        <div className="text-center p-10 bg-white/70 backdrop-blur rounded-lg shadow-lg border border-pink-200 animate-fade-in">
          <h1 className="text-3xl font-extrabold text-pink-700 mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-7 h-7 text-pink-400 animate-bounce" />
            {error || "Area not found"}
          </h1>
          <p className="text-gray-700 text-lg">Please check the URL and try again.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-tl from-blue-50 via-white to-pink-50 mx-auto">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-800 text-white py-24 relative overflow-hidden shadow-xl rounded-b-3xl md:rounded-none">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_70%_40%,#fff7,#00a2ff22_60%,transparent_80%)]" />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-extrabold mb-5 drop-shadow-lg tracking-tight flex items-center justify-center gap-3">
            <Diamond className="inline w-10 h-10 text-cyan-200 animate-spin-slow" />
            Properties in <span className="ml-2 text-yellow-300">{name}</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-10 opacity-90 font-semibold drop-shadow">
            {description}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg mt-10">
            <StatBox icon={<Building2 className="w-6 h-6 text-indigo-400" />} label="Properties" value={pagination.totalItems} />
            <StatBox icon={<Diamond className="w-6 h-6 text-yellow-300" />} label="Price Range" value={priceRange} />
            <StatBox icon={<MapPin className="w-6 h-6 text-pink-300" />} label="Avg Area" value={avgArea} />
          </div>
        </div>
      </section>

      {/* Property Search */}
      <div className="max-w-[1350px] mx-auto px-2 sm:px-4 md:px-6 -mt-16 z-10 relative">
        <div className="shadow-2xl bg-white rounded-2xl p-3 sm:p-5 md:p-8 lg:p-10 ring-1 ring-indigo-100 h-auto md:h-[170px] flex items-center justify-center">
          <div className="
              w-full
              -mt-14 sm:-mt-20 md:-mt-[88px]
              mx-auto
              flex
              flex-col
              md:flex-row 
              items-stretch
              md:items-center
              justify-center
              gap-3
              md:gap-6
              ">
            <PropertySearch />
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <section className="container mx-auto py-20 bg-gradient-to-tl from-blue-50 via-white to-fuchsia-50 relative z-0">
        <div className="max-w-[1350px] mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-indigo-900 tracking-tight drop-shadow">
            <span className="bg-gradient-to-r from-indigo-600 via-sky-500 to-fuchsia-500 text-transparent bg-clip-text animate-gradient">
              Available Properties in {name}
            </span>
          </h2>

          {/* Properties Grid */}
          {properties.length === 0 ? (
            <div className="text-center py-20 text-gray-400 text-xl font-semibold">
              <Sparkles className="inline w-8 h-8 mr-2 text-blue-300" />
              No properties found in this area.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-fade-in">
              {properties.map((property, index) => (
                <PropertyCard key={`${property.id}-${property.slug || index}`} p={property} />
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          {!isLoading && !error && pagination.totalPages > 1 && (
            <div className="mt-16 flex justify-center">
              <Pagination
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPages}
                onPageChange={loadPage}
                isLoading={isLoading}
              />
            </div>
          )}
        </div>
      </section>
      <div className="container mx-auto">
        <FurnishedSections
          name={name}
          sections={sections}
          facilities={facilities}
          why_should_rent={why_should_rent}
          faqs={faqs}
        />
      </div>
    </div>
  );
}

// --- Utility components ---

function StatBox({ icon, value, label }: { icon: React.ReactNode, value: string | number, label: string }) {
  return (
    <div className="flex items-center gap-2 bg-white/20 px-8 py-4 rounded-xl backdrop-blur border border-white/30 shadow-xl min-w-[180px] justify-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
      <span>{icon}</span>
      <div className="flex flex-col items-start">
        <span className="font-extrabold text-2xl text-indigo-50 drop-shadow-lg">{value}</span>
        <span className="text-base text-indigo-100 font-semibold drop-shadow">{label}</span>
      </div>
    </div>
  );
}

