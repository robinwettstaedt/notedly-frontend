import React from 'react';
import styled from 'styled-components';

type LeftNavBackdropProps = {
  setLeftNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const LeftNavBackdrop = ({ setLeftNavOpen }: LeftNavBackdropProps) => {
  const handleClick = () => {
    setLeftNavOpen(false);
  };

  return <Backdrop onClick={handleClick}></Backdrop>;
};

export default LeftNavBackdrop;

const Backdrop = styled.div`
  width: 20%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;
