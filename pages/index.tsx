import SignOut from '../components/auth/SingOut';
import usePrivateRoute from '../components/auth/usePrivateRoute';
import { GetServerSideProps } from 'next';
import { useContext } from 'react';
import { UserContext } from '../lib/contexts/UserContext';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

const Welcome = () => {
  usePrivateRoute();

  const { user } = useContext(UserContext);

  return (
    <>
      <p>Welcome to notedly!</p>

      <SignOut />
    </>
  );
};

export default Welcome;
