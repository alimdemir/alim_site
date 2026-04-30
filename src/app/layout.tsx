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
  title: "Alim Demir - Yapay Zeka Mühendisi",
  description: "Alim Demir, Makine Öğrenmesi, Derin Öğrenme ve NLP uzmanlıklarına sahip bir Yapay Zeka Mühendisidir.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`dark ${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="bg-background text-foreground min-h-screen">
        {children}
      </body>
    </html>
  );
}
