import type { Metadata } from "next";
import Script from "next/script";
import { geistSans, geistMono } from "./fonts";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Tadabu",
  description: "A simple app to learn and practice the multiplication table in an easy and fun way",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}`} crossOrigin="anonymous"></Script>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
