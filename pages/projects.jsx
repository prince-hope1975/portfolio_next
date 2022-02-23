import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link"
import {useRouter} from "next/router"
import Header from "../components/header";
import Footer from "../components/footer";
import { Squiggles } from "./contact.jsx";
import styles from "../styles/Project.module.css";
import Data from "../components/ProjectsData";
import Image from "next/image";

const Work = () => {
  useEffect(() => {
   console.log(Data)
  }, [])
  
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
      <section className={`${styles.section}`}>
        <div className={styles.projects}>Projects</div>
        <div className={styles.cardSection}>
          {Data.map((data, index) => {
           return <Card key=
           {index}
              {...data}
              className={`${styles.card} ${index % 2 === 0 ? styles.even : styles.odd}`}
            />;
          })}
        </div>
      </section>
      <Squiggles />
      <Footer />
    </>
  );
};
const Card = ({ className, title, description, image, links }) => {
  const router = useRouter()
  return <div className={className} >
    <h1>{title}</h1>
   
    <div className={styles.img}>
      <Image alt="Project image"className={styles.image} src={image} width={200} height={100}/>
    </div>
      {links.map(({preview, github}, index)=>{
        return (
          <div className={styles.links} key={`key${index}`}>
            <Link href={`${github}`}>
              <a>Github</a> 
              </Link>
            <Link href={`${preview}`}><a>Preview</a></Link>
          </div>
        );
      })}

    <p>{description}</p>
  </div>;
};
export default Work;
