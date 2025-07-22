import type { NextPage } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ProjectCard } from '@/components/ProjectCard'
import { featuredProjects } from '@/data/projects'
import { Header } from '@/components/header'
import { NextSeo } from 'next-seo'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NextSeo
        title="Home - Prince Charles"
        description="Welcome to the portfolio of Prince Charles, a Senior Blockchain and Fullstack Engineer."
      />

      <Header />

      <main className="flex-grow container mx-auto p-8">
        <section id="hero" className="text-center py-20">
          <h1 className="text-5xl font-bold mb-4">Senior Blockchain & Fullstack Engineer</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Building decentralized solutions and modern web experiences.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/projects" passHref><Button>View Projects</Button></Link>
            <Link href="/contact" passHref><Button variant="outline">Contact Me</Button></Link>
          </div>
        </section>

        <section id="introduction" className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-8">
              I am a Senior Blockchain and Fullstack Engineer with a passion for building decentralized applications and modern web experiences. I have experience with a wide range of technologies, including Algorand, Reach-lang, Next.js, and more.
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

        <section id="featured-projects" className="py-20 bg-muted">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

      </main>

      <footer className="py-4 px-8 border-t text-center text-muted-foreground">
        <p>© 2025 Prince Charles. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default Home
