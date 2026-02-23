import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kicks Store | Sneakers & Lifestyle",
  description: "The biggest hyperstore in the universe for sneakers.",
};

import { StoreProvider } from "@/components/providers/StoreProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-[#F6F6F6]`}
        suppressHydrationWarning
      >
        <StoreProvider>
          <Navbar />
          <main className="min-h-[60vh]">
            {children}
          </main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
