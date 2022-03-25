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
  columns?: string;
};

export type NewTask = {
  columnId: string;
  userId?: string;
  title: string;
  order: string;
  description: string;
};

export type TaskUpdateData = {
  columnId?: string;
  boardId?: string;
  userId?: string;
  title?: string;
  order?: string;
  description?: string;
};
