import { authEndpoints } from './../constants/endpoints';
import useSWR from 'swr';
import axios from 'axios';
import useUser from './useUser';

const useAuth = () => {
  const { user } = useUser();
  let token: string = '';

  axios.defaults.withCredentials = true;

  const fetcher = async (url: string) =>
    await axios.post(url).then((res) => res.data);

  const { data, mutate, error } = useSWR(
    // () => (user ? false : authEndpoints.refreshAccess),
    authEndpoints.refreshAccess,
    fetcher,
    {
      refreshInterval: 600000, // 10 mins
      errorRetryCount: 0,
    }
  );

  if (data) {
    token = `Bearer ${data.accessToken}`;
  }

  axios.defaults.headers.common['Authorization'] = token;

  return {
    token,
    mutateToken: mutate,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useAuth;
