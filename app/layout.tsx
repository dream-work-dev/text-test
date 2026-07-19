import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const vercelHostname =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelHostname ? `https://${vercelHostname}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Benjamin Dean | Senior Software Engineer",
  description: "Backend-focused senior software engineer specializing in distributed systems, cloud infrastructure, streaming data, and observability.",
  openGraph: {
    title: "Benjamin Dean | Senior Software Engineer",
    description: "Distributed systems. Streaming data. Cloud infrastructure. Observability.",
    images: [{ url: "/og-v2.png", width: 1774, height: 887, alt: "Benjamin Dean - Senior Software Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Benjamin Dean | Senior Software Engineer",
    description: "Distributed systems. Streaming data. Cloud infrastructure. Observability.",
    images: ["/og-v2.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={geistMono.variable}>{children}</body>
    </html>
  );
}
