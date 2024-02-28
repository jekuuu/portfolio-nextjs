import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import "./globals.css";
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
import Script from "next/script";
config.autoAddCss = false; /* eslint-disable import/first */

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jekib Alam Haque | Portfolio | Senior React Developer",
  description: `Jekib Alam Haque's portfolio. He is a senior frontend engineer with more than 7 years of industry experienced.`,
  authors: [{ name: "Jekib Alam Haque" }],
  keywords: [
    "Jekib",
    "Jekib Alam Haque",
    "Senior React Developer",
    "portfolio",
    "Nextjs",
    "Javascript",
    "Html",
    "Css",
    "Tailwind Css",
  ],
  openGraph: {
    type: "profile",
    title: "Jekib Alam Haque | Portfolio | Senior React Developer",
    description: `Jekib Alam Haque's portfolio. He is a senior frontend engineer with more than 7 years of industry experienced.`,
    firstName: "Jekib",
    countryName: "India",
    url: "https://www.jekibalamhaque.in/",
    lastName: "haque",
    images: ["/images/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: "Jekib Alam Haque",
    url: "https://www.jekibalamhaque.in/",
    image:
      "https://www.jekibalamhaque.in/_next/image?url=%2Fimages%2Fprofile.jpg&w=3840&q=10",
    sameAs: [
      "https://www.linkedin.com/in/jekibalamhaque/",
      "https://github.com/jekuuu",
      "https://www.jekibalamhaque.in/",
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/letter-j-square.svg" />
      </head>
      <body className={inter.className}>
        <>
          <Navbar />
          {children}
          <Analytics />
          <Footer />
        </>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script src="./clarity.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
