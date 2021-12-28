import '../lib/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import GlobalStyle from '../lib/styles/globalStyles';
import { UserProvider } from '../lib/contexts/UserContext';
import { NotebookProvider } from '../lib/contexts/NotebookContext';
import GlobalStateHandler from '../components/GlobalStateHandler/GlobalStateHandler';
import useAuth from '../lib/hooks/useAuth';
import axios from 'axios';
import useUser from '../lib/hooks/useUser';

function MyApp({ Component, pageProps }: AppProps) {
  //   const { token } = useAuth();
  //   axios.defaults.headers.common['Authorization'] = token;
  //   const { user } = useUser();

  return (
    // <UserProvider>
    //   <NotebookProvider>
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>

    //   </NotebookProvider>
    // </UserProvider>
  );
}
export default MyApp;
