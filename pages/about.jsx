import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer.jsx"
import { Squiggles } from "./contact";
import styles from "../styles/about.module.css"
import { Logo } from ".";
import { Blob } from "../components/footer.jsx";
import { useGlobalContext } from "../context";


const About = () => {
  const ref = useRef();
  const [tl, setTl] = useState(gsap.timeline({ paused: false }));
  const {active, setModal} = useGlobalContext()


  useEffect(() => {
    tl.from(ref.current, {
      x: `${Number(Math.random().toFixed()) > 0.5 ? "+" : "-"}=60`,
      opacity: 0,
      duration: 0.3,
    });
    setModal(false)
  }, []);
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
      <main className={styles.main} div ref={ref}>
        <Logo className={styles.logo} />
        {"I'm Prince Charles"}
      </main>
      <Blob className={styles.blob}></Blob>

      <Squiggles />
      <Footer />
    </>
  );
};
export default About;
