import { useEffect, useState, createContext } from 'react';

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
    setLoadingState(!loading);
  };

  // after a token is set, a 10 minute timout is initiated which will call the api to refresh the token
  useEffect(() => {
    const refreshToken = async () => {
      setLoading(true);
      const response = await fetch('http://localhost:5000/refresh_token', {
        method: 'POST',
        credentials: 'include',
      });

      const data = await response.json();

      if (data.accessToken) {
        setToken(`Bearer ${data.accessToken}`);
        setLoading(false);
      }
    };

    let timer = setTimeout(() => {
      refreshToken();
    }, 600000);

    return () => {
      clearTimeout(timer);
    };
  }, [token]);

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
