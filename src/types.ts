export type NewUser = {
  name: string;
  login: string;
  password: string;
};

export type UserUpdateData = {
  name?: string;
  login?: string;
  password?: string;
};
