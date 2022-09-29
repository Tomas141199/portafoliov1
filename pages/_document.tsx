import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html data-theme="mytheme">
      <Head>
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
