import axios, { AxiosRequestConfig } from 'axios';
import app from '../src/app';
import { v4 as uuidv4 } from 'uuid';
import { deleteUser } from '../src/controllers/user-controller';

describe('Test /signup endpoint', (): void => {
  const port = 4001;
  const pathSignup = `http://localhost:${port}/signup`;
  const pathLogin = `http://localhost:${port}/login`;
  let id: string;
  
  const testData = {
    name: 'test61',
    login: uuidv4().slice(0, 10),
    password: 'test',
  };
  beforeAll(async (): Promise<void> => {
    await app.start(port);
  });

  afterAll(async (): Promise<void> => {
    await deleteUser(id);
    await app.stop();
  });

  it('should signup user', async (): Promise<void> => {
    const result = await axios.post(pathSignup, testData);

    expect(result.status).toBe(201);
    expect(result.data.name).toEqual(testData.name);
    expect(result.data.login).toEqual(testData.login);

    id = result.data.id;
  });

  it('should login user', async (): Promise<void> => {
    const result = await axios.post(pathLogin, {
      login: testData.login,
      password: testData.password,
    });

    expect(result.status).toBe(200);
    expect(result.data.access_token).toBeTruthy();
    expect(result.data.access_token.length).toBeGreaterThan(0);
  });
});
