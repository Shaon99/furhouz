"use client";

import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useLocationQuery } from "@/hooks/queries/useLocationQuery";
import { usePropertyFilters } from "../context/PropertyFilterContext";
import { toast } from "sonner";

const priceRanges = [
  "50000-100000",
  "100001-150000",
  "150001-200000",
  "200001-250000",
  "250001-300000",
  "300001-350000",
  "350001-400000",
  "400001-450000",
  "450001-500000",
  "500001-550000",
  "550001-600000",
];

export default function PropertySearch() {
  const { filters, setFilters, clearFilters, hasActiveFilters } = usePropertyFilters();
  const [propertyId, setPropertyId] = useState(filters.propertyId);
  const [selectedLocation, setSelectedLocation] = useState(filters.location);
  const [selectedPrice, setSelectedPrice] = useState(filters.price);
  const { data: locations = [], isLoading: locationsLoading } = useLocationQuery();

  // Sync local state with context when filters change externally
  useEffect(() => {
    setPropertyId(filters.propertyId);
    setSelectedLocation(filters.location);
    setSelectedPrice(filters.price);
  }, [filters]);

  const handleSearch = () => {
    // Update context with current filter values
    setFilters({
      propertyId: propertyId.trim(),
      location: selectedLocation,
      price: selectedPrice,
    });
    
    // Show feedback
    if (propertyId || selectedLocation || selectedPrice) {
      toast.success("Search filters applied!");
    } else {
      toast.info("Showing all properties");
    }
  };

  const handleClear = () => {
    setPropertyId("");
    setSelectedLocation("");
    setSelectedPrice("");
    clearFilters();
    toast.info("Filters cleared");
  };

  return (
    <section className="bg-[#04497A] py-6 w-full flex justify-center mt-20">
      <div
        className="
          flex flex-col gap-4 w-full container mx-auto items-stretch justify-center
          sm:flex-col
          md:flex-wrap md:flex-row md:items-center md:justify-between md:gap-3
        "
      >
        {/* Search Icon + Input */}
        <div className="flex items-center w-full max-w-auto md:flex-1 md:min-w-[180px] md:mr-0 md:mb-0">
          <div className="bg-sky-400 p-2 flex items-center justify-center rounded-l-md">
            <Search className="text-white w-9 h-6" />
          </div>
          <input
            type="text"
            placeholder="Property ID"
            value={propertyId}
            onChange={(e) => setPropertyId(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSearch();
              }
            }}
            className="w-full p-2 bg-white rounded-tr-md rounded-br-md border border-sky-600 focus:ring-2 focus-within:ring-black focus:outline-none"
          />
        </div>

        {/* Location Dropdown */}
        <div className="flex flex-col justify-end md:flex-1 md:min-w-[180px]">
          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger className="rounded-lg p-2 w-full md:w-full bg-white shadow-md border-2 border-sky-200 focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-all text-sky-900 font-semibold hover:border-sky-400 hover:shadow-lg h-[44px]">
              <SelectValue
                placeholder="Choose a location..."
                className="text-gray-500"
              >
                {selectedLocation 
                  ? locations.find(loc => loc.id.toString() === selectedLocation)?.name || selectedLocation
                  : "Choose a location..."}
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="rounded-lg shadow-xl bg-white border-2 border-sky-200">
              {locationsLoading ? (
                <SelectItem value="loading" disabled>
                  Loading...
                </SelectItem>
              ) : (
                locations.map((location) => (
                  <SelectItem
                    value={location.id.toString()}
                    key={location.id}
                    className="px-4 py-2 text-base hover:bg-sky-50 hover:text-sky-700 cursor-pointer transition-all"
                  >
                    {location.name}
                  </SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
        </div>

        {/* Price Dropdown */}
        <div className="flex flex-col justify-end md:flex-1 md:min-w-[180px]">
          <Select value={selectedPrice} onValueChange={setSelectedPrice}>
            <SelectTrigger className="rounded-lg p-2 w-full md:w-full bg-white shadow-md border-2 border-sky-200 focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-all text-sky-900 font-semibold hover:border-sky-400 hover:shadow-lg h-[44px]">
              <SelectValue
                placeholder="Select a price range..."
                className="text-gray-500"
              />
            </SelectTrigger>
            <SelectContent className="rounded-lg shadow-xl bg-white border-2 border-sky-200">
              {priceRanges.map((price) => (
                <SelectItem
                  value={price}
                  key={price}
                  className="px-4 py-2 text-base hover:bg-sky-50 hover:text-sky-700 cursor-pointer transition-all"
                >
                  {`${Number(price.split('-')[0]).toLocaleString()} - ${Number(
                    price.split('-')[1]
                  ).toLocaleString()} BDT`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Search Button */}
        <div className="flex gap-2 w-full md:w-auto">
          <button
            onClick={handleSearch}
            className="
              bg-sky-400 hover:bg-sky-500 text-white font-semibold px-8 py-2 rounded-md transition-all
              h-[44px] w-full md:w-auto md:min-w-[180px] flex items-center justify-center gap-2
            "
          >
            <Search className="w-4 h-4" />
            Search
          </button>
          
          {hasActiveFilters() && (
            <button
              onClick={handleClear}
              className="
                bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-4 py-2 rounded-md transition-all
                h-[44px] flex items-center justify-center gap-2
              "
              title="Clear all filters"
            >
              <X className="w-4 h-4" />
              Clear
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
