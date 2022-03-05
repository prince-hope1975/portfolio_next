import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "../components/header";
import Footer from "../components/footer";
import { Squiggles } from "./contact";
import styles from "../styles/Project.module.css";
import Data from "../components/ProjectsData";
import Image from "next/image";

const Work = () => {
  const index = 2
    const ref = useRef();
    const [tl, setTl] = useState(gsap.timeline({ paused: false }));

    useEffect(() => {
      tl.from(ref.current, {
        x: `${Number(Math.random().toFixed()) > 0.5 ? "+" : "-"}=60`,
        opacity: 0,
        delay:0.1,
        duration: 0.3,
      });
    }, []);
  useEffect(() => {
    console.log(Data);
  }, []);


  return (
    <>
      <Head>
        <title>My Work</title>
        <meta
          name="description"
          content="Prince charles Amachree Portfoliio About"
        />
        <link rel="icon" href="/png.ico" />
      </Head>
      <Header />
      <section ref={ref} className={`${styles.section}`}>
        <div className={styles.projects}>Projects</div>
        <div className={styles.cardSection}>
          {Data.map((data, index) => {
            return <Card key={index} {...data} className={`${styles.card} `} />;
          })}
        </div>
      </section>
      <Squiggles />
      <Footer />
    </>
  );
};
const Card = ({ className, title, description, links, tools }) => {
  const router = useRouter();
  return (
    <div className={className}>
      <h1>{title}</h1>
      <div className={styles.tools}>
        {tools.map((tool:String, index:Number)=>{
          if (index === tools.length-1) return tool
          return tool + " + "
        })}
        </div>
      <div className={styles.links}>
        {links.map(({ Logo, link }, index) => {
          return (
            <a onClick={() => router.push(link)} key={`key${index}`}>
              <Logo />
            </a>
          );
        })}
      </div>

      <p>{description.slice(0, 80)}</p>
    </div>
  );
};
export default Work;
