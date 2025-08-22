import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock } from "lucide-react"
import { getAllBlogPosts, getAllCategories } from '@/lib/blog/blogUtils'

interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  readTime: string
  author: string
}

// Fallback blog data for when markdown files aren't available
const fallbackBlogPosts: BlogPost[] = [
	{
		id: 1,
		slug: "understanding-physiotherapy-complete-guide",
		title: "Understanding Physiotherapy: A Complete Guide",
		excerpt: "Learn about the fundamentals of physiotherapy, its benefits, and how it can help you recover from injuries and improve your overall health.",
		image: "/placeholder.svg",
		category: "Education",
		date: "March 15, 2024",
		readTime: "5 min read",
		author: "Dr. Shalini",
	},
	{
		id: 2,
		slug: "essential-exercises-back-pain-relief",
		title: "5 Essential Exercises for Back Pain Relief",
		excerpt: "Discover effective exercises and techniques to alleviate back pain and strengthen your core muscles for better posture and mobility.",
		image: "/back_pain.jpg",
		category: "Exercise",
		date: "March 12, 2024",
		readTime: "7 min read",
		author: "Dr. Shalini",
	},
	{
		id: 3,
		slug: "physiotherapy-sports-injury-recovery",
		title: "The Role of Physiotherapy in Sports Injury Recovery",
		excerpt: "Explore how physiotherapy plays a crucial role in helping athletes recover from sports injuries and return to peak performance.",
		image: "/sports.jpg",
		category: "Sports",
		date: "March 10, 2024",
		readTime: "6 min read",
		author: "Dr. Akash Jainth",
	},
	{
		id: 4,
		slug: "post-surgery-rehabilitation-guide",
		title: "Post-Surgery Rehabilitation: Your Journey Back to Strength",
		excerpt: "Navigate your post-surgery recovery with confidence. Learn what to expect during rehabilitation, how to set realistic goals, and discover strategies that will help you heal stronger than before.",
		image: "/post_surgery.jpg",
		category: "Rehabilitation",
		date: "March 8, 2024",
		readTime: "8 min read",
		author: "Dr. Akash Jainth",
	},
	{
		id: 5,
		slug: "managing-chronic-pain-physiotherapy",
		title: "Breaking Free from Chronic Pain: A Physiotherapy Approach That Works",
		excerpt: "Discover how modern physiotherapy is revolutionizing chronic pain management. Learn evidence-based strategies that address the root causes, not just symptoms, for lasting relief and improved quality of life.",
		image: "/chronic_pain.jpg",
		category: "Pain Management",
		date: "March 5, 2024",
		readTime: "9 min read",
		author: "Dr. Akash Jainth",
	},
	{
		id: 6,
		slug: "preventing-workplace-injuries-ergonomics",
		title: "Preventing Workplace Injuries with Proper Ergonomics",
		excerpt: "Essential tips and exercises to prevent workplace injuries and maintain good posture during long hours at the desk.",
		image: "/IMG_9773.jpg",
		category: "Workplace Health",
		date: "March 3, 2024",
		readTime: "4 min read",
		author: "Dr. Shalini",
	},
]

export default function BlogPage() {
	// Try to get posts from markdown files, fall back to static data
	let blogPosts: BlogPost[]
	let categories: string[]
	
	try {
		const markdownPosts = getAllBlogPosts()
		const markdownCategories = getAllCategories()
		
		if (markdownPosts.length > 0) {
			blogPosts = markdownPosts.map((post, index) => ({
				id: index + 1,
				slug: post.slug,
				title: post.title,
				excerpt: post.excerpt,
				image: post.image || "/placeholder.svg?height=300&width=400",
				category: post.category,
				date: post.date,
				readTime: post.readTime,
				author: post.author
			}))
			categories = markdownCategories
		} else {
			blogPosts = fallbackBlogPosts
			categories = ["All", "Education", "Exercise", "Sports", "Rehabilitation", "Pain Management", "Workplace Health"]
		}
	} catch (error) {
		console.log("Using fallback blog data:", error)
		blogPosts = fallbackBlogPosts
		categories = ["All", "Education", "Exercise", "Sports", "Rehabilitation", "Pain Management", "Workplace Health"]
	}
	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-blue-50 to-white py-20">
				<div className="container mx-auto px-4">
					<div className="text-center">
						<h1 className="text-5xl font-bold text-gray-900 mb-6">
							Our <span className="text-blue-600">Blog</span>
						</h1>
						<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
							Stay informed about physiotherapy, health tips, and recovery
							insights from our expert team.
						</p>
					</div>
				</div>
			</section>
			

			{/* Categories */}
			{/* <section className="py-8 bg-white border-b">
				<div className="container mx-auto px-4">
					<div className="flex flex-wrap justify-center gap-4">
						{categories.map((category) => (
							<Button
								key={category}
								variant={category === "All" ? "default" : "outline"}
								className="px-6 py-2 rounded-full text-sm font-medium"
							>
								{category}
							</Button>
						))}
					</div>
				</div>
			</section> */}

			{/* Blog Posts */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{blogPosts.map((post) => (
							<article
								key={post.id}
								className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
							>
								<Link href={`/blog/${post.slug}`}>
									<div className="relative h-48 overflow-hidden">
										<Image
											src={post.image}
											alt={post.title}
											fill
											className="object-cover hover:scale-105 transition-transform duration-300"
										/>
										<div className="absolute top-4 left-4">
											<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
												{post.category}
											</span>
										</div>
									</div>
									<div className="p-6">
										<div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
											<div className="flex items-center gap-1">
												<Calendar className="w-4 h-4" />
												{post.date}
											</div>
											<div className="flex items-center gap-1">
												<Clock className="w-4 h-4" />
												{post.readTime}
											</div>
										</div>
										<h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
											{post.title}
										</h3>
										<p className="text-gray-600 mb-4 line-clamp-3">
											{post.excerpt}
										</p>
										<span className="text-sm text-gray-500">
											By {post.author}
										</span>
									</div>
								</Link>
							</article>
						))}
					</div>
				</div>
			</section>

		</div>
	)
}