import axios from 'axios';
import { useEffect, useState, createContext, useContext } from 'react';

type TokenContextType = {
  token: string;
  setToken: (token: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

export const TokenContext = createContext<TokenContextType>({
  token: '',
  setToken: function () {},
  loading: true,
  setLoading: function () {},
});

export const TokenProvider = ({ children }: any) => {
  const [token, setTokenState] = useState('');
  const [loading, setLoadingState] = useState(true);

  const setToken = (token: string) => {
    setTokenState(token);
  };

  const setLoading = (loading: boolean) => {
    setLoadingState(loading);
  };

  //   useEffect(() => {
  //     axios.defaults.headers.common['Authorization'] = token;
  //     axios.defaults.withCredentials = true;
  //   }, [token]);

  return (
    <TokenContext.Provider
      value={{
        token,
        setToken,
        loading,
        setLoading,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export const useTokenContext = () => {
  return useContext(TokenContext);
};
