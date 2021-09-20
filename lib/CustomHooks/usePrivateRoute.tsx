import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { TokenContext } from '../contexts/TokenContext';

const usePrivateRoute = () => {
  const { token } = useContext(TokenContext);
  const router = useRouter();

  useEffect(() => {
    const handle = async () => {
      if (!token) {
        await router.replace('/signin');
      }
    };
    handle();
  }, [token, router]);
};

export default usePrivateRoute;
