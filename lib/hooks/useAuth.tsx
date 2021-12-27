import { authEndpoints } from './../constants/endpoints';
import useSWR from 'swr';
import axios from 'axios';

const useAuth = () => {
  axios.defaults.withCredentials = true;

  const fetcher = async (url: string) =>
    await axios.post(url).then((res) => res.data);

  const { data, mutate, error } = useSWR(authEndpoints.refreshAccess, fetcher, {
    refreshInterval: 600000, // 10 mins
  });

  const loading = !data && !error;

  let token: string = '';

  if (data != undefined) {
    console.log('useAuth data: ', data);
    if (data.toString().startsWith('Bearer ')) {
      axios.defaults.headers.common['Authorization'] = data;
      token = data;
    } else {
      axios.defaults.headers.common['Authorization'] = data.accessToken;
      token = data.accessToken;
    }
  }

  return {
    loading,
    error,
    token,
    mutate,
  };
};

export default useAuth;
