"use client";

import { Property } from "../types/property";
import Gallery from "./property/Gallery";
import PropertyHeader from "./property/PropertyHeader";
import Link from "next/link";

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
        <div className="mt-6 text-center">
          <Link
            href={`/property/${property.slug || property.id}`}
            className="inline-block rounded-lg text-blue-700 hover:underline font-medium"
          >
            View Property Page
          </Link>
        </div>
      </section>
    </div>
  );
}
