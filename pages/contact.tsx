import type { NextPage } from 'next'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Header } from '@/components/header'
import { NextSeo } from 'next-seo'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const ContactPage: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <NextSeo
        title="Contact - Prince Charles"
        description="Get in touch with Prince Charles, a Senior Blockchain and Fullstack Engineer."
      />

      <Header />

      <main className="flex-grow container mx-auto p-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Contact Me</CardTitle>
              <CardDescription>
                Have a question or want to work together? Feel free to reach out.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name">Name</label>
                  <Input id="name" type="text" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email">Email</label>
                  <Input id="email" type="email" placeholder="Your Email" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message">Message</label>
                  <Textarea id="message" placeholder="Your message" />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

export default ContactPage
