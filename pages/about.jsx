import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer.jsx"
import { Squiggles } from "./contact";
import styles from "../styles/about.module.css"
import { Logo } from ".";
import { Blob } from "../components/footer.jsx";

const About = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta
          name="description"
          content="Prince charles Amachree Portfoliio About"
        />
        <link rel="icon" href="/png.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Logo className={styles.logo} />
{"I'm Prince Charles" }    
 </main>
      <Blob className={styles.blob}></Blob>

      <Squiggles />
      <Footer />
    </>
  );
};
export default About;
