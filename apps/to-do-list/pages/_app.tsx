import Head from 'next/head';
import '../src/styles/styles.css';

function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
  <meta name="description" content="description of your project" />
  <meta name="theme-color" content="#000" />
  <title>To Do List</title>
  <link rel="manifest" href="/manifest.json" />
  <link rel="shortcut icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" href="/apple-icon.png"></link>
      </Head>
        <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
