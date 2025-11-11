"use client";

import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

import { Menu } from "lucide-react";
import Search from './Search';

const NAV_LINKS = [
  { href: "/property", label: "APARTMENTS" },
  { href: "/property-owner", label: "PROPERTY OWNER" },
  { href: "/faq", label: "SUPPORT" },
  { href: "/corporates", label: "CORPORATE" },
];

const Topbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isLayoutUsage = pathname !== "/";

  useEffect(() => {
    // Set initial scroll state based on current scroll position
    const checkScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    // Check initial scroll position
    checkScroll();
    
    // Add scroll listener for all pages
    const onScroll = () => {
      checkScroll();
    };
    
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isLayoutUsage]);

  // Nav text coloring
  const navTextClass = (isScrolled || isLayoutUsage) ? "text-gray-600" : "text-white";

  // Topbar classes based on mode
  let topbarClass =
    "w-full left-0 top-0 z-50 py-5 flex items-center h-20 ";
  if (isLayoutUsage || isScrolled) {
    topbarClass += "bg-white border-b border-gray-100 fixed shadow-sm";
  } else {
    topbarClass += "bg-transparent absolute";
  }

  // Check if we should show only search on mobile/md when scrolled (works on all pages)
  const showSearchOnly = isScrolled;

  return (
    <div
      className={topbarClass}
      style={{ backdropFilter: (!isLayoutUsage && !isScrolled) ? '' : undefined }}
    >
      <div className="container flex items-center h-full mx-auto">
        {/* Mobile/MD: Show Search when scrolled, with menu icon on right */}
        {showSearchOnly ? (
          <>
            <div className="flex-1 lg:hidden px-4 pr-2">
              <Search 
                compact={true} 
                onSearch={(place) => {
                  console.log('search:', place);
                }} 
              />
            </div>
            {/* Right: Menu Icon - always visible on mobile/md when scrolled */}
            <div className="flex lg:hidden min-w-[44px] justify-end">
              <Sheet>
                <SheetTrigger asChild>
                  <button
                    aria-label="Open menu"
                    className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 focus:outline-none"
                  >
                    <Menu size={28} className={`${navTextClass} text-brand`} />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64 lg:w-80 p-0">
                  <SheetHeader>
                    <div className="flex items-center p-4 border-b">
                      <Link href="/" className="flex items-center gap-2" tabIndex={-1}>
                        <Image src="/logo.png" alt="Logo" width={100} height={100} priority />
                      </Link>
                      {/* Single cross icon, not doubled */}
                      <SheetClose asChild>
                        <button
                          aria-label="Close menu"
                          className="ml-auto p-2 rounded-md hover:bg-gray-100 focus:outline-none"
                        >
                        </button>
                      </SheetClose>
                    </div>
                  </SheetHeader>
                  <nav className="flex flex-col px-4 py-8 space-y-6 font-bold uppercase tracking-wider text-gray-700 text-lg">
                    {NAV_LINKS.map(link => {
                      const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
                      return (
                        <SheetClose asChild key={link.href}>
                          <Link
                            href={link.href}
                            className={`hover:text-[#00A6D6] transition-colors ${
                              isActive ? 'text-[#00A6D6]' : ''
                            }`}
                          >
                            {link.label}
                          </Link>
                        </SheetClose>
                      );
                    })}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </>
        ) : (
          <>
            {/* Left: Logo */}
            <div className="flex items-center min-w-[120px]">
              <Link href="/">
                <Image src="/logo.png" alt="Logo" width={150} height={150} priority />
              </Link>
            </div>

            {/* Center: Nav Links (hidden on md and down) */}
            <nav className="flex-1 flex justify-center">
              <div className={`hidden lg:flex items-center space-x-8 font-bold uppercase tracking-wider ${navTextClass} text-[18px]`}>
                {NAV_LINKS.map(link => {
                  const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`hover:text-[#00A6D6] transition-colors ${
                        isActive ? 'text-[#00A6D6]' : ''
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </nav>
            {/* Right: Menu Icon (only shown on small screens, never on md+) - always visible */}
            <div className="flex lg:hidden min-w-[44px] justify-end">
              <Sheet>
                <SheetTrigger asChild>
                  <button
                    aria-label="Open menu"
                    className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 focus:outline-none"
                  >
                    <Menu size={28} className={`${navTextClass} text-brand`} />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64 lg:w-80 p-0">
                  <SheetHeader>
                    <div className="flex items-center p-4 border-b">
                      <Link href="/" className="flex items-center gap-2" tabIndex={-1}>
                        <Image src="/logo.png" alt="Logo" width={100} height={100} priority />
                      </Link>
                      {/* Single cross icon, not doubled */}
                      <SheetClose asChild>
                        <button
                          aria-label="Close menu"
                          className="ml-auto p-2 rounded-md hover:bg-gray-100 focus:outline-none"
                        >
                        </button>
                      </SheetClose>
                    </div>
                  </SheetHeader>
                  <nav className="flex flex-col px-4 py-8 space-y-6 font-bold uppercase tracking-wider text-gray-700 text-lg">
                    {NAV_LINKS.map(link => {
                      const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
                      return (
                        <SheetClose asChild key={link.href}>
                          <Link
                            href={link.href}
                            className={`hover:text-[#00A6D6] transition-colors ${
                              isActive ? 'text-[#00A6D6]' : ''
                            }`}
                          >
                            {link.label}
                          </Link>
                        </SheetClose>
                      );
                    })}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </>
        )}
        {/* Right: Blank for desktop menu */}
        <div className="hidden lg:flex min-w-[120px]"></div>
      </div>
    </div>
  )
}

export default Topbar