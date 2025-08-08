"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 9910772756"],
    action: "",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["korper.heil@gmail.com "],
    action: "mailto:korper.heil@gmail.com",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["C-31, 2nd Floor, RDC, Raj Nagar, Ghaziabad, Uttar Pradesh 201002"],
    action: null,
  },
  {
    icon: Clock,
    title: "Opening Hours",
    details: ["Mon-Sun: 8:00 AM - 8:00 PM"],
    action: null,
  },
]

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>

        <div className="space-y-6">
          {contactDetails.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                {item.details.map((detail, i) => (
                  <div key={i} className="text-gray-600">
                    {item.action ? (
                      <a href={item.action} className="hover:text-blue-600 transition-colors">
                        {detail}
                      </a>
                    ) : (
                      detail
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
