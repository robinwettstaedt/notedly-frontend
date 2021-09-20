import { useContext, useEffect, useState, createContext } from 'react';
import { TokenContext } from './TokenContext';
import { UserType } from '../Types/userTypes';

type UserContextType = {
  user: UserType;
  setUser: (user: {}) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

export const UserContext = createContext<UserContextType>({
  user: {
    _id: '',
    email: '',
  },
  setUser: function () {},
  loading: true,
  setLoading: function () {},
});

export const UserProvider = ({ children }: any) => {
  const [user, setUserState] = useState({});
  const [loading, setLoadingState] = useState(true);
  const { token } = useContext(TokenContext);

  const setUser = (user: {}) => {
    setUserState(user);
  };

  const setLoading = (loading: boolean) => {
    setLoadingState(!loading);
  };

  // after a token is set, a 10 minute timout is initiated which will call the api to refresh the token
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `${process.env.API_SERVER_URL}/api/v1/user`,
          {
            method: 'GET',
            headers: {
              Authorization: token,
            },
          }
        );

        const data = await response.json();

        if (data) {
          setUser(data);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (token.length >= 20) {
      getUserInfo();
    }
  }, [token]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
