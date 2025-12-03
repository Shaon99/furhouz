import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/global/Footer";
import Topbar from "@/components/home/Topbar";
import { Providers } from "@/lib/providers";
import NextTopLoader from "nextjs-toploader";
import MetaTags from "@/components/global/MetaTags";
import { fetchSettings } from "@/lib/settings";

/* ===== Font ===== */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await fetchSettings();
  
  return {
    title: settings.meta_title || settings.site_name,
    description: settings.meta_description || '',
    icons: {
      icon: settings.favicon || '/logo.png',
      shortcut: settings.favicon || '/logo.png',
      apple: settings.favicon || '/logo.png',
    },
    openGraph: {
      title: settings.meta_title || settings.site_name,
      description: settings.meta_description || '',
      images: settings.meta_image ? [{ url: settings.meta_image }] : undefined,
      siteName: settings.site_name,
    },
    twitter: {
      card: 'summary_large_image',
      title: settings.meta_title || settings.site_name,
      description: settings.meta_description || '',
      images: settings.meta_image ? [settings.meta_image] : undefined,
    },
  };
}

/* ===== Root Layout ===== */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #064d83,0 0 5px #064d83"
        />
        <Providers>
          <MetaTags />
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
