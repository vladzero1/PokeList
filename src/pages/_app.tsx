import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../Components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Head>
          <html lang="en"></html>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
