import { useContext, useEffect, useState, createContext } from 'react';
import { useTokenContext } from './TokenContext';
import { UserType } from '../types/userTypes';
import { userEndpoints } from '../constants/endpoints';
import axios from 'axios';

type UserContextType = {
  user: UserType;
  setUser: (user: UserType) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

export const defaultUser: UserType = {
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

  const setUser = (user: UserType) => {
    setUserState(user);
  };

  const setLoading = (loading: boolean) => {
    setLoadingState(loading);
  };

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
