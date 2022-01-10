const authBase = `${process.env.API_SERVER_URL}/auth`;

const userBase = `${process.env.API_SERVER_URL}/api/v1/user`;

const noteBase = `${process.env.API_SERVER_URL}/api/v1/note`;

const notebookBase = `${process.env.API_SERVER_URL}/api/v1/notebook`;

// const todoBase = `${process.env.API_SERVER_URL}/api/v1/todo`;

export const authEndpoints = {
  signUp: `${authBase}/signup`,
  signIn: `${authBase}/signin`,
  signOut: `${authBase}/signout`,
  refreshAccess: `${authBase}/refreshaccess`,
  signInWithGoogle: `${authBase}/signinwithgoogle`,
  checkUsername: `${authBase}/checkusername`,
};

export const userEndpoints = {
  getOrUpdateOrDelete: `${userBase}/`,
  getInvites: `${userBase}/invites`,
};

export const noteEndpoints = {
  create: `${noteBase}/`,
  getOrUpdateOrDelete: (noteID: string) => `${noteBase}/` + noteID,
  removeAccess: (noteID: string) => `${noteBase}/` + noteID + '/access/remove',
  getOrCreateInvites: (noteID: string) => `${noteBase}/` + noteID + '/invites',
  removeInvite: (inviteID: string) => `${noteBase}/` + inviteID + '/invites',
  acceptInvite: (inviteID: string) =>
    `${noteBase}/invites/` + inviteID + '/accept',
};

export const notebookEndpoints = {
  createOrGetMany: `${notebookBase}/`,
  getOrUpdateOrDelete: (notebookID: string) => `${notebookBase}/` + notebookID,
  removeAccess: (notebookID: string) =>
    `${notebookBase}/` + notebookID + '/access/remove',
  getOrCreateInvites: (notebookID: string) =>
    `${notebookBase}/` + notebookID + '/invites',
  removeInvite: (inviteID: string) =>
    `${notebookBase}/` + inviteID + '/invites',
  acceptInvite: (inviteID: string) =>
    `${notebookBase}/invites/` + inviteID + '/accept',
};

// export const todoEndpoints = {};
