import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-body' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-heading' });

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
      <body className={`${inter.variable} ${playfair.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
