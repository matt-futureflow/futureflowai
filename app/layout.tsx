import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {} from "next/font/google"
import "./globals.css";
import {ReactLenis} from "@/lib/lenis";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FutureFlow AI",
  description: "FutureFlow AI is a powerful AI-driven lead generation system for SMBs and Agencies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      </ReactLenis>
    </html>
  );
}
