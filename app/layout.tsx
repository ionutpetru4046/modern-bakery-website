import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { CartProvider } from "../context/CartContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Velora Bakery",
  description: "Luxury artisan bakery experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // Remove data-scroll-behavior as it's not a standard html attribute to avoid React/Next warning
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable
      )}
      style={{ scrollBehavior: "smooth" }} // Apply smooth scroll via style
    >
      <body className="min-h-full flex flex-col bg-[#0F0F0F] text-white">
        <CartProvider>
          <Navbar />
          <main className="flex-1 pt-20">{children}</main>
          {/* Add global footer for full layout consistency */}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}