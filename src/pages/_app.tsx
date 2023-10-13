import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Poppins } from "next/font/google";

const roboto = Poppins({
  weight: ["200"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
