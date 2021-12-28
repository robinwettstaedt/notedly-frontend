import GoogleLogin from 'react-google-login';
import { useRouter } from 'next/router';
import { authEndpoints } from '../../lib/constants/endpoints';
import useAuth from '../../lib/hooks/useAuth';
import axios from 'axios';

type GoogleAuthPropsType = {
  id: string;
};

const GoogleAuth = ({ id }: GoogleAuthPropsType) => {
  const router = useRouter();
  const { mutate } = useAuth();

  const handleLogin = async (googleData: any) => {
    try {
      const response = await axios.post(authEndpoints.signInWithGoogle, {
        token: googleData.tokenId,
      });

      mutate(response.data);

      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <GoogleLogin
        clientId={id}
        buttonText="Log in with Google"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={'single_host_origin'}
      />
    </>
  );
};

export default GoogleAuth;
