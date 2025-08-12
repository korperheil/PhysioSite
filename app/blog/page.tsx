"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, Search } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Understanding Physiotherapy: A Complete Guide",
    excerpt: "Learn about the fundamentals of physiotherapy, its benefits, and how it can help you recover from injuries and improve your overall health.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Education",
    date: "March 15, 2024",
    readTime: "5 min read",
    author: "Dr. Sarah Johnson",
    fullContent: "Full content for Understanding Physiotherapy: A Complete Guide. Here you can add the detailed blog post content."
  },
  {
    id: 2,
    title: "5 Essential Exercises for Back Pain Relief",
    excerpt: "Discover effective exercises and techniques to alleviate back pain and strengthen your core muscles for better posture and mobility.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Exercise",
    date: "March 12, 2024",
    readTime: "7 min read",
    author: "Dr. Michael Chen",
    fullContent: "Full content for 5 Essential Exercises for Back Pain Relief. Here you can add the detailed blog post content."
  },
  {
    id: 3,
    title: "The Role of Physiotherapy in Sports Injury Recovery",
    excerpt: "Explore how physiotherapy plays a crucial role in helping athletes recover from sports injuries and return to peak performance.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Sports",
    date: "March 10, 2024",
    readTime: "6 min read",
    author: "Dr. Emily Rodriguez",
    fullContent: "Full content for The Role of Physiotherapy in Sports Injury Recovery. Here you can add the detailed blog post content."
  },
  {
    id: 4,
    title: "Post-Surgery Rehabilitation: What to Expect",
    excerpt: "A comprehensive guide to post-surgery rehabilitation, including timelines, exercises, and tips for optimal recovery.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Rehabilitation",
    date: "March 8, 2024",
    readTime: "8 min read",
    author: "Dr. David Thompson",
    fullContent: "Full content for Post-Surgery Rehabilitation: What to Expect. Here you can add the detailed blog post content."
  },
  {
    id: 5,
    title: "Managing Chronic Pain Through Physiotherapy",
    excerpt: "Learn about effective physiotherapy techniques for managing chronic pain and improving quality of life for long-term sufferers.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Pain Management",
    date: "March 5, 2024",
    readTime: "9 min read",
    author: "Dr. Lisa Park",
    fullContent: "Full content for Managing Chronic Pain Through Physiotherapy. Here you can add the detailed blog post content."
  },
  {
    id: 6,
    title: "Preventing Workplace Injuries with Proper Ergonomics",
    excerpt: "Essential tips and exercises to prevent workplace injuries and maintain good posture during long hours at the desk.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Workplace Health",
    date: "March 3, 2024",
    readTime: "4 min read",
    author: "Dr. James Wilson",
    fullContent: "Full content for Preventing Workplace Injuries with Proper Ergonomics. Here you can add the detailed blog post content."
  },
  {
    id: 7,
    title: "Preventing1 Workplace1 Injuries1 with1 Proper1 Ergonomics1",
    excerpt: "Essential tips and exercises to prevent workplace injuries and maintain good posture during long hours at the desk.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Workplace Health",
    date: "March 3, 2024",
    readTime: "4 min read",
    author: "Dr. James Wilson",
    fullContent: "Full content for Preventing1 Workplace1 Injuries1 with1 Proper1 Ergonomics1. Here you can add the detailed blog post content."
  },
]

const categories = [
  "All",
  "Education",
  "Exercise",
  "Sports",
  "Rehabilitation",
  "Pain Management",
  "Workplace Health",
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [visibleCount, setVisibleCount] = useState(6)
  const [selectedBlog, setSelectedBlog] = useState(null)

  // Filter posts based on selected category and search term
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Only show up to visibleCount blogs
  const visiblePosts = filteredPosts.slice(0, visibleCount)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Stay informed about physiotherapy, health tips, and recovery insights from our expert team.
            </p>
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Full Blog Section */}
          {selectedBlog && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-12 max-w-3xl mx-auto"
            >
              <div className="relative h-64 mb-6">
                <Image
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h2 className="text-3xl font-bold mb-4">{selectedBlog.title}</h2>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {selectedBlog.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {selectedBlog.readTime}
                </div>
                <span>By {selectedBlog.author}</span>
              </div>
              <div className="mb-6">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {selectedBlog.category}
                </span>
              </div>
              <p className="text-gray-700 mb-6 whitespace-pre-line">
                {selectedBlog.fullContent}
              </p>
              <Button
                variant="outline"
                onClick={() => setSelectedBlog(null)}
                className="mt-4"
              >
                Back
              </Button>
            </motion.div>
          )}

          {/* Blog grid (hide if full blog is open) */}
          {!selectedBlog && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visiblePosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
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
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">By {post.author}</span>
                      <Button
                        variant="ghost"
                        className="text-blue-600 hover:text-blue-700"
                        onClick={() => setSelectedBlog(post)}
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {/* Load More Button (hide if full blog is open) */}
          {!selectedBlog && visibleCount < filteredPosts.length && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-12"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => setVisibleCount((prev) => prev + 6)}
              >
                Load More Articles
              </Button>
            </motion.div>
            )}
        </div>
      </section>
    </div>
  )
}