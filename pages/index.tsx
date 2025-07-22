import type { NextPage } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ProjectCard } from '@/components/ProjectCard'
import { featuredProjects } from '@/data/projects'
import { Header } from '@/components/header'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { ScrollAnimation } from '@/components/ScrollAnimation'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <NextSeo
        title="Home - Prince Charles"
        description="Welcome to the portfolio of Prince Charles, a Senior AI, Blockchain and Fullstack Engineer."
      />

      <Header />

      <main className="flex-grow container mx-auto p-4 md:p-8">
        <ScrollAnimation>
          <section id="hero" className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-12 md:py-20">
            <div className="md:col-span-2 order-2 md:order-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">AI, Blockchain & Fullstack Engineer</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Building intelligent, decentralized solutions and modern web experiences.
              </p>
              <div className="flex gap-4">
                <Link href="/projects" passHref legacyBehavior><Button size="lg">View Projects</Button></Link>
                <Link href="/contact" passHref legacyBehavior><Button size="lg" variant="outline">Contact Me</Button></Link>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <Image
                src="/me.png"
                alt="Prince Charles"
                width={250}
                height={250}
                className="rounded-full border-4 border-primary"
              />
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation>
          <section id="introduction" className="py-20">
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-8">
                I am a Senior AI, Blockchain and Fullstack Engineer with a passion for building intelligent, decentralized applications and modern web experiences. I have experience with a wide range of technologies, including Python, TensorFlow, Algorand, Reach-lang, Next.js, and more.
              </p>
              <div className="flex justify-center gap-4">
                <a href="https://github.com/prince-hope1975" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">GitHub</Button>
                </a>
                <a href="https://www.linkedin.com/in/princeam/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">LinkedIn</Button>
                </a>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation>
          <section id="featured-projects" className="py-20 bg-card rounded-lg border">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </section>
        </ScrollAnimation>
      </main>

      <footer className="py-4 px-8 border-t text-center text-muted-foreground">
        <p>© 2025 Prince Charles. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default Home
