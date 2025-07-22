import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "@/components/ThemeProvider"
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
