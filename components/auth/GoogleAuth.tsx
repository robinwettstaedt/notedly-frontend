import GoogleLogin from 'react-google-login';
import { useRouter } from 'next/router';
import { useTokenContext } from '../../lib/contexts/TokenContext';

// const googleClientID = process.env.GOOGLE_CLIENT_ID;

type GoogleID = {
  id: string;
};

const GoogleAuth = ({ id }: GoogleID) => {
  const router = useRouter();
  const { setToken } = useTokenContext();

  const handleLogin = async (googleData: any) => {
    try {
      const response = await fetch(
        `${process.env.API_SERVER_URL}/auth/signinwithgoogle`,
        {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify({
            token: googleData.tokenId,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();
      setToken(`Bearer ${data.accessToken}`);
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
