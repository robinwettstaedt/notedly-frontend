import GoogleLogin from 'react-google-login';

const GoogleAuth = () => {
  const handleLogin = async (googleData: any) => {
    const res = await fetch('http://localhost:5000/auth/signinwithgoogle', {
      method: 'POST',
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    console.log(data);
  };

  const googleClientID = process.env.GOOGLE_CLIENT_ID;
  return (
    <>
      <GoogleLogin
        clientId={googleClientID}
        buttonText="Log in with Google"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={'single_host_origin'}
      />
    </>
  );
};

export default GoogleAuth;
