import Head from "next/head";
const Meta = (props) => (
    <Head>
      {props.children}
    <meta name="description" content="" />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content="Prince Charles Amachree" />
    <meta property="og:site_name" content="amachree.dev" />
    <meta property="og:url" content="https://amachree.dev" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="" />
    <meta name="twitter:description" content={props.desc} />
    <meta name="twitter:site" content="" />
    <meta name="twitter:creator" content="" />
    <link rel="icon" type="image/png" href="/static/images/favicon.ico" />
    <link rel="apple-touch-icon" href="/static/images/favicon.ico" />
    <meta property="og:image" content="" />
    <meta name="twitter:image" content="" />
    <link rel="canonical" href="" />
  </Head>
);
export default Meta;
