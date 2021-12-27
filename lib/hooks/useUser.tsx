import { userEndpoints } from './../constants/endpoints';
import useSWR from 'swr';
import axios from 'axios';

const useUser = () => {
  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data);

  const { data, mutate, error } = useSWR(
    userEndpoints.getOrUpdateOrDelete,
    fetcher
  );

  const loading = !data && !error;

  return {
    loading,
    error,
    user: data ? data.user : {},
    mutate,
  };
};

export default useUser;
