import { Timestamp } from 'rxjs';
import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table
export class Scholarship extends Model {
  @Column({
    type: DataType.TEXT,
  })
  name: string;

  @Column({
    type: DataType.TEXT,
  })
  description: string;

  @Column({
    type: DataType.DATE,
  })
  startDate: Date;

  @Column({
    type: DataType.DATE,
  })
  endDate: Date;

  @Column({
    type: DataType.TEXT,
  })
  link: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}
