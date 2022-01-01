import axios from 'axios';
import { useRouter } from 'next/router';
import { authEndpoints } from '../../lib/constants/endpoints';
import useAuth from '../../lib/hooks/useAuth';
import useUser from '../../lib/hooks/useUser';

const SignOut = () => {
  const router = useRouter();
  const { mutateUser } = useUser();
  const { mutateToken } = useAuth();

  const handleClick = async () => {
    try {
      await fetch(authEndpoints.signOut, {
        method: 'POST',
        credentials: 'include',
      });

      await axios.post(authEndpoints.signOut);

      await mutateToken(null);
      await mutateUser(null);

      //   router.push('/auth/sign-in');
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
