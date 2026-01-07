"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FaArrowRight, FaCalendarDays, FaMagnifyingGlass, FaClock } from "react-icons/fa6"
import { useState } from "react"

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
import { Input } from "@/components/ui/input"
import { articles } from "@/data/articles"
import { FadeIn } from "@/components/animations/FadeIn"
import { StaggerContainer, staggerItem } from "@/components/animations/StaggerContainer"
import { cn } from "@/lib/utils"

const categories = ["All", "React", "Next.js", "CSS", "Performance", "Career"]

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [searchQuery, setSearchQuery] = useState("")

    const filteredArticles = articles.filter(article => {
        const matchesCategory = selectedCategory === "All" || article.tags.includes(selectedCategory)
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    const featuredArticle = filteredArticles[0]
    const remainingArticles = filteredArticles.slice(1)

    return (
        <div className="max-w-7xl mx-auto px-6 py-20">
            {/* Header */}
            <FadeIn>
                <div className="mb-12 text-center md:text-left">
                    <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Insights & Thoughts</h1>
                    <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
                        Exploring the world of web development, one article at a time.
                    </p>
                </div>
            </FadeIn>

            {/* Search & Filter */}
            <FadeIn delay={0.2}>
                <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={selectedCategory === category ? "default" : "outline"}
                                onClick={() => setSelectedCategory(category)}
                                className={cn(
                                    "rounded-full transition-all",
                                    selectedCategory === category && "bg-teal-600 hover:bg-teal-700 text-white"
                                )}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                    <div className="relative w-full md:w-72">
                        <FaMagnifyingGlass className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            placeholder="Search articles..."
                            className="pl-10 rounded-full focus:ring-teal-500"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </FadeIn>

            {/* Featured Post */}
            {featuredArticle && (
                <FadeIn delay={0.3} className="mb-16">
                    <Link href={`/blog/${featuredArticle.slug}`}>
                        <div className="group relative overflow-hidden rounded-3xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-xl">
                            <div className="grid md:grid-cols-2">
                                <div className="relative aspect-video md:aspect-auto overflow-hidden bg-muted">
                                    {/* Placeholder for real image with lift effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-500/20 group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-50">
                                        📰
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center p-8 md:p-12">
                                    <div className="mb-4 flex items-center gap-3 text-sm text-muted-foreground">
                                        <Badge variant="secondary" className="bg-teal-100 text-teal-800 hover:bg-teal-200">Featured</Badge>
                                        <div className="flex items-center gap-1">
                                            <FaCalendarDays className="h-3.5 w-3.5" />
                                            <time dateTime={featuredArticle.date}>{featuredArticle.date}</time>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <FaClock className="h-3.5 w-3.5" />
                                            <span>5 min read</span>
                                        </div>
                                    </div>
                                    <h2 className="mb-4 text-3xl font-bold tracking-tight group-hover:text-teal-600 transition-colors">
                                        {featuredArticle.title}
                                    </h2>
                                    <p className="mb-6 text-muted-foreground text-lg line-clamp-3">
                                        {featuredArticle.excerpt}
                                    </p>
                                    <div className="flex items-center text-teal-600 font-medium">
                                        Read Article <FaArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </FadeIn>
            )}

            {/* Articles Grid */}
            <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {remainingArticles.map((article) => (
                    <motion.div
                        key={article.id}
                        variants={staggerItem}
                    >
                        <Link href={`/blog/${article.slug}`}>
                            <Card className="flex h-full flex-col overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group">
                                <div className="aspect-[1.6/1] bg-muted relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 group-hover:scale-105 transition-transform duration-500" />
                                    {/* Badge Overlay */}
                                    <div className="absolute top-4 left-4">
                                        <Badge className="bg-white/90 text-slate-900 backdrop-blur-sm shadow-sm hover:bg-white">
                                            {article.tags[0]}
                                        </Badge>
                                    </div>
                                </div>
                                <CardHeader>
                                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                                        <div className="flex items-center gap-1">
                                            <FaCalendarDays className="h-3 w-3" />
                                            <time>{article.date}</time>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <FaClock className="h-3 w-3" />
                                            <span>{Math.ceil(Math.random() * 5 + 3)} min read</span>
                                        </div>
                                    </div>
                                    <CardTitle className="line-clamp-2 text-xl group-hover:text-teal-600 transition-colors">
                                        {article.title}
                                    </CardTitle>
                                    <CardDescription className="line-clamp-2 mt-2">
                                        {article.excerpt}
                                    </CardDescription>
                                </CardHeader>
                                <CardFooter className="mt-auto">
                                    <div className="flex items-center text-sm font-medium text-primary group-hover:text-teal-600 transition-colors">
                                        Read More <FaArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </CardFooter>
                            </Card>
                        </Link>
                    </motion.div>
                ))}
            </StaggerContainer>
        </div>
    )
}
