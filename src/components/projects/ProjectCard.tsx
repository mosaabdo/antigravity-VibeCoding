"use client"

import { motion } from "framer-motion"
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6"
import Image from "next/image"

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

interface ProjectProps {
    project: {
        id: number
        title: string
        description: string
        tags: string[]
        image: string
        demo: string
        github: string
    }
}

export function ProjectCard({ project }: ProjectProps) {
    return (
        <Card className="flex h-full flex-col overflow-hidden border-2 border-transparent bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-teal-500/30 hover:shadow-2xl hover:scale-[1.02] group">
            {/* Cover Image Area */}
            <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-muted animate-pulse" />
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            <CardHeader className="relative">
                <CardTitle className="text-xl group-hover:text-teal-500 transition-colors">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                    {project.description}
                </CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-teal-500/10 text-teal-600 hover:bg-teal-500/20 rounded-full px-3 font-medium text-xs border border-teal-500/10 transition-colors"
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardContent>

            <CardFooter className="gap-2 pt-0">
                <Button variant="outline" size="sm" className="w-full relative overflow-hidden group/btn hover:border-teal-500/50 hover:text-teal-600 transition-colors" asChild>
                    <a href={project.demo} target="_blank" rel="noreferrer">
                        <span className="absolute inset-0 bg-teal-500/5 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                        <FaArrowUpRightFromSquare className="mr-2 h-3.5 w-3.5" />
                        Demo
                    </a>
                </Button>
                <Button variant="outline" size="sm" className="w-full relative overflow-hidden group/btn hover:border-teal-500/50 hover:text-teal-600 transition-colors" asChild>
                    <a href={project.github} target="_blank" rel="noreferrer">
                        <span className="absolute inset-0 bg-teal-500/5 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                        <FaGithub className="mr-2 h-3.5 w-3.5" />
                        Code
                    </a>
                </Button>
            </CardFooter>
        </Card>
    )
}
