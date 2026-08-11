import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import Nav from "./components/Nav";
import MotionProvider from "./components/MotionProvider";
import StructuredData from "./components/StructuredData";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

// TODO: set this to the real domain once deployed (used for share links).
const siteUrl = "https://singhsrotishop.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Singh's Roti Shop | West Indian Food in Boston",
  description:
    "Authentic Trinidadian roti, doubles, buss up shut, and curry. Family-owned for 30 years, with locations in Dorchester and Revere Beach.",
  openGraph: {
    title: "Singh's Roti Shop | West Indian Food in Boston",
    description:
      "Authentic Trinidadian roti, doubles, and curry. A two-time Best of Boston winner, family-owned for 30 years in Dorchester and Revere Beach.",
    url: siteUrl,
    siteName: "Singh's Roti Shop",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "A plate of buss up shut at Singh's Roti Shop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Singh's Roti Shop | West Indian Food in Boston",
    description:
      "Authentic Trinidadian roti, doubles, and curry. Family-owned for 30 years in Dorchester and Revere Beach.",
    images: ["/images/hero.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${hanken.variable} h-full scroll-smooth scroll-pt-24 antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StructuredData />
        <MotionProvider>
          <Nav />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}