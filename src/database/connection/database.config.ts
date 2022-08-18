import { SequelizeOptions } from 'sequelize-typescript';
import * as models from '../models';

export const sequelizeConfig: SequelizeOptions = {
  dialect: 'postgres',
  host: process.env.POSTGRES_HOST!,
  port: +process.env.POSTGRES_PORT!,
  username: process.env.POSTGRES_USER!,
  password: process.env.POSTGRES_PASSWORD!,
  database: process.env.POSTGRES_DB!,
  models: Object.values(models),
  sync: { force: false },
  logging: true,
};
