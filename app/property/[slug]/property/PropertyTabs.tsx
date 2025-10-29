"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Home, MapPin, Info, ListChecks, Bed, Bath, Car, Ruler, Calendar } from "lucide-react";
import { PropertyDetails } from "./area-data";

export default function PropertyTabs({ p }: { p: PropertyDetails }) {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="w-full bg-blue-700 text-blue-100 rounded-xl p-1 grid grid-cols-4">
        <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:text-blue-700 rounded-lg">Overview</TabsTrigger>
        <TabsTrigger value="address" className="rounded-lg">Address</TabsTrigger>
        <TabsTrigger value="details" className="rounded-lg">Details</TabsTrigger>
        <TabsTrigger value="features" className="rounded-lg">Features</TabsTrigger>
      </TabsList>

      {/* Overview */}
      <TabsContent value="overview" className="mt-3">
        <div className="shadow-lg my-5 border border-sky-500 p-6 md:p-8 rounded-xl bg-white">
          <div className="grid grid-cols-2 py-2">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
              <Home className="h-5 w-5" /> Overview
            </h2>
            <h2 className="text-right text-xl md:text-2xl font-bold">ID - {p.id}</h2>
          </div>

          <div className="grid grid-cols-2 gap-2 md:grid-cols-6 w-full md:items-center">
            <Stat icon={<Bed className="h-4 w-4" />} value={p.beds} label="Bedrooms" />
            <Stat icon={<Bath className="h-4 w-4" />} value={p.baths} label="Bathroom" />
            <Stat icon={<Car className="h-4 w-4" />} value={p.garage} label="Garage" />
            <Stat icon={<Ruler className="h-4 w-4" />} value={p.sizeSft} label="Sq Ft" />
            <Stat icon={<Calendar className="h-4 w-4" />} value={p.yearBuilt} label="Year Built" />
          </div>
        </div>
      </TabsContent>

      {/* Address */}
      <TabsContent value="address" className="mt-3">
        <Box title="Address" icon={<MapPin className="h-5 w-5" />}>
          <GridRow label="Road" value={p.road} />
          <GridRow label="Postal Code" value={p.postalCode} />
          <GridRow label="Area" value={p.area} />
          <GridRow label="City" value={p.city} />
          <GridRow label="Country" value={p.country} />
        </Box>
      </TabsContent>

      {/* Details */}
      <TabsContent value="details" className="mt-3">
        <Box title="Details" icon={<Info className="h-5 w-5" />} blue>
          <GridRow label="Property ID" value={p.id} />
          <GridRow label="Apartment Size" value={String(p.sizeSft)} />
          <GridRow label="Bedroom" value={String(p.beds)} />
          <GridRow label="Bathroom" value={String(p.baths)} />
          <GridRow label="Balcony" value={String(p.balcony)} />
          <GridRow label="Floor" value={p.floor} />
          <GridRow label="Unit No" value={p.unitNo} />
          <GridRow label="Unit Per Floor" value={String(p.unitPerFloor)} />
          <GridRow label="Maid Room" value={p.maidRoom} />
          <GridRow label="Parking" value={String(p.parking)} />
          <GridRow label="Year Built" value={p.yearBuilt} />
          <GridRow label="Monthly Rent" value={p.monthlyRent.toLocaleString()} />
          <GridRow label="Service Charge" value={p.serviceCharge} />
          <GridRow label="Property Status" value={p.status} />
        </Box>
      </TabsContent>

      {/* Features */}
      <TabsContent value="features" className="mt-3">
        <Box title="Features & Amenities" icon={<ListChecks className="h-5 w-5" />}>
          <p className="py-2 text-sm text-slate-600">
            The FurHouz standard — working, relaxing, and living. Our spaces have all the essentials you need for your stay.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-2">
            {p.features.map((f, i) => (
              <div key={i} className="flex items-center">
                {f.icon ? (
                  // svg/png from public/featureicon
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={f.icon} alt="" width={20} height={20} className="mr-2 my-2" />
                ) : (
                  <ListChecks className="h-4 w-4 mr-2" />
                )}
                {f.label}
              </div>
            ))}
          </div>
        </Box>
      </TabsContent>
    </Tabs>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">{children}</div>
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
    <div className="basis-2/5 md:basis-1/6">
      <strong className="text-xl inline-flex items-center gap-2">{icon}{value}</strong>
      <br />
      {label}
    </div>
  );
}
