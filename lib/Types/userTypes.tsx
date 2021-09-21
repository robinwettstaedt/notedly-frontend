export type UserType = {
  _id: string;
  email: string;
  firstName: string;
  picture: string;
  settings: {
    theme: string;
    notifications: string;
  };
  notebooks: UserNotebookType[];
  createdAt: string;
  updatedAt: string;
};

// have a look at how to structure them as they are filled by the APIs .populate mongoose method
export type UserNotebookType = {
  _id: string;
  //rest optional, maybe title etc
};
