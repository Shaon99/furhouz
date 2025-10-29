"use client";

import { BedDouble, Bath, Ruler, Mail, MapPin, Star, Heart } from "lucide-react";
import CardSlider from "./CardSlider";
import { Property } from "../types/property";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function PropertyCard({ p }: { p: Property }) {
  const [isFavorited, setIsFavorited] = useState(false);
  const slug = p.slug || p.id?.toString() || "";

  return (
    <article
      className="group relative overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-slate-200/60 transition-all duration-300 ease-out hover:shadow-2xl hover:ring-slate-300/80"
    >
      {/* Gradient overlay for premium look */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative">
        <div className="relative overflow-hidden rounded-xl">
          {p.code && (
            <span className="absolute right-3 top-3 z-20 rounded-full bg-gradient-to-r from-slate-800 to-slate-700 px-3 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur-sm">
              {p.code}
            </span>
          )}
          
          {/* Premium badge */}
          <div className="absolute left-3 top-3 z-20 flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-2.5 py-1 text-xs font-bold text-white shadow-lg">
            <Star className="h-3 w-3 fill-current" />
            Premium
          </div>

          {/* Heart icon */}
          <button 
            onClick={() => setIsFavorited(!isFavorited)}
            className="absolute right-3 top-12 z-20 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <Heart 
              className={`h-5 w-5 transition-all duration-300 ${
                isFavorited 
                  ? 'text-red-500 fill-current' 
                  : 'text-slate-600'
              }`} 
            />
          </button>
          
          <CardSlider images={p.images} slug={slug} />
        </div>

        {/* Content area with padding */}
        <div className="p-4">
          <div className="mt-1">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold tracking-tight text-slate-900">
              {p.price.toLocaleString()}
            </span>
            <span className="text-sm font-medium text-slate-500">BDT</span>
          </div>
          <div className="mt-1 text-xs text-slate-400">per month</div>
        </div>

        {/* Title and location */}
        <div className="mt-1">
          <Link href={`/property/${slug}`} className="block group/title">
            <h3 className="text-lg font-bold text-slate-900 line-clamp-1 group-hover:text-slate-700 transition-colors group-hover/title:underline">
              {p.title}
            </h3>
            <div className="mt-1 flex items-center gap-1 text-sm text-slate-600">
              <MapPin className="h-3.5 w-3.5 text-slate-400" />
              <span className="line-clamp-1">{p.road}</span>
            </div>
          </Link>
        </div>

        {/* Property features with enhanced styling */}
        <div className="mt-2 flex items-center justify-between rounded-xl bg-slate-50/80 p-3 backdrop-blur-sm">
          <div className="flex items-center gap-1 text-slate-700">
            <BedDouble className="h-4 w-4 text-slate-500" />
            <span className="text-sm font-medium">{p.beds}</span>
          </div>
          <div className="h-4 w-px bg-slate-300" />
          <div className="flex items-center gap-1 text-slate-700">
            <Bath className="h-4 w-4 text-slate-500" />
            <span className="text-sm font-medium">{p.baths}</span>
          </div>
          <div className="h-4 w-px bg-slate-300" />
          <div className="flex items-center gap-1 text-slate-700">
            <Ruler className="h-4 w-4 text-slate-500" />
            <span className="text-sm font-medium">{p.areaSft}</span>
            <span className="text-xs text-slate-500">sqft</span>
          </div>
        </div>

        {/* Action buttons with enhanced styling */}
        <div className="mt-4 flex items-center gap-3">
          <Link
            href="#"
            className="group/btn flex-1 rounded-xl bg-gradient-to-r from-green-500 to-green-600 px-4 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:from-green-600 hover:to-green-700 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="Whatsapp"
              width={16}
              height={16}
              className="transition-transform group-hover/btn:scale-110"
            />
            <span>WhatsApp</span>
          </Link>
          <Link
            href="#"
            className="group/btn flex-1 rounded-xl bg-gradient-to-r from-[#064d83] to-[#0a5a96] px-4 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:from-[#0a5a96] hover:to-[#0f6ba8] hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
          >
            <Mail className="h-4 w-4 transition-transform group-hover/btn:scale-110" />
            <span>Email</span>
          </Link>
        </div>
        </div>
      </div>
    </article>
  );
}
