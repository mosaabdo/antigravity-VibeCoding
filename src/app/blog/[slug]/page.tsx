import { notFound } from "next/navigation"
import { FaArrowLeft, FaCalendarDays } from "react-icons/fa6"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { articles } from "@/data/articles"

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const post = articles.find((article) => article.slug === slug)

    if (!post) {
        notFound()
    }

    return (
        <article className="container py-20 max-w-3xl">
            <Button variant="ghost" size="sm" asChild className="mb-8 pl-0 hover:bg-transparent hover:text-primary">
                <Link href="/blog">
                    <FaArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                </Link>
            </Button>

            <div className="mb-8 space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                    <FaCalendarDays className="h-4 w-4" />
                    <time dateTime={post.date}>{post.date}</time>
                </div>
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">{post.title}</h1>
                <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="lead">{post.excerpt}</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <h2>Introduction</h2>
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <blockquote>
                    "The best way to predict the future is to create it."
                </blockquote>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
            </div>
        </article>
    )
}
