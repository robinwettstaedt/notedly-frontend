import SignOut from '../components/auth/SingOut';
import usePrivateRouterUser from '../lib/CustomHooks/usePrivateRoute';
import { GetServerSideProps } from 'next';
import { useUserContext } from '../lib/contexts/UserContext';

import Link from 'next/link';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

const WelcomePage = () => {
  usePrivateRouterUser();

  const { user } = useUserContext();

  return (
    <>
      <p>Welcome to notedly {user.firstName}!</p>
      <SignOut />
      <Link href="/">
        <a>Link to test page</a>
      </Link>
    </>
  );
};

export default WelcomePage;
