import React from 'react';
import GoogleAuth from '../../components/Auth/GoogleAuth';
import { GetServerSideProps } from 'next';
import SignUpForm from '../../components/Auth/SignUpForm';

export const getServerSideProps: GetServerSideProps = async () => {
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
      <SignUpForm />
    </>
  );
};

export default SignUpPage;
