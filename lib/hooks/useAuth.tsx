import { authEndpoints } from './../constants/endpoints';
import useSWR from 'swr';
import axios from 'axios';

const useAuth = () => {
  let token: string = '';

  axios.defaults.withCredentials = true;

  const fetcher = async (url: string) =>
    await axios.post(url).then((res) => res.data);

  const { data, mutate, error } = useSWR(authEndpoints.refreshAccess, fetcher, {
    refreshInterval: 600000, // 10 mins
    errorRetryCount: 0,
  });

  const loading = !data && !error;

  if (data) {
    console.log('useAuth data: ', data);
    token = `Bearer ${data.accessToken}`;
  }

  axios.defaults.headers.common['Authorization'] = token;

  return {
    loading,
    error,
    // token,
    mutate,
  };
};

export default useAuth;
