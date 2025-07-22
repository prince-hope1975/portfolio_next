import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"

export function Header() {
  return (
    <header className="py-4 px-8 border-b">
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="/" legacyBehavior passHref>
            <a className="font-bold text-lg">Prince Charles</a>
          </Link>
          <div className="flex gap-4 items-center">
            <Link href="/about" passHref legacyBehavior><Button variant="ghost">About</Button></Link>
            <Link href="/projects" passHref legacyBehavior><Button variant="ghost">Projects</Button></Link>
            <Link href="/contact" passHref legacyBehavior><Button variant="ghost">Contact</Button></Link>
          </div>
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}
