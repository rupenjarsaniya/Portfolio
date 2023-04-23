import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Layout from "@/Layout/Layout";
import { wrapper } from "@/store";
import { Provider } from "react-redux";

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <ThemeProvider>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
