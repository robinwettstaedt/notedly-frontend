import { notebookEndpoints } from '../constants/endpoints';
import useSWR from 'swr';
import axios from 'axios';
import { NotebookType } from '../types/notebookTypes';
import useAuth from './useAuth';

const useNotebooks = () => {
  const { token } = useAuth();
  let notebooks: NotebookType[] | null = null;

  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data);

  const { data, mutate, error } = useSWR(
    () => (token ? notebookEndpoints.createOrGetMany : false),
    fetcher
  );

  if (data) {
    notebooks = data;
  }

  return {
    notebooks,
    mutateNotebooks: mutate,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useNotebooks;
