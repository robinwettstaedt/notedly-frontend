import axios from 'axios';
import { useRouter } from 'next/router';
import { authEndpoints } from '../../lib/constants/endpoints';
import { useTokenContext } from '../../lib/contexts/TokenContext';
import { useUserContext, defaultUser } from '../../lib/contexts/UserContext';
import useUser from '../../lib/hooks/useUser';

const SignOut = () => {
  const router = useRouter();
  const { setToken } = useTokenContext();
  //   const { setUser } = useUserContext();
  const { mutate } = useUser();

  const handleClick = async () => {
    try {
      await fetch(authEndpoints.signOut, {
        method: 'POST',
        credentials: 'include',
      });

      await axios.post(authEndpoints.signOut);

      setToken(``);
      //   setUser(defaultUser);
      mutate(null);

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
