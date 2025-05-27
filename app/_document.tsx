// app/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="light"> {/* default SSR theme */}
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
