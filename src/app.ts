import express, { Request, Response, NextFunction, Application } from 'express';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
import userRouter from './resources/users/user.router';
import path from 'path/posix';
import boardRouter from './resources/board/board.router'

const app: Application = express();
const swaggerDocument: swaggerUI.JsonObject = YAML.load(
   path.join(__dirname, '../doc/api.yaml')
);

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/boards', boardRouter);
app.use('/users', userRouter);

export default app;
