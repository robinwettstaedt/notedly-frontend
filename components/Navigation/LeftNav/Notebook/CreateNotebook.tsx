import React from 'react';
import styled from 'styled-components';
import { useTokenContext } from '../../../../lib/contexts/TokenContext';
import { createNotebook } from '../../../../lib/Helpers/apiRequests/notebookRequests';

const CreateNotebook = () => {
  const { token } = useTokenContext();

  const handleClick = async () => {
    return await createNotebook(token, 'Hi', '#ffffff');
  };

  return (
    <StyledNotebook>
      <button onClick={handleClick}>create Notebook</button>
    </StyledNotebook>
  );
};

export default CreateNotebook;

const StyledNotebook = styled.div``;
