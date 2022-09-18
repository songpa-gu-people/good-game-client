import "../styles/globals.css";
import type { AppContext, AppInitialProps, AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { wrapper } from "../store/configStore";
import { ReactQueryDevtools } from "react-query/devtools";
import axios from "axios";
import { serverConfig } from "../config";

axios.defaults.baseURL = serverConfig.apiUri;
axios.defaults.withCredentials = true;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        {process.env.NODE_ENV !== "production" && <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    </>
  );
};

app.getInitialProps = async ({ Component, ctx }: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default wrapper.withRedux(app);
