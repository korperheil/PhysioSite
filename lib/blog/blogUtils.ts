import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  readTime: string
  author: string
  metaDescription?: string
  keywords?: string[]
  content: string
}

export interface BlogPostMetadata {
  id: number
  slug: string
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  readTime: string
  author: string
  metaDescription?: string
  keywords?: string[]
}

const blogDirectory = path.join(process.cwd(), 'content/blog')

// Ensure blog directory exists
export function ensureBlogDirectory() {
  if (!fs.existsSync(blogDirectory)) {
    fs.mkdirSync(blogDirectory, { recursive: true })
  }
}

// Get all blog post metadata (for listing pages)
export function getAllBlogPosts(): BlogPostMetadata[] {
  ensureBlogDirectory()
  
  try {
    const fileNames = fs.readdirSync(blogDirectory)
    const allPostsData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(blogDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data } = matter(fileContents)

        return {
          slug,
          ...data,
        } as BlogPostMetadata
      })

    // Sort posts by date (newest first)
    return allPostsData.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

// Get a single blog post by slug
export function getBlogPostBySlug(slug: string): BlogPost | null {
  ensureBlogDirectory()
  
  try {
    const fullPath = path.join(blogDirectory, `${slug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      content,
      ...data,
    } as BlogPost
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
    return null
  }
}

// Get blog posts by category
export function getBlogPostsByCategory(category: string): BlogPostMetadata[] {
  const allPosts = getAllBlogPosts()
  return allPosts.filter(post => post.category === category)
}

// Get all unique categories
export function getAllCategories(): string[] {
  const allPosts = getAllBlogPosts()
  const categories = allPosts.map(post => post.category)
  return ['All', ...Array.from(new Set(categories))]
}

// Search blog posts
export function searchBlogPosts(query: string): BlogPostMetadata[] {
  const allPosts = getAllBlogPosts()
  const lowercaseQuery = query.toLowerCase()
  
  return allPosts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.author.toLowerCase().includes(lowercaseQuery) ||
    post.category.toLowerCase().includes(lowercaseQuery)
  )
}

// Get related posts (same category, excluding current post)
export function getRelatedPosts(currentSlug: string, category: string, limit: number = 3): BlogPostMetadata[] {
  const categoryPosts = getBlogPostsByCategory(category)
  return categoryPosts
    .filter(post => post.slug !== currentSlug)
    .slice(0, limit)
}
