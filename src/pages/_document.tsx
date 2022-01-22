import { Html, Head, Main, NextScript } from "next/document";

const Document = () => (
  <Html lang="en">
    <Head>
      <meta name="theme-color" content="#ffffff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="PokeList App" />
      <meta
        name="description"
        content="Most Complete Poke List App in the world"
      />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/pokemonIcon152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/pokemonIcon180x180.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="167x167"
        href="/pokemonIcon167x167.png"
      />
      {/* <meta name="msapplication-config" content="/icons/browserconfig.xml" /> */}
      {/* <meta name="msapplication-TileColor" content="#2B5797" /> */}
      {/* <meta name="msapplication-tap-highlight" content="no" /> */}
      <meta name="theme-color" content="#FFFFFF" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
