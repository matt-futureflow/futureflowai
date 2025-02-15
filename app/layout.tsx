import type { Metadata } from "next";
import { Inter } from 'next/font/google'

import { Poppins } from 'next/font/google'

import "./globals.css";
import {ReactLenis} from "@/lib/lenis";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})


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
        className={`${poppins.variable}  antialiased`}
      >
        {children}
      </body>
      </ReactLenis>
    </html>
  );
}
