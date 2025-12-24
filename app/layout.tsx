import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dinusha | QA Automation Engineer",
  description: "QA Automation Engineer specializing in Cypress, Playwright, API Testing, and Performance Testing with k6.",

   keywords: [
    "QA Automation Engineer",
    "Software Tester",
    "Automation Tester",
    "Cypress Automation",
    "Playwright Automation",
    "End to End Testing",
    "UI Automation",
    "API Testing",
    "Performance Testing",
    "k6 Testing",
    "Manual Testing",
    "Test Automation Portfolio",
    "JavaScript Automation",
    "TypeScript Automation",
    "Quality Assurance Engineer",
    "SDET Portfolio",
  ],

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
        {children}
      </body>
    </html>
  );
}
