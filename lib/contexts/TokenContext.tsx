import React, { useEffect, useState } from 'react';

type TokenContextType = {
  token: string;
  setToken: (token: string) => void;
};

export const TokenContext = React.createContext<TokenContextType>({
  token: '',
  setToken: function () {},
});

export const TokenProvider = ({ children }: any) => {
  const [token, setTokenState] = useState('');

  const setToken = (token: string) => {
    setTokenState(token);
  };

  //   useEffect(() => {
  //     app.auth().onAuthStateChanged((user) => {
  //       setToken(user);
  //       setPending(false);
  //     });
  //   }, []);

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
