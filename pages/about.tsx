import type { NextPage } from 'next';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/header';
import { NextSeo } from 'next-seo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, BrainCircuit, Network, Smartphone, Server, Database } from 'lucide-react';
import Image from 'next/image';

const AboutPage: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <NextSeo
        title="About Me - Prince Charles"
        description="Learn more about Prince Charles, a Senior AI, Blockchain and Fullstack Engineer."
      />

      <Header />

      <main className="flex-grow container mx-auto p-4 md:p-8">
        {/* Hero Section */}
        <section className="relative text-center py-20 mb-12 bg-card border rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-primary/10 opacity-50"></div>
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold">About Me</h1>
            <p className="text-lg text-muted-foreground mt-4">
              Innovator, problem-solver, and lifelong learner.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Image
                  src="/me.png"
                  alt="Prince Charles"
                  width={100}
                  height={100}
                  className="rounded-full border-4 border-primary"
                />
                <div>
                  <CardTitle className="text-3xl">Prince Charles</CardTitle>
                  <p className="text-muted-foreground">
                    Senior AI, Blockchain & Fullstack Engineer
                  </p>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 text-lg text-muted-foreground">
                <p>
                  I am a passionate and results-driven engineer with a strong background in building intelligent, decentralized applications and modern web experiences. My journey in technology has been fueled by a desire to solve complex problems and create impactful solutions.
                </p>
                <p>
                  I thrive in dynamic environments where I can continuously learn and adapt to new challenges. Whether it's developing a sophisticated AI model, architecting a secure blockchain application, or crafting a seamless user interface, I am committed to delivering high-quality work.
                </p>
                <p>
                  Beyond coding, I am an advocate for open-source and enjoy contributing to projects that empower the developer community. I believe in the power of collaboration and am always open to connecting with like-minded individuals.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Skills & Expertise</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <SkillItem icon={<BrainCircuit size={24} />} title="AI & Machine Learning" skills="Python, TensorFlow, PyTorch" />
                <SkillItem icon={<Network size={24} />} title="Blockchain" skills="Algorand, Reach, Solidity, PyTeal" />
                <SkillItem icon={<Smartphone size={24} />} title="Frontend" skills="Next.js, React, TypeScript, Tailwind CSS" />
                <SkillItem icon={<Server size={24} />} title="Backend" skills="Node.js, Express" />
                <SkillItem icon={<Database size={24} />} title="Databases" skills="SQL & NoSQL" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <a href="https://github.com/prince-hope1975" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full flex items-center gap-2">
                    <Code size={20} /> GitHub
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/princeam/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full flex items-center gap-2">
                    <Network size={20} /> LinkedIn
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

const SkillItem = ({ icon, title, skills }: { icon: React.ReactNode, title: string, skills: string }) => (
  <div className="flex items-start gap-4">
    <div className="text-primary">{icon}</div>
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-muted-foreground">{skills}</p>
    </div>
  </div>
);

export default AboutPage;
