"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marathon Runner",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "After my knee injury, I thought my running days were over. The team at PhysioHeal not only helped me recover but made me stronger than before. I completed my first marathon post-injury last month!",
  },
  {
    name: "Michael Chen",
    role: "Office Worker",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Years of desk work had given me chronic back pain. The personalized treatment plan and ergonomic advice from PhysioHeal completely transformed my daily life. No more pain!",
  },
  {
    name: "Emma Rodriguez",
    role: "Senior Citizen",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "At 72, I was struggling with mobility issues. The compassionate care and gentle exercises prescribed by Dr. Smith have given me my independence back. I can now play with my grandchildren again!",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real patients who have transformed their lives through our care
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</blockquote>

              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
