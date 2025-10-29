import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/global/Footer";
import Topbar from "@/components/home/Topbar";

/* ===== Font ===== */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FurHouz",
  description: "A clean and modern property platform UI",
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
        <main>
          <Topbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
