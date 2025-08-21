import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"


const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

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
    <html lang="en" className={`${montserrat.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={montserrat.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat
          phoneNumber="9910772756"
          message="Hello! I would like to inquire about your physiotherapy services at Körper Heil."
        />
      </body>
    </html>
  )
}