"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const locations = [
  "Gulshan",
  "Banani",
  "Baridhara",
  "Bashundhara",
  "Luxury Apartments",
];
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
  const [propertyId, setPropertyId] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const handleSearch = () => {
    console.log({
      propertyId,
      selectedLocation,
      selectedPrice,
    });
    alert("Search clicked!");
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
              />
            </SelectTrigger>
            <SelectContent className="rounded-lg shadow-xl bg-white border-2 border-sky-200">
              {locations.map((loc) => (
                <SelectItem
                  value={loc}
                  key={loc}
                  className="px-4 py-2 text-base hover:bg-sky-50 hover:text-sky-700 cursor-pointer transition-all"
                >
                  {loc}
                </SelectItem>
              ))}
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
        <button
          onClick={handleSearch}
          className="
            bg-sky-400 hover:bg-sky-500 text-white font-semibold px-8 py-2 rounded-md transition-all
            h-[44px] w-full md:w-auto md:min-w-[180px] flex items-center justify-center
          "
        >
          Search
        </button>
      </div>
    </section>
  );
}
