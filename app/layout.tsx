import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { dictionaries } from "@/data/i18n";
import { getLang, getTheme } from "@/lib/preferences";

// One family for both languages, so Arabic and English feel like the same site.
const readex = Readex_Pro({
  subsets: ["latin", "arabic"],
  weight: ["300", "400", "500"],
  variable: "--font-readex",
  display: "swap",
});

export function generateMetadata(): Metadata {
  const t = dictionaries[getLang()];
  return {
    metadataBase: new URL("https://samar-portfolio-mu.vercel.app"),
    title: {
      default: `${t.name} — ${t.title}`,
      template: `%s — ${t.name}`,
    },
    description: t.metaDescription,
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
      title: `${t.name} — ${t.title}`,
      description: t.metaDescription,
      type: "website",
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = getLang();
  const theme = getTheme();

  // The homepage sets data-motion on <html> before hydration.
  return (
    <html
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
      data-theme={theme}
      className={readex.variable}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-charcoal font-sans antialiased">
        <Navbar lang={lang} theme={theme} />
        <main>{children}</main>
        <Footer />
         <Analytics />
      </body>
    </html>
  );
}
