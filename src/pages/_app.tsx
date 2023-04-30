import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { Manrope } from "next/font/google";

import "@/styles/globals.css";

import "@/styles/theme.css";

const manrope = Manrope({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-manrope: ${manrope.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
