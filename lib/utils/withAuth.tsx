// HOC/withAuth.jsx
import { useRouter } from 'next/router';
import { FC } from 'react';

const withAuth = (WrappedComponent: FC) => {

	return AuthComponent: FC = () => {
  const Router = useRouter();
  // If there is no access token we redirect to "/" page.
  if (!accessToken) {
    Router.replace('/');
    return null;
  }

  // If this is an accessToken we just render the component that was passed with all its props

  return <WrappedComponent {...props} />;

  // If we are on server, return null
  return null;
};
}

export default withAuth;
