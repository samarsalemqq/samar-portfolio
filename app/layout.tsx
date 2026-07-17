import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/siteConfig";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://samar-portfolio-mu.vercel.app"),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s — ${siteConfig.name}`,
  },
  description:
    "Portfolio of Samar Alqahtani, a Saudi software engineer building iOS apps, React Native experiences, and UI/UX-driven products.",
  keywords: [
    "Samar Alqahtani",
    "Software Engineer",
    "iOS Developer",
    "React Native Developer",
    "UI/UX Designer",
    "Saudi Arabia",
    "SwiftUI",
  ],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description:
      "I build intuitive mobile applications and digital experiences, with experience in iOS development, React Native, API integration, and UI/UX design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-charcoal font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
         <Analytics />
      </body>
    </html>
  );
}
