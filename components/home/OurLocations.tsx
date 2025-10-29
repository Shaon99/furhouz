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

const OurLocations = () => {
  return (
    <section className="w-full py-2 lg:py-10 bg-white px-4 lg:px-8">
      <div className=" mx-auto w-full max-w-[1350px] ">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center p-2 bg-brand-50 rounded-full shadow-sm">
              <MapPin size={20} className="text-brand-600" />
            </span>
            <h2 className="font-semibold uppercase text-brand-700 text-2xl xs:text-3xl md:text-4xl">
              Our Locations
            </h2>
          </div>
          <div className="mt-3 w-20 h-1 rounded-full bg-gradient-to-r from-brand-600 to-brand-800 opacity-95" />
        </div>
        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-4
            sm:gap-6
            justify-center
            items-center
          "
        >
          {locations.map((loc) => (
            <Link
              href={`/area/${loc.slug}`}
              key={loc.name}
              className="
                relative rounded-xl overflow-hidden bg-soft shadow-md
                w-full
                flex flex-col
                min-h-[140px] xs:min-h-[170px] sm:min-h-[200px] md:min-h-[200px] h-[32vw] xs:h-[160px] sm:h-[200px] md:h-[210px] lg:h-[220px]
                transition-transform hover:scale-[1.025]
              "
              style={{
                minWidth: "0",
                aspectRatio: "4/3",
                textDecoration: "none",
              }}
            >
              {/* Background Photo */}
              <Image
                src={loc.img as unknown as string}
                alt={loc.name}
                className="object-cover w-full h-full absolute top-0 left-0 blur-[0.9px] brightness-[1]"
                style={{
                  zIndex: 0,
                  width: "100%",
                  height: "100%",
                }}
                width={400}
                height={400}
                sizes="(max-width: 768px) 100vw, 320px"
                priority={false}
              />
              <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(6,77,131,0.09) 0%, rgba(11,140,97,0.13) 60%, rgba(6,77,131,0.19) 100%)",
                  zIndex: 1,
                }}
              />
              {/* Name + Icon Overlay at bottom-left corner */}
              <span
                className="
                  flex items-center gap-1 text-white font-semibold 
                  text-sm xs:text-base md:text-base
                  z-10 absolute bottom-2 left-2 sm:bottom-3 sm:left-3
                  "
                style={{
                  pointerEvents: "none",
                  textShadow:
                    "0 2px 16px rgba(0,0,0,0.20),0 1.5px 11px rgba(6,77,131,0.14)",
                  fontWeight: 600,
                }}
              >
                <MapPin
                  size={16}
                  className="text-white opacity-95 mr-[4px] xs:size-[18px]"
                />
                {loc.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurLocations;