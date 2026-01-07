"use client"

import { motion } from "framer-motion"
import { FaEnvelope, FaMapLocationDot, FaPaperPlane } from "react-icons/fa6"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { info } from "@/data/info"
import { FadeIn } from "@/components/animations/FadeIn"

export default function ContactPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-20">
            <FadeIn>
                <div className="mb-12 px-4 text-center">
                    <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Contact Me</h1>
                    <p className="mt-4 text-muted-foreground text-lg">
                        Interested in working together? Let&apos;s talk.
                    </p>
                </div>
            </FadeIn>

            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
                <FadeIn delay={0.2} xOffset={-20}>
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle>Get in Touch</CardTitle>
                            <CardDescription>
                                Fill out the form below and I&apos;ll get back to you as soon as possible.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid gap-2">
                                    <label htmlFor="name" className="text-sm font-medium">
                                        Name
                                    </label>
                                    <Input id="name" placeholder="John Doe" className="transition-all focus:ring-2 focus:ring-teal-500/20" />
                                </div>
                                <div className="grid gap-2">
                                    <label htmlFor="email" className="text-sm font-medium">
                                        Email
                                    </label>
                                    <Input id="email" type="email" placeholder="john@example.com" className="transition-all focus:ring-2 focus:ring-teal-500/20" />
                                </div>
                                <div className="grid gap-2">
                                    <label htmlFor="message" className="text-sm font-medium">
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell me about your project..."
                                        className="min-h-[150px] transition-all focus:ring-2 focus:ring-teal-500/20"
                                    />
                                </div>
                                <Button className="w-full shadow-md hover:scale-[1.02] transition-transform">
                                    <FaPaperPlane className="mr-2 h-4 w-4" /> Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </FadeIn>

                <div className="space-y-6">
                    <FadeIn delay={0.3} xOffset={20}>
                        <Card className="shadow-lg transition-transform hover:-translate-y-1 duration-300">
                            <CardHeader>
                                <CardTitle>Role Info</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center gap-3 group">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                                        <FaEnvelope className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Email</p>
                                        <a href={`mailto:${info.socials.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                                            {info.socials.email}
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 group">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                                        <FaMapLocationDot className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Location</p>
                                        <p className="text-muted-foreground">{info.location}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </FadeIn>

                    <FadeIn delay={0.4} xOffset={20}>
                        <Card className="bg-primary text-primary-foreground shadow-lg overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
                            <CardHeader className="relative z-10">
                                <CardTitle className="text-primary-foreground">Current Status</CardTitle>
                            </CardHeader>
                            <CardContent className="relative z-10">
                                <p>
                                    I am currently open to new opportunities and interesting projects.
                                    Feel free to reach out if you have a proposal or just want to connect!
                                </p>
                            </CardContent>
                        </Card>
                    </FadeIn>
                </div>
            </div>
        </div>
    )
}
