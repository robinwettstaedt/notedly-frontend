import { userEndpoints } from './../constants/endpoints';
import useSWR from 'swr';
import axios from 'axios';
import { UserType } from '../types/userTypes';

const useUser = () => {
  let user: UserType | null = null;

  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data);

  const { data, mutate, error } = useSWR(
    userEndpoints.getOrUpdateOrDelete,
    fetcher,
    { errorRetryInterval: 100 }
  );

  if (data) {
    user = data.user;
  }

  //   const loading = !data && !error;

  return {
    // loading,
    error,
    user,
    mutateUser: mutate,
  };
};

export default useUser;
