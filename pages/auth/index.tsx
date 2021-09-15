import React from 'react';
import GoogleAuth from '../../components/auth/GoogleAuth';
import SignUp from '../../components/auth/SignUp';

const SignUpPage = () => {
  return (
    <>
      <GoogleAuth />
      <SignUp />
    </>
  );
};

export default SignUpPage;
