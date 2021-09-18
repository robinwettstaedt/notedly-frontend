import { useContext, FC } from 'react';
import { TokenContext } from '../../lib/contexts/TokenContext';
import { useRouter } from 'next/router';

const SignOut: FC = () => {
  const router = useRouter();
  const { setToken } = useContext(TokenContext);

  const handleClick = async () => {
    try {
      await fetch('http://localhost:5000/signout', {
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
