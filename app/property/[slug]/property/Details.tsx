"use client";

import { Info } from "lucide-react";
import { Property } from "../../types/property";

export default function Details({ p }: { p: Property }) {
  return (
    <Box title="Details" icon={<Info className="h-5 w-5" />} blue>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <GridRow label="Property ID:" value={p.code || p.id} />
          <GridRow label="Bedroom:" value={String(p.beds)} />
          <GridRow label="Balcony:" value={String(p.balcony || 0)} />
          <GridRow label="Unit No:" value={p.unitNo || "N/A"} />
          <GridRow label="Maid Room:" value={p.maidRoom ? "Yes" : "No"} />
          <GridRow label="Year Built:" value={p.yearBuilt || "N/A"} />
          <GridRow label="Service Charge:" value={p.serviceCharge || "At Actual"} />
        </div>
        <div className="space-y-4">
          <GridRow label="Apartment Size:" value={String(p.areaSft)} />
          <GridRow label="Bathroom:" value={String(p.baths)} />
          <GridRow label="Floor:" value={p.floor || "N/A"} />
          <GridRow label="Unit Per Floor:" value={String(p.unitPerFloor || 0)} />
          <GridRow label="Parking:" value={String(p.parking || 0)} />
          <GridRow label="Monthly Rent:" value={p.price.toLocaleString() + ".00"} />
          <GridRow label="Property Status:" value={p.propertyStatus || "Active"} />
        </div>
      </div>
    </Box>
  );
}

function Box({
  title,
  icon,
  blue = false,
  children
}: {
  title: string;
  icon: React.ReactNode;
  blue?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={`shadow-lg my-5 border border-sky-500 p-6 md:p-8 rounded-xl ${blue ? "bg-blue-50" : "bg-white"}`}>
      <h2 className="text-2xl font-bold flex items-center gap-2">{icon}{title}</h2>
      <div className="py-4">{children}</div>
    </div>
  );
}

function GridRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="font-semibold">{label}</div>
      <div>{value}</div>
    </div>
  );
}
