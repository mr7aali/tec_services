import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import React from "react";
import { ToastContainer } from "react-toastify";
import { Poppins } from "next/font/google";
import Providers from "@/lib/Provider";
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
      <Providers>
        <Component {...pageProps} />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Providers>
    </main>
  );
}
