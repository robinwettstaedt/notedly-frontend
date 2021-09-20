import SignOut from '../components/auth/SingOut';
import usePrivateRouterUser from '../lib/CustomHooks/usePrivateRouterUser';
import { GetServerSideProps } from 'next';
import { useContext } from 'react';
import { UserContext } from '../lib/contexts/UserContext';
import { useEffect } from 'react';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

const Welcome = () => {
  usePrivateRouterUser();

  const { user } = useContext(UserContext);

  return (
    <>
      <p>Welcome to notedly!</p>

      <SignOut />
    </>
  );
};

export default Welcome;
