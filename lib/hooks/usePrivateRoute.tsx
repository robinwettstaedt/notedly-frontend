import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTokenContext } from '../contexts/TokenContext';
import { authEndpoints } from '../constants/endpoints';

/*
multiple flows:
user  signs in
is redirected to the home page

*/

const usePrivateRoute = () => {
  const { token, setToken, setLoading } = useTokenContext();
  const router = useRouter();

  useEffect(() => {
    const handle = async () => {
      try {
        if (token.length <= 20) {
          setLoading(true);

          const response = await fetch(authEndpoints.refreshAccess, {
            method: 'POST',
            credentials: 'include',
          });

          const data = await response.json();

          const accessToken = data.accessToken;

          if (accessToken) {
            setToken(`Bearer ${accessToken}`);
            setLoading(false);
          }

          if (token) {
            await router.replace('/auth/sign-in');
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    handle();
  }, [token, router]);
};

export default usePrivateRoute;
