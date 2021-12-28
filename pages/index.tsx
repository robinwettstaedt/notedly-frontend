import React from 'react';
import Link from 'next/link';
import SignOut from '../components/Auth/SignOut';
import useUser from '../lib/hooks/useUser';
import { withAuth } from '../components/Auth/withAuth';

const WelcomePage: React.FC = () => {
  const { user } = useUser();

  return (
    <>
      {user ? <pre> {JSON.stringify(user, null, 2)}</pre> : <p>loading...</p>}
      {/* <EmojiMart /> */}
    </>
  );
};

export default withAuth(WelcomePage);
