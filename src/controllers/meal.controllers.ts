import express, { Request, Response } from 'express';
import BaseController from './base.controller';
import { mealService } from '../services/meal.service';
import { validate } from './validators';
import { zGetMealWithAdditionalInfoByMealIdDto } from './dto/meal.dto';

class MealController implements BaseController {
  public basePath = '/meal';
  public router = express.Router();
  private readonly mealService: typeof mealService;

  constructor() {
    this.intializeRoutes();
    this.mealService = mealService;
  }

  public intializeRoutes() {
    this.router.get(
      this.basePath + '/:mealId/component',
      validate(zGetMealWithAdditionalInfoByMealIdDto),
      this.getMealWithCompoenntsByMealId,
    );
    this.router.get(
      this.basePath + '/:mealId/rewiev',
      validate(zGetMealWithAdditionalInfoByMealIdDto),
      this.getMealReviewsByMealId,
    );
    this.router.get(this.basePath, this.getAllMeals);
  }

  public getAllMeals = async (req: Request, res: Response) => {
    const meals = await this.mealService.getAllMeals();
    res.send(meals);
  };

  public getMealWithCompoenntsByMealId = async (req: Request, res: Response) => {
    const { mealId } = req.params;
    const meal = await this.mealService.getMealWithCompoenntsByMealId(mealId);
    res.send(meal);
  };

  public getMealReviewsByMealId = async (req: Request, res: Response) => {
    const { mealId } = req.params;
    const meal = await this.mealService.getMealWithRewievByMealId(mealId);
    res.send(meal);
  };
}

export const mealsController = new MealController();
