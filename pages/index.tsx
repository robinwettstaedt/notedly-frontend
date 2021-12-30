import React from 'react';
import useUser from '../lib/hooks/useUser';
import { withAuth } from '../components/Auth/withAuth';

const WelcomePage: React.FC = () => {
  const { user, error } = useUser();

  if (error) return <p>There was an error!</p>;
  if (!user) return <p>loading...</p>;

  return <pre> {JSON.stringify(user, null, 2)}</pre>;
};

export default withAuth(WelcomePage);
