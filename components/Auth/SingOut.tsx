import { useRouter } from 'next/router';
import { useTokenContext } from '../../lib/contexts/TokenContext';

const SignOut = () => {
  const router = useRouter();
  const { setToken } = useTokenContext();

  const handleClick = async () => {
    try {
      await fetch(`${process.env.API_SERVER_URL}/auth/signout`, {
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
