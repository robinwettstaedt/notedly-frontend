import React from 'react';
import GoogleAuth from '../../components/auth/GoogleAuth';
import SignUp from '../../components/auth/SignUp';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    },
  };
};

const SignUpPage = ({ GOOGLE_CLIENT_ID }: any) => {
  return (
    <>
      <GoogleAuth id={GOOGLE_CLIENT_ID} />
      <SignUp />
    </>
  );
};

export default SignUpPage;
