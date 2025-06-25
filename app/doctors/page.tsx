import type { Metadata } from "next"
import { DoctorGrid } from "@/components/doctor-grid"
import { StructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Our Expert Physiotherapists",
  description:
    "Meet our team of qualified physiotherapists specializing in sports injury, rehabilitation, and wellness treatments.",
  alternates: {
    canonical: "/doctors",
  },
}

export default function DoctorsPage() {
  return (
    <>
      <StructuredData type="doctors" />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Physiotherapists</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our team of highly qualified physiotherapists dedicated to helping you achieve optimal health and
            mobility.
          </p>
        </div>
        <DoctorGrid />
      </div>
    </>
  )
}
