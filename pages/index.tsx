import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import gsap from "gsap";
import Link from "next/link";
import links from "../data/footerData";
import { useRouter } from "next/router";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useGlobalContext } from "../context";

export default function Home() {
  const router = useRouter();
  const [tl, setTl] = useState(gsap.timeline({ paused: false }));
  const { theme, setTheme, setModal } = useGlobalContext();
  const ref = useRef();

  useEffect(() => {
    tl.from(ref.current, {
      x: `${Number(Math.random().toFixed()) > 0.5 ? "+" : "-"}=60`,
      opacity: 0,
      duration: 0.3,
    });
    setModal(false);
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

      {false && (
        <div className={`${styles.squiggle} ${styles.display}`}>
          <Image alt="squiggle" src="/Saly-30.png" width={750} height={250} />
        </div>
      )}
      <main className={`${styles.main}`}>
        <Logo className={`${styles.homeLogo} `} />

        <div className={`${styles.text}`}>
          <h1>{`Hello, I\'m Prince Charles`}</h1>
        </div>
        <p className={styles.desc}>
          {`I\'m`} a <span className={styles.span}>Software developer</span>. I
          create interactive <span className={styles.span}>experiences</span>{" "}
          for amazing people using modern web technology. I create{" "}
          <span className={styles.span}>Backend systems</span> that help drive
          critical infrastructure necessary for the{" "}
          <span className={styles.span}>modern web</span>. I am currently into
          building immersive web <span className={styles.span}>animations</span>{" "}
          and also exploring deploying{" "}
          <span className={styles.span}>DApps</span> on the{" "}
          <span className={styles.span}>decentralized</span> web.
        </p>
        {false && (
          <div className={`${styles.lolipop} ${styles.display}`}>
            <Image
              alt="lolipop background"
              className={``}
              src="/Saly-31.png"
              width={400}
              height={150}
            />
          </div>
        )}
      </main>
      <footer className={`${styles.footer}`}>
        <div className={styles.contacts}>
          {links.map((item, index) => {
            const { Logo } = item;
            return (
              <Link key={index} href={`${item.Link}`}>
                <Logo />
              </Link>
            );
          })}
        </div>
      </footer>
      <div onClick={() => router.push("/projects")} className={styles.explore}>
        Explore <AiOutlineArrowRight />
      </div>
      <div className={styles.inspiration}>
        inspired By <span>Collins Enebeli</span>
      </div>
    </div>
  );
}
export const Logo = ({ className }) => (
  <div className={`${styles.logo} ${className}`}>
    <Image alt="logo" className={``} src="/png2.png" width={100} height={118} />
  </div>
);
