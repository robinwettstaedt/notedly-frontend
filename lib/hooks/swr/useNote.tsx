import { noteEndpoints } from './../../constants/endpoints';
import useSWR from 'swr';
import axios from 'axios';

const useNote = (noteID: string) => {
  //   let token: string = '';

  //   axios.defaults.withCredentials = true;

  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data);

  const { data, mutate, error } = useSWR(
    () => (noteID ? noteEndpoints.getOrUpdateOrDelete(noteID) : false),
    fetcher
  );

  //   if (data) {
  //     token = `Bearer ${data.accessToken}`;
  //   }

  //   axios.defaults.headers.common['Authorization'] = token;

  return {
    note: data,
    mutateNote: mutate,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useNote;
