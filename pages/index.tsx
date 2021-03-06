import React from 'react';
import useUser from '../lib/hooks/useUser';
import { withAuth } from '../components/Auth/withAuth';
import EmojiMart from '..//components/Emoji/EmojiMart';

const WelcomePage: React.FC = () => {
  const { user, isLoading, isError } = useUser();

  if (isError) return <p>There was an error!</p>;
  if (isLoading) return <p>loading...</p>;

  return (
    <>
      <EmojiMart />

      <pre> {JSON.stringify(user.user, null, 2)}</pre>
    </>
  );
};

export default withAuth(WelcomePage);
