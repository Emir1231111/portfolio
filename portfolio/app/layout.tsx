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
  title: "Emir Kolasinac — Fullstack Web Developer",
  description: "Moderan, premium portfolio koje prikazuje fullstack web razvoj, UI/UX dizajn i product-focused engineering.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Emir Kolasinac — Fullstack Web Developer",
    description:
      "Moderan portfolio koje prikazuje fullstack web razvoj, UI/UX dizajn i product-focused engineering.",
    url: "https://example.com",
    siteName: "Emir Kolasinac Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Emir Kolasinac Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
