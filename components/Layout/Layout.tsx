import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

type ParentComponentProps = {
  children?: React.ReactNode;
};

const Nav = () => {
  return <nav>i&apos;m the nav</nav>;
};

const Layout: React.FC<ParentComponentProps> = ({ children }) => {
  const router = useRouter();

  // render the Nav conditionally depending on if the route is singin/ signup or not
  if (
    router.pathname === '/auth/sign-in' ||
    router.pathname === '/auth/sign-up'
  ) {
    return <>{children}</>;
  }

  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default Layout;
