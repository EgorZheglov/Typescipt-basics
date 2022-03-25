import app from './app';
import { createConnection } from 'typeorm';
import ormConfig from './common/ormconfig';

console.log('DB config:', ormConfig);

createConnection(ormConfig)
  .then(async (connection) => {
    console.log('DB conncted');
    await connection.runMigrations();
    app.listen(process.env.PORT, () =>
    console.log(`App is running on http://localhost:${process.env.PORT}`)
    );
  })
  .catch((err) => console.log(`DB NOT CONNCTED:${err}`))


