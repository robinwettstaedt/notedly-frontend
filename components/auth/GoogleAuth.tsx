import { useContext } from 'react';
import GoogleLogin from 'react-google-login';
import { TokenContext } from '../../lib/contexts/TokenContext';
import { useRouter } from 'next/router';

// const googleClientID = process.env.GOOGLE_CLIENT_ID;

type GoogleID = {
  id: string;
};

const GoogleAuth = ({ id }: GoogleID) => {
  const router = useRouter();
  const { token, setToken } = useContext(TokenContext);

  const handleLogin = async (googleData: any) => {
    try {
      const response = await fetch('http://localhost:5000/signinwithgoogle', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({
          token: googleData.tokenId,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setToken(`Bearer ${data.accessToken}`);
      router.push('/note');
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
