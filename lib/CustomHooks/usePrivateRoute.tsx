import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTokenContext } from '../contexts/TokenContext';

const usePrivateRoute = () => {
  const { token } = useTokenContext();
  const router = useRouter();

  useEffect(() => {
    const handle = async () => {
      if (token.length <= 20) {
        await router.replace('/signin');
      }
    };
    handle();
  }, [token, router]);
};

export default usePrivateRoute;
