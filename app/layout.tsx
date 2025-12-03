import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/global/Footer";
import Topbar from "@/components/home/Topbar";
import { Providers } from "@/lib/providers";
import NextTopLoader from "nextjs-toploader";
import SuppressHydrationWarning from "@/components/global/SuppressHydrationWarning";
import ScrollToTop from "@/components/global/ScrollToTop";
import { fetchSettings } from "@/lib/settings";
import React from "react";

/* ===== Font ===== */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

type RootLayoutProps = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  // Server-side fetch settings (safe fallback to null)
  let settings: any = null;
  try {
    settings = await fetchSettings();
  } catch (e) {
    settings = null;
  }

  // Consolidate meta data once
  const meta = {
    title: settings?.meta_title ?? settings?.site_name ?? "Furhouz",
    description:
      settings?.meta_description ?? "Furhouz is the best furnished apartments provider.",
    image: settings?.meta_image ?? settings?.logo ?? "/default-meta-image.png",
    favicon: settings?.favicon ?? null,
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <title>{meta.title}</title>
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.description} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />

        {meta.favicon && <link rel="icon" href={meta.favicon} />}
      </head>
      <body
        className={`${inter.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        {/* Prevent hydration mismatch flashes inside client components */}
        <SuppressHydrationWarning />

        <NextTopLoader
          color="#064d83"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
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