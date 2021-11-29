import React from 'react';
import GoogleAuth from '../../components/auth/GoogleAuth';
import SignIn from '../../components/auth/SignIn';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    },
  };
};

const SignInPage = ({ GOOGLE_CLIENT_ID }: any) => {
  return (
    <>
      <GoogleAuth id={GOOGLE_CLIENT_ID} />
      <SignIn />
    </>
  );
};

export default SignInPage;
