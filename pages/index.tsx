import SignOut from '../components/auth/SingOut';
import usePrivateRoute from '../components/auth/usePrivateRoute';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

const Welcome = () => {
  usePrivateRoute();

  return (
    <>
      <p>Welcome to notedly!</p>
      <SignOut />
    </>
  );
};

export default Welcome;
