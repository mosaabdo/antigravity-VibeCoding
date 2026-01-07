import { Hero } from "@/components/home/Hero"
import { SkillsTicker } from "@/components/home/SkillsTicker"
import { FeaturedProjects } from "@/components/home/FeaturedProjects"
import { Services } from "@/components/home/Services"
import { WhyMe } from "@/components/home/WhyMe"
import { LatestArticles } from "@/components/home/LatestArticles"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <SkillsTicker />
      <Services />
      <FeaturedProjects />
      <WhyMe />
      <LatestArticles />
    </main>
  )
}
