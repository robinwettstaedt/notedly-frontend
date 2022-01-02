import React, { useState } from 'react';
import styled from 'styled-components';
import useLocalStorage from '../../../../lib/hooks/useLocalStorage';
import { NotebookType } from '../../../../lib/types/notebookTypes';
import Note from '../Note/Note';
import AddNoteButton from './AddNoteButton';

type notebookPropsType = {
  notebook: NotebookType;
};

const Notebook = ({ notebook }: notebookPropsType) => {
  //   const [notesVisible, setNotesVisible] = useState<boolean>(false);
  const { storedValue: notesVisible, setValue: setNotesVisible } =
    useLocalStorage(notebook._id, false);

  const handleDropout = () => {
    setNotesVisible(!notesVisible);
  };

  return (
    <Wrapper>
      <StyledNotebook>
        <StyledTitle onClick={handleDropout}> {notebook.title} </StyledTitle>

        <AddNoteButton notebookID={notebook._id} />
      </StyledNotebook>
      <StyledUl>
        {notesVisible &&
          notebook.notes?.map((note) => {
            return (
              <li key={note._id}>
                <Note note={note} />
              </li>
            );
          })}
      </StyledUl>
    </Wrapper>
  );
};

export default Notebook;

const Wrapper = styled.div``;

const StyledNotebook = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledTitle = styled.div``;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
`;
