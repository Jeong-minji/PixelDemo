import Head from "next/head";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../styles/GlobalStyle";
import { theme } from "../styles/theme";

import { store } from "../app/store";
import Nav from "../components/common/Nav/Nav";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>PixelDemo</title>
      </Head>
      <GlobalStyle />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {router.pathname === "/sign-in" ? null : <Nav />}
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
