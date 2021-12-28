import React from 'react';
import styled from 'styled-components';
import { useTokenContext } from '../../../../lib/contexts/TokenContext';
import { createNotebook } from '../../../../lib/Helpers/apiRequests/notebookRequests';

const CreateNotebookButton = () => {
  const { token } = useTokenContext();

  const handleClick = async () => {
    return await createNotebook('Hi', '#ffffff');
  };

  return (
    <StyledNotebook>
      <button onClick={handleClick}>create Notebook</button>
    </StyledNotebook>
  );
};

export default CreateNotebookButton;

const StyledNotebook = styled.div``;
