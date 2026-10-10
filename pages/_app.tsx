import "../styles/globals.scss";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
const display = localFont({
  src: "../public/fonts/bricolage.ttf",
  variable: "--font-display",
  display: "swap",
  weight: "200 800",
});
const body = localFont({
  src: "../public/fonts/body.woff2",
  variable: "--font-body",
  display: "swap",
  weight: "200 800",
});
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${display.variable} ${body.variable} app-root`}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </div>
  );
}
