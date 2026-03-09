import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WePark — We Engineer Space | Smart Parking Solutions",
  description:
    "Double your parking capacity without expanding your footprint. WePark engineers intelligent vertical parking systems — Stack & Pit solutions for apartments, villas, and commercial spaces in Coimbatore and beyond.",
  keywords:
    "parking solutions, vertical parking, stack parking, pit parking, Coimbatore, apartment parking, mechanical parking, hydraulic parking system, WePark",
  openGraph: {
    title: "WePark — We Engineer Space",
    description:
      "Double your parking capacity without expanding your footprint. Intelligent vertical parking systems for modern India.",
    url: "https://wepark.co.in",
    siteName: "WePark",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-[Inter] antialiased">{children}</body>
    </html>
  );
}
