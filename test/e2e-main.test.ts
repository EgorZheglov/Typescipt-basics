import axios, { AxiosRequestConfig } from 'axios';
import app from '../src/app';
import { v4 as uuidv4 } from 'uuid';
import { deleteUser } from '../src/controllers/user-controller';
import { TaskStatus } from '../src/types';

interface AccessHeaders {
  headers: {
    Authorization: string;
  };
}

describe('Test /signup endpoint', (): void => {
  const port = 4002;
  const path = `http://localhost:${port}`;
  let headers: AccessHeaders;

  let userId: string;
  let boardId: string;
  let taskId: string;

  const testData = {
    name: 'test61',
    login: uuidv4().slice(0, 10),
    password: 'test',
  };

  beforeAll(async (): Promise<void> => {
    await app.start(port);
  });

  afterAll(async (): Promise<void> => {
    await deleteUser(userId);
    await app.stop();
  });

  it('should signup user', async (): Promise<void> => {
    const result = await axios.post(path + '/signup', testData);

    expect(result.status).toBe(201);
    expect(result.data.name).toEqual(testData.name);
    expect(result.data.login).toEqual(testData.login);

    userId = result.data.id;
  });

  it('should login user', async (): Promise<void> => {
    const result = await axios.post(path + '/login', {
      login: testData.login,
      password: testData.password,
    });

    expect(result.status).toBe(200);
    expect(result.data.access_token).toBeTruthy();
    expect(result.data.access_token.length).toBeGreaterThan(0);

    headers = {
      headers: {
        Authorization: `Bearer ${result.data.access_token}`,
      },
    };
  });

  it('should create board then get and update it by id', async (): Promise<void> => {
    const result = await axios.post(
      path + '/boards',
      {
        title: 'testBoard',
      },
      headers
    );
    expect(result.status).toBe(201);
    expect(result.data.title).toEqual('testBoard');

    boardId = result.data.board_id;

    const resultFromGet = await axios.get(path + '/boards/' + boardId, headers);

    expect(resultFromGet.status).toBe(200);
    expect(resultFromGet.data[0].title).toEqual('testBoard');

    const resultFromPut = await axios.put(
      path + '/boards/' + boardId,
      {
        title: 'testBoardUpdated',
      },
      headers
    );

    expect(resultFromPut.status).toBe(200);
    expect(resultFromPut.data.title).toEqual('testBoardUpdated');
  });

  it('should create task then get and update it by id', async (): Promise<void> => {
    const result = await axios.post(
      path + '/boards/' + boardId + '/tasks/',
      {
        title: 'testTask',
        order: 'testtTask',
        description: 'testTask',
      },
      headers
    );
    expect(result.status).toBe(201);
    expect(result.data.title).toEqual('testTask');
    expect(result.data.description).toEqual('testTask');

    taskId = result.data.task_id;

    // const resultFromGet = await axios.get(
    //   path + '/boards/' + boardId + '/tasks/' + taskId,
    //   headers
    // );

    // expect(resultFromGet.status).toBe(200);
    // expect(resultFromGet.data[0].title).toEqual('testTask');
    // expect(resultFromGet.data[0].description).toEqual('testTask');
    // expect(resultFromGet.data[0].status).toEqual(TaskStatus.TODO);
  });
});
