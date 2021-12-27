import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import SignOut from '../../Auth/SignOut';
import LeftNavBackdrop from './LeftNavBackdrop';
import CreateNotebook from './Notebook/CreateNotebook';
import { useNotebookContext } from '../../../lib/contexts/NotebookContext';

type LeftNavProps = {
  leftNavOpen: boolean;
  setLeftNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const LeftNav = ({ leftNavOpen, setLeftNavOpen }: LeftNavProps) => {
  //   const { token } = useTokenContext();
  //   const [notebooks, setNotebooks] = useState<NotebookType[] | undefined>([]);
  const { notebooks } = useNotebookContext();

  //   console.log('notebooks: ', notebooks);

  if (leftNavOpen) {
    return (
      <StyledLeftNavbar>
        <LeftNavigation>
          <StyledUl>
            <li>
              <StyledLink href="/">
                <StyledA>Home</StyledA>
              </StyledLink>
            </li>
            {notebooks &&
              notebooks.map((notebook, index) => {
                return <li key={index}>{notebook.title}</li>;
              })}

            <li>
              <CreateNotebook />
            </li>
            <li>
              <SignOut />
            </li>
          </StyledUl>
        </LeftNavigation>
        <LeftNavBackdrop setLeftNavOpen={setLeftNavOpen} />
      </StyledLeftNavbar>
    );
  } else {
    return <></>;
  }
};

export default LeftNav;

const StyledLeftNavbar = styled.div`
  display: flex;
`;

const LeftNavigation = styled.div`
  height: 100vh;
  background: #2b976e;
  width: 80vw;
  z-index: 200;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  list-style: none;
`;

const StyledA = styled.a`
  text-decoration: none;
`;

const StyledLink = styled(Link)``;
