import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
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
  firstName: Yup.string()
    .min(2, 'At least 2 characters')
    .max(20, 'At max 20 characters'),
  username: Yup.string()
    .min(2, 'At least 2 characters')
    .max(20, 'At max 20 characters'),
});

const SignUpForm = () => {
  const router = useRouter();
  const { mutateToken } = useAuth();
  const [usernameTimeout, setUsernameTimeout] = useState<NodeJS.Timeout>();
  const [usernameResponseStatusCode, setUsernameReponseStatusCode] =
    useState<number>();

  const checkUsername = async (value: string) => {
    // if a previous timeout has not yet resolved, clear it
    if (usernameTimeout) {
      clearTimeout(usernameTimeout);
    }

    // creating a timeout so that not every keystroke
    // triggers an API call
    const timeout = setTimeout(async () => {
      try {
        const response = await axios.post(
          authEndpoints.checkUsername,
          {
            username: value,
          }
          // { validateStatus: () => true }
        );
        setUsernameReponseStatusCode(response.status);
      } catch (error: any) {
        setUsernameReponseStatusCode(error.response.status);
      }
    }, 500);

    setUsernameTimeout(timeout);

    if (usernameResponseStatusCode) {
      if (usernameResponseStatusCode === 400) {
        return 'username taken';
      }
    }

    return undefined;
  };

  return (
    <>
      <Formik
        initialValues={{ email: '', password: '', username: '', firstName: '' }}
        validateOnChange={true}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={async (data, { setSubmitting }) => {
          try {
            setSubmitting(true);

            const response = await axios.post(authEndpoints.signUp, data);
            await mutateToken(response.data);

            setSubmitting(false);

            router.push('/');
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ isSubmitting, validateOnChange, validateField, handleChange }) => (
          <Form>
            <StyledFormWrapper>
              <Field
                placeholder="email"
                name="email"
                type="input"
                as={StyledInput}
              />
            </StyledFormWrapper>
            <ErrorMessage name="email" component={StyledErrorMessage} />

            <StyledFormWrapper>
              <Field
                placeholder="password"
                name="password"
                type="password"
                as={StyledInput}
              />
            </StyledFormWrapper>
            <ErrorMessage name="password" component={StyledErrorMessage} />

            <StyledFormWrapper>
              <Field
                placeholder="firstName"
                name="firstName"
                type="input"
                as={StyledInput}
              />
            </StyledFormWrapper>
            <ErrorMessage name="firstName" component={StyledErrorMessage} />

            <StyledFormWrapper>
              <Field
                placeholder="username"
                name="username"
                type="input"
                as={StyledInput}
                validate={checkUsername}
                validateOnChange={true}
              />
            </StyledFormWrapper>
            <ErrorMessage name="username" component={StyledErrorMessage} />

            <button disabled={isSubmitting} type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUpForm;

const StyledFormWrapper = styled.div``;

const StyledInput = styled.input``;

const StyledErrorMessage = styled.div`
  color: red;
`;
