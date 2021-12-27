import React from 'react';
import styled from 'styled-components';

type notebookPropsType = {
  title: string;
  color: string;
};

const Notebook = ({ title, color }: notebookPropsType) => {
  return (
    <StyledNotebook>
      <p>
        {title} {color}
      </p>
    </StyledNotebook>
  );
};

export default Notebook;

const StyledNotebook = styled.div``;
