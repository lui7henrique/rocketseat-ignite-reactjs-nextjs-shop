import type { AppProps } from "next/app";
import Image from "next/image";
import { Container, Header } from "styles/pages/app";
import { globalStyles } from "../styles/global";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src="/assets/logo.svg" alt="logo" width="130" height="50" />
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
