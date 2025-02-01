import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import { Outfit } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Piotr Stępień Folio",
  description: "My portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} ${outfit.variable} antialiased bg-slate-950`}
      >
        {children}
      </body>
    </html>
  );
}
