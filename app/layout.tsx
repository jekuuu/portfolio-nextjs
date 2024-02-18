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
config.autoAddCss = false; /* eslint-disable import/first */

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jekib Alam Haque | Portfolio",
  description: `As a Senior Engineering Lead at Persistent Systems, I develop and design web applications for clients using cutting-edge technologies such as React, TypeScript. I collaborate with the US team for technical discussions and code reviews, and establish reusable components for code efficiency and future maintenance. I also implement unit tests for stability and bug reduction, and deploy the applications using Docker and Kubernetes.
  I have over seven years of experience in web development, working with different JavaScript frameworks and libraries, such as React, Next, Redux, and Node. I have transitioned older web applications to microfrontends, developed APIs with Java Spring Boot, and overseen release management and PR validation pipelines. I have also contributed to test case creation, elevating test coverage to over 90%, and addressed performance challenges and vulnerabilities in live applications. I hold a Bachelor of Engineering in Computer Science and Engineering from Gauhati University. I am passionate about creating user-friendly, scalable, and secure web solutions that meet the needs and expectations of the clients.`,
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
      </body>
    </html>
  );
}
