import '../lib/styles/globals.css';
import { TokenProvider } from '../lib/contexts/TokenContext';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return;
  <TokenProvider>
    <Component {...pageProps} />;
  </TokenProvider>;
}
export default MyApp;
