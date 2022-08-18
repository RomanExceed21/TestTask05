import { STRING } from 'sequelize';
import { BelongsToMany, Column, HasMany, Table } from 'sequelize-typescript';
import { BaseModel } from './base.model';
import { Component } from './component.model';
import { MealCompoenent } from './mealComponents.model';
import { Rewiev } from './rewiev.model';

@Table({
  timestamps: false,
  tableName: 'meals',
})
export class Meal extends BaseModel<Meal> {
  @Column({ type: STRING })
  public name!: string;

  @BelongsToMany(() => Component, () => MealCompoenent, 'component_id')
  public components!: Array<Component & { MealCompoenent: MealCompoenent }>;

  @HasMany(() => Rewiev)
  rewievs!: Rewiev[];
}
