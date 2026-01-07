"use client"

import { FaLaptopCode, FaMobileScreenButton, FaRocket, FaCode } from "react-icons/fa6"
import { motion } from "framer-motion"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FadeIn } from "@/components/animations/FadeIn"
import { StaggerContainer, staggerItem } from "@/components/animations/StaggerContainer"

const services = [
    {
        title: "Frontend Development",
        description: "Building responsive, high-performance web applications using modern technologies.",
        icon: FaLaptopCode,
        color: "text-teal-500",
        bg: "bg-teal-500/10",
        border: "group-hover:border-teal-500/50"
    },
    {
        title: "Responsive Design",
        description: "Ensuring your website looks amazing on all devices, from desktops to mobile phones.",
        icon: FaMobileScreenButton,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "group-hover:border-purple-500/50"
    },
    {
        title: "Performance",
        description: "Optimizing applications for speed and efficiency to ensure the best user experience.",
        icon: FaRocket,
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        border: "group-hover:border-orange-500/50"
    },
    {
        title: "Clean Code",
        description: "Writing maintainable, scalable, and well-documented code that exceeds industry standards.",
        icon: FaCode,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "group-hover:border-blue-500/50"
    }
]

export function Services() {
    return (
        <section className="bg-muted/50 py-20">
            <div className="max-w-7xl mx-auto px-6">
                <FadeIn>
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold tracking-tight md:text-4xl relative inline-block group">
                            My Services
                            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                        </h2>
                        <p className="mt-2 text-muted-foreground">What I can do for you.</p>
                    </div>
                </FadeIn>

                <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={staggerItem}
                        >
                            <Card className={`h-full shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-card group border-2 border-transparent ${service.border}`}>
                                <CardHeader>
                                    <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full ${service.bg} ${service.color} backdrop-blur-md shadow-inner transition-transform duration-500 group-hover:scale-110`}>
                                        <service.icon className="h-8 w-8" />
                                    </div>
                                    <CardTitle>{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{service.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    )
}
