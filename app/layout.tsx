import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import Script from "next/script"
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
    url: "https://korperheil.com",
    siteName: "Korper Heil Clinic",
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
  generator: "v0.dev",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

    {/* Meta Pixel - loads SDK then initializes */}
    <Script
      id="meta-pixel-sdk"
      strategy="afterInteractive"
      src="https://connect.facebook.net/en_US/fbevents.js"
    />
    {/* <!-- Meta Pixel Code --> */}
    <Script id="meta-pixel-init" strategy="afterInteractive">
      {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '4255799317975318');fbq('track', 'PageView');`}
    </Script>
    <noscript>
      <img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=4255799317975318&ev=PageView&noscript=1" />
    </noscript>
    {/* <!-- End Meta Pixel Code --> */}
      </head>
      <body className={montserrat.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat
          phoneNumber="919910772756"
          message="Hello! I would like to inquire about your physiotherapy services at Körper Heil."
        />
      </body>
    </html>
  )
}