import type { NextPage } from 'next'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { NextSeo } from 'next-seo'

const AboutPage: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NextSeo
        title="About Me - Prince Charles"
        description="Learn more about Prince Charles, a Senior Blockchain and Fullstack Engineer."
      />

      <Header />

      <main className="flex-grow container mx-auto p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              I am a Senior Blockchain and Fullstack Engineer with a passion for building decentralized applications and modern web experiences. I have experience with a wide range of technologies, including Algorand, Reach-lang, Next.js, and more.
            </p>
            <p>
              My goal is to leverage my skills to build innovative solutions that solve real-world problems. I am always eager to learn new things and take on new challenges.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing my knowledge with the community.
            </p>
          </div>
          <div className="mt-12 flex justify-start gap-4">
            <a href="https://github.com/prince-hope1975" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">GitHub</Button>
            </a>
            <a href="https://www.linkedin.com/in/princeam/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">LinkedIn</Button>
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AboutPage
