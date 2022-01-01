import { userEndpoints } from './../constants/endpoints';
import useSWR from 'swr';
import axios from 'axios';
import { UserType } from '../types/userTypes';

const useUser = () => {
  //   let user: UserType | null = null;

  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data);

  const { data, mutate, error } = useSWR(
    () =>
      axios.defaults.headers.common['Authorization']
        ? userEndpoints.getOrUpdateOrDelete
        : false,
    fetcher
  );

  //   if (data) {
  //     user = data.user;
  //   }

  return {
    user: data,
    mutateUser: mutate,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useUser;
