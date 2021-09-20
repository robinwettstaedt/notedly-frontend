import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUserContext } from '../contexts/UserContext';

const usePrivateRoute = () => {
  const { user } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    const handle = async () => {
      if (user.email === '') {
        await router.replace('/signin');
      }
    };
    handle();
  }, [user, router]);
};

export default usePrivateRoute;
