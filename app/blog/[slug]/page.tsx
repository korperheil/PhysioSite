import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MarkdownRenderer } from '@/components/markdown-renderer'
import { getBlogPostBySlug, getRelatedPosts, getAllBlogPosts } from '@/lib/blog/blogUtils'

// Fallback blog data for when markdown files aren't available
const fallbackBlogPosts = [
  {
    id: 1,
    slug: 'understanding-physiotherapy-complete-guide',
    title: 'Understanding Physiotherapy: A Complete Guide',
    excerpt: 'Learn about the fundamentals of physiotherapy, its benefits, and how it can help you recover from injuries and improve your overall health.',
    image: '/placeholder.svg?height=400&width=800',
    category: 'Education',
    date: 'March 15, 2024',
    readTime: '5 min read',
    author: 'Dr. Shalini',
    metaDescription: 'Comprehensive guide to physiotherapy covering benefits, techniques, and treatment options. Learn how physiotherapy can improve your health and recovery.',
    keywords: ['physiotherapy', 'physical therapy', 'rehabilitation', 'injury recovery', 'health benefits'],
    content: `# Understanding Physiotherapy: A Complete Guide

Have you ever wondered what physiotherapy really is and how it could help you? Whether you're dealing with a recent injury, chronic pain, or simply want to improve your overall well-being, understanding physiotherapy can be the first step toward a healthier, more active life.

## What Exactly is Physiotherapy?

Physiotherapy is much more than just exercise therapy. It's a healthcare profession that combines deep knowledge of how your body works with practical, hands-on skills to help you move better, feel stronger, and live more comfortably.

Think of physiotherapists as movement experts who don't just treat symptoms – they get to the root of what's causing your problems. They look at your whole body as a connected system, understanding that pain in one area might actually be caused by issues somewhere else entirely.

## How Physiotherapy Can Transform Your Life

When people think about physiotherapy, they often imagine it's only for serious injuries or post-surgery recovery. The truth is, physiotherapy can benefit almost everyone, regardless of age or fitness level.

**Pain Relief That Lasts**
Unlike quick fixes that mask symptoms, physiotherapy addresses the underlying causes of pain. Through targeted exercises, manual therapy, and education, you'll not only feel better but also learn how to prevent problems from returning.

**Getting Your Strength Back**
Whether you've lost strength due to injury, illness, or simply not being as active as you'd like, physiotherapy can help you rebuild. Your therapist will design a program that gradually and safely increases your strength.

**Moving With Confidence Again**
Fear of re-injury or simply not knowing your body's limits can keep you from doing the things you love. Physiotherapy helps restore your confidence in movement, teaching you what's safe and how to progress at the right pace.

## Your Path Forward

Physiotherapy offers a path to better health that's based on science, tailored to your needs, and focused on long-term success rather than quick fixes. Whether you're dealing with pain, recovering from an injury, or simply want to move and feel better, physiotherapy can help you achieve your goals.

The most important step is the first one – deciding to take action for your health. Your future self will thank you for making that choice today.`
  },
  {
    id: 2,
    slug: 'essential-exercises-back-pain-relief',
    title: '5 Essential Exercises for Back Pain Relief',
    excerpt: 'Discover effective exercises and techniques to alleviate back pain and strengthen your core muscles for better posture and mobility.',
    image: '/placeholder.svg?height=400&width=800',
    category: 'Exercise',
    date: 'March 12, 2024',
    readTime: '7 min read',
    author: 'Dr. Shalini',
    metaDescription: 'Learn 5 essential exercises for back pain relief. Evidence-based techniques to strengthen your core and improve posture naturally.',
    keywords: ['back pain exercises', 'core strengthening', 'posture improvement', 'lower back pain', 'spine health'],
    content: `# 5 Essential Exercises for Back Pain Relief

If you're reading this while shifting uncomfortably in your chair or taking a break from a particularly painful day, you're not alone. Back pain affects millions of people, and it can make even simple daily activities feel overwhelming. The good news? You don't have to live with it.

## Why Does Your Back Hurt?

Most back pain isn't caused by a single dramatic injury. Instead, it often develops gradually due to everyday factors like poor posture, weak core muscles, tight hip flexors, or simply sitting too much.

Your spine is designed to move, but modern life often keeps us in static positions for hours at a time. When muscles become weak or tight, they can't support your spine properly, leading to pain and discomfort.

## Exercise 1: The Cat-Cow Stretch

This gentle movement is like a massage for your entire spine. It helps restore natural movement patterns and relieves tension throughout your back.

Start on your hands and knees, with your hands directly under your shoulders and knees under your hips. Slowly alternate between arching and rounding your spine.

## Building Long-Term Back Health

These exercises are an excellent starting point for back pain relief, but they're just one piece of the puzzle. Long-term back health also involves maintaining good posture throughout the day, taking regular breaks from sitting, and staying generally active.

Remember, progress might be gradual, but each day of consistent effort brings you closer to a stronger, more resilient back.`
  },
  {
    id: 3,
    slug: 'physiotherapy-sports-injury-recovery',
    title: 'The Role of Physiotherapy in Sports Injury Recovery',
    excerpt: 'Explore how physiotherapy plays a crucial role in helping athletes recover from sports injuries and return to peak performance.',
    image: '/placeholder.svg?height=400&width=800',
    category: 'Sports',
    date: 'March 10, 2024',
    readTime: '6 min read',
    author: 'Dr. Akash Jainth',
    metaDescription: 'Comprehensive guide to sports injury recovery through physiotherapy. Learn how proper rehabilitation helps athletes return to peak performance safely.',
    keywords: ['sports injury recovery', 'athletic rehabilitation', 'sports physiotherapy', 'injury prevention', 'return to sport'],
    content: `# The Role of Physiotherapy in Sports Injury Recovery

Whether you're a weekend warrior, a competitive athlete, or someone who simply enjoys staying active, sports injuries can feel devastating. The good news is that sports injury recovery has never been more sophisticated or successful than it is today.

## Understanding Sports Injuries

Sports injuries aren't usually random events. While some injuries result from unavoidable accidents, many develop due to a combination of factors that can be identified and addressed through proper assessment and treatment.

## The Sports Physiotherapy Difference

Sports physiotherapy is a specialized field that understands the unique demands of athletic performance. Sports physiotherapists don't just help you get out of pain – they help you return to the specific demands of your sport at the level you want to perform.

## Your Return to Excellence

Sports injury recovery through physiotherapy isn't just about getting back to where you were – it's about emerging from the experience stronger, smarter, and more resilient. With proper rehabilitation, many athletes return to sport performing better than they did before their injury.`
  },
  {
    id: 4,
    slug: 'post-surgery-rehabilitation-guide',
    title: 'Post-Surgery Rehabilitation: Your Journey Back to Strength',
    excerpt: 'Navigate your post-surgery recovery with confidence. Learn what to expect during rehabilitation, how to set realistic goals, and discover strategies that will help you heal stronger than before.',
    image: '/placeholder.svg?height=400&width=800',
    category: 'Rehabilitation',
    date: 'March 8, 2024',
    readTime: '8 min read',
    author: 'Dr. Akash Jainth',
    metaDescription: 'Complete guide to post-surgery rehabilitation with expert tips for optimal recovery, timeline expectations, and effective healing strategies.',
    keywords: ['post-surgery rehabilitation', 'surgical recovery', 'physiotherapy after surgery', 'healing timeline', 'recovery exercises'],
    content: `# Post-Surgery Rehabilitation: Your Journey Back to Strength

The moment after surgery can feel overwhelming. You've just undergone a significant medical procedure, and while you're relieved it's over, you might be wondering: "What comes next?" The answer is rehabilitation – and it's perhaps the most important part of your entire surgical experience.

## Understanding the Healing Process

Your body is an incredible healing machine, but it needs the right conditions and guidance to work optimally. Surgery, while necessary, temporarily disrupts your body's natural systems. Rehabilitation is like providing your body with a detailed roadmap for putting everything back together.

## Setting Realistic Expectations

Recovery timelines vary significantly based on the type of surgery, your overall health, your commitment to rehabilitation, and even factors like your nutrition and sleep quality.

## Your Investment in Long-Term Health

The best rehabilitation programs don't just restore your previous function – they leave you better prepared for the future. Use this opportunity to build habits that will serve you for years to come.`
  },
  {
    id: 5,
    slug: 'managing-chronic-pain-physiotherapy',
    title: 'Breaking Free from Chronic Pain: A Physiotherapy Approach That Works',
    excerpt: 'Discover how modern physiotherapy is revolutionizing chronic pain management. Learn evidence-based strategies that address the root causes, not just symptoms, for lasting relief and improved quality of life.',
    image: '/placeholder.svg?height=400&width=800',
    category: 'Pain Management',
    date: 'March 5, 2024',
    readTime: '9 min read',
    author: 'Dr. Akash Jainth',
    metaDescription: 'Comprehensive guide to managing chronic pain through physiotherapy. Learn effective techniques and strategies for long-term pain relief and improved quality of life.',
    keywords: ['chronic pain management', 'physiotherapy for chronic pain', 'pain relief techniques', 'long-term pain solutions', 'quality of life improvement'],
    content: `# Breaking Free from Chronic Pain: A Physiotherapy Approach That Works

If you're living with chronic pain, you've probably heard countless suggestions that can be almost as frustrating as the pain itself. The truth is, chronic pain is complex, real, and treatable – but it requires a different approach than acute injuries.

## Understanding Chronic Pain

Chronic pain isn't a sign of weakness, and it's not "all in your head." It's a complex condition where your nervous system has become hypersensitive, continuing to send pain signals long after the original injury has healed.

## The Modern Physiotherapy Approach

Today's chronic pain management through physiotherapy is radically different from old-school approaches. We're not just treating tissues – we're retraining your nervous system and helping you reclaim your life.

## The Possibility of Transformation

Living with chronic pain is challenging, but it doesn't have to define your life. With the right approach, support, and understanding, many people not only manage their pain effectively but discover strengths and resilience they didn't know they had.`
  },
  {
    id: 6,
    slug: 'preventing-workplace-injuries-ergonomics',
    title: 'Preventing Workplace Injuries with Proper Ergonomics',
    excerpt: 'Essential tips and exercises to prevent workplace injuries and maintain good posture during long hours at the desk.',
    image: '/placeholder.svg?height=400&width=800',
    category: 'Workplace Health',
    date: 'March 3, 2024',
    readTime: '4 min read',
    author: 'Dr. Shalini',
    metaDescription: 'Learn essential ergonomic tips and exercises to prevent workplace injuries. Maintain good posture and health during long desk hours.',
    keywords: ['workplace ergonomics', 'office posture', 'desk injury prevention', 'workplace health', 'ergonomic tips'],
    content: `# Preventing Workplace Injuries with Proper Ergonomics

If you're reading this while hunched over a computer, shifting uncomfortably in your chair, or rubbing your neck after a long day at the office, you're experiencing firsthand why workplace ergonomics matter.

## Understanding Workplace Injuries

Workplace musculoskeletal disorders affect millions of workers every year. These aren't just minor aches and pains – they can lead to chronic problems that affect your quality of life both at work and at home.

## Setting Up Your Workspace

A good workspace setup is the foundation of injury prevention. Your chair, monitor position, keyboard and mouse placement all play crucial roles in maintaining your health throughout the workday.

## Your Investment in Long-Term Health

Preventing workplace injuries isn't just about avoiding pain – it's about maintaining your ability to work comfortably and effectively throughout your career. The small efforts you make today can prevent significant problems in the future.`
  }
]

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  try {
    // Try to get slugs from markdown files
    const posts = getAllBlogPosts()
    if (posts.length > 0) {
      return posts.map((post) => ({
        slug: post.slug,
      }))
    }
  } catch (error) {
    console.log("Using fallback slugs:", error)
  }
  
  // Fallback to static slugs
  return fallbackBlogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  
  // Try to get post from markdown files first
  try {
    const markdownPost = getBlogPostBySlug(slug)
    if (markdownPost) {
      return {
        title: `${markdownPost.title} | Körper Heil`,
        description: markdownPost.metaDescription || markdownPost.excerpt,
        keywords: markdownPost.keywords?.join(', '),
      }
    }
  } catch (error) {
    console.log("Using fallback metadata:", error)
  }
  
  // Fallback to static data
  const fallbackPost = fallbackBlogPosts.find(p => p.slug === slug)
  
  if (!fallbackPost) {
    return {
      title: 'Post Not Found',
    }
  }
  
  return {
    title: `${fallbackPost.title} | Körper Heil`,
    description: fallbackPost.metaDescription || fallbackPost.excerpt,
    keywords: fallbackPost.keywords?.join(', '),
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  
  // Try to get post from markdown files first
  let post: any = null
  let relatedPosts: any[] = []
  
  try {
    const markdownPost = getBlogPostBySlug(slug)
    if (markdownPost) {
      post = markdownPost
      relatedPosts = getRelatedPosts(slug, markdownPost.category, 3)
    }
  } catch (error) {
    console.log("Using fallback post data:", error)
  }
  
  // Fallback to static data if markdown not found
  if (!post) {
    post = fallbackBlogPosts.find(p => p.slug === slug)
    if (post) {
      relatedPosts = fallbackBlogPosts
        .filter(p => p.category === post.category && p.slug !== slug)
        .slice(0, 3)
    }
  }
  
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/blog">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30" />
            <div className="absolute bottom-6 left-6">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </header>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto">
          <MarkdownRenderer 
            content={post.content} 
            className="prose-blue prose-headings:text-gray-900"
          />
        </div>

        {/* Related Posts */}
        {relatedPosts && relatedPosts.length > 0 && (
          <section className="max-w-4xl mx-auto mt-16 pt-8 border-t">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <article className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="relative h-32 overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-xs font-medium text-blue-600 mb-2 block">
                        {relatedPost.category}
                      </span>
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  )
}