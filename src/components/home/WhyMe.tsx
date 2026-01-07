"use client"

import { FaBolt, FaCheckDouble, FaCodeBranch } from "react-icons/fa6"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/animations/FadeIn"
import { StaggerContainer, staggerItem } from "@/components/animations/StaggerContainer"

const features = [
    {
        title: "Clean Code",
        description: "I write clean, maintainable, and scalable code that is easy to understand and extend.",
        icon: FaCodeBranch,
    },
    {
        title: "Pixel Perfect",
        description: "I pay attention to every detail, ensuring the design is implemented exactly as intended.",
        icon: FaCheckDouble,
    },
    {
        title: "High Performance",
        description: "I optimize applications for speed and efficiency, ensuring a smooth user experience.",
        icon: FaBolt,
    },
]

export function WhyMe() {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <FadeIn>
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold tracking-tight md:text-4xl relative inline-block group">
                            Why Work With Me?
                            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                        </h2>
                        <p className="mt-2 text-muted-foreground">My commitment to quality and excellence.</p>
                    </div>
                </FadeIn>

                <StaggerContainer className="grid gap-8 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={staggerItem}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:bg-accent group-hover:text-accent-foreground">
                                <feature.icon className="h-8 w-8" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </motion.div>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    )
}
