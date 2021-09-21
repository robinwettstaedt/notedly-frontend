import SignOut from '../components/auth/SingOut';
import usePrivateRouterUser from '../lib/CustomHooks/usePrivateRoute';
import { GetServerSideProps } from 'next';
import { useUserContext } from '../lib/contexts/UserContext';
import EmojiMart from '../components/emoji/EmojiMart';

import Link from 'next/link';
import { useTokenContext } from '../lib/contexts/TokenContext';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

const WelcomePage = () => {
  usePrivateRouterUser();

  const { user } = useUserContext();
  const { token } = useTokenContext();

  return (
    <>
      <p>{token}</p>
      <p>Welcome to notedly {user.firstName}!</p>
      <SignOut />
      <Link href="/note">
        <a>Link to the Text Editors</a>
      </Link>
      <EmojiMart />
    </>
  );
};

export default WelcomePage;
