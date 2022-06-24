import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Head from "next/head";
import Footer from "../components/footer";
import { Squiggles } from "./contact";
import styles from "../styles/about.module.css";
import { Logo } from ".";
import { Blob } from "../components/footer";
import { useGlobalContext } from "../context";
import Meta from "../components/Meta";

const About = () => {
  const ref = useRef();
  const [tl, setTl] = useState(gsap.timeline({ paused: false }));
  const { active, setModal } = useGlobalContext();

  useEffect(() => {
    tl.from(ref.current, {
      x: `${Number(Math.random().toFixed()) > 0.5 ? "+" : "-"}=60`,
      opacity: 0,
      duration: 0.3,
    });
    setModal(false);
  }, []);
  return (
    <>
      <Meta>
        <title>About Me</title>
        <meta
          name="description"
          content="Prince charles Amachree Portfoliio About"
        />
        <link rel="icon" href="/png.ico" />
      </Meta>
      <div className={styles.container}>
        <main className={styles.main} ref={ref}>
          <Logo className={styles.logo} />
          {"I'm Prince Charles"}
        </main>
        <Blob className={styles.blob}>
          <h2>BackGround</h2>
          <p>
            I an Engineer, with a Background in Software and Electrical
            Engineering
          </p>
          <h2>Roots</h2>
          <p>
            I have Been Into Software Development since 2018 and have gathered
            skills that help me create software, that solveenj real world problems
            and provide value
          </p>
          <h2>Tech Tools</h2>
          <p>
            Javascript, React, Next.js, TypeScript, HTML, Vite, Webpack,Node,
            Solidity, Reach, Pyteal,
          </p>
        </Blob>
        <Squiggles />
        {/* <Footer /> */}
      </div>
    </>
  );
};
export default About;
