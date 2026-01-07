"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FaArrowRight, FaDownload } from "react-icons/fa6"
import { TypeAnimation } from 'react-type-animation';

import { Button } from "@/components/ui/button"
import { info } from "@/data/info"
import { FadeIn } from "@/components/animations/FadeIn"

export function Hero() {
    return (
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden py-10 text-center md:py-20">
            {/* Dynamic Background */}
            <div className="absolute inset-0 -z-20 bg-background">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
                <div className="absolute top-0 -right-4 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
            </div>

            <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center gap-8">
                <FadeIn delay={0.1}>
                    <span className="rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent backdrop-blur-sm border border-accent/20">
                        Available for Hire
                    </span>
                </FadeIn>

                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    <FadeIn delay={0.2}>
                        Hi, I&apos;m <span className="text-primary">{info.name}</span>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <span className="bg-gradient-to-r from-teal-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent bg-300% animate-gradient">
                            <TypeAnimation
                                sequence={[
                                    info.title,
                                    2000,
                                    "Web Developer",
                                    2000,
                                    "UI/UX Enthusiast",
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                    </FadeIn>
                </h1>

                <FadeIn delay={0.4} className="max-w-[42rem]">
                    <p className="text-muted-foreground sm:text-xl sm:leading-8">
                        {info.about}
                    </p>
                </FadeIn>

                <FadeIn delay={0.5}>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Button size="lg" className="rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300" asChild>
                            <Link href="/projects">
                                View Projects <FaArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full backdrop-blur-sm hover:bg-background/80 hover:scale-105 transition-all duration-300" asChild>
                            <Link href="/contact">
                                Contact Me
                            </Link>
                        </Button>
                    </div>
                </FadeIn>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>
    )
}
