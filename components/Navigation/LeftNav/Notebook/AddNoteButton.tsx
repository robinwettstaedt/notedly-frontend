import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import { noteEndpoints } from '../../../../lib/constants/endpoints';
import useNotebooks from '../../../../lib/hooks/useNotebooks';
import { CreateNoteType } from '../../../../lib/types/noteTypes';

type AddNoteButtonPropsType = {
  notebookID: string;
};

const AddNoteButton = ({ notebookID }: AddNoteButtonPropsType) => {
  const { mutateNotebooks } = useNotebooks();

  const newNote: CreateNoteType = {
    title: 'untitled',
    content: '',
    notebook: notebookID,
    emoji: {},
  };

  const addNote = async () => {
    const response = await axios.post(noteEndpoints.create, newNote);
    mutateNotebooks(null);
  };

  return (
    <StyledAddNoteButton onClick={addNote}>Add Note +</StyledAddNoteButton>
  );
};

export default AddNoteButton;

const StyledAddNoteButton = styled.button``;
