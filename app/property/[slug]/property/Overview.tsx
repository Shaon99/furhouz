"use client";

import { Home, Bed, Bath, Car, Clock, Calendar } from "lucide-react";
import { Property } from "../../types/property";

export default function Overview({ p }: { p: Property }) {
  return (
    <div className="shadow-lg my-5 border border-sky-500 p-6 md:p-8 rounded-xl bg-white">
      <div className="flex justify-between items-center py-2">
        <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          <Home className="h-5 w-5" /> Overview
        </h2>
        <h2 className="text-right text-xl md:text-2xl font-bold">ID - {p.code || p.id}</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-5 w-full md:items-center mt-4">
        <Stat icon={<Bed className="h-4 w-4" />} value={p.beds} label="Bedrooms" />
        <Stat icon={<Bath className="h-4 w-4" />} value={p.baths} label="Bathroom" />
        <Stat icon={<Car className="h-4 w-4" />} value={p.garage || 0} label="Garage" />
        <Stat icon={<Clock className="h-4 w-4" />} value={p.areaSft} label="Sq Ft" />
        <Stat icon={<Calendar className="h-4 w-4" />} value={p.yearBuilt?.split('-')[0] || "2024"} label="Year Built" />
      </div>
    </div>
  );
}

function Stat({
  icon,
  value,
  label
}: {
  icon: React.ReactNode;
  value: string | number;
  label: string;
}) {
  return (
    <div className="basis-2/5 md:basis-1/4">
      <strong className="text-xl inline-flex items-center gap-2">{icon}{value}</strong>
      <br />
      {label}
    </div>
  );
}
