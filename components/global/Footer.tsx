import Link from "next/link";
import Image from "next/image";
import { FacebookIcon, MapPin, Mail, Phone } from "lucide-react";
import { WhatsAppHelpWidget } from "@/components/global/StickyChat";

export default function Footer() {
  return (
    <>
    <footer className="border-2 border-[color:var(--brand-700)] bg-[color:var(--soft)] small text-[color:var(--muted)] rounded-tl-3xl rounded-tr-3xl bg-stone-100">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row md:justify-between gap-10 w-[100%] items-center md:items-start text-center md:text-left">
          {/* Left: Logo and General Link */}
          <div className="flex flex-col md:flex-row gap-6 lg:gap-10 xl:gap-40 w-full md:w-[60%] items-center md:items-start">
            {/* Left: Logo & Tagline */}
            <div className="flex flex-col w-[280px] lg:w-[240px] max-w-[300px] items-center md:items-start">
              <Link href="/" className="flex items-center justify-center md:justify-start mb-1">
                <Image
                  src="/logo.png"
                  alt="furHouz"
                  width={1200}
                  height={46}
                  className="object-contain"
                  priority
                />
              </Link>
              <div className="text-[color:var(--brand-500)] p font-light mb-6 md:mb-0">
                Expat Accommodation Provider
              </div>
            </div>
            {/* Right: General Links */}
            <div className="flex flex-col items-center md:items-start">
              <h1 className="block font-bold text-brand h3 mb-2">General Link</h1>
              <ul className="space-y-0.5 p mt-2 text-[#064d83]">
                <li>
                  <Link href="/" className="hover:underline text-[color:var(--foreground)]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="hover:underline text-[color:var(--foreground)]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline text-[color:var(--foreground)]">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:underline text-[color:var(--foreground)]">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/terms-conditions" className="hover:underline text-[color:var(--foreground)]">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/area-guide" className="hover:underline text-[color:var(--foreground)]">
                    Property for Sale
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Right: Contact Us */}
          <div className="flex flex-col md:w-[40%] items-center md:items-start">
            <h1 className="block font-bold text-brand h3 mb-2">Contact Us</h1>
            <div className="flex flex-col gap-1 p text-[#064d83] mt-2 items-center md:items-start">
              <div className="flex items-start gap-2 justify-center md:justify-start">
                <MapPin size={18} className="mt-[2px] text-brand" />
                <span className="leading-snug">House 26, Rd 18/A, Gulshan, Dhaka 1212</span>
              </div>
              <div className="flex items-start gap-2 justify-center md:justify-start">
                <Mail size={18} className="mt-[2px] text-brand" />
                <span className="leading-snug">hello@furhouzexpatprovider.com</span>
              </div>
              <div className="flex items-start gap-2 justify-center md:justify-start">
                <Phone size={18} className="mt-[2px] text-brand" />
                <span className="leading-snug">+880176 79 11 171</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-4 pb-2 mt-6 md:mt-10 border-t border-[color:var(--brand-700)] small flex flex-col md:flex-row items-center md:justify-between gap-2 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center w-full gap-1.5 text-base text-brand pt-4">
            <span>
              Made <span className="text-sm">❤️</span> with Dhaka.
            </span>
            <span className="md:ml-2">
              Copyright © 2023 FurHouz, All rights reserved
            </span>
          </div>
          <div className="flex justify-center w-full md:w-auto mt-3">
            <FacebookIcon />
          </div>
        </div>
      </div>
    </footer>
    <WhatsAppHelpWidget />
    </>
  );
}
