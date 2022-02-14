import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlinePhone,
} from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta
          name="description"
          content="Prince charles Amachree Portfoliio About"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <main id="contact">
          <h1 className="lg-heading">
            Contact
            <span className="text-secondary">Me</span>
          </h1>
          <h2 className="sm-heading">This is how you can reach me...</h2>
          <div className="boxes">
            <div>
              <a href="mailto:amachreeprince8@gmail.com" target="_blank">
                <span className="text-secondary">
                  Email:{" "}
                </span>
                  <AiOutlineMail />
              </a>
            </div>
            <div>
              <a href="https://wa.link/8ahnkg" target="_blank">
                <span className="text-secondary">WhatsApp: </span>
                <AiOutlineWhatsApp />
              </a>
            </div>
            <div>
              <a href="tel:+2348104485746" target="_blank">
                <span className="text-secondary">Phone: </span>
                <AiOutlinePhone />
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </main>
    </>
  );
};
export default Contact;