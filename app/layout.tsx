import type { Metadata } from "next";
import { Google_Sans } from "next/font/google";
import "./globals.css";

const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Babcock Tech Week | 29-30 September 2026",
  description:
    "Join 28,000+ attendees at Babcock Tech Week 2026 – the leading technology event with 500+ cutting-edge innovations and 550+ speakers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${googleSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
