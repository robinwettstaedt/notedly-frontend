import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SignOut from '../Auth/SignOut';
import styled from 'styled-components';
import LeftNav from './LeftNav/LeftNav';

const Navbar = () => {
  const [leftNavOpen, setLeftNavOpen] = useState<boolean>(false);

  const handleLeftNav = () => {
    setLeftNavOpen(!leftNavOpen);
  };

  return (
    <>
      <StyledNavbar>
        <StyledUl>
          <li>
            <button onClick={handleLeftNav}>LeftNav</button>
          </li>
          <li>
            <StyledLink href="/">
              <StyledA>Home</StyledA>
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/note/1">
              <StyledA>Note</StyledA>
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/auth/sign-in">
              <StyledA>Sign In</StyledA>
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/auth/sign-up">
              <StyledA>Sign Up</StyledA>
            </StyledLink>
          </li>
          <li>
            <SignOut />
          </li>
        </StyledUl>
        <LeftNav leftNavOpen={leftNavOpen} setLeftNavOpen={setLeftNavOpen} />
      </StyledNavbar>
    </>
  );
};

export default Navbar;

const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  height: 5vh;
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 4rem;
  list-style: none;
  height: 2rem;
`;

const StyledA = styled.a`
  text-decoration: none;
`;

const StyledLink = styled(Link)``;
