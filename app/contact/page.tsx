import type { Metadata } from "next"
import { ContactInfo } from "@/components/contact-info"
import { ContactForm } from "@/components/contact-form"
import { GoogleMap } from "@/components/google-map"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with PhysioHeal Clinic. Find our location, contact details, and opening hours.",
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600">Get in touch with us for appointments, inquiries, or more information</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <ContactInfo />
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
        <div>
          <GoogleMap />
        </div>
      </div>
    </div>
  )
}
