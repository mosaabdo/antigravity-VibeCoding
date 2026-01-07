"use client"

import Link from "next/link"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { info } from "@/data/info"

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-200 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white tracking-tight">Mousa Abdo</h3>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Frontend Architect crafting exceptional digital experiences. Specialized in React, Next.js, and modern UI design.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-teal-400 transition-colors">About</Link></li>
                            <li><Link href="/projects" className="hover:text-teal-400 transition-colors">Projects</Link></li>
                            <li><Link href="/blog" className="hover:text-teal-400 transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Connect</h4>
                        <div className="flex gap-4">
                            <a href={info.socials.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white hover:scale-110 transition-all">
                                <FaGithub className="h-6 w-6" />
                            </a>
                            <a href={info.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 hover:scale-110 transition-all">
                                <FaLinkedin className="h-6 w-6" />
                            </a>
                            <a href={`mailto:${info.socials.email}`} className="text-slate-400 hover:text-teal-400 hover:scale-110 transition-all">
                                <FaEnvelope className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Newsletter</h4>
                        <p className="text-slate-400 text-sm">Subscribe to get the latest updates.</p>
                        <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                            <Input
                                placeholder="Enter your email"
                                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:ring-teal-500 focus:border-teal-500"
                            />
                            <Button className="bg-teal-600 text-white hover:bg-teal-700 w-full">Subscribe</Button>
                        </form>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
                    <p>© 2025 Mousa Abdo. Built with Next.js 15.</p>
                </div>
            </div>
        </footer>
    )
}
