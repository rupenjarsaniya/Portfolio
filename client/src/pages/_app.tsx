import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Layout from "@/Layout/Layout";
import { wrapper } from "@/store";
import { Provider } from "react-redux";
import { Analytics } from "@vercel/analytics/react";
import { AppProvider } from "@/context/AppContext";

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <ThemeProvider>
      <Provider store={store}>
        <AppProvider>
          <Layout>
            <Component {...pageProps} />
            <Analytics />
          </Layout>
        </AppProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
