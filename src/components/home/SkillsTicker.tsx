"use client"

import { info } from "@/data/info"
import { motion } from "framer-motion"

export function SkillsTicker() {
    const skills = [...info.skills, ...info.skills, ...info.skills] // Duplicate for seamless loop

    return (
        <div className="w-full overflow-hidden border-y bg-background py-8">
            <div className="container overflow-hidden">
                <div className="mask-image-gradient flex w-full">
                    <motion.div
                        className="flex min-w-full shrink-0 gap-12 px-6"
                        animate={{ x: "-100%" }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 50,
                        }}
                    >
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className="whitespace-nowrap text-2xl font-semibold text-muted-foreground/50"
                            >
                                {skill}
                            </span>
                        ))}
                    </motion.div>
                    <motion.div
                        className="flex min-w-full shrink-0 gap-12 px-6"
                        animate={{ x: "-100%" }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 50,
                        }}
                    >
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className="whitespace-nowrap text-2xl font-semibold text-muted-foreground/50"
                            >
                                {skill}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
