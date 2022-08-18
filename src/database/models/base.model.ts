import { UUID } from 'sequelize';
import { UUIDV4 } from 'sequelize';
import { Column, Default, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class BaseModel<T> extends Model<T> {
  @PrimaryKey
  @Default(UUIDV4)
  @Column({ type: UUID })
  public id!: string;
}
