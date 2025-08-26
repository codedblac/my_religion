import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogPost } from "@/components/blog/blog-post"
import { RelatedPosts } from "@/components/blog/related-posts"
import { BlogComments } from "@/components/blog/blog-comments"

// This would typically come from a database or CMS
const blogPosts = {
  "finding-hope-in-difficult-times": {
    title: "Finding Hope in Difficult Times: A Biblical Perspective",
    author: "Pastor John Smith",
    date: "2024-01-15",
    category: "Biblical Insights",
    readTime: "8 min read",
    image: "/blog-featured-hope.png",
    content: `
# Finding Hope in Difficult Times: A Biblical Perspective

Life has a way of throwing curveballs when we least expect them. Whether it's a health crisis, job loss, relationship struggles, or global uncertainties, difficult times are an inevitable part of the human experience. In these moments, it's natural to feel overwhelmed, anxious, or even hopeless.

But as believers, we have access to a source of hope that transcends our circumstances. The Bible is filled with promises and examples of God's faithfulness during the darkest seasons of life.

## The Foundation of Biblical Hope

Hope in Scripture isn't wishful thinking or blind optimism. Biblical hope is a confident expectation based on God's character and promises. The apostle Paul writes in Romans 15:13:

> "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit."

This hope is rooted in three key truths:

### 1. God's Sovereignty
Even when life feels chaotic, God remains in control. Isaiah 46:10 reminds us that God declares "the end from the beginning" and His purposes will stand.

### 2. God's Love
Romans 8:38-39 assures us that nothing can separate us from God's love. This love isn't dependent on our circumstances or performance.

### 3. God's Promises
Throughout Scripture, God makes promises about His presence, provision, and ultimate victory over evil and suffering.

## Practical Steps to Cultivate Hope

While hope is ultimately a gift from God, there are practical steps we can take to nurture it:

**1. Immerse Yourself in Scripture**
The Bible is our primary source of hope. Psalms, in particular, offers comfort during difficult times.

**2. Remember God's Faithfulness**
Keep a journal of how God has worked in your life. These reminders become anchors during storms.

**3. Connect with Community**
Don't walk through difficulties alone. The church is meant to be a source of encouragement and support.

**4. Practice Gratitude**
Even in hard times, there are things to be thankful for. Gratitude shifts our perspective from what's lacking to what God has provided.

## Hope for the Future

Our ultimate hope isn't in changed circumstances but in Christ's return and the restoration of all things. Revelation 21:4 promises a day when "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain."

Until that day, we hold onto hope not as an escape from reality, but as the very thing that enables us to face reality with courage and faith.

## Conclusion

Difficult times don't have to mean hopeless times. When we anchor our hope in God's character and promises rather than our circumstances, we discover a peace that surpasses understanding and a joy that can't be stolen.

If you're walking through a difficult season right now, know that you're not alone. Our church family is here to support you, and most importantly, God is with you every step of the way.
    `,
    tags: ["hope", "faith", "difficult times", "biblical perspective", "encouragement"],
  },
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return {
      title: "Post Not Found | Grace Community Church Blog",
    }
  }

  return {
    title: `${post.title} | Grace Community Church Blog`,
    description: post.content.substring(0, 160) + "...",
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <main>
      <BlogPost post={post} />
      <BlogComments />
      <RelatedPosts currentSlug={params.slug} />
    </main>
  )
}
