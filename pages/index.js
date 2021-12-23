import Head from 'next/head'
import Header from '../components/header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="Home page"
          content="Prince charles Amachree Portfoliio Homepage"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main id="home">
        <h1 className="lg-heading">
          Prince
          <span className="text-secondary">Charles-Amachree</span>
        </h1>
        <h2 className="sm-heading">
          Web Developer, Programmer, Designer & Entrepreneur
        </h2>
        <div className="icons">
          <a href="#!">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="#!">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="#!">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="#!">
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>
      </main>
    </>
  );
}
