export type UserType = {
  _id: string;
  email: string;
  username: string;
  firstName: string;
  picture: string;
  settings: {
    theme: ThemeType;
    notifications: NotificationsType;
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
    theme: ThemeType;
    notifications: NotificationsType;
    invites: Boolean;
  };
};

export type ThemeType = 'LIGHT' | 'DARK' | 'AUTO';

export type NotificationsType = 'ALL' | 'TODOS' | 'INVITES' | 'NONE';
