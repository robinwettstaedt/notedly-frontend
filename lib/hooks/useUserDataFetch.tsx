import axios from 'axios';
import { useEffect } from 'react';
import { userEndpoints } from '../constants/endpoints';
import { useTokenContext } from '../contexts/TokenContext';
import { useUserContext } from '../contexts/UserContext';
import { UserType } from '../types/userTypes';

const useUserDataFetch = () => {
  const { token } = useTokenContext();
  const { setUser, setLoading } = useUserContext();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(userEndpoints.getOrUpdateOrDelete);
        const userData: UserType = response.data.user;
        setUser(userData);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }

      fetchUserData();
    };
  }, [setLoading, setUser, token]);
};

export default useUserDataFetch;
