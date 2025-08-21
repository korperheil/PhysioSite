"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const featuredFaqs = [
  {
    id: 1,
    question: "What Is A Physiotherapist And How Can They Help Me?",
    answer: "A physiotherapist is a healthcare professional specializing in movement disorders, pain management, and physical rehabilitation. At Körper Heil, our expert physiotherapists use evidence-based treatments including manual therapy, therapeutic exercises, electrotherapy, and innovative techniques to help restore your mobility, reduce pain, and prevent future injuries."
  },
  {
    id: 2,
    question: "How Is Körper Heil Physiotherapy Better Than Other Service Providers In Ghaziabad?",
    answer: "Körper Heil stands out with our holistic healing approach, addressing root causes rather than just symptoms. Our experienced team (Dr. Shalini and Dr. Akash) provides compassionate, personalized care using cutting-edge technology and modern techniques. We maintain a collaborative approach with patients and healthcare providers, ensuring comprehensive treatment plans tailored to your specific needs."
  },
  {
    id: 3,
    question: "Do You Provide Home Visit Physiotherapy Services In Ghaziabad?",
    answer: "Yes, we offer home visit physiotherapy services across Ghaziabad for patients who cannot visit our clinic due to mobility issues, post-surgery recovery, or convenience preferences. Our mobile physiotherapy service brings expert care directly to your home with portable equipment and personalized treatment plans."
  },
  {
    id: 4,
    question: "When Should I Visit A Physiotherapist At Körper Heil?",
    answer: "You should visit our physiotherapists if you experience persistent pain lasting more than 2-3 days, difficulty moving or stiffness in joints/muscles, recent injury or accident, post-surgery recovery needs, chronic pain affecting daily activities, sports-related injuries, work-related musculoskeletal problems, or balance and mobility issues."
  },
  {
    id: 5,
    question: "Do I Need A Doctor's Prescription For Physiotherapy Treatment?",
    answer: "No, you don't need a doctor's prescription to start physiotherapy at Körper Heil. Our qualified physiotherapists conduct thorough assessments to diagnose your condition and develop appropriate treatment plans. However, if you have a prescription, it helps us understand your medical history better and coordinate care with your doctor."
  }
]

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our physiotherapy services
          </p>
        </motion.div>

        <div className="space-y-4 mb-12">
          {featuredFaqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openFaq === faq.id ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openFaq === faq.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/faq">
              View All FAQs
              <ChevronDown className="w-4 h-4 ml-2 rotate-[-90deg]" />
            </Link>
          </Button>
          <p className="text-sm text-gray-500 mt-3">
            Still have questions? Check out our complete FAQ page
          </p>
        </motion.div>
      </div>
    </section>
  )
}