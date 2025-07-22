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
    <Card className="flex flex-col h-full border rounded-lg">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">
              <Link href={link || '#'} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {title}
              </Link>
            </CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          {link && (
            <Link href={link} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">View</Button>
            </Link>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        {/* You can add more content here, like an image */}
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary">{tag}</Badge>
        ))}
      </CardFooter>
    </Card>
  )
} 