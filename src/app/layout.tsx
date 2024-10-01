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
  title: {
    template: "%s | Nicholas Sylke",
    default: "Nicholas Sylke - Software Engineer",
  },
  description:
    "Nicholas Sylke is a Software Engineer with a passion for building secure and scalable applications.",
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
      <body className="text-zinc-950 antialiased lg:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:lg:bg-zinc-950">
        {children}
      </body>
    </html>
  );
}
