import React from 'react';
import styled from 'styled-components';
import { NotebookNoteType } from '../../../../lib/types/notebookTypes';
import Link from 'next/link';

type notePropsType = {
  note: NotebookNoteType;
};

const Note = ({ note }: notePropsType) => {
  if (note.visible && !note.deleted && !note.archived)
    return <StyledNote href={`/note/${note._id}`}>{note.title}</StyledNote>;

  return <></>;
};

export default Note;

const StyledNote = styled(Link)``;
