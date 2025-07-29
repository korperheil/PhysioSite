import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Körper Heil - Expert Physiotherapy & Rehabilitation Services",
    template: "%s | Körper Heil",
  },
  description:
    "Leading physiotherapy clinic offering expert rehabilitation services, sports injury treatment, and wellness programs. Book your appointment today.",
  keywords: ["physiotherapy", "rehabilitation", "sports injury", "physical therapy", "wellness", "pain management"],
  authors: [{ name: "Körper Heil" }],
  creator: "Körper Heil",
  publisher: "Körper Heil",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://Körper-Heil.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Körper Heil - Expert Physiotherapy Services",
    description:
      "Leading physiotherapy clinic offering expert rehabilitation services, sports injury treatment, and wellness programs.",
    url: "https://Körper-Heil.com",
    siteName: "PhysioHeal Clinic",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Körper Heil",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Körper Heil - Expert Physiotherapy Services",
    description:
      "Leading physiotherapy clinic offering expert rehabilitation services, sports injury treatment, and wellness programs.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
