import { NotebookType } from './notebookTypes';

export type UserType = {
  _id: string;
  email: string;
  firstName: string;
  picture: string;
  settings: {
    theme: string;
    notifications: string;
  };
  notebooks?: NotebookType[];
  createdAt: string;
  updatedAt: string;
};
