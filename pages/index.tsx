import { useTokenContext } from '../lib/contexts/TokenContext';
import { useUserContext } from '../lib/contexts/UserContext';
import Link from 'next/link';
import SignOut from '../components/Auth/SingOut';
import EmojiMart from '../components/Emoji/EmojiMart';
import usePrivateRoute from '../lib/hooks/usePrivateRoute';
// import { GetServerSideProps } from 'next';

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   return {
//     props: {},
//   };
// };

const WelcomePage = () => {
  usePrivateRoute();

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
