import { useRouter } from 'next/router';
import { useTokenContext } from '../../lib/contexts/TokenContext';

const SignOut = () => {
  const router = useRouter();
  const { setToken } = useTokenContext();

  const handleClick = async () => {
    try {
      await fetch(`${process.env.API_SERVER_URL}/signout`, {
        method: 'POST',
        credentials: 'include',
      });

      setToken(``);

      router.push('/signin');
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
