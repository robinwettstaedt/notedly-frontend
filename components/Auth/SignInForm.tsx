import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Formik, Form, Field } from 'formik';
import { authEndpoints } from '../../lib/constants/endpoints';
import useAuth from '../../lib/hooks/useAuth';

const SignInForm = () => {
  const router = useRouter();
  const { mutateToken } = useAuth();

  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={async (data, { setSubmitting }) => {
          try {
            setSubmitting(true);

            const response = await axios.post(authEndpoints.signIn, data);
            await mutateToken(response.data);

            setSubmitting(false);

            router.push('/');
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              placeholder="email"
              name="email"
              type="input"
              as={styledInput}
            />
            <Field
              placeholder="password"
              name="password"
              type="password"
              as={styledInput}
            />
            <button disabled={isSubmitting} type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignInForm;

const styledInput = styled.input``;
