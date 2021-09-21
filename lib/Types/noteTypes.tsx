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
  visible: boolean;
  lastUpdatedBy: NoteAccessType;
  createdAt: string;
  updatedAt: string;
};

export type NoteAccessType = {
  _id: string;
  email?: string;
  firstName?: string;
  picture?: string;
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
  visible?: boolean;
  locked?: boolean;
  favourited?: boolean;
};
