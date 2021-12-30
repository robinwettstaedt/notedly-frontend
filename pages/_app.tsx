import '../lib/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import GlobalStyle from '../lib/styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
