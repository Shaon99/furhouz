import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/global/Footer";
import Topbar from "@/components/home/Topbar";
import { Providers } from "@/lib/providers";
import NextTopLoader from "nextjs-toploader";
import MetaTags from "@/components/global/MetaTags";

/* ===== Font ===== */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FurHouz",
  description: "FurHouz is a property platform that helps you find your dream home.",
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: "FurHouz",
    description: "FurHouz is a property platform that helps you find your dream home.",
    images: '/logo.png',
  },
};

/* ===== Root Layout ===== */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-background text-foreground overflow-x-hidden`}>
        <NextTopLoader
          color="#064d83"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #064d83,0 0 5px #064d83"
        />
        <Providers>
          <MetaTags />
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
