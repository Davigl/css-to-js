import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import GlobalStyles from "~/assets/styles";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <GlobalStyles />
    </SessionProvider>
  );
}

export default MyApp;
