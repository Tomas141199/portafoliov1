import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html data-theme="mytheme">
      <Head>
        <link rel="shortcut icon" href="/icon.png" />
        <meta
          name="title"
          content="My Portafolio Web - Tomas Hernandez Garcia"
        />
        <meta
          name="description"
          content="Hi my name is Tomas Hernandez Garcia and I'm a software engineeer"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tomas-hg.vercel.app/" />
        <meta
          property="og:title"
          content="My Portafolio Web - Tomas Hernandez Garcia"
        />
        <meta
          property="og:description"
          content="Hi my name is Tomas Hernandez Garcia and I'm a software engineeer"
        />
        <meta property="og:image" content="/icon.png" />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
