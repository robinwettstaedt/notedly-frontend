import { NotebookColor } from './notebookTypes';

export type UserType = {
  _id: string;
  email: string;
  username: string;
  firstName: string;
  picture: string;
  settings: {
    theme: Theme;
    notifications: Notifications;
  };
  notebooks: UserNotebookType[];
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserType = {
  email?: string;
  username?: string;
  firstName?: string;
  password?: string;
  picture?: string;
  settings?: {
    theme: Theme;
    notifications: Notifications;
  };
  notebooks?: UserNotebookType[];
};

// filled by the APIs .populate mongoose method
export type UserNotebookType = {
  _id: string;
  title: string;
  color: NotebookColor;
  deleted: boolean;
  deletedAt?: string;
  visible: boolean;
};

enum Theme {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

enum Notifications {
  ALL = 'ALL',
  TODOS = 'TODOS',
  INVITES = 'INVITES',
  NONE = 'NONE',
}
