import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/global/Footer";
import Topbar from "@/components/home/Topbar";
import { Providers } from "@/lib/providers";
import NextTopLoader from "nextjs-toploader";
import SuppressHydrationWarning from "@/components/global/SuppressHydrationWarning";
import ScrollToTop from "@/components/global/ScrollToTop";
import React from "react";
import { Metadata } from "next";
import { fetchSettings } from "@/lib/settings";

// ===== Font Setup =====
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Cache metadata fetch for 1 hour
export const revalidate = 3600;

// Default metadata values
const DEFAULTS = {
  title: "Furhouz is the best furnished apartments provider.",
  description: "Furhouz is the best furnished apartments provider.",
  image: "/placeholder.png",
  icon: "/favicon.png",
  url: "https://furhouz.com",
  type: "website" as const,
  siteName: "Furhouz",
};

// Helper to build Metadata object
const buildMetadata = ({
  title,
  description,
  image,
  icon,
  url,
  type,
  siteName,
}: {
  title: string;
  description: string;
  image: string;
  icon: string;
  url: string;
  type: string;
  siteName: string;
}): Metadata => ({
  metadataBase: new URL(url),
  title,
  description,
  openGraph: {
    title,
    description,
    images: [{ url: image }],
    siteName,
    url,
    type,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
  icons: {
    icon,
    shortcut: icon,
    apple: icon,
  },
});

// Generate dynamic metadata using settings API, fallback to defaults
export async function generateMetadata(): Promise<Metadata> {
  try {
    const settings = await fetchSettings();
    const data = settings?.data || {};

    const meta = {
      title: data.meta_title?.trim() || DEFAULTS.title,
      description: data.meta_description?.trim() || DEFAULTS.description,
      image: data.meta_image?.trim() || DEFAULTS.image,
      icon: data.favicon?.trim() || DEFAULTS.icon,
      url: DEFAULTS.url,
      type: DEFAULTS.type,
      siteName: data.site_name?.trim() || DEFAULTS.siteName,
    };
    return buildMetadata(meta);
  } catch {
    return buildMetadata(DEFAULTS);
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-background text-foreground overflow-x-hidden`}
        suppressHydrationWarning
      >
        <SuppressHydrationWarning />
        <NextTopLoader
          color="#064d83"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #064d83,0 0 5px #064d83"
        />
        <Providers>
          <ScrollToTop />
          <main>
            <Topbar />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}