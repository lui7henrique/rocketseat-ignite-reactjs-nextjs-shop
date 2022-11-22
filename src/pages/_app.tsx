import { Header } from "components/Header";
import { AppProvider } from "context";
import type { AppProps } from "next/app";
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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <AppProvider>
        <Header />

        <Component {...pageProps} />
      </AppProvider>
    </Container>
  );
}
