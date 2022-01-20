import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(__dirname, '../../.env')
});


export default {
  PORT: process.env.PORT,
  POSTGRES_CONTAINERPORT: process.env.POSTGRES_CONTAINERPORT,
  POSTGRES_USER: process.env.POSTGRES_USER,
  POSTGRES_HOST: process.env.ENV === 'DOCKER'? 'db' : process.env.POSTGRES_HOST,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  POSTGRES_DB: process.env.POSTGRES_DB,
};
