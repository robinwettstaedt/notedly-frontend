import React, { useEffect, useState } from 'react';
import { useTokenContext } from '../lib/contexts/TokenContext';
import { defaultUser, useUserContext } from '../lib/contexts/UserContext';
import Link from 'next/link';
import SignOut from '../components/Auth/SignOut';
import EmojiMart from '../components/Emoji/EmojiMart';
import usePrivateRoute from '../lib/hooks/usePrivateRoute';
import { authEndpoints, userEndpoints } from '../lib/constants/endpoints';
import useUser from '../lib/hooks/useUser';
import useAuth from '../lib/hooks/useAuth';
import axios from 'axios';
import { UserType } from '../lib/types/userTypes';
import { withAuth } from '../components/Auth/withAuth';

const WelcomePage: React.FC = () => {
  //   usePrivateRoute();
  const { user } = useUser();

  return (
    <>
      {user ? <p>Welcome to notedly {user.firstName}!</p> : <p>loading...</p>}
      <SignOut />
      <Link href="/note">
        <a>Link to the Text Editors</a>
      </Link>
      {/* <EmojiMart /> */}
    </>
  );
};

export default withAuth(WelcomePage);
