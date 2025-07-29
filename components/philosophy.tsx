"use client"

import { motion } from "framer-motion"
import { Heart, Target, Users, Zap } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description:
      "We treat every patient with empathy, understanding, and personalized attention to their unique needs.",
  },
  {
    icon: Target,
    title: "Evidence-Based Treatment",
    description: "Our treatments are grounded in the latest research and proven methodologies for optimal outcomes.",
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    description: "We work closely with patients, families, and healthcare providers to ensure comprehensive care.",
  },
  {
    icon: Zap,
    title: "Innovative Techniques",
    description: "We utilize cutting-edge technology and modern techniques to accelerate your recovery process.",
  },
]

export function Philosophy() {
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Philosophy & Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Körper Heil, we believe in holistic healing that addresses not just symptoms, but the root cause of your
            condition. Our patient-centered approach ensures you receive the best possible care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <value.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
