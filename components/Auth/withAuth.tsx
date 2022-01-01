/* eslint-disable react/display-name */
import { useRouter } from 'next/router';
import React, { ComponentType } from 'react';
import useAuth from '../../lib/hooks/useAuth';

export function withAuth<T>(Component: ComponentType<T>) {
  return (hocProps: T) => {
    const { token, isLoading, isError } = useAuth();
    const router = useRouter();

    if (isError) router.push('/auth/sign-in');
    if (isLoading) return <p>loading...</p>;
    if (token) return <Component {...hocProps} />;

    return <></>;
  };
}
