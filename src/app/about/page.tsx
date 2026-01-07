"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FaGraduationCap, FaCode, FaCertificate, FaArrowRight } from "react-icons/fa6"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { info } from "@/data/info"
import { FadeIn } from "@/components/animations/FadeIn"
import { StaggerContainer, staggerItem } from "@/components/animations/StaggerContainer"

export default function AboutPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-20">
            {/* Header */}
            <FadeIn>
                <div className="mb-16 text-center">
                    <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">About Me</h1>
                    <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                        Passionate Frontend Developer with a knack for building clean, user-centric web applications.
                    </p>
                </div>
            </FadeIn>

            {/* Bio Section */}
            <div className="mb-20 grid gap-12 md:grid-cols-2 items-center">
                <FadeIn delay={0.2}>
                    <div className="aspect-square relative rounded-2xl overflow-hidden bg-muted shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-500">
                        {/* Placeholder for Profile Image */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-teal-500/20 to-cyan-500/20 text-6xl">
                            👋
                        </div>
                    </div>
                </FadeIn>
                <FadeIn delay={0.4}>
                    <h2 className="text-3xl font-bold mb-6">My Journey</h2>
                    <div className="prose prose-lg dark:prose-invert text-muted-foreground">
                        <p className="mb-4">
                            Hello! I&apos;m Mousa Abdo, a dedicated frontend developer based in {info.location}.
                            My journey in web development began with a curiosity for how things work on the internet,
                            which quickly turned into a passion for creating seamless digital experiences.
                        </p>
                        <p className="mb-4">
                            I recently completed the prestigious <strong className="text-foreground">ITI (Information Technology Institute) 9-Month Professional Track</strong>,
                            specializing in Frontend Development. This intensive training honed my skills in modern web technologies,
                            architecture, and best practices.
                        </p>
                        <p>
                            When I&apos;m not coding, I&apos;m exploring the latest UI/UX trends, contributing to open-source,
                            or sharing my knowledge through technical articles. I believe in continuous learning and
                            delivering code that makes a difference.
                        </p>
                    </div>
                </FadeIn>
            </div>

            {/* Education & Experience */}
            <div className="mb-20">
                <FadeIn>
                    <h2 className="text-3xl font-bold mb-10 text-center">Education & Certification</h2>
                </FadeIn>
                <div className="grid gap-6 md:grid-cols-2">
                    <FadeIn delay={0.2} className="h-full">
                        <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-teal-500/30">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                    <FaCertificate className="h-6 w-6" />
                                </div>
                                <div>
                                    <CardTitle>Professional Frontend Track</CardTitle>
                                    <p className="text-sm text-muted-foreground">Information Technology Institute (ITI)</p>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">
                                    An intensive 9-month program covering advanced web development topics, including
                                    React.js, Next.js, Angular, Design Patterns, and Soft Skills.
                                </p>
                                <Badge variant="outline">2025 - 2026</Badge>
                            </CardContent>
                        </Card>
                    </FadeIn>

                    <FadeIn delay={0.3} className="h-full">
                        <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-teal-500/30">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary-foreground">
                                    <FaGraduationCap className="h-6 w-6" />
                                </div>
                                <div>
                                    <CardTitle>Bachelor&apos;s Degree</CardTitle>
                                    <p className="text-sm text-muted-foreground">Computer Science / Engineering</p>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">
                                    Solid foundation in computer science principles, algorithms, data structures,
                                    and software engineering methodologies.
                                </p>
                                <Badge variant="outline">Graduated 2024</Badge>
                            </CardContent>
                        </Card>
                    </FadeIn>
                </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-20">
                <FadeIn>
                    <h2 className="text-3xl font-bold mb-10 text-center">Technical Skills</h2>
                </FadeIn>
                <StaggerContainer className="flex flex-wrap justify-center gap-4">
                    {info.skills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            variants={staggerItem}
                        >
                            <Badge className="text-lg py-2 px-4 hover:scale-110 transition-transform cursor-default" variant="secondary">
                                {skill}
                            </Badge>
                        </motion.div>
                    ))}
                </StaggerContainer>
            </div>

            {/* CTA */}
            <FadeIn>
                <div className="rounded-3xl bg-primary text-primary-foreground p-12 text-center relative overflow-hidden shadow-2xl">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-6">Ready to create something amazing?</h2>
                        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto text-lg">
                            I&apos;m currently available for freelance projects and full-time roles.
                            Let&apos;s discuss how I can contribute to your team.
                        </p>
                        <Button size="lg" variant="secondary" asChild className="font-semibold shadow-lg hover:scale-105 transition-transform">
                            <Link href="/contact">
                                Let&apos;s Work Together <FaArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 opacity-50 animate-pulse" />
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl opacity-30" />
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl opacity-30" />
                </div>
            </FadeIn>
        </div>
    )
}
