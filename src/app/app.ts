import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { authDatabase } from '../database/connection';
import { componentsController, mealsController, rewievController } from '../controllers';
import BaseController from '../controllers/base.controller';
dotenv.config();

const port = process.env.APP_PORT || 3000;

class App {
  public app: express.Application;
  public port: number | string;
  public controllers: BaseController[];

  constructor(port: number | string, controllers: BaseController[]) {
    this.app = express();
    this.config();
    this.port = port;
    this.controllers = controllers;
    this.initializeControllers();
  }

  private initializeControllers() {
    this.controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

  public async testDbConnection() {
    await authDatabase();
  }

  private config(): void {
    this.app.use(express.json());
  }

  public async start() {
    await this.testDbConnection();
    this.app.listen(this.port, () => {
      console.log(`Meals backend app listening on port ${this.port}!`);
    });
  }
}

export default new App(port, [rewievController, mealsController, componentsController]);
