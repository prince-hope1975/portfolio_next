import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import styles from "../styles/Home.module.css";
import gsap from "gsap";
import { Squiggles } from "./contact";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useInView } from "react-intersection-observer";

import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { useGlobalContext } from "../context";

export default function Home() {
  const [tl, setTl] = useState(gsap.timeline({ paused: false }));
  const {theme, setTheme, setModal} = useGlobalContext()
  const ref = useRef();

  useEffect(() => {
    tl.from(ref.current, {
      x: `${Number(Math.random().toFixed()) > 0.5 ? "+" : "-"}=60`,
      opacity: 0,
      duration: 0.3,
    });
   setModal(false)
  }, []);

  return (
    <div ref={ref}>
      <Head>
        <title>Home</title>
        <meta
          name="Home page"
          content="Prince charles Amachree Portfoliio Homepage"
        />
        <link rel="icon" href="/png.ico" />
      </Head>
      <Header />

      {theme === "purple" && (
        <div className={`${styles.squiggle}`}>
          <Image alt="squiggle" src="/Saly-30.png" width={750} height={250} />
        </div>
      )}
      <main className={`${styles.main}`}>
        <Logo
          className={`${styles.homeLogo} ${theme === "dark" && styles.darkImg}`}
        />

        <div className={`${styles.text}`}>
          <h1>{`Hello, I\'m Prince Amachree`}</h1>
          <p className={styles.software_font}>
            {"<" + "Software Developer" + "/>"}
          </p>
        </div>
        <p className={styles.desc}>
          {`I\'m `}a <span className={styles.span}>Software developer</span>. I create interactive <span className={styles.span}>experiences</span> for
          amazing people using modern web technology.
          I create <span className={styles.span}>Backend systems</span> that help drive critical infrastructure necessary for the <span className={styles.span}>modern web</span>.
           I am currently into
          building immersive web <span className={styles.span}>animations</span> and also exploring deploying <span className={styles.span}>DApps</span> on the <span className={styles.span}>decentralized</span> web.
        </p>
        {theme === "purple " && (
          <div className={`${styles.lolipop}`}>
            <Image
              alt="lolipop background"
              className={``}
              src="/Saly-31.png"
              width={450}
              height={180}
            />
          </div>
        )}
      </main>
      <footer className={`${styles.footer}`}>
        <div className={styles.contacts}>
          <AiFillLinkedin />
          <AiFillGithub />
          <AiFillMail />
          <AiOutlineTwitter />
        </div>

        <div className={`${styles.end}`}>
          <Image
            alt="wiggly linez"
            src="/Saly-33.png"
            width={1600}
            height={800}
          />
        </div>
      </footer>
    </div>
  );
}
export const Logo = ({ className }) => (
  <div className={`${styles.logo} ${className}`}>
    <Image alt="logo" className={``} src="/png2.png" width={130} height={140} />
  </div>
);
