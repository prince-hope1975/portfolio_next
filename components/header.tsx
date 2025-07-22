"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="py-4 px-8 border-b">
      <nav className="flex justify-between items-center">
        <Link href="/" legacyBehavior passHref>
          <a className="font-bold text-lg">Prince Charles</a>
        </Link>
        <div className="hidden md:flex gap-4 items-center">
          <Link href="/about" passHref><Button variant="ghost">About</Button></Link>
          <Link href="/projects" passHref><Button variant="ghost">Projects</Button></Link>
          <Link href="/contact" passHref><Button variant="ghost">Contact</Button></Link>
          <ThemeToggle />
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col gap-4">
            <Link href="/about" passHref><Button variant="ghost" className="w-full">About</Button></Link>
            <Link href="/projects" passHref><Button variant="ghost" className="w-full">Projects</Button></Link>
            <Link href="/contact" passHref><Button variant="ghost" className="w-full">Contact</Button></Link>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  )
}
