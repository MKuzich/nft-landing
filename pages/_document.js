import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head />
      <body className="font-main font-medium text-lg text-slate-800 bg-slate-50 dark:bg-slate-900 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
