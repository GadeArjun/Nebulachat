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

export const metadata = {
  title: "NebulaChat – Anonymous, Ephemeral Chat Platform",
  description: "NebulaChat is a free, global platform for anonymous, ephemeral conversations. No signups, no storage, just real talk.",
  keywords: [
    "Anonymous Chat",
    "Ephemeral Chat",
    "Private Messaging",
    "NebulaChat",
    "Real-time Chat",
  ],
  manifest:"/manifest.json",
  authors: [{ name: "NebulaChat Team", url: "https://nebulachat.onrender.com" }],
  creator: "NebulaChat Team",
  publisher: "NebulaChat",
  openGraph: {
    title: "NebulaChat – Connect Instantly. Chat Anonymously.",
    description: "A free, global platform for ephemeral, anonymous conversations. No signups, no storage, just real talk.",
    url: "https://nebulachat.onrender.com",
    siteName: "NebulaChat",
    images: [
      {
        url: "https://nebulachat.onrender.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "NebulaChat",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NebulaChat – Connect Instantly. Chat Anonymously.",
    description: "A free, global platform for ephemeral, anonymous conversations.",
    images: ["https://nebulachat.onrender.com/og-image.png"],
    site: "@NebulaChat",
    creator: "@NebulaChat",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        {/* PWA / Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6B46C1" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
