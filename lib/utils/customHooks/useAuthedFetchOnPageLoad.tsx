import { useContext, useState, useEffect } from 'react';
import { TokenContext } from '../../contexts/TokenContext';

type ReturnTypes = {
  data: {} | null;
  loading: boolean;
  error: {} | null;
};

export const useAuthedFetchOnPageLoad = async (
  requestMethod: string,
  requestRoute: string,
  requestBody?: {}
): Promise<{
  data: {} | null;
  loading: boolean;
  error: {} | null;
}> => {
  const { token } = useContext(TokenContext);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        setLoading(true);

        const requestOptions = {
          method: requestMethod,
          headers: { 'Content-Type': 'application/json', Authorization: token },
          body: JSON.stringify(requestBody),
        };

        const response = await fetch(requestRoute, requestOptions);

        const responseData = await response.json();

        setData(responseData);
        setError(null);

        console.error('error:', error);
        setData(null);
        setError(null);
      } finally {
        setLoading(false);
      }
    };

    makeRequest();
  }, [requestBody, requestMethod, requestRoute, token, error]);

  return { data, loading, error };
};
