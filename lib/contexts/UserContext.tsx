import { useContext, useEffect, useState, createContext } from 'react';
import { TokenContext, useTokenContext } from './TokenContext';
import { UserType } from '../types/userTypes';
import { Theme } from '../types/userTypes';
import { authEndpoints, userEndpoints } from '../constants/endpoints';

type UserContextType = {
  user: UserType;
  setUser: (user: UserType) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

const defaultUser: UserType = {
  _id: '',
  email: '',
  username: '',
  firstName: '',
  picture: '',
  settings: {
    theme: 'DARK',
    notifications: 'ALL',
    invites: true,
  },
  notebooks: [],
  createdAt: '',
  updatedAt: '',
};

export const UserContext = createContext<UserContextType>({
  user: defaultUser,
  setUser: function () {},
  loading: true,
  setLoading: function () {},
});

export const UserProvider = ({ children }: any) => {
  const [user, setUserState] = useState<UserType>(defaultUser);
  const [loading, setLoadingState] = useState(true);
  const { token } = useTokenContext();

  const setUser = (user: UserType) => {
    setUserState(user);
  };

  const setLoading = (loading: boolean) => {
    setLoadingState(loading);
  };

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        if (token.length > 20) {
          setLoading(true);

          const response = await fetch(userEndpoints.getOrUpdateOrDelete, {
            method: 'GET',
            headers: {
              Authorization: token,
            },
          });

          const data = await response.json();
          const userData: UserType = data.user;

          if (data) {
            console.log(userData);
            setUser(userData);
          }
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUserInfo();
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

export const useUserContext = () => {
  return useContext(UserContext);
};
