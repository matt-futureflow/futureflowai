import type { Metadata } from "next";
import {DM_Sans}  from 'next/font/google'

import "./globals.css";


const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
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
      
      <body
        className={`${dm_sans.variable}  antialiased`}
      >
        {children}
      </body>
      
    </html>
  );
}
