import type { NextPage } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ProjectCard } from '@/components/ProjectCard'
import { featuredProjects } from '@/data/projects'
import { Header } from '@/components/header'
import { NextSeo } from 'next-seo'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <NextSeo
        title="Home - Prince Charles"
        description="Welcome to the portfolio of Prince Charles, a Senior AI, Blockchain and Fullstack Engineer."
      />

      <Header />

      <main className="flex-grow container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="md:col-span-1">
            <div className="flex flex-col items-center md:items-start">
              <Image
                src="/me.png"
                alt="Prince Charles"
                width={250}
                height={250}
                className="rounded-full border-4 border-primary mb-4"
              />
              <h1 className="text-2xl font-bold">Prince Charles</h1>
              <p className="text-muted-foreground mb-4">@prince-hope1975</p>
              <div className="flex flex-col gap-2 w-full">
                  <a href="https://github.com/prince-hope1975" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" className="w-full">GitHub</Button>
                  </a>
                  <a href="https://www.linkedin.com/in/princeam/" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" className="w-full">LinkedIn</Button>
                  </a>
                  <Link href="/contact" passHref legacyBehavior><Button variant="outline" className="w-full">Contact Me</Button></Link>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="md:col-span-3">
            <section id="about-me" className="mb-12 p-4 border rounded-lg bg-card">
              <h2 className="text-2xl font-bold border-b pb-2 mb-4">About Me</h2>
              <p className="text-lg text-muted-foreground">
                I am a Senior Blockchain and AI/Fullstack Engineer with a passion for building intelligent, decentralized applications and modern web experiences. I have experience with a wide range of technologies, including Python, TensorFlow, Algorand, Reach-lang, Next.js, and more.
              </p>
            </section>

            <section id="featured-projects">
              <h2 className="text-2xl font-bold border-b pb-2 mb-4">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="py-4 px-8 border-t text-center text-muted-foreground">
        <p>© 2025 Prince Charles. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default Home
