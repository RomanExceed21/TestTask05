import { BelongsToMany, Column, HasMany, Table } from 'sequelize-typescript';
import { BaseModel } from './base.model';
import { STRING } from 'sequelize';
import { Meal } from './meal.model';
import { MealCompoenent } from './mealComponents.model';
import { Rewiev } from './rewiev.model';

@Table({
  tableName: 'components',
  timestamps: false,
})
export class Component extends BaseModel<Component> {
  @Column({ type: STRING })
  public name!: string;

  @BelongsToMany(() => Meal, () => MealCompoenent, 'meal_id')
  public meals!: Meal[];

  @HasMany(() => MealCompoenent)
  public meal_components!: MealCompoenent;

  @HasMany(() => Rewiev)
  public rewievs?: Rewiev;
}
