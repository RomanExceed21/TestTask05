import express, { Request, Response } from 'express';
import { rewievService } from '../services';
import BaseController from './base.controller';
import { zCreateRewievDto, zUpdateRewievDto } from './dto/rewiev.dto';
import { validate } from './validators';

class ReviewController implements BaseController {
  public basePath = '/rewiev';
  public router = express.Router();
  private readonly rewievService: typeof rewievService;

  constructor() {
    this.rewievService = rewievService;
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(this.basePath, this.getRewievs);
    this.router.post(this.basePath, validate(zCreateRewievDto), this.addRewiev);
    this.router.patch(this.basePath + '/:rewievId', validate(zUpdateRewievDto), this.updateRewiev);
  }

  public getRewievs = async (req: Request, res: Response) => {
    const rewievs = await this.rewievService.getAllRewievs();
    res.json(rewievs);
  };

  public addRewiev = async (req: Request, res: Response) => {
    const result = await this.rewievService.createNewRewiev(req.body);
    res.send(result);
  };

  public updateRewiev = async (req: Request, res: Response) => {
    const { rewievId } = req.params;
    const result = await this.rewievService.updateRewiev(rewievId, req.body);

    if (!result) {
      res.status(404).send('Record not found').end();
    }

    res.send(result).end();
  };
}

export const rewievController = new ReviewController();
