import { EmojiData } from 'emoji-mart';

export type NotebookType = {
  _id: string;
  title: string;
  color: string;
  hasAccess: NotebookAccessType[];
  createdBy: NotebookAccessType;
  notes?: NotebookNoteType[];
  deleted: boolean;
  deletedAt?: string;
  archived: boolean;
  archivedAt?: string;
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
  archived: boolean;
  archivedAt?: string;
  visible: boolean;
};

export type CreateNotebookType = {
  title: string;
  color: string;
};

export type UpdateNotebookType = {
  title?: string;
  color?: string;
  deleted?: boolean;
  archived?: boolean;
  visible?: boolean;
};

// export enum NotebookColor {
//   RED = '#ffffff',
//   ORANGE = '#ffffff',
//   YELLOW = '#ffffff',
//   GREEN = '#ffffff',
//   BLUE = '#ffffff',
//   CYAN = '#ffffff',
//   PURPLE = '#ffffff',
//   WHITE = '#ffffff',
//   BROWN = '#ffffff',
//   OLIVE = '#ffffff',
//   TURQUOISE = '#ffffff',
//   LIME = '#ffffff',
//   PINK = '#ffffff',
//   GRAY = '#ffffff',
//   PEACH = '#ffffff',
// }

export type NotebookInviteType = {
  _id: string;
  notebook: string;
  inviter: NotebookAccessType;
  receiver: NotebookAccessType;
  createdAt: string;
  updatedAt: string;
};

export type CreateNotebookInviteType = {
  receiver: string;
};
