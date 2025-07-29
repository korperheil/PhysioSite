"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Phone, MapPin } from "lucide-react"

const quickLinks = [
  {
    icon: Calendar,
    title: "Book Appointment",
    description: "Schedule your consultation online",
    href: "/booking",
    color: "bg-blue-600 hover:bg-blue-700",
  },
  {
    icon: Users,
    title: "Meet Our Doctors",
    description: "Learn about our expert team",
    href: "/doctors",
    color: "bg-green-600 hover:bg-green-700",
  },
  {
    icon: Phone,
    title: "Emergency Contact",
    description: "Call us for urgent care",
    href: "tel:+91 9910772756",
    color: "bg-red-600 hover:bg-red-700",
  },
  {
    icon: MapPin,
    title: "Find Us",
    description: "Get directions to our clinic",
    href: "/contact",
    color: "bg-purple-600 hover:bg-purple-700",
  },
]

export function QuickLinks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Quick Access</h2>
          <p className="text-xl text-gray-600">Everything you need, just a click away</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Button
                asChild
                className={`w-full h-auto p-6 ${link.color} text-white flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-300`}
              >
                <Link href={link.href}>
                  <link.icon className="w-8 h-8" />
                  <div className="text-center">
                    <div className="font-semibold text-lg mb-1">{link.title}</div>
                    <div className="text-sm opacity-90">{link.description}</div>
                  </div>
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
