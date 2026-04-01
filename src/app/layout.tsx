import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9f9f9" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  title: "Reign Rentals | Luxury Car Rental",
  description:
    "Rent luxury and performance vehicles — from Mercedes-AMG to Porsche 911. Transparent pricing, doorstep delivery, and 24/7 concierge support.",
  keywords: [
    "luxury car rental",
    "performance car rental",
    "rent sports car",
    "premium vehicles",
    "exotic car hire",
    "car rental India",
  ],
  authors: [{ name: "Timothy Thomas" }],
  creator: "Timothy Thomas",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Reign Rentals | Luxury Car Rental",
    description:
      "Rent your dream car today. 200+ luxury vehicles with flexible daily, weekly, and monthly plans.",
    type: "website",
    locale: "en_IN",
    siteName: "Reign Rentals",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reign Rentals | Luxury Car Rental",
    description:
      "Rent your dream car today. 200+ luxury vehicles with flexible daily, weekly, and monthly plans.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
