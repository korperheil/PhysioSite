"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Calendar } from "lucide-react"

const doctors = [
  {
    id: 1,
    name: "Dr. Shalini Jainth (PT)",
    qualifications: "BPT, MPT(Neuro Physiotherapy), Physiotherapy, MIAP, DCPT",
    certifications: "AFPA Certified Antenatal & Postnatal Coach ",
    experience: "9+ years in neurorehabilitation",
    image: "/placeholder.svg?height=300&width=300",
    expertise: "Stroke recovery, spinal cord injuries, movement disorders, Women Healthcare - Ante-natal & Post Natal care, Post Natal weight management Yoga",
    previous_affiliations: [
      "MAX Hospital, Pitampura",
      "BLK Hospital, Karol Bagh",
    ],
  },
  {
    id: 2,
    name: "Dr. Akash Jainth (PT) ",
    qualifications: "BPT (IPH), MPT (Musculoskeletal), MIAP, DCPT",
    certifications: "Neurological Rehabilitation",
    experience: "9+ years in orthopaedic and sports rehabilitation",
    image: "/placeholder.svg?height=300&width=300",
    expertise: " Chiropractic care, Spine-related conditions, Sports injuries & orthopaedic rehabilitation, Postural correction & management, Pilates instruction, Ergonomics, Treatment of professional athletes, Manual Therapy ",
    previous_affiliations: [
      "Tulasi Healthcare, Gurugram",
      "BLK Hospital, Karol Bagh",
      "Safdarjung Hospital, Delhi",
    ],
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
            <p className="text-blue-600 font-medium mb-2">{doctor.qualifications}</p>
            <p className="text-gray-700 font-medium mb-3">{doctor.certifications}</p>

            <div className="flex items-center mb-4">
              <Award className="w-4 h-4 text-yellow-500 mr-2" />
              <span className="text-sm text-gray-600">{doctor.experience} </span>
            </div>

            <p className="text-gray-600 text-sm mb-6 leading-relaxed">{doctor.expertise}</p>
    <p className="text-gray-700 font-medium mb-3"> 
      <div>Previous Affiliations: </div> 
      {Array.isArray(doctor.previous_affiliations)
        ? (doctor.previous_affiliations ?? []).map((aff, i, arr) => (
            <span key={i}>
              {aff}
              {i !== (arr.length - 1) && <br />}
            </span>
          ))
        : doctor.previous_affiliations}</p>
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
