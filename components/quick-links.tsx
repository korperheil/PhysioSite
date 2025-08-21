"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HomeCareModal } from "@/components/home-care-modal"
import { Calendar, Users, Phone, MapPin, ArrowRight } from "lucide-react"

const quickLinks = [
	{
		icon: Calendar,
		title: "Book Appointment",
		description: "Schedule your consultation online",
		subtitle: "Available 24/7 • Quick & Easy",
		href: "/booking",
	},
	{
		icon: Users,
		title: "Meet Our Doctors",
		description: "Learn about our expert team",
		subtitle: "9+ Years Experience • Specialized Care",
		href: "/doctors",
	},
	{
		icon: Phone,
		title: "Professional Home Care",
		description: "Personalized treatment at your doorstep",
		subtitle: "Comfortable • Convenient • Professional",
		href: "tel:+91 9910772756",
	},
	{
		icon: MapPin,
		title: "Find Us",
		description: "Get directions to our clinic",
		subtitle: "Easy Location • Parking Available",
		href: "/contact",
	},
]

export function QuickLinks() {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleCardClick = (link: typeof quickLinks[0], e: React.MouseEvent) => {
		if (link.title === "Professional Home Care") {
			e.preventDefault()
			setIsModalOpen(true)
		}
	}

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
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						Quick Access
					</h2>
					<p className="text-xl text-gray-600">
						Everything you need, just a click away
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{quickLinks.map((link, index) => (
						<motion.div
							key={link.title}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="group"
						>
							{link.title === "Professional Home Care" ? (
								<div
									className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 h-full cursor-pointer border-l-4 border-blue-500 hover:border-blue-600 group-hover:transform group-hover:scale-105"
									onClick={(e) => handleCardClick(link, e)}
								>
									<div className="flex flex-col items-center text-center space-y-4">
										<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
											<link.icon className="w-8 h-8 text-blue-600" />
										</div>
										<div>
											<h3 className="text-lg font-semibold text-gray-900 mb-2">
												{link.title}
											</h3>
											<p className="text-gray-600 text-sm mb-2">
												{link.description}
											</p>
											<p className="text-blue-600 text-xs font-medium">
												{link.subtitle}
											</p>
										</div>
										<ArrowRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
									</div>
								</div>
							) : (
								<Link href={link.href} className="block h-full">
									<div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 h-full border-l-4 border-blue-500 hover:border-blue-600 group-hover:transform group-hover:scale-105">
										<div className="flex flex-col items-center text-center space-y-4">
											<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
												<link.icon className="w-8 h-8 text-blue-600" />
											</div>
											<div>
												<h3 className="text-lg font-semibold text-gray-900 mb-2">
													{link.title}
												</h3>
												<p className="text-gray-600 text-sm mb-2">
													{link.description}
												</p>
												<p className="text-blue-600 text-xs font-medium">
													{link.subtitle}
												</p>
											</div>
											<ArrowRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
										</div>
									</div>
								</Link>
							)}
						</motion.div>
					))}
				</div>
			</div>

			<HomeCareModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</section>
	)
}