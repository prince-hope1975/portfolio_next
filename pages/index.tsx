import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import styles from "../styles/Home.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useInView } from "react-intersection-observer";

import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";

export default function Home() {
  const index= 0
  // const {ref, inView:isInView} =useInView()
  const [tl, setTl] = useState(gsap.timeline({ paused: false }));
  const ref = useRef();

  useEffect(() => {
    tl.from(ref.current, {
      x: `${Number(Math.random().toFixed()) > 0.5 ? "+" : "-"}=60`,
      opacity: 0,
      duration: 0.3,
    });
   
  }, []);
  //  useEffect(() => {
  //    if (typeof window !== "undefined") {
  //      gsap.registerPlugin(ScrollTrigger);
  //    }
  //    timeline.from(`.${styles.homeLogo}`, {
  //      transform:300,
  //      duration: 2,

  //      stagger: 0.25,
  //      scrollTrigger: { trigger: `.${styles.main}`, markers: true },
  //    });
  //  }, []);
  const handleAnimation = (e: any, config: object) => {
    gsap.from(e.target, config);
  };
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

      <div className={`${styles.squiggle}`}>
        <Image alt="squiggle" src="/Saly-30.png" width={750} height={300} />
      </div>
      <main className={`${styles.main}`}>
        <Logo className={styles.homeLogo} />

        <div className={`${styles.text}`}>
          <h1>
            Hey <br /> there !
          </h1>
          <p>{" I'm Prince Charles"} </p>
          <p>{"<" + "Software Developer" + "/>"}</p>
        </div>
        <div className={`${styles.lolipop}`}>
          <Image
            alt="lolipop background"
            className={``}
            src="/Saly-31.png"
            width={450}
            height={180}
          />
        </div>
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
