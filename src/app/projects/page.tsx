"use client"

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

export default function ProjectsPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-20">
            <FadeIn>
                <div className="mb-12">
                    <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Projects</h1>
                    <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
                        Here are some of the projects I&apos;ve worked on, ranging from web applications to open-source tools.
                    </p>
                </div>
            </FadeIn>

            <StaggerContainer className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        variants={staggerItem}
                    >
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </StaggerContainer>
        </div>
    )
}
