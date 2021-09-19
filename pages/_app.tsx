import '../lib/styles/globals.css';
import { TokenProvider } from '../lib/contexts/TokenContext';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import { UserProvider } from '../lib/contexts/UserContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TokenProvider>
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </TokenProvider>
  );
}
export default MyApp;
