import React from 'react';
import GoogleAuth from '../../components/Auth/GoogleAuth';
import SignInForm from '../../components/Auth/SignInForm';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
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
      <SignInForm />
    </>
  );
};

export default SignInPage;
