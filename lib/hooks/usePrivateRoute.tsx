import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTokenContext } from '../contexts/TokenContext';
import { authEndpoints } from '../constants/endpoints';

/*
if ( token under 20 chars): 
	try to fetch new token via cookie 
	set token to new token 
	if (token still under 20 chars):
		router to signin
	else { pass through the component }
else { pass thorugh the component }


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
          } else {
            await router.replace('/auth/sign-in');
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    handle();
  }, [token, setToken, router, setLoading]);
};

export default usePrivateRoute;
