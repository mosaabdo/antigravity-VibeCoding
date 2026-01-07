"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects"
import { FadeIn } from "@/components/animations/FadeIn"
import { StaggerContainer, staggerItem } from "@/components/animations/StaggerContainer"
import { ProjectCard } from "@/components/projects/ProjectCard"

export function FeaturedProjects() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20">
            <FadeIn>
                <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight md:text-4xl relative inline-block group">
                            Featured Projects
                            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                        </h2>
                        <p className="mt-2 text-muted-foreground">
                            A selection of my recent work and experiments.
                        </p>
                    </div>
                    <Button variant="ghost" asChild>
                        <Link href="/projects" className="group">
                            View All Projects
                            <FaArrowUpRightFromSquare className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </FadeIn>

            <StaggerContainer className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        variants={staggerItem}
                    >
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </StaggerContainer>
        </section>
    )
}
