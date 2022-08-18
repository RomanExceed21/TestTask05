import express, { Request, Response } from 'express';

class BaseController {
  public router = express.Router();
  constructor() {}
}

export default BaseController;
