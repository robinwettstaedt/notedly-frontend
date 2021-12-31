import { RawDraftContentState } from 'draft-js';
import { EmojiData } from 'emoji-mart';
import { NotebookType } from './notebookTypes';

export type NoteType = {
  _id: string;
  title: string;
  content: RawDraftContentState;
  notebook: NotebookType;
  emoji: EmojiData | {};
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
  emoji: EmojiData | {};
};

export type UpdateNoteType = {
  title?: string;
  content?: string;
  notebook?: string;
  emoji?: EmojiData | {};
  hasAccess?: NoteAccessType[];
  deleted?: boolean;
  archived?: boolean;
  visible?: boolean;
  locked?: boolean;
  favourited?: boolean;
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
