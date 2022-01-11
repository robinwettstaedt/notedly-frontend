import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { authEndpoints } from '../../lib/constants/endpoints';
import useAuth from '../../lib/hooks/useAuth';
import * as Yup from 'yup';

const DisplayingErrorMessagesSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
    .required('Required'),
  password: Yup.string()
    .min(4, 'At least 4 characters')
    .max(64, 'At max 64 characters')
    .required('Required'),
});

const SignInForm = () => {
  const router = useRouter();
  const { mutateToken } = useAuth();
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={async (data, { setSubmitting }) => {
          try {
            setShowErrorMessage(false);
            setSubmitting(true);

            const response = await axios.post(authEndpoints.signIn, data);
            await mutateToken(response.data);

            setSubmitting(false);

            router.push('/');
          } catch (error) {
            setShowErrorMessage(true);
            console.log(error);
          }
        }}
      >
        {({ isSubmitting, touched, errors }) => (
          <Form>
            <Field
              placeholder="email"
              name="email"
              type="input"
              as={styledInput}
            />
            <ErrorMessage name="email" component={StyledErrorMessage} />
            <Field
              placeholder="password"
              name="password"
              type="password"
              as={styledInput}
            />
            <ErrorMessage name="password" component={StyledErrorMessage} />

            {showErrorMessage && (
              <StyledErrorMessage>
                email or password not correct
              </StyledErrorMessage>
            )}
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

const StyledErrorMessage = styled.div`
  color: red;
`;
