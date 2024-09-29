import type { ReactNode } from "react";
import "@/styles/global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

type RootLayoutProps = {
  children: ReactNode;
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nicholas Sylke",
  description: "Nicholas Sylke - Java, TypeScript, and Rust",
  metadataBase: new URL("https://nsylke.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Nicholas Sylke",
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
