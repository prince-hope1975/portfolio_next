import "../styles/globals.scss";
import { AppProvider } from "../context";
import Header from "../components/header";
import ThemeProvider from "../components/ThemeProvider";
import Head from "next/head";
import {DefaultSeo} from "next-seo"

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <ThemeProvider>
        <Head>

        </Head>
        <DefaultSeo
          titleTemplate="%s - Prince Charles"
          openGraph={{
            type: "website",
            locale: "en_IE",
            url:"https://amachree.dev",
            description: "The personal website for Prince Charles, developer.",
            site_name: "James Wallis | wallis.dev",
            images: [],
          }}
          canonical={"https://amachree.dev"}
        />
        <Header />
        <Component {...pageProps} />{" "}
      </ThemeProvider>{" "}
    </AppProvider>
  );
}

export default MyApp;
