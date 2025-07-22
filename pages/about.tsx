import type { NextPage } from 'next'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { NextSeo } from 'next-seo'
import { ScrollAnimation } from '@/components/ScrollAnimation'

const AboutPage: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <NextSeo
        title="About Me - Prince Charles"
        description="Learn more about Prince Charles, a Senior AI, Blockchain and Fullstack Engineer."
      />

      <Header />

      <main className="flex-grow container mx-auto p-4 md:p-8">
        <ScrollAnimation>
          <section className="py-12 md:py-20">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">About Me</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  I am a Senior AI, Blockchain, and Fullstack Engineer with a passion for building intelligent, decentralized applications and modern web experiences. My goal is to leverage my skills to build innovative solutions that solve real-world problems.
                </p>
                <p>
                  I am always eager to learn new things and take on new challenges. When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing my knowledge with the community.
                </p>
              </div>
              <div className="space-y-6 text-lg text-muted-foreground">
                <h3 className="text-2xl font-bold text-foreground">Skills & Technologies</h3>
                <ul className="list-disc list-inside">
                  <li>AI & Machine Learning: Python, TensorFlow, PyTorch</li>
                  <li>Blockchain: Algorand, Reach, Solidity, PyTeal</li>
                  <li>Frontend: Next.js, React, TypeScript, Tailwind CSS</li>
                  <li>Backend: Node.js, Express, Databases (SQL & NoSQL)</li>
                </ul>
                <div className="flex gap-4">
                  <a href="https://github.com/prince-hope1975" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">GitHub</Button>
                  </a>
                  <a href="https://www.linkedin.com/in/princeam/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">LinkedIn</Button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </main>
    </div>
  )
}

export default AboutPage
