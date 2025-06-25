import type { Metadata } from "next"
import { ServiceGrid } from "@/components/service-grid"
import { StructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Physiotherapy Services",
  description:
    "Comprehensive physiotherapy services including sports injury treatment, rehabilitation, pain management, and wellness programs.",
  alternates: {
    canonical: "/services",
  },
}

export default function ServicesPage() {
  return (
    <>
      <StructuredData type="services" />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive physiotherapy services tailored to your specific needs and recovery goals.
          </p>
        </div>
        <ServiceGrid />
      </div>
    </>
  )
}
