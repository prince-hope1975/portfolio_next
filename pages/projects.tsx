import type { NextPage } from 'next'
import { ProjectCard } from '@/components/ProjectCard'
import { featuredProjects } from '@/data/projects' // We can expand this later
import { Header } from '@/components/header'
import { NextSeo } from 'next-seo'

const ProjectsPage: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NextSeo
        title="Projects - Prince Charles"
        description="A showcase of projects by Prince Charles, a Senior Blockchain and Fullstack Engineer."
      />

      <Header />

      <main className="flex-grow container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => ( // Replace with allProjects later
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default ProjectsPage
