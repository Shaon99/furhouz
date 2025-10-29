import React from "react";
import { MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const locations = [
  {
    name: "Gulshan",
    img: "/gulshan.png",
    slug: "gulshan",
  },
  {
    name: "Banani",
    img: "/banani.png",
    slug: "banani",
  },
  {
    name: "Baridhara",
    img: "/baridhara.png",
    slug: "baridhara",
  },
  {
    name: "Bashundhara",
    img: "/bashundhara.png",
    slug: "bashundhara",
  },
];

const PropertySalePage = () => {
  return (
    <>
      <section className="w-full py-10 bg-white container mx-auto">
        <h1 className="text-center font-bold text-brand-700 text-3xl md:text-4xl mb-8">Area Guide</h1>
        <div className="max-w-[1350px] mx-auto">
          <h2
            className="text-center font-bold text-brand-700 text-3xl md:text-4xl mb-8"
            style={{ color: "#064d83" }}
          >
            Area Guide
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center">
            {locations.map((loc) => (
              <Link
                href={`/area-guide/${loc.slug}`}
                key={loc.slug}
                className="
                  relative rounded-2xl overflow-hidden bg-white shadow-lg
                  w-full
                  h-[140px] md:h-[170px] lg:h-[200px]
                  flex flex-col border border-gray-100
                  transition duration-150 hover:scale-105 hover:shadow-xl
                "
                style={{
                  minWidth: "120px",
                  aspectRatio: "4/3",
                  textDecoration: "none",
                }}
              >
                {/* Background Image, lightly blurred for overlay effect */}
                <Image
                  src={loc.img as unknown as string}
                  alt={loc.name}
                  className="object-cover w-full h-full absolute top-0 left-0 blur-[1.2px] brightness-[0.95]"
                  style={{
                    zIndex: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  // Mobile screens, use width 100px; medium 170px; large 220px+
                  width={100}
                  height={75}
                  sizes="(max-width: 640px) 100px, (max-width:1024px) 170px, 220px"
                />
                {/* Gradient overlay for readability */}
                <div
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(6,77,131,0.10) 0%, rgba(11,140,97,0.16) 54%, rgba(6,77,131,0.20) 100%)",
                    zIndex: 1,
                  }}
                />
                {/* Name + Icon Overlay at bottom-left corner */}
                <span
                  className="
                    flex items-center gap-1 text-white font-semibold text-base sm:text-lg
                    z-10 absolute bottom-2 sm:bottom-3 left-2 sm:left-3
                  "
                  style={{
                    pointerEvents: "none",
                    textShadow:
                      "0 2px 16px rgba(0,0,0,0.26),0 1.5px 11px rgba(6,77,131,0.18)",
                  }}
                >
                  <MapPin size={16} className="text-white opacity-95 mr-[4px]" />
                  <span style={{ fontWeight: 700 }}>{loc.name}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="w-full min-h-[350px] flex justify-center items-center container mx-auto py-10"
        style={{ position: "relative" }}
      >
        <div className="relative w-full max-w-[1350px]  min-h-[330px] h-[330px] md:h-[370px] lg:h-[450px] flex items-center mx-auto overflow-hidden">
          {/* Banner Background Image */}
          <Image
            src="/banner.jpeg"
            alt="Banner"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 1400px"
            className="object-cover object-center rounded-lg"
          />

          {/* Absolute textual content + button, left side */}
          <div
            className="
              absolute
              left-0
              top-0
              h-full
              flex flex-col justify-center
              pl-8 pr-4 py-12 sm:py-16
              max-w-[520px] min-w-[320px] w-full
            "
          >
            <span className="font-bold text-xl text-black uppercase tracking-wide mb-2">
              BUSINESS
            </span>
            <h1
              className="text-[2rem] md:text-[2.5rem] font-semibold text-black leading-tight mb-2 tracking-tight"
              style={{ fontFamily: "var(--font-sans,inherit)" }}
            >
              Rent apartments for your company
            </h1>
            <p className="text-[1rem] mb-6 max-w-[700px] leading-snug text-black tracking-tight">
              Manage easily all your corporate apartments needs with flexibility and exclusive support. Save time and money. Ideal for you and your team.
            </p>
            <Link
              href="/corporates"
              className="inline-block px-8 py-4 rounded w-56 bg-[#064d83] text-white text-[15px] font-medium transition-colors"
              style={{
                minWidth: 120,
                textAlign: "center",
                boxShadow: "0 1px 8px 0 #ebf3ff",
              }}
            >
              Get to know us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertySalePage;