import type { AppProps } from "next/app";
import GlobalStyles from "~/assets/styles";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
