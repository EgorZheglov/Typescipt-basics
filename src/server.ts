import app from './app';
import ormConfig from './common/ormconfig';

console.log('DB config:', ormConfig);

app.start(Number(process.env.PORT!))

