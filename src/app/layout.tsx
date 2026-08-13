import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const shareTechMono = Share_Tech_Mono({ weight: '400', subsets: ["latin"], variable: '--font-body' });

export const metadata: Metadata = {
  title: "Perfect Landing: Comfort Food | Malaysian Traditional Food",
  description: "A harmonious blend of Malay, Chinese, and Indian flavors that warms the heart and soul.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={shareTechMono.className} style={{ '--font-heading': 'var(--font-body)' } as React.CSSProperties}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
