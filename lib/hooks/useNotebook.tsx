import { notebookEndpoints } from './../constants/endpoints';
import useSWR from 'swr';
import axios from 'axios';
import { NotebookType } from '../types/notebookTypes';

const useNotebooks = () => {
  let notebooks: NotebookType[] | null = null;

  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data);

  const { data, mutate, error } = useSWR(
    notebookEndpoints.createOrGetMany,
    fetcher,
    { errorRetryInterval: 100 }
  );

  if (data) {
    notebooks = data;
  }

  const loading = !data && !error;

  return {
    loading,
    error,
    notebooks,
    mutateNotebooks: mutate,
  };
};

export default useNotebooks;
