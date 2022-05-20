import express, { Application } from 'express';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
import { createConnection, Connection } from 'typeorm';
import ormConfig from './common/ormconfig';
import userRouter from './routes/user-router';
import path from 'path/posix';
import signup from './routes/signup-router';
import login from './routes/login-router';
import boardRouter from './routes/board-router';
import checkToken from './middlwares/checkToken';
import errorHandler from './middlwares/error-handler';
import { Server } from 'http';

const app: Application = express();
let server: Server;
let db: Connection;

// const swaggerDocument: swaggerUI.JsonObject = YAML.load(
//    path.join(__dirname, '../doc/api.yaml')
// );

app.use(express.json());

// app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use(signup);
app.use(login);

app.use(checkToken);

app.use('/boards', boardRouter);
app.use('/users', userRouter);

app.use(errorHandler);

export default {
  start: async (PORT: number) => {
    server = app.listen(PORT, () =>
      console.log(`App is running on http://localhost:${PORT}`)
    );

    await createConnection(ormConfig)
      .then(async (connection) => {
        console.log('DB conncted');
        db = connection;
        await connection
          .runMigrations()
          .catch((e) => console.log(`err durning migration ${e}`));
      })
      .catch((err) => console.log(`DB NOT CONNCTED:${err}`));
    return server;
  },
  stop: async (): Promise<void> => {
    await db.close();
    await server.close();
  },
};
