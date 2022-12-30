import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head />
      <body className="font-main font-medium text-lg dark:bg-slate-900 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
