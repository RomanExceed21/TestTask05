import { Repository } from 'sequelize-typescript';
import { databaseConnection } from '../database/connection';
import { Component, Meal, MealCompoenent, Rewiev } from '../database/models';

class MealService {
  private readonly mealRepository: Repository<Meal>;

  public constructor() {
    this.mealRepository = databaseConnection.getRepository(Meal);
  }

  public getAllMeals(): Promise<Meal[]> {
    return this.mealRepository.findAll();
  }

  public getMealWithCompoenntsByMealId(id: string) {
    return this.mealRepository.findByPk(id, { include: [{ model: Component, through: {} }] });
  }

  public getMealWithRewievByMealId(id: string) {
    return this.mealRepository.findByPk(id, { include: [{ model: Rewiev }] });
  }
}

export const mealService = new MealService();
