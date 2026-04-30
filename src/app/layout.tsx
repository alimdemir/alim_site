import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
        <Script id="crisp-widget" strategy="afterInteractive">
          {`window.$crisp=[];window.CRISP_WEBSITE_ID="49dd1911-33be-447b-8fa3-49f5559e9ea3";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`}
        </Script>
      </body>
    </html>
  );
}
