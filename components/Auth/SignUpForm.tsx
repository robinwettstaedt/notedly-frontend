import React from 'react';
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

  const checkUsername = async (value: string) => {
    if (value.length > 1) {
      let error;

      try {
        await axios.post(authEndpoints.checkUsername, {
          username: value,
        });
      } catch (e: any) {
        error = 'Username taken';
      }

      return error;
    }
  };

  return (
    <>
      <Formik
        initialValues={{ email: '', password: '', username: '', firstName: '' }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={async (data, { setSubmitting, setFieldError }) => {
          try {
            setSubmitting(true);

            const response = await axios.post(authEndpoints.signUp, data);
            await mutateToken(response.data);

            setSubmitting(false);

            router.push('/');
          } catch (error) {
            setFieldError('email', 'email already in use');
            console.log(error);
          }
        }}
      >
        {({ isSubmitting, errors, values }) => (
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
              />
            </StyledFormWrapper>

            {errors.username ? (
              <StyledErrorMessage>{errors.username}</StyledErrorMessage>
            ) : null}

            {!errors.username && values.username ? (
              <StyledSuccessMessage>username available</StyledSuccessMessage>
            ) : null}

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

const StyledSuccessMessage = styled.div`
  color: green;
`;
