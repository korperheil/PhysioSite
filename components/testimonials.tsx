"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Gulshan Kumar",
    role: "Patient",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Excellent service! The physiotherapist was very knowledgeable and explained everything clearly. I felt comfortable and well-cared for throughout my treatment.",
  },
  {
    name: "Vanshika Lila",
    role: "Patient",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Best physio centre (Korper Heil) I have ever visited. Dr Shalini and Dr Akash were really respectful and friendly, they treated me really well. I was in a lot of pain and felt very relaxed after a single session. Highly recommended.",
  },
  {
    name: "Chetan Gola",
    role: "Patient",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Last 2 saal se I was having back and neck problems, and my life was living hell with this pain. After 10-15 days sessions now my back and neck are feeling better. Thanks to Dr Shalini for my well being. Great place to visit. I will suggest everyone visit once must.",
  },
  {
    name: "Chetan Parasar",
    role: "Patient",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Kaafi time se mujhe leg pain aur stiffness ki problem thi, lekin yahan aane ke baad kaafi improvement hui. Dr. Akash bahut hi patient aur professional Dr. hai, har session mein proper exercises aur therapy karayi. Clinic ka environment bhut clean hai, appointments time pe hui sabhi. Sirf kuch hi sessions ke baad pain bhut kam ho gaya aur walking bhi smooth ho gayi. Thanks to Dr. Akash.",
  },
  {
    name: "Shyam Sontiyal",
    role: "Patient",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "My name is Shyam Singh, I am having neck pain from last 4 years, I tried everything and took a lot of medicine but nothing worked. After taking 10 days treatment from Dr Shalini my pain gone miraculously. I suggest everyone to visit here once.",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1) // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2) // Tablet: 2 cards
      } else {
        setItemsPerView(3) // Desktop: 3 cards
      }
    }

    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - itemsPerView)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0))
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
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

        <div className="relative px-8 sm:px-12">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex >= maxIndex}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Testimonials Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: `-${currentIndex * (100 / itemsPerView)}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gray-50 p-6 sm:p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 h-full">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <blockquote className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                      "{testimonial.text}"
                    </blockquote>

                    <div className="flex items-center">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
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
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          {maxIndex > 0 && (
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}