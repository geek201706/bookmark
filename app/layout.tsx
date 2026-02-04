import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from 'react';
import './globals.css';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MindfulPath - Your Journey to Mental Wellness",
  description: "Find peace, balance, and clarity with our supportive tools and resources for mental health and wellness.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}


