import axios from 'axios';
import React, { useEffect } from 'react';
import { authEndpoints } from '../../lib/constants/endpoints';
import { useTokenContext } from '../../lib/contexts/TokenContext';

type ParentComponentProps = {
  children?: React.ReactNode;
};

export const GlobalStateHandler: React.FC<ParentComponentProps> = ({
  children,
}) => {
  const { token, setToken } = useTokenContext();

  useEffect(() => {
    const refreshAccessToken = async () => {
      try {
        const response = await axios.post(authEndpoints.refreshAccess);
        setToken(response.data.accessToken);
      } catch (error) {
        console.log(error);
      }
    };

    if (token.length <= 20) {
      refreshAccessToken();
    }
  }, []);
  return <>{children}</>;
};

export default GlobalStateHandler;
