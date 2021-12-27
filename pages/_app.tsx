import '../lib/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import { UserProvider } from '../lib/contexts/UserContext';
import GlobalStyle from '../lib/styles/globalStyles';
import { NotebookProvider } from '../lib/contexts/NotebookContext';
import GlobalStateHandler from '../components/GlobalStateHandler/GlobalStateHandler';
import useAuth from '../lib/hooks/useAuth';
import axios from 'axios';

function MyApp({ Component, pageProps }: AppProps) {
  //   const { token } = useAuth();
  //   axios.defaults.headers.common['Authorization'] = token;

  return (
    <UserProvider>
      <NotebookProvider>
        <GlobalStyle />
        <GlobalStateHandler>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </GlobalStateHandler>
      </NotebookProvider>
    </UserProvider>
  );
}
export default MyApp;
