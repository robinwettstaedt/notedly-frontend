import '../lib/styles/globals.css';
import { TokenProvider } from '../lib/contexts/TokenContext';

import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TokenProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TokenProvider>
  );
}
export default MyApp;
