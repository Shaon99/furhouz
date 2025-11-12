'use client';

import Link from "next/link";
import Image from "next/image";
import { FacebookIcon, Instagram, Youtube, Linkedin, Twitter, MapPin, Mail, Phone } from "lucide-react";
import { WhatsAppHelpWidget } from "@/components/global/StickyChat";
import { useSettingsQuery } from "@/hooks/queries/useSettingsQuery";
import { SkeletonLogo, SkeletonContactInfo } from "@/components/ui/skeletons";

export default function Footer() {
  const { data: settings, isLoading } = useSettingsQuery();

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
                {isLoading ? (
                  <SkeletonLogo width={200} height={46} />
                ) : settings?.logo ? (
                  <Image
                    src={settings.logo}
                    alt={settings.site_name || "furHouz"}
                    width={1200}
                    height={46}
                    className="object-contain"
                    priority
                  />
                ) : null}
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
            {isLoading ? (
              <div className="mt-2 w-full">
                <SkeletonContactInfo lines={3} />
              </div>
            ) : (
              <div className="flex flex-col gap-1 p text-[#064d83] mt-2 items-center md:items-start">
                {settings?.address && (
                  <div className="flex items-start gap-2 justify-center md:justify-start">
                    <MapPin size={18} className="mt-[2px] text-brand" />
                    <span className="leading-snug">{settings.address}</span>
                  </div>
                )}
                {settings?.email_address && (
                  <div className="flex items-start gap-2 justify-center md:justify-start">
                    <Mail size={18} className="mt-[2px] text-brand" />
                    <span className="leading-snug">{settings.email_address}</span>
                  </div>
                )}
                {settings?.phone_number && (
                  <div className="flex items-start gap-2 justify-center md:justify-start">
                    <Phone size={18} className="mt-[2px] text-brand" />
                    <span className="leading-snug">{settings.phone_number}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-4 pb-2 mt-6 md:mt-10 border-t border-[color:var(--brand-700)] small flex flex-col md:flex-row items-center md:items-start md:justify-between gap-2 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-start w-full md:w-auto gap-1.5 text-base text-brand pt-4">
            <span>
              Made <span className="text-sm">❤️</span> with Dhaka.
            </span>
            <span className="md:ml-2">
              Copyright © {new Date().getFullYear()} {settings?.site_name || 'FurHouz'}, All rights reserved
            </span>
          </div>
          {(settings?.fb_link || settings?.instagram_link || settings?.youtube_link || settings?.linkedin_link || settings?.twitter_link) && (
            <div className="flex justify-center md:justify-end w-full md:w-auto mt-3 md:mt-0 gap-3">
              {settings?.fb_link && (
                <a href={settings.fb_link} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                  <FacebookIcon size={20} />
                </a>
              )}
              {settings?.instagram_link && (
                <a href={settings.instagram_link} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                  <Instagram size={20} />
                </a>
              )}
              {settings?.youtube_link && (
                <a href={settings.youtube_link} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                  <Youtube size={20} />
                </a>
              )}
              {settings?.linkedin_link && (
                <a href={settings.linkedin_link} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                  <Linkedin size={20} />
                </a>
              )}
              {settings?.twitter_link && (
                <a href={settings.twitter_link} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                  <Twitter size={20} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </footer>
    <WhatsAppHelpWidget />
    </>
  );
}
