import Head from "next/head";
import Image from "next/image"
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/Contact.module.css"
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlinePhone,
} from "react-icons/ai";

const Contact = () => {

  const handleSubmit = ()=>{
    return
  }
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
      <main>
        <div className={`${styles.squiggle1}`}>
          <Image src="/Saly-33.png" width={900} height={400} />
        </div>
        <div className={`${styles.squiggle2}`}>
          <Image src="/Saly-33.png" width={700} height={300} />
          <form onSubmit={handleSubmit}>

          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Contact;