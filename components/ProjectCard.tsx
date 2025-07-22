import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
}

export function ProjectCard({ title, description, tags }: ProjectCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {/* You can add more content here, like an image */}
      </CardContent>
      <CardFooter className="flex gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="outline">{tag}</Badge>
        ))}
      </CardFooter>
    </Card>
  )
} 