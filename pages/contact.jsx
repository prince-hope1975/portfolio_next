import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/Contact.module.css";
import { useState } from "react";

const Contact = () => {
  const [input, setInput] = useState({})
  const handleSubmit = () => {
    return;
  };
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta
          name="description"
          content="Prince charles Amachree Portfoliio About"
        />
        <link rel="icon" href="/png.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input required
            type="text"
            onChange={(e) => {
              setInput({ ...input, name: e.target.value });
            }}
            placeholder="Your Name"
          />
          <input required
            type="email"
            onChange={(e) => {
              setInput({ ...input, mail: e.target.value });
            }}
            placeholder="Your Email"
          />
          <textarea placeholder="Job Detials" height="10px"  required/>

          <input type="submit" value="SUMBIT" />
        </form>
      </main>
      <Squiggles />

      <Footer />
    </>
  );
};
export const Squiggles = () => {
  return (
    <>
      <div className={`${styles.squiggle1}`}>
        <Image alt="squiggles"src="/Saly-33.png" width={900} height={400} />
      </div>
      <div className={`${styles.squiggle2}`}>
        <Image alt="squiggles" src="/Saly-33.png" width={700} height={300} />
      </div>
    </>
  );
};
export default Contact;
