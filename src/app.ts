import express, { Request, Response, NextFunction, Application } from 'express';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
import userRouter from './resources/users/user.router';
import path from 'path/posix';
import signup from './resources/signup/signup.router';
import login from './resources/login/login.router';
import boardRouter from './resources/board/board.router';
import checkToken from './middlwares/checkToken';
import errorHandler from './middlwares/error-handler';

const app: Application = express();
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

export default app;
