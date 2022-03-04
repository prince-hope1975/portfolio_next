import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import styles from "../styles/Home.module.css";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";

export default function Home() {
  return (
    <>
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
        <Image alt="squiggle"src="/Saly-30.png" width={750} height={300} />
      </div>
      <main className={`${styles.main}`}>
      <Logo className={styles.homeLogo}/>

        <div className={`${styles.text}`}>
          <h1>
            Hey <br /> there !
          </h1>
          <p>{" I'm Prince Charles"} </p>
            <p>{"<" + "Software Developer" + "/>"}</p>
        </div>
        <div className={`${styles.lolipop}`}>
          <Image alt="lolipop background" className={``} src="/Saly-31.png" width={450} height={180} />
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
          <Image alt="wiggly linez"src="/Saly-33.png" width={1600} height={800} />
        </div>
      </footer>
    </>
  );
}
export const Logo = ({className}) => (
  <div className={`${styles.logo} ${className}`}>
    <Image alt="logo" className={``} src="/png2.png" width={130} height={140} />
  </div>
);