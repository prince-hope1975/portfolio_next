import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {/* You can add more content here, like an image */}
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary">{tag}</Badge>
        ))}
      </CardFooter>
      {link && (
        <div className="p-6 pt-0">
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="w-full">View Project</Button>
          </Link>
        </div>
      )}
    </Card>
  )
} 