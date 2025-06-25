"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Calendar } from "lucide-react"

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Smith",
    degrees: "DPT, MS, OCS",
    specialization: "Orthopedic & Sports Rehabilitation",
    experience: 12,
    image: "/placeholder.svg?height=300&width=300",
    bio: "Specializes in sports injuries and orthopedic rehabilitation with extensive experience in treating professional athletes.",
  },
  {
    id: 2,
    name: "Dr. Michael Johnson",
    degrees: "DPT, PhD, NCS",
    specialization: "Neurological Rehabilitation",
    experience: 15,
    image: "/placeholder.svg?height=300&width=300",
    bio: "Expert in neurological conditions including stroke recovery, spinal cord injuries, and movement disorders.",
  },
  {
    id: 3,
    name: "Dr. Emily Davis",
    degrees: "DPT, MS, CCS",
    specialization: "Cardiopulmonary & Geriatric Care",
    experience: 10,
    image: "/placeholder.svg?height=300&width=300",
    bio: "Focuses on cardiopulmonary rehabilitation and specialized care for elderly patients with complex conditions.",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    degrees: "DPT, MS, SCS",
    specialization: "Manual Therapy & Pain Management",
    experience: 8,
    image: "/placeholder.svg?height=300&width=300",
    bio: "Certified in advanced manual therapy techniques and specializes in chronic pain management and treatment.",
  },
]

export function DoctorGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {doctors.map((doctor, index) => (
        <motion.div
          key={doctor.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative h-64 w-full">
            <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
            <p className="text-blue-600 font-medium mb-2">{doctor.degrees}</p>
            <p className="text-gray-700 font-medium mb-3">{doctor.specialization}</p>

            <div className="flex items-center mb-4">
              <Award className="w-4 h-4 text-yellow-500 mr-2" />
              <span className="text-sm text-gray-600">{doctor.experience} years experience</span>
            </div>

            <p className="text-gray-600 text-sm mb-6 leading-relaxed">{doctor.bio}</p>

            <Button asChild className="w-full">
              <Link href={`/booking?doctor=${encodeURIComponent(doctor.name)}`}>
                <Calendar className="w-4 h-4 mr-2" />
                Book Now
              </Link>
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
