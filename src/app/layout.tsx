import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: "OG Image Test",
  description: "A pet project to test Open Graph image previews.",
  openGraph: {
    title: "OG Image Test",
    description: "A pet project to test Open Graph image previews.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OG Image Test",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OG Image Test",
    description: "A pet project to test Open Graph image previews.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}
