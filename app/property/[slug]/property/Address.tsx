"use client";

import { MapPin } from "lucide-react";
import { Property } from "../../types/property";

export default function Address({ p }: { p: Property }) {
  return (
    <Box title="Address" icon={<MapPin className="h-5 w-5" />}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <GridRow label="Road" value={p.road} />
          <GridRow label="Area" value={p.location} />
          <GridRow label="Country" value={p.country || "Bangladesh"} />
        </div>
        <div className="space-y-4">
          <GridRow label="Postal Code" value={p.postalCode || "1212"} />
          <GridRow label="City" value={p.city || "Dhaka"} />
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
