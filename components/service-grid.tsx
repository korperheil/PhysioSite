"use client"

import { motion } from "framer-motion"
import { Activity, Heart, Zap, Shield, Users, Brain, Dumbbell, Stethoscope } from "lucide-react"

const services = [
  {
    id: 1,
    name: "Sports Injury Rehabilitation",
    icon: Activity,
    description:
      "Comprehensive treatment for sports-related injuries including sprains, strains, and overuse injuries.",
    price: "$120",
  },
  {
    id: 2,
    name: "Orthopedic Physical Therapy",
    icon: Shield,
    description: "Post-surgical rehabilitation and treatment for musculoskeletal conditions and joint problems.",
    price: "$100",
  },
  {
    id: 3,
    name: "Neurological Rehabilitation",
    icon: Brain,
    description: "Specialized care for stroke recovery, spinal cord injuries, and neurological movement disorders.",
    price: "$150",
  },
  {
    id: 4,
    name: "Cardiopulmonary Therapy",
    icon: Heart,
    description: "Rehabilitation for heart and lung conditions to improve cardiovascular and respiratory function.",
    price: "$130",
  },
  {
    id: 5,
    name: "Manual Therapy",
    icon: Zap,
    description: "Hands-on techniques including joint mobilization, soft tissue massage, and myofascial release.",
    price: "$90",
  },
  {
    id: 6,
    name: "Geriatric Physical Therapy",
    icon: Users,
    description: "Specialized care for age-related conditions, balance training, and fall prevention.",
    price: "$110",
  },
  {
    id: 7,
    name: "Strength & Conditioning",
    icon: Dumbbell,
    description: "Personalized fitness programs to improve strength, endurance, and overall physical performance.",
    price: "$80",
  },
  {
    id: 8,
    name: "Pain Management",
    icon: Stethoscope,
    description: "Comprehensive approach to chronic pain management using various therapeutic techniques.",
    price: "$140",
  },
]

export function ServiceGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border"
        >
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <service.icon className="w-6 h-6 text-blue-600" />
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.name}</h3>

          <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-blue-600">{service.price}</span>
            <span className="text-sm text-gray-500">per session</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
