import React from 'react';
import GoogleAuth from '../../components/auth/GoogleAuth';
import SignUp from '../../components/auth/SignUp';
// import { TokenContext } from '../../lib/contexts/TokenContext';

const SignUpPage = () => {
  //   const { token } = React.useContext(TokenContext);

  React.useEffect(() => {
    //   console.log(token);
    console.log(process.env.hi);
  }, []);
  return (
    <>
      <GoogleAuth />
      <SignUp />
    </>
  );
};

export default SignUpPage;
