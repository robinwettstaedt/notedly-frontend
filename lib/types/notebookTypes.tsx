import { EmojiData } from 'emoji-mart';
import { NoteType } from './noteTypes';

export type NotebookType = {
  _id: string;
  title: string;
  color: NotebookColor;
  hasAccess: NotebookAccessType[];
  createdBy: NotebookAccessType;
  notes?: NotebookNoteType[];
  deleted: boolean;
  deletedAt?: string;
  visible: boolean;
  createdAt: string;
  updatedAt: string;
};

export type NotebookAccessType = {
  _id: string;
  email: string;
  firstName: string;
  picture: string;
};

// have a look at how to structure them as they are filled by the APIs .populate mongoose method
export type NotebookNoteType = {
  _id: string;
  title: string;
  emoji: EmojiData | {};
  deleted: boolean;
  deletedAt?: string;
  visible: boolean;
};

export type CreateNotebookType = {
  title: string;
  color: NotebookColor;
};

export type UpdateNotebookType = {
  title?: string;
  color?: NotebookColor;
  hasAccess?: NotebookAccessType[];
  notes?: NotebookNoteType;
  deleted?: boolean;
  visible?: boolean;
};

export enum NotebookColor {
  RED = '#ffffff',
  ORANGE = '#ffffff',
  YELLOW = '#ffffff',
  GREEN = '#ffffff',
  BLUE = '#ffffff',
  CYAN = '#ffffff',
  PURPLE = '#ffffff',
  WHITE = '#ffffff',
  BROWN = '#ffffff',
  OLIVE = '#ffffff',
  TURQUOISE = '#ffffff',
  LIME = '#ffffff',
  PINK = '#ffffff',
  GRAY = '#ffffff',
  PEACH = '#ffffff',
}

export type NotebookInviteType = {
  _id: string;
  notebook: string;
  inviter: {
    _id: string;
    email: string;
    firstName: string;
    picture: string;
  };
  receiver: {
    _id: string;
    email: string;
    firstName: string;
    picture: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type CreateNotebookInviteType = {
  receiver: string;
};
