import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTokenContext } from '../contexts/TokenContext';
import { authEndpoints } from '../constants/endpoints';
import useUser from './useUser';

const usePrivateRoute = () => {
  //   const { token } = useTokenContext();
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    const secureRoute = async () => {
      try {
        if (!user) {
          await router.replace('/auth/sign-in');
        }
      } catch (error) {
        console.log(error);
      }
    };

    secureRoute();
  }, [user, router]);
};

export default usePrivateRoute;
