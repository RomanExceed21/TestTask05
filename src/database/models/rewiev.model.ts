import { BelongsTo, Column, ForeignKey, Table } from 'sequelize-typescript';
import { STRING, TEXT } from 'sequelize';
import { BaseModel } from './base.model';
import { Meal } from './meal.model';
import { Component } from './component.model';

@Table({
  tableName: 'rewievs',
  timestamps: true,
})
export class Rewiev extends BaseModel<Rewiev> {
  @Column({ type: STRING })
  public author!: string;

  @Column({ type: TEXT })
  public text!: string;

  @ForeignKey(() => Meal)
  public meal_id?: string;

  @BelongsTo(() => Meal)
  public meal!: Meal;

  @ForeignKey(() => Component)
  public component_id?: string;

  @BelongsTo(() => Component)
  public component!: Component;

  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;
}
