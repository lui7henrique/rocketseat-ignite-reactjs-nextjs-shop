import type { AppProps } from "next/app";
import Image from "next/image";
import { styled } from "styles";
import { globalStyles } from "../styles/global";

globalStyles();

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",
});

export const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
});

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
