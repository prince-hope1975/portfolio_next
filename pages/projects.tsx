import type { NextPage } from 'next'
import { ProjectCard } from '@/components/ProjectCard'
import { featuredProjects } from '@/data/projects'
import { Header } from '@/components/header'
import { NextSeo } from 'next-seo'
import { Input } from "@/components/ui/input"

const ProjectsPage: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <NextSeo
        title="Projects - Prince Charles"
        description="A showcase of projects by Prince Charles, a Senior Blockchain and Fullstack Engineer."
      />
      <Header />
      <main className="flex-grow container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Sidebar for Filters */}
          <div className="md:col-span-1">
            <div className="p-4 border rounded-lg bg-card">
              <h2 className="text-lg font-bold mb-4">Filters</h2>
              <Input placeholder="Find a project..." className="mb-4" />
              {/* Add more filters here, e.g., by language or tag */}
            </div>
          </div>

          {/* Right Content for Projects */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProjectsPage
