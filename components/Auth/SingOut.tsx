import { useRouter } from 'next/router';
import { authEndpoints } from '../../lib/constants/endpoints';
import { useTokenContext } from '../../lib/contexts/TokenContext';

const SignOut = () => {
  const router = useRouter();
  const { setToken } = useTokenContext();

  const handleClick = async () => {
    try {
      await fetch(authEndpoints.signOut, {
        method: 'POST',
        credentials: 'include',
      });

      setToken(``);

      router.push('/auth/sign-in');
    } catch (error) {
      console.error('error:', error);
    }
  };
  return (
    <>
      <button onClick={handleClick}>Sign Out</button>
    </>
  );
};

export default SignOut;
