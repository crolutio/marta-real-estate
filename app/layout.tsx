import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageTransition } from "@/components/page-transition";
import { Toaster } from "@/components/ui/sonner";
import { SEO, AGENCY } from "@/lib/constants";

// Mulish - titles (uppercase labels), subtitles (headings), body
const mulishExtraBold = localFont({
  src: "../public/fonts/Mulish-ExtraBold.ttf",
  variable: "--font-title",
  display: "swap",
});

const mulishSemiBold = localFont({
  src: "../public/fonts/Mulish-SemiBold.ttf",
  variable: "--font-subtitle",
  display: "swap",
});

const mulishExtraLight = localFont({
  src: "../public/fonts/Mulish-ExtraLight.ttf",
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SEO.defaultTitle,
    template: `%s | ${SEO.siteName}`,
  },
  description: SEO.defaultDescription,
  keywords: [...SEO.defaultKeywords],
  authors: [{ name: AGENCY.fullName }],
  creator: AGENCY.fullName,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: SEO.siteName,
    title: SEO.defaultTitle,
    description: SEO.defaultDescription,
    images: [
      {
        url: SEO.ogImage,
        width: 1200,
        height: 630,
        alt: SEO.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.defaultTitle,
    description: SEO.defaultDescription,
    images: [SEO.ogImage],
    creator: SEO.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mulishExtraBold.variable} ${mulishSemiBold.variable} ${mulishExtraLight.variable} font-body antialiased`}
      >
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
          <SiteFooter />
        </div>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
