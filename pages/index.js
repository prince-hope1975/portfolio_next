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
      <body >
        
      </body>
    </>
  );
}
