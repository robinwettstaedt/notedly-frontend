import React, { useEffect, useState } from 'react';

type TokenContextType = {
  token: String;
  setToken?: React.Dispatch<React.SetStateAction<string>>;
};

export const TokenContext = React.createContext<TokenContextType | null>({
  token: '',
});

export const TokenProvider = ({ children }: any) => {
  const [token, setToken] = useState('');

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
