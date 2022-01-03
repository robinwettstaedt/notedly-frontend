import { RawDraftContentState } from 'draft-js';
import { EmojiData } from 'emoji-mart';
import { NotebookType } from './notebookTypes';

export type NoteType = {
  _id: string;
  title: string;
  content: string;
  notebook: NotebookType;
  emoji: string;
  hasAccess: NoteAccessType[];
  createdBy: NoteAccessType;
  deleted: boolean;
  deletedAt?: string;
  archived: boolean;
  archivedAt?: string;
  visible: boolean;
  lastUpdatedBy: NoteAccessType;
  createdAt: string;
  updatedAt: string;
};

export type NoteAccessType = {
  _id: string;
  email: string;
  firstName: string;
  picture: string;
};

export type CreateNoteType = {
  title: string;
  content: string;
  notebook: string;
  emoji: string;
};

export type UpdateNoteType = {
  title?: string;
  notebook?: string;
  emoji?: string;
  hasAccess?: NoteAccessType[];
  deleted?: boolean;
  archived?: boolean;
  visible?: boolean;
  locked?: boolean;
  favourited?: boolean;
};

export type UpdateNoteContentType = {
  content: string;
};

export type NoteInviteType = {
  _id: string;
  note: string;
  inviter: NoteAccessType;
  receiver: NoteAccessType;
  createdAt: string;
  updatedAt: string;
};

export type CreateNoteInviteType = {
  receiver: string;
};

export const defaultNoteEmoji = 'spiral_note_pad';
