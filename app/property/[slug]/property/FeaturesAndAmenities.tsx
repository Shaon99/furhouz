"use client";

import { ListChecks } from "lucide-react";
import { Property } from "../../types/property";

export default function FeaturesAndAmenities({ p }: { p: Property }) {
  return (
    <Box title="Features & Amenities" icon={<ListChecks className="h-5 w-5" />}>
      <p className="py-2 text-sm text-slate-600">
        The FurHouz standard — working, relaxing, and living. Our spaces have all the essentials you need for your stay.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 py-2">
        <FeatureItem label="Fully Furnished" />
        <FeatureItem label="Air Conditioning" />
        <FeatureItem label="WiFi Internet" />
        <FeatureItem label="Kitchen Appliances" />
        <FeatureItem label="Washing Machine" />
        <FeatureItem label="Refrigerator" />
        <FeatureItem label="TV" />
        <FeatureItem label="Dining Table" />
        <FeatureItem label="Study Table" />
        <FeatureItem label="Wardrobe" />
        <FeatureItem label="Sofa Set" />
        <FeatureItem label="Balcony" />
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

function FeatureItem({ label }: { label: string }) {
  return (
    <div className="flex items-center">
      <ListChecks className="h-4 w-4 mr-2 text-green-600" />
      {label}
    </div>
  );
}
