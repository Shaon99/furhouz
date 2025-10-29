"use client";

import { use } from "react";
import PropertySearch from "@/app/property/components/PropertySearch";
import PropertyCard from "@/app/property/components/PropertyCard";
import LoadingSpinner from "@/components/ui/loading-spinner";
import Pagination from "@/components/ui/pagination";
import { useAreaData } from "@/lib/hooks/useAreaData";
import { useAreaProperties } from "@/lib/hooks/useAreaProperties";
import FurnishedSections from "@/components/furnished/FurnishedSections";
import type { AreaSlug } from "@/components/furnished/data";
import { Sparkles, MapPin, Diamond, Building2 } from "lucide-react";

export default function AreaPage({ params }: { params: Promise<{ slug: AreaSlug }> }) {
  const { slug } = use(params) as { slug: AreaSlug };

  const { areaData, isLoading: areaLoading, error: areaError } = useAreaData(slug);
  const {
    properties,
    pagination,
    isLoading: propertiesLoading,
    error: propertiesError,
    loadPage
  } = useAreaProperties(slug, 1, 8);

  if (areaLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 to-cyan-900 animate-pulse">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (areaError || !areaData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 to-blue-200">
        <div className="text-center p-10 bg-white/70 backdrop-blur rounded-lg shadow-lg border border-pink-200 animate-fade-in">
          <h1 className="text-3xl font-extrabold text-pink-700 mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-7 h-7 text-pink-400 animate-bounce" />
            {areaError || "Area not found"}
          </h1>
          <p className="text-gray-700 text-lg">Please check the URL and try again.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-tl from-blue-50 via-white to-pink-50 container mx-auto">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-800 text-white py-24 relative overflow-hidden shadow-xl">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_70%_40%,#fff7,#00a2ff22_60%,transparent_80%)]" />
        <div className="max-w-[1350px] mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-extrabold mb-5 drop-shadow-lg tracking-tight flex items-center justify-center gap-3">
            <Diamond className="inline w-10 h-10 text-cyan-200 animate-spin-slow" />
            Properties in <span className="ml-2 text-yellow-300">{areaData.name}</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-10 opacity-90 font-semibold drop-shadow">
            {areaData.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg mt-10">
            <StatBox icon={<Building2 className="w-6 h-6 text-indigo-400" />} label="Properties" value={pagination.totalItems} />
            <StatBox icon={<Diamond className="w-6 h-6 text-yellow-300" />} label="Price Range" value={areaData.priceRange} />
            <StatBox icon={<MapPin className="w-6 h-6 text-pink-300" />} label="Avg Area" value={areaData.avgArea} />
          </div>
        </div>
      </section>

      {/* Property Search */}
      <div className="max-w-[1350px] mx-auto px-3 sm:px-6 -mt-12 z-10 relative">
        <div className="shadow-2xl bg-white rounded-2xl p-6 md:p-10 ring-1 ring-indigo-100">
          <PropertySearch />
        </div>
      </div>

      {/* Properties Grid */}
      <section className="py-20 bg-gradient-to-tl from-blue-50 via-white to-fuchsia-50 relative z-0">
        <div className="max-w-[1350px] mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-indigo-900 tracking-tight drop-shadow">
            <span className="bg-gradient-to-r from-indigo-600 via-sky-500 to-fuchsia-500 text-transparent bg-clip-text animate-gradient">
              Available Properties in {areaData.name}
            </span>
          </h2>

          {/* Error message */}
          {propertiesError && (
            <div className="text-center py-8">
              <p className="text-red-600 mb-4 text-lg font-semibold">{propertiesError}</p>
              <button
                onClick={() => loadPage(pagination.currentPage)}
                className="px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 font-bold shadow-lg transition"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Loading indicator */}
          {propertiesLoading && (
            <div className="flex justify-center mb-8">
              <LoadingSpinner size="lg" />
            </div>
          )}

          {/* Properties Grid */}
          {!propertiesLoading && !propertiesError && (
            <>
              {properties.length === 0 ? (
                <div className="text-center py-20 text-gray-400 text-xl font-semibold">
                  <Sparkles className="inline w-8 h-8 mr-2 text-blue-300" />
                  No properties found in this area.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-fade-in">
                  {properties.map((property) => (
                    <PropertyCard key={property.slug || property.id} p={property} />
                  ))}
                </div>
              )}
            </>
          )}

          {/* Pagination Controls */}
          {!propertiesLoading && !propertiesError && pagination.totalPages > 1 && (
            <div className="mt-16 flex justify-center">
              <Pagination
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPages}
                onPageChange={loadPage}
                isLoading={propertiesLoading}
              />
            </div>
          )}
        </div>
      </section>
      <FurnishedSections slug={slug as AreaSlug} />
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

