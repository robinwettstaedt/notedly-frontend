export type UserType = {
  _id: string;
  email: string;
  username: string;
  firstName: string;
  picture: string;
  settings: {
    theme: Theme;
    notifications: Notifications;
    invites: Boolean;
  };
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
    invites: Boolean;
  };
};

export type Theme = 'LIGHT' | 'DARK';

export type Notifications = 'ALL' | 'TODOS' | 'INVITES' | 'NONE';
