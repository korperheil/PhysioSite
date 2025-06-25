import type { Metadata } from "next"
import { BookingForm } from "@/components/booking-form"

export const metadata: Metadata = {
  title: "Book Appointment",
  description: "Schedule your physiotherapy appointment online. Choose your preferred doctor, service, and time slot.",
  alternates: {
    canonical: "/booking",
  },
}

export default function BookingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Your Appointment</h1>
          <p className="text-xl text-gray-600">Schedule your consultation with our expert physiotherapists</p>
        </div>
        <BookingForm />
      </div>
    </div>
  )
}
