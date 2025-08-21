"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

const allFaqs = [
	{
		id: 1,
		category: "General Information",
		question: "What Is A Physiotherapist And How Can They Help Me?",
		answer: "A physiotherapist is a healthcare professional specializing in movement disorders, pain management, and physical rehabilitation. At Körper Heil, our expert physiotherapists use evidence-based treatments including manual therapy, therapeutic exercises, electrotherapy, and innovative techniques to help restore your mobility, reduce pain, and prevent future injuries.",
	},
	{
		id: 2,
		category: "General Information",
		question: "How Is Körper Heil Physiotherapy Better Than Other Service Providers In Ghaziabad?",
		answer: "Körper Heil stands out with our holistic healing approach, addressing root causes rather than just symptoms. Our experienced team (Dr. Shalini and Dr. Akash) provides compassionate, personalized care using cutting-edge technology and modern techniques. We maintain a collaborative approach with patients and healthcare providers, ensuring comprehensive treatment plans tailored to your specific needs.",
	},
	{
		id: 3,
		category: "General Information",
		question: "What Does A Physiotherapist Do At Körper Heil?",
		answer: "Our physiotherapists perform comprehensive assessments, develop personalized treatment plans, and provide hands-on treatments including manual therapy, therapeutic exercises, soft tissue mobilization, electrotherapy, heat therapy, ultrasound therapy, and specialized techniques for sports injuries, workplace injuries, and chronic pain conditions.",
	},
	{
		id: 4,
		category: "Location & Accessibility",
		question: "How To Find Ghaziabad's Best Physiotherapists Near Me For Clinic Sessions?",
		answer: "Körper Heil is conveniently located at C-31, 2nd Floor, RDC, Raj Nagar, Ghaziabad, Uttar Pradesh 201002. We're easily accessible from all parts of Ghaziabad and surrounding areas. You can book appointments online or call us directly. We're recognized as one of the top physiotherapy clinics in Raj Nagar, Ghaziabad.",
	},
	{
		id: 5,
		category: "Location & Accessibility",
		question: "Do You Provide Home Visit Physiotherapy Services In Ghaziabad?",
		answer: "Yes, we offer home visit physiotherapy services across Ghaziabad for patients who cannot visit our clinic due to mobility issues, post-surgery recovery, or convenience preferences. Our mobile physiotherapy service brings expert care directly to your home with portable equipment and personalized treatment plans.",
	},
	{
		id: 6,
		category: "Location & Accessibility",
		question: "What Areas In Ghaziabad Do You Cover For Home Visits?",
		answer: "We provide home visit physiotherapy services throughout Ghaziabad including Raj Nagar, Vasundhara, Indirapuram, Kaushambi, Crossings Republik, Makanpur, Mohan Nagar, and surrounding NCR areas. Contact us to confirm service availability in your specific location.",
	},
	{
		id: 7,
		category: "Treatment & Conditions",
		question: "What Conditions Can Be Treated By Körper Heil Physiotherapy Experts?",
		answer: "We treat a wide range of conditions including: Musculoskeletal Issues (Back pain, neck pain, knee pain, shoulder pain, joint stiffness), Neurological Conditions (Post-stroke rehabilitation, nerve pain, sciatica), Sports Injuries (Sprains, strains, muscle tears, rehabilitation), Workplace Injuries (Repetitive strain injuries, postural problems), Chronic Pain (Arthritis, fibromyalgia, long-term pain management), and Post-Surgery Rehabilitation (Recovery after orthopedic surgeries).",
	},
	{
		id: 8,
		category: "Treatment & Conditions",
		question: "When Should I Visit A Physiotherapist At Körper Heil?",
		answer: "You should visit our physiotherapists if you experience: Persistent pain lasting more than 2-3 days, difficulty moving or stiffness in joints/muscles, recent injury or accident, post-surgery recovery needs, chronic pain affecting daily activities, sports-related injuries, work-related musculoskeletal problems, or balance and mobility issues.",
	},
	{
		id: 9,
		category: "Treatment & Conditions",
		question: "Can Physiotherapy Help With Chronic Back Pain And Neck Pain?",
		answer: "Absolutely! Chronic back pain and neck pain are our specialties at Körper Heil. Our patients have experienced significant relief from long-standing pain issues through our comprehensive treatment approach combining manual therapy, targeted exercises, postural correction, and lifestyle modifications.",
	},
	{
		id: 10,
		category: "Appointment & Process",
		question: "Do I Need A Doctor's Prescription For Physiotherapy Treatment?",
		answer: "No, you don't need a doctor's prescription to start physiotherapy at Körper Heil. Our qualified physiotherapists conduct thorough assessments to diagnose your condition and develop appropriate treatment plans. However, if you have a prescription, it helps us understand your medical history better and coordinate care with your doctor.",
	},
	{
		id: 11,
		category: "Appointment & Process",
		question: "What Should I Expect During My First Physiotherapy Session?",
		answer: "Your first session includes a comprehensive assessment where our physiotherapist will: Review your medical history and current symptoms, conduct physical examination and movement tests, explain your condition and treatment options, develop a personalized treatment plan, begin initial treatment if appropriate, and provide home exercise recommendations.",
	},
	{
		id: 12,
		category: "Appointment & Process",
		question: "How Long Does A Physiotherapy Session Last At Körper Heil?",
		answer: "Each physiotherapy session typically lasts 45-60 minutes, depending on your condition and treatment requirements. Initial assessments may take longer (60-90 minutes) to ensure comprehensive evaluation and treatment planning.",
	},
	{
		id: 13,
		category: "Specialized Treatment",
		question: "What Is Manual Therapy And How Does It Help In Recovery?",
		answer: "Manual therapy involves hands-on techniques to treat musculoskeletal pain and dysfunction. Our skilled physiotherapists use joint mobilization, soft tissue massage, myofascial release, and manipulation techniques to improve mobility, reduce pain, and accelerate healing naturally without medications.",
	},
	{
		id: 14,
		category: "Specialized Treatment",
		question: "Do You Provide Sports Injury Rehabilitation And Prevention?",
		answer: "Yes, we specialize in sports injury treatment and prevention. Our sports physiotherapy services include injury assessment, rehabilitation protocols, performance enhancement, movement analysis, and injury prevention strategies for athletes of all levels.",
	},
	{
		id: 15,
		category: "Specialized Treatment",
		question: "Can You Help With Workplace Injuries And Ergonomic Issues?",
		answer: "Absolutely! We treat work-related injuries including repetitive strain injuries, carpal tunnel syndrome, postural problems, and provide ergonomic assessments. We also offer workplace wellness programs and injury prevention strategies for corporate clients.",
	},
	{
		id: 16,
		category: "Additional Services",
		question: "What Equipment And Modern Techniques Do You Use?",
		answer: "Körper Heil utilizes cutting-edge equipment including: Electrotherapy machines (TENS, IFT, Ultrasound), Exercise therapy equipment, Manual therapy tools, Heat and cold therapy units, and Specialized rehabilitation equipment. We combine traditional physiotherapy with innovative modern techniques for optimal results.",
	},
	{
		id: 17,
		category: "Additional Services",
		question: "How Many Sessions Will I Need For Complete Recovery?",
		answer: "Recovery time varies depending on your condition, severity, and individual healing capacity. Acute conditions may require 6-10 sessions, while chronic conditions might need 15-20 sessions or more. We'll provide a realistic timeline after your initial assessment and adjust as needed based on your progress.",
	},
	{
		id: 18,
		category: "Additional Services",
		question: "Can I Continue Exercises At Home Between Sessions?",
		answer: "Yes, home exercises are crucial for faster recovery. We provide customized exercise programs with clear instructions and demonstrations. Our physiotherapists will teach you proper techniques during sessions and may provide written or video guidance for home practice.",
	},
]

export default function FaqPage() {
	const [openFaq, setOpenFaq] = useState<number | null>(null)

	const toggleFaq = (id: number) => {
		setOpenFaq(openFaq === id ? null : id)
	}

	return (
		<div className="min-h-screen bg-gray-50 py-20">
			<div className="container mx-auto px-4 max-w-4xl">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-12"
				>
					<div className="flex items-center justify-center mb-4">
						<HelpCircle className="w-8 h-8 text-blue-600 mr-3" />
						<h1 className="text-4xl font-bold text-gray-900">
							Frequently Asked Questions
						</h1>
					</div>
					<p className="text-xl text-gray-600 mb-8">
						Find answers to all your questions about our physiotherapy services
					</p>
				</motion.div>

				<div className="space-y-4">
					{allFaqs.map((faq, index) => (
						<motion.div
							key={faq.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.05 }}
							className="bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-300"
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
			</div>
		</div>
	)
}