import { Sequelize } from 'sequelize-typescript';
import { sequelizeConfig } from './database.config';

export const databaseConnection = new Sequelize(sequelizeConfig);

export const authDatabase = async () => {
  try {
    await databaseConnection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
