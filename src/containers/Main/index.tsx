import CodeInput from "~/components/CodeInput";
import Head from "next/head";

import CodeOutput from "~/components/CodeOutput";
import * as S from "./styles";
import { MainContextProvider } from "~/contexts/MainContext";

const Main = (): JSX.Element => (
  <MainContextProvider>
    <>
      <Head>
        <title>Jsify - CSS</title>
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <S.Wrapper>
        <CodeInput />
        <CodeOutput />
      </S.Wrapper>
    </>
  </MainContextProvider>
);

export default Main;
