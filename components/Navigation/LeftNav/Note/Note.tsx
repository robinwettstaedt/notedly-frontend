import React from 'react';
import styled from 'styled-components';
import { NotebookNoteType } from '../../../../lib/types/notebookTypes';
import Link from 'next/link';
import { Emoji } from 'emoji-mart';

type notePropsType = {
  note: NotebookNoteType;
};

const Note = ({ note }: notePropsType) => {
  console.log('note emoji: ', note.emoji);
  if (note.visible && !note.deleted && !note.archived)
    return (
      <>
        <Emoji emoji={note.emoji} size={24} />
        <StyledNote href={`/note/${note._id}`}>{note.title}</StyledNote>
      </>
    );

  return <></>;
};

export default Note;

const StyledNote = styled(Link)``;
