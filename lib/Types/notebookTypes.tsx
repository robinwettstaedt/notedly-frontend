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
  email?: string;
  firstName?: string;
  picture?: string;
};

export type NotebookNoteType = {
  _id: string;
  //rest optional, maybe title etc
};

enum NotebookColor {
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
