export type AreaSlug = "gulshan" | "banani" | "baridhara" | "bashundhara";

export type PropertyDetails = {
  id: string;
  title: string;
  road: string;
  postalCode: string;
  area: string;
  city: string;
  country: string;
  sizeSft: number;
  beds: number;
  baths: number;
  garage: number;
  yearBuilt: string; // ISO date
  balcony: number;
  floor: string;
  unitNo: string;
  unitPerFloor: number;
  maidRoom: "Yes" | "No";
  parking: number;
  monthlyRent: number;
  serviceCharge: string; // e.g. "At Actual"
  status: "Active" | "Inactive";
  images: string[]; // public paths
  features: { icon?: string; label: string }[]; 
};

export const PROPERTIES_BY_AREA: Record<AreaSlug, PropertyDetails[]> = {
  gulshan: [
    {
      id: "FH100251287",
      title: "Charubithi",
      road: "Road: 115, Gulshan",
      postalCode: "1212",
      area: "Gulshan",
      city: "Dhaka",
      country: "Bangladesh",
      sizeSft: 2000,
      beds: 2,
      baths: 2,
      garage: 1,
      yearBuilt: "2021-10-22",
      balcony: 1,
      floor: "1st",
      unitNo: "2B",
      unitPerFloor: 2,
      maidRoom: "Yes",
      parking: 1,
      monthlyRent: 190000,
      serviceCharge: "At Actual",
      status: "Active",
      images: [
        "/images/1761129937WhatsApp Image 2025-10-18 at 6.14.06 PM.jpg",
        "/images/1761129937WhatsApp Image 2025-10-18 at 6.13.51 PM(1).jpg",
        "/images/1761129937WhatsApp Image 2025-10-18 at 6.14.02 PM.jpg",
        "/images/1761129937WhatsApp Image 2025-10-18 at 6.14.03 PM(1).jpg",
        "/images/1761129937WhatsApp Image 2025-10-18 at 6.14.03 PM.jpg",
        "/images/1761129937WhatsApp Image 2025-10-18 at 6.14.04 PM(2).jpg",
        "/images/1761129937WhatsApp Image 2025-10-18 at 6.14.04 PM.jpg",
        "/images/1761129937WhatsApp Image 2025-10-18 at 6.14.05 PM(1).jpg",
        "/images/1761129937WhatsApp Image 2025-10-18 at 6.14.05 PM.jpg",
        "/images/1761129937WhatsApp Image 2025-10-18 at 6.14.07 PM.jpg"
      ],
      features: [
        { icon: "/featureicon/bed.png", label: "King Size Bed" },
        { icon: "/featureicon/chair.png", label: "Study Table" },
        { icon: "/featureicon/ac.png", label: "Burner Stove" },
        { icon: "/featureicon/tv.png", label: "TV" },
        { icon: "/featureicon/mattress.png", label: "Spring Mattress" },
        { icon: "/featureicon/chair.png", label: "Study Chair" },
        { icon: "/featureicon/dining-table.png", label: "Dining Table & Chairs (1+6)" },
        { icon: "/featureicon/tv-and-stand.png", label: "TV Trolly" },
        { icon: "/featureicon/refrigerator.png", label: "Refrigerator" },
        { icon: "/featureicon/Microwave.png", label: "Microwave" },
        { icon: "/featureicon/shoe-rack.png", label: "Shoe Rack" },
        { icon: "/featureicon/geyser.png", label: "Geysers" },
        { icon: "/featureicon/water-filter.png", label: "Water Purifier" },
        { icon: "/featureicon/iron.png", label: "Iron" },
        { icon: "/featureicon/dryer.png", label: "Cloth Dryer Hanger" },
        { icon: "/featureicon/cabinet.png", label: "Cabinets / Almirah" },
        { icon: "/featureicon/washing-machine.png", label: "Washing Machine" },
        { icon: "/featureicon/centerr-table.png", label: "Center Table" },
        { icon: "/featureicon/wifi-router.png", label: "WiFi Router" },
        { icon: "/featureicon/ac.png", label: "AC" },
        { icon: "/featureicon/side-table.png", label: "Bed Side Table" },
        { icon: "/featureicon/ceiling-fan.png", label: "Fan" },
        { icon: "/featureicon/sofa.png", label: "Former Sofa" }
      ]
    }
  ],
  banani: [],
  baridhara: [],
  bashundhara: []
};

// helper
export function findProperty(slug: AreaSlug, id?: string) {
  const list = PROPERTIES_BY_AREA[slug] || [];
  if (!id) return list[0];
  return list.find(p => p.id === id) || list[0];
}
