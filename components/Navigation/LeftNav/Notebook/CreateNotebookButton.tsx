import React from 'react';
import styled from 'styled-components';
import { createNotebook } from '../../../../lib/Helpers/apiRequests/notebookRequests';
import useNotebooks from '../../../../lib/hooks/useNotebooks';
import { defaultNotebookEmoji } from '../../../../lib/types/notebookTypes';

const CreateNotebookButton = () => {
  const { mutateNotebooks } = useNotebooks();

  const handleClick = async () => {
    await createNotebook('Hi', defaultNotebookEmoji);
    mutateNotebooks();
  };

  return <StyledButton onClick={handleClick}>create Notebook</StyledButton>;
};

export default CreateNotebookButton;

const StyledButton = styled.button`
  position: fixed;
  bottom: 10px;
  /* justify-self: end; */
`;
