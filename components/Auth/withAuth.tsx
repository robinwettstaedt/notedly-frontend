/* eslint-disable react/display-name */
import React, { ComponentType } from 'react';
import useUser from '../../lib/hooks/useUser';

export function withAuth<T>(Component: ComponentType<T>) {
  return (hocProps: T) => {
    const { user } = useUser();

    if (user) {
      return <Component {...hocProps} />;
    } else {
      return (
        <>
          <p>loading.........</p>
        </>
      );
    }
  };
}
