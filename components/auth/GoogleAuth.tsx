import { useContext } from 'react';
import GoogleLogin from 'react-google-login';
import { TokenContext } from '../../lib/contexts/TokenContext';

// const googleClientID = process.env.GOOGLE_CLIENT_ID;

const GoogleAuth = () => {
  const { token, setToken } = useContext(TokenContext);
  const handleLogin = async (googleData: any) => {
    const response = await fetch(
      'http://localhost:5000/auth/signinwithgoogle',
      {
        method: 'POST',
        body: JSON.stringify({
          token: googleData.tokenId,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setToken(`Bearer ${data.accessToken}`);
    console.log(token);
  };

  return (
    <>
      <GoogleLogin
        clientId="751209423205-c7a0hvm2m4265p4j5jsfbvsah86n0es0.apps.googleusercontent.com"
        buttonText="Log in with Google"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={'single_host_origin'}
      />
    </>
  );
};

export default GoogleAuth;
