import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '../contexts/UserContext';

const usePrivateRoute = () => {
  const { user } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    const handle = async () => {
      if (!user) {
        await router.replace('/signin');
      }
    };
    handle();
  }, [user, router]);
};

export default usePrivateRoute;
