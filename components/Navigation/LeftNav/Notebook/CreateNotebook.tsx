import React from 'react';
import styled from 'styled-components';
import { createNotebook } from '../../../../lib/Helpers/apiRequests/notebookRequests';
import useNotebooks from '../../../../lib/hooks/useNotebooks';

const CreateNotebookButton = () => {
  const { mutateNotebooks } = useNotebooks();

  const handleClick = async () => {
    await createNotebook('Hi', '#ffffff');
    mutateNotebooks();
  };

  return (
    <StyledNotebook>
      <button onClick={handleClick}>create Notebook</button>
    </StyledNotebook>
  );
};

export default CreateNotebookButton;

const StyledNotebook = styled.div``;
