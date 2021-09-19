import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { TokenContext } from '../lib/contexts/TokenContext';
import SignOut from '../components/auth/SingOut';

const Welcome = () => {
  const { token } = useContext(TokenContext);
  const router = useRouter();
  useEffect(() => {
    if (!token) {
      console.log('return to signin fool!!!');
      router.replace('/signin');
    }
  }, [token, router]);

  return (
    <>
      <p>You are authed!</p>
      <SignOut />
    </>
  );
};

export default Welcome;
