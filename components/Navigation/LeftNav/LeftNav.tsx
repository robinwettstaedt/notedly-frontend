import React from 'react';
import styled from 'styled-components';
import LeftNavBackdrop from './LeftNavBackdrop';
import CreateNotebookButton from './Notebook/CreateNotebookButton';
import useNotebooks from '../../../lib/hooks/useNotebooks';
import Notebook from './Notebook/Notebook';

type LeftNavProps = {
  leftNavOpen: boolean;
  setLeftNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const LeftNav = ({ leftNavOpen, setLeftNavOpen }: LeftNavProps) => {
  const { notebooks } = useNotebooks();

  if (leftNavOpen) {
    return (
      <StyledLeftNavbar>
        <LeftNavigation>
          <StyledUl>
            {notebooks &&
              notebooks.map((notebook) => {
                return (
                  <li key={notebook._id}>
                    <Notebook notebook={notebook} />
                  </li>
                );
              })}
          </StyledUl>
          <CreateNotebookButton />
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
  top: 5vh;
  display: flex;
  position: fixed;
  width: 100vw;
  height: 95vh;
  z-index: 101;
`;

const LeftNavigation = styled.div`
  /* display: flex;
  flex-direction: column; */
  height: 100%;
  width: 80%;
  background: #2b976e;
  z-index: 200;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  list-style: none;
`;
