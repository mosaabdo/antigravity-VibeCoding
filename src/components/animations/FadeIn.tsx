"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface FadeInProps {
    children: React.ReactNode
    className?: string
    delay?: number
    duration?: number
    yOffset?: number
    xOffset?: number
}

export function FadeIn({
    children,
    className = "",
    delay = 0,
    duration = 0.5,
    yOffset = 20,
    xOffset = 0,
}: FadeInProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: yOffset, x: xOffset }}
            animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: yOffset, x: xOffset }}
            transition={{
                duration,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98], // Custom ease for smooth motion
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
