import { useContext, useEffect, useState, createContext } from 'react';
import { useTokenContext } from './TokenContext';
import { notebookEndpoints } from '../constants/endpoints';
import { NotebookType } from '../types/notebookTypes';

type NotebookContextType = {
  notebooks: NotebookType[];
  setNotebooks: (notebooks: NotebookType[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

const defaultNotebookArray: NotebookType[] = [];

export const NotebookContext = createContext<NotebookContextType>({
  notebooks: defaultNotebookArray,
  setNotebooks: function () {},
  loading: true,
  setLoading: function () {},
});

export const NotebookProvider = ({ children }: any) => {
  const [notebooks, setNotebookState] =
    useState<NotebookType[]>(defaultNotebookArray);
  const [loading, setLoadingState] = useState(true);
  const { token } = useTokenContext();

  const setNotebooks = (notebooks: NotebookType[]) => {
    setNotebookState(notebooks);
  };

  const setLoading = (loading: boolean) => {
    setLoadingState(loading);
  };

  useEffect(() => {
    const getNotebooks = async () => {
      try {
        const response = await fetch(notebookEndpoints.createOrGetMany, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
        });

        const data: NotebookType[] = await response.json();

        setNotebooks(data);
      } catch (error) {
        console.log('error:', error);
      }
    };

    getNotebooks();
  }, [token]);

  return (
    <NotebookContext.Provider
      value={{
        notebooks,
        setNotebooks,
        loading,
        setLoading,
      }}
    >
      {children}
    </NotebookContext.Provider>
  );
};

export const useNotebookContext = () => {
  return useContext(NotebookContext);
};
