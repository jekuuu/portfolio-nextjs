import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jekib Alam Haque | Portfolio",
  description: "Portfolio of Jekib Alam Haque",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/letter-j-square.svg" />
      </head>
      <body className={inter.className}>
        <>
          <Navbar />
          {children}
          {/* <Footer /> */}
        </>
      </body>
    </html>
  );
}
