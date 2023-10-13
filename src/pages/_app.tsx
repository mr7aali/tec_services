import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";

import { Poppins } from "next/font/google";
type PageWithLayout = {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
};

const roboto = Poppins({
  weight: ["200"],
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = (Component as PageWithLayout).getLayout || ((page) => page);
  return getLayout(
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
