import express, { Request, Response } from 'express';
import { componentService } from '../services';
import BaseController from './base.controller';
import { zGetComponentWithRewievsByComponentId } from './dto/component.dto';
import { validate } from './validators';

class ComponentController implements BaseController {
  public basePath = '/component';
  public router = express.Router();
  private readonly componentService: typeof componentService;

  constructor() {
    this.intializeRoutes();
    this.componentService = componentService;
  }

  public intializeRoutes() {
    this.router.get(
      this.basePath + '/:componentId/rewiev',
      validate(zGetComponentWithRewievsByComponentId),
      this.getCompoenentWithRewievsByCompoenentId,
    );
    this.router.get(this.basePath, this.getAllComponents);
  }

  public getAllComponents = async (req: Request, res: Response) => {
    const compoenents = await this.componentService.getAllComponents();
    res.send(compoenents);
  };

  public getCompoenentWithRewievsByCompoenentId = async (req: Request, res: Response) => {
    const { componentId } = req.params;
    const components = await this.componentService.getCompoenentWithRewievsByCompoenentId(componentId);
    res.send(components);
  };
}

export const componentsController = new ComponentController();
