"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FaArrowRight, FaCalendarDays } from "react-icons/fa6"

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { articles } from "@/data/articles"
import { FadeIn } from "@/components/animations/FadeIn"
import { StaggerContainer, staggerItem } from "@/components/animations/StaggerContainer"

export function LatestArticles() {
    // Get the first 3 articles
    const latestArticles = articles.slice(0, 3)

    return (
        <section className="bg-muted/30 py-20 relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <FadeIn>
                    <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight md:text-4xl relative inline-block group">
                                Latest Articles
                                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                            </h2>
                            <p className="mt-2 text-muted-foreground">thoughts and insights from my blog.</p>
                        </div>
                        <Button variant="ghost" asChild>
                            <Link href="/blog" className="group">
                                Read All Articles
                                <FaArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>
                </FadeIn>

                <StaggerContainer className="grid gap-8 md:grid-cols-3">
                    {latestArticles.map((article) => (
                        <motion.div
                            key={article.id}
                            variants={staggerItem}
                        >
                            <Card className="flex h-full flex-col overflow-hidden border transition-all duration-300 hover:border-teal-500/50 hover:shadow-lg group bg-card">
                                <CardHeader>
                                    <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                                        <FaCalendarDays className="h-3.5 w-3.5" />
                                        <time dateTime={article.date}>{article.date}</time>
                                    </div>
                                    <CardTitle className="mb-2 line-clamp-2 text-lg group-hover:text-teal-600 transition-colors">
                                        <Link href={`/blog/${article.slug}`} className="hover:underline">
                                            {article.title}
                                        </Link>
                                    </CardTitle>
                                    <CardDescription className="line-clamp-2">
                                        {article.excerpt}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="flex flex-wrap gap-2">
                                        {article.tags.slice(0, 2).map((tag) => (
                                            <Badge key={tag} variant="secondary" className="font-normal text-xs">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="link" className="p-0 h-auto font-semibold text-primary group-hover:text-teal-600 transition-colors" asChild>
                                        <Link href={`/blog/${article.slug}`}>
                                            Read More <FaArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    )
}
