import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../Navigation/Navbar';
import styled from 'styled-components';

type ParentComponentProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<ParentComponentProps> = ({ children }) => {
  //   const router = useRouter();

  //   // render the Nav conditionally depending on if the route is singin/ signup or not
  //   if (
  //     router.pathname === '/auth/sign-in' ||
  //     router.pathname === '/auth/sign-up'
  //   ) {
  //     return <>{children}</>;
  //   }

  return (
    <StyledLayout>
      <Navbar />
      {children}
    </StyledLayout>
  );
};

export default Layout;

const StyledLayout = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;
