import type { NextPage } from 'next'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Header } from '@/components/header'
import { NextSeo } from 'next-seo'

const ContactPage: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NextSeo
        title="Contact - Prince Charles"
        description="Get in touch with Prince Charles, a Senior Blockchain and Fullstack Engineer."
      />

      <Header />

      <main className="flex-grow container mx-auto p-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>
          <p className="text-center text-lg text-muted-foreground mb-12">
            Have a question or want to work together? Feel free to reach out.
          </p>
          <form className="space-y-6">
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Textarea placeholder="Your message" />
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default ContactPage
