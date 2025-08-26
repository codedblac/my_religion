import type { Metadata } from "next"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogFilter } from "@/components/blog/blog-filter"
import { BlogGrid } from "@/components/blog/blog-grid"
import { FeaturedPost } from "@/components/blog/featured-post"

export const metadata: Metadata = {
  title: "Blog | Grace Community Church",
  description:
    "Read inspiring articles, biblical insights, and community stories from Grace Community Church. Stay connected with our faith community.",
}

export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      <FeaturedPost />
      <BlogFilter />
      <BlogGrid />
    </main>
  )
}
