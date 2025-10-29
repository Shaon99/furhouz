"use client";

import { Property } from "../../types/property";
import Link from "next/link";
import { Facebook, MapPin, MessageCircle } from "lucide-react";

interface PropertyHeaderProps {
  property: Property;
}

export default function PropertyHeader({ property }: PropertyHeaderProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-BD', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  const facebookUrl = "https://www.facebook.com/sharer/sharer.php?";
  const whatsappUrl = "https://wa.me/?";

  return (
    <div className="w-full max-w-[1350px] mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
        {/* Left Side - Breadcrumb, Title, Location */}
        <div className="flex-1">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm mb-3">
            <Link href="/" className="text-gray-600 hover:text-gray-800 transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/property" className="text-gray-600 hover:text-gray-800 transition-colors">
              property
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-purple-600 font-medium">{property.title}</span>
          </nav>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-3">
            {property.title}
          </h1>

          {/* Location */}
          <div className="flex items-center text-gray-700">
            <MapPin className="w-4 h-4 mr-2 text-gray-600" />
            <span className="text-lg">{property.location}</span>
          </div>
        </div>

        {/* Right Side - Social Icons and Price */}
        <div className="flex flex-col items-end gap-4">
          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-white" />
            </a>
          </div>

          {/* Price */}
          <div className="text-right">
            <div className="text-2xl lg:text-3xl font-bold text-black">
              {formatPrice(property.price)} BDT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
