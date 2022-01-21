import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../Components/Layout";
import { useEffect } from "react";
import path from "path";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      console.log("here");
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("./sw.js").then(
          function (registration) {
            // Registration was successful
            console.log(
              "ServiceWorker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            // registration failed :(
            console.log("ServiceWorker registration failed: ", err);
          }
        );
      });
    }
  }, []);

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
