"use client";

import { Property } from "../types/property";
import Gallery from "./property/Gallery";
import PropertyHeader from "./property/PropertyHeader";

export default function PropertyDetails({ property }: { property: Property }) {
  return (
    <div className="w-full mt-20">
      {/* Property Header */}
      <PropertyHeader property={property} />
      
      {/* Main Content */}
      <section className="w-full max-w-[1350px] mx-auto">
        <div className="mb-4 rounded-xl overflow-hidden">
          <Gallery images={property.images} property={property} />
        </div>
      </section>
    </div>
  );
}
