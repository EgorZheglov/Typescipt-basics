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

export type BoardUpdateData = {
  title: string;
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

export enum TaskStatus {
  TODO = 'to do',
  INPROGRESS = 'in progress',
  INREVIEW = 'in review',
  DONE = 'done',
}
