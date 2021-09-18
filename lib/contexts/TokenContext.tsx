import { useEffect, useState, createContext } from 'react';

type TokenContextType = {
  token: string;
  setToken: (token: string) => void;
};

export const TokenContext = createContext<TokenContextType>({
  token: '',
  setToken: function () {},
});

export const TokenProvider = ({ children }: any) => {
  const [token, setTokenState] = useState('');

  const setToken = (token: string) => {
    setTokenState(token);
  };

  // after a token is set, a 10 minute timout is initiated which will call the api to refresh the token
  useEffect(() => {
    const refreshToken = async () => {
      const response = await fetch('http://localhost:5000/refresh_token', {
        method: 'POST',
        credentials: 'include',
      });

      const data = await response.json();

      if (data.accessToken) {
        setToken(`Bearer ${data.accessToken}`);
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
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};
