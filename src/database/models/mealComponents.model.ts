import { BelongsTo, ForeignKey, Model, Table } from 'sequelize-typescript';
import { BaseModel } from './base.model';
import { Meal } from './meal.model';
import { Component } from './component.model';

@Table({
  tableName: 'meals_components',
  timestamps: false,
})
export class MealCompoenent extends Model {
  @ForeignKey(() => Meal)
  public meal_id!: string;

  @ForeignKey(() => Component)
  public component_id!: string;
}
