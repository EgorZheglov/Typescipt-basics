export type NewUser = {
  name: string;
  login: string;
  password: string;
};

export type UserUpdateData = {
  name?: string;
  login?: string;
  password?: string;
  id?: string;
};

export type Column = {
  title: string;
  order: string;
  id: string;
};

export type BoardUpdateData = {
  title?: string;
  columns?: Array<Column>;
  id?: string;
};
